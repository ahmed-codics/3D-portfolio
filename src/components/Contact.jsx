import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "> ESTABLISHING SECURE CONNECTION...",
    "> UPLINK SECURED.",
    "> AWAITING OPERATOR INPUT..."
  ]);
  const endOfLogsRef = useRef(null);
  const isFirstRender = useRef(true);

  const addLog = (log) => {
    setTerminalLogs(prev => [...prev.slice(-6), `> ${log}`]);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (endOfLogsRef.current) {
      endOfLogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Randomly add typing logs for immersion
    if (Math.random() > 0.8) {
      addLog(`RECEIVING_DATA: [${name.toUpperCase()}]`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    addLog("ENCRYPTING PAYLOAD...");

    // Slight artificial delay for dramatic effect
    setTimeout(() => {
      addLog("ROUTING THROUGH PROXY NODES...");
      
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Ahmed Mansour",
            from_email: form.email,
            to_email: "ahmedismansour000@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            addLog("TRANSMISSION SUCCESSFUL.");
            addLog("CONNECTION TERMINATED.");
            setTimeout(() => alert("TRANSMISSION SUCCESSFUL. I will respond shortly."), 500);
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            addLog("ERROR: TRANSMISSION FAILED.");
            alert("TRANSMISSION FAILED. Please try again.");
          }
        );
    }, 1500);
  };

  return (
    <div id="contact" className="relative bg-[#050505] min-h-screen lg:h-screen lg:max-h-screen py-12 lg:py-16 px-6 md:px-24 border-t border-gray-900 overflow-y-auto lg:overflow-hidden flex flex-col justify-center">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan/20 rounded-full border-dashed animate-spin" style={{ animationDuration: '40s' }}></div>
      </div>

      <div className="mb-6 flex items-center gap-4 relative z-10">
        <div className="w-2 h-2 bg-red-accent animate-pulse shadow-[0_0_10px_#FF003C]"></div>
        <p className="font-mono text-xs md:text-sm text-gray-500 uppercase tracking-widest">Global Communications Uplink</p>
      </div>

      <div className="flex lg:flex-row flex-col-reverse gap-8 relative z-10 items-stretch lg:max-h-[calc(100vh-180px)]">
        
        {/* Left Side: Terminal Form */}
        <div className="flex-1 lg:flex-[0.6] bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-800 p-6 md:p-8 relative group flex flex-col justify-between">
          
          {/* HUD Corner Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan transition-colors group-hover:border-red-accent"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan transition-colors group-hover:border-red-accent"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan transition-colors group-hover:border-red-accent"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan transition-colors group-hover:border-red-accent"></div>

          <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-white">Establish<br/><span className="text-red-accent">Connection</span></h3>

          {/* Active Terminal Log Window */}
          <div className="w-full h-24 bg-[#050505] border border-gray-800 mb-4 p-3 font-mono text-[10px] overflow-y-auto custom-scrollbar flex flex-col gap-1 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan/50 animate-scan pointer-events-none"></div>
            {terminalLogs.map((log, i) => (
              <p key={i} className={`${log.includes('SUCCESS') ? 'text-cyan' : log.includes('ERROR') ? 'text-red-accent' : 'text-gray-500'}`}>
                {log}
              </p>
            ))}
            <div ref={endOfLogsRef} />
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono flex-1 justify-between">
            <label className="flex flex-col group/input">
              <span className="text-gray-500 text-[10px] mb-1 uppercase tracking-widest group-focus-within/input:text-cyan transition-colors">{'// Sender_ID'}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => addLog("INPUT FOCUS: SENDER_ID")}
                placeholder="[Enter Designation]"
                className="bg-[#050505] border border-gray-800 py-3 px-4 placeholder:text-gray-700 text-white outline-none focus:border-cyan focus:shadow-[inset_4px_0_0_#00F0FF] transition-all text-xs lg:text-sm"
                required
              />
            </label>
            <label className="flex flex-col group/input">
              <span className="text-gray-500 text-[10px] mb-1 uppercase tracking-widest group-focus-within/input:text-cyan transition-colors">{'// Return_Address'}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => addLog("INPUT FOCUS: RETURN_ADDRESS")}
                placeholder="[Enter Email Protocol]"
                className="bg-[#050505] border border-gray-800 py-3 px-4 placeholder:text-gray-700 text-white outline-none focus:border-cyan focus:shadow-[inset_4px_0_0_#00F0FF] transition-all text-xs lg:text-sm"
                required
              />
            </label>
            <label className="flex flex-col group/input flex-1">
              <span className="text-gray-500 text-[10px] mb-1 uppercase tracking-widest group-focus-within/input:text-cyan transition-colors">{'// Encrypted_Payload'}</span>
              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => addLog("INPUT FOCUS: ENCRYPTED_PAYLOAD")}
                placeholder="[Enter Transmission Data]"
                className="bg-[#050505] border border-gray-800 py-3 px-4 placeholder:text-gray-700 text-white outline-none focus:border-cyan focus:shadow-[inset_4px_0_0_#00F0FF] transition-all resize-none flex-1 text-xs lg:text-sm"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`py-3 px-6 border text-xs font-bold uppercase tracking-widest transition-all duration-300 self-start relative overflow-hidden group/btn ${loading ? 'border-gray-600 text-gray-500 cursor-not-allowed' : 'border-cyan text-cyan hover:bg-cyan hover:text-black shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]'}`}
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                  TRANSMITTING...
                </span>
              ) : (
                <span className="relative z-10">INITIATE_TRANSFER</span>
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Earth Hologram & Uplink Diagnostics */}
        <div className="flex-1 lg:flex-[0.4] border border-gray-800 bg-[#0a0a0a]/50 p-6 md:p-8 relative flex flex-col justify-between overflow-hidden min-h-[350px] lg:min-h-0">
          
          {/* HUD Corner Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan pointer-events-none"></div>

          {/* Diagnostic Stats Header */}
          <div className="border-b border-gray-800 pb-4">
            <h4 className="text-cyan font-mono text-xs uppercase tracking-widest mb-1">// UPLINK_DIAGNOSTICS</h4>
            <div className="flex justify-between font-mono text-[10px] text-gray-500">
              <span>PING: 14ms</span>
              <span>NODE: CA-UPLINK-03</span>
              <span>ENCRYPTION: AES-256</span>
            </div>
          </div>

          {/* Earth/Core Hologram */}
          <div className="w-full flex-1 flex items-center justify-center relative min-h-[200px]">
            <div className="absolute w-44 h-44 border-2 border-cyan/30 rounded-full border-dashed animate-spin" style={{ animationDuration: '12s' }}></div>
            <div className="absolute w-32 h-32 border-2 border-red-accent/30 rounded-full border-t-transparent animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
            <div className="absolute w-16 h-16 bg-cyan/10 rounded-full shadow-[0_0_40px_rgba(0,240,255,0.4)] animate-pulse"></div>
            
            {/* Horizontal and Vertical sweeping crosshairs */}
            <div className="absolute w-[1px] h-full bg-cyan/10"></div>
            <div className="absolute w-full h-[1px] bg-cyan/10"></div>

            {/* Sweep line */}
            <div className="absolute top-1/2 left-1/2 w-[88px] h-[1px] bg-cyan/50 origin-left animate-spin" style={{ animationDuration: '3s', animationTimingFunction: 'linear' }}></div>
            
            <div className="absolute bottom-2 font-mono text-[9px] text-cyan uppercase tracking-widest bg-[#050505] border border-cyan px-2 py-0.5">
              [ Earth Uplink Locked ]
            </div>
          </div>

          {/* Live System Logs Feed */}
          <div className="border-t border-gray-800 pt-4 font-mono text-[9px] text-gray-500 flex flex-col gap-1">
            <div className="flex justify-between">
              <span>LATITUDE: 30.0444° N</span>
              <span>LONGITUDE: 31.2357° E</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS: SECURE_LINK</span>
              <span>BATTERY: 100% NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;