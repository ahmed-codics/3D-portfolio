import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useSpring, useTransform, animate } from 'framer-motion'
import Network from './Network.jsx'
import {
  EMAIL, LINKS, ROTATING, STATS, STACK, PROJECTS, JOBS, NAV,
  KAVVI_STATS, KAVVI_PIPE, KAVVI_FEATURES, KAVVI_ENGINEERING,
} from './data.js'

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

function Reveal({ children, i = 0, className = '' }) {
  return (
    <motion.div className={className} variants={fade} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
      {children}
    </motion.div>
  )
}

function Count({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n.toLocaleString('en-US')}{suffix}</span>
}

function Rotating() {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = ROTATING[i]
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1300)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % ROTATING.length) }
      }
    }, del ? 35 : 70)
    return () => clearTimeout(t)
  }, [text, del, i])
  return <span className="typed">{text}<i className="caret" /></span>
}

function Nav() {
  const { scrollYProgress } = useScroll()
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const [active, setActive] = useState('top')
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    const onScroll = () => setCompact(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <motion.header className={`nav ${compact ? 'compact' : ''}`} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <a href="#top" className="brand" aria-label="Ahmed Mansour, home">
        <svg viewBox="0 0 64 64" width="26" height="26" aria-hidden="true"><path d="M12 48 28 14l9 20 7-13 8 27" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="brand-name">Ahmed Mansour</span>
      </a>
      <nav>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>
            {active === id && <motion.span layoutId="navpill" className="navpill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={LINKS.cv} download>Get CV <i>↓</i></a>
      <motion.div className="progress" style={{ scaleX: w }} />
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <motion.p className="kicker" variants={fade} initial="hidden" animate="show">
          <span className="live" /> Available for remote work · Cairo, Egypt
        </motion.p>
        <motion.h1 variants={fade} custom={1} initial="hidden" animate="show">
          I build <em>complete</em> products,<br />from first line to first paying user.
        </motion.h1>
        <motion.p className="sub" variants={fade} custom={2} initial="hidden" animate="show">
          Full-stack and AI engineer. Right now I ship <Rotating />
        </motion.p>
        <motion.div className="cta" variants={fade} custom={3} initial="hidden" animate="show">
          <a className="btn primary" href="#kavvi">See Kavvi</a>
          <a className="btn" href="#work">More work</a>
          <a className="btn ghost" href={`mailto:${EMAIL}`}>Email me</a>
        </motion.div>
      </div>
      <div className="wrap stats">
        {STATS.map((s, i) => (
          <Reveal key={s.label} i={i + 3} className="stat">
            <b><Count to={s.value} suffix={s.suffix} /></b>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...STACK, ...STACK]
  return (
    <div className="marquee" aria-label="Technologies">
      <div className="track">{items.map((s, i) => <span key={i}>{s}</span>)}</div>
    </div>
  )
}

function Pipeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-80px' })
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setStep((s) => (s + 1) % KAVVI_PIPE.length), 1700)
    return () => clearInterval(t)
  }, [inView])
  return (
    <div className="pipe" ref={ref}>
      {KAVVI_PIPE.map(([name, text], i) => (
        <button key={name} className={`pipe-step ${i === step ? 'on' : ''} ${i < step ? 'done' : ''}`} onClick={() => setStep(i)}>
          <em>{String(i + 1).padStart(2, '0')}</em>
          <b>{name}</b>
          <span>{text}</span>
          <i className="bar" />
        </button>
      ))}
    </div>
  )
}

function KavviShot() {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
    ref.current.style.setProperty('--rx', `${(0.5 - y) * 6}deg`)
    ref.current.style.setProperty('--ry', `${(x - 0.5) * 8}deg`)
  }
  const onLeave = () => { ref.current.style.setProperty('--rx', '0deg'); ref.current.style.setProperty('--ry', '0deg') }
  return (
    <div className="shot-stage" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="frame" ref={ref}>
        <div className="frame-bar"><i /><i /><i /><span>kavvi.io</span></div>
        <img src="/shots/kavvi.jpg" alt="Kavvi landing page: Learn anything. In a course made for you." />
      </div>
      <span className="chip c1">PDF → lessons</span>
      <span className="chip c2">Solved twice, cross-checked</span>
      <span className="chip c3">العربية · RTL</span>
      <span className="chip c4">~$0.09 AI cost / learner</span>
    </div>
  )
}

