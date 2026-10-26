import { useEffect, useRef } from 'react'

// Full-page neural network: drifting nodes, hub nodes with halos, signals travelling along links,
// and a cursor that pulls nearby nodes into the graph. Dims a little as you scroll, stays alive everywhere.
export default function Network() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, raf = 0, last = 0, spawn = 0
    const mouse = { x: -999, y: -999, active: false }
    let nodes = [], pulses = []
    const LINK = 150

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.round(Math.min(150, Math.max(46, (w * h) / 11000)))
      nodes = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.42, vy: (Math.random() - 0.5) * 0.42,
        hub: i % 7 === 0, ph: Math.random() * 6.28,
      }))
      pulses = []
    }

    const frame = (t) => {
      const dt = Math.min(40, t - last || 16); last = t
      const k = dt / 16
      const alpha = Math.max(0.55, 1 - window.scrollY / (h * 1.6))
      ctx.clearRect(0, 0, w, h)

      for (const p of nodes) {
        if (!reduce) {
          p.x += p.vx * k; p.y += p.vy * k
          if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20
          if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20
          if (mouse.active) {
            const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy)
            if (d < 200 && d > 60) { p.x += (dx / d) * 0.55 * k; p.y += (dy / d) * 0.55 * k }
            else if (d <= 60 && d > 0) { p.x -= (dx / d) * 1.3 * k; p.y -= (dy / d) * 1.3 * k }
          }
        }
      }

      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            const o = (1 - d / LINK) * (a.hub || b.hub ? 0.7 : 0.45) * alpha
            ctx.strokeStyle = `rgba(123,216,164,${o})`
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        if (mouse.active) {
          const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
          if (md < 220) {
            ctx.strokeStyle = `rgba(214,240,160,${0.6 * (1 - md / 220)})`
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
          }
        }
      }

      for (const p of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t / 900 + p.ph)
        if (p.hub) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 26)
          g.addColorStop(0, `rgba(123,216,164,${(0.32 + pulse * 0.2) * alpha})`)
          g.addColorStop(1, 'rgba(123,216,164,0)')
          ctx.fillStyle = g
          ctx.beginPath(); ctx.arc(p.x, p.y, 26, 0, 6.283); ctx.fill()
        }
        ctx.fillStyle = p.hub ? `rgba(214,240,160,${0.95 * alpha})` : `rgba(123,216,164,${0.8 * alpha})`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.hub ? 2.7 : 1.6, 0, 6.283); ctx.fill()
      }

      // signals hopping between linked nodes
      spawn -= dt
      if (!reduce && spawn <= 0 && pulses.length < 26) {
        spawn = 140
        const a = nodes[(Math.random() * nodes.length) | 0]
        const near = nodes.filter((b) => b !== a && Math.hypot(a.x - b.x, a.y - b.y) < LINK)
        if (near.length) pulses.push({ a, b: near[(Math.random() * near.length) | 0], t: 0, hops: 0 })
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const s = pulses[i]
        s.t += dt / 420
        if (s.t >= 1) {
          if (s.hops < 4) {
            const from = s.b
            const near = nodes.filter((b) => b !== from && b !== s.a && Math.hypot(from.x - b.x, from.y - b.y) < LINK)
            if (near.length) { s.a = from; s.b = near[(Math.random() * near.length) | 0]; s.t = 0; s.hops++; continue }
          }
          pulses.splice(i, 1); continue
        }
        const x = s.a.x + (s.b.x - s.a.x) * s.t, y = s.a.y + (s.b.y - s.a.y) * s.t
        const g = ctx.createRadialGradient(x, y, 0, x, y, 14)
        g.addColorStop(0, `rgba(235,255,200,${0.95 * alpha})`)
        g.addColorStop(0.35, `rgba(160,235,190,${0.45 * alpha})`)
        g.addColorStop(1, 'rgba(123,216,164,0)')
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(x, y, 14, 0, 6.283); ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true }
    const leave = () => { mouse.active = false }
    resize()
    raf = requestAnimationFrame(frame)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [])

  return <canvas ref={ref} className="network" aria-hidden="true" />
}