function Kavvi() {
  return (
    <section id="kavvi" className="wrap section">
      <Reveal>
        <p className="eyebrow">Featured · Founder &amp; solo engineer</p>
        <h2>Kavvi, an AI learning studio <em>I built alone.</em></h2>
      </Reveal>
      <Reveal className="kavvi-intro">
        <p className="lead">
          Kavvi began as an AI study planner for Egyptian university students and grew into a learning studio for any topic. You upload a
          lecture or just say what you want to learn, and it turns that into lessons, practice, exams and whole courses, in Arabic or English.
          I designed it, wrote every service, run the servers, handle billing and talk to the users.
        </p>
        <div className="cta"><a className="btn primary" href="https://kavvi.io" target="_blank" rel="noreferrer">Open kavvi.io ↗</a></div>
      </Reveal>
      <Reveal><KavviShot /></Reveal>

      <Reveal className="k-stats">
        {KAVVI_STATS.map((s) => (
          <div key={s.label} className="k-stat"><b><Count to={s.value} suffix={s.suffix} /></b><span>{s.label}</span></div>
        ))}
      </Reveal>

      <Reveal><h3 className="sub-h">How a lecture becomes a lesson</h3></Reveal>
      <Reveal><Pipeline /></Reveal>

      <Reveal><h3 className="sub-h">What learners get</h3></Reveal>
      <div className="feat-grid">
        {KAVVI_FEATURES.map(([t, d], i) => (
          <Reveal key={t} i={i % 3} className="feat"><b>{t}</b><p>{d}</p></Reveal>
        ))}
      </div>

      <Reveal><h3 className="sub-h">What it took to run it for real</h3></Reveal>
      <div className="feat-grid eng">
        {KAVVI_ENGINEERING.map(([t, d], i) => (
          <Reveal key={t} i={i % 3} className="feat"><b>{t}</b><p>{d}</p></Reveal>
        ))}
      </div>
      <Reveal><div className="stack-row">{['React PWA', 'Node / Express', 'Python FastAPI · RAG', 'MongoDB', 'Valkey · BullMQ', 'Docker Compose', 'Caddy', 'Playwright'].map((s) => <span key={s}>{s}</span>)}</div></Reveal>
    </section>
  )
}

function Card({ p, i }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
    const el = ref.current
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    el.style.setProperty('--rx', `${(0.5 - y) * 7}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 9}deg`)
  }
  const onLeave = () => { ['--rx', '--ry'].forEach((k) => ref.current.style.setProperty(k, '0deg')) }
  return (
    <Reveal i={i}>
      <a className="card" ref={ref} href={p.href} target="_blank" rel="noreferrer" onPointerMove={onMove} onPointerLeave={onLeave}>
        <div className="shot"><img src={p.img} alt={`${p.name} screenshot`} loading="lazy" /></div>
        <div className="card-body">
          <p className="eyebrow">{p.tag}</p>
          <h3>{p.name} <span>↗</span></h3>
          <p>{p.text}</p>
          <div className="stack-row">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        </div>
      </a>
    </Reveal>
  )
}

function Work() {
  return (
    <section id="work" className="wrap section">
      <Reveal><p className="eyebrow">More work</p><h2>Other things that are live <em>right now.</em></h2></Reveal>
      <div className="grid">{PROJECTS.map((p, i) => <Card key={p.key} p={p} i={i} />)}</div>
    </section>
  )
}

function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <section id="experience" className="wrap section">
      <Reveal><p className="eyebrow">Experience</p><h2>Nine months, six products, <em>one shared login.</em></h2></Reveal>
      <div className="timeline" ref={ref}>
        <div className="rail"><motion.div className="rail-fill" style={{ height: h }} /></div>
        {JOBS.map((j, i) => (
          <Reveal key={j.org} i={i} className="job">
            <span className="node" />
            <div className="job-head"><h3>{j.role} <span>· {j.org}</span></h3><time>{j.when}</time></div>
            <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { window.location.href = `mailto:${EMAIL}` }
  }
  return (
    <section id="contact" className="wrap section contact">
      <Reveal>
        <p className="eyebrow">Let's work together</p>
        <h2>Looking for a remote team that wants <em>a builder.</em></h2>
        <button className="mail" onClick={copy} aria-label="Copy email address">
          {EMAIL}<span>{copied ? 'Copied ✓' : 'Copy'}</span>
        </button>
        <div className="cta center">
          <a className="btn primary" href={`mailto:${EMAIL}`}>Send an email</a>
          <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={LINKS.cv} download>Download CV</a>
        </div>
      </Reveal>
      <footer>© 2026 Ahmed Mansour · Built with React and a lot of coffee</footer>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--gx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--gy', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <>
      <Network />
      <div className="glow" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Kavvi />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
