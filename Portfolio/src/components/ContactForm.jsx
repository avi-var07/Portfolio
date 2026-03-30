import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    
    try {
      // TODO: Replace YOUR_FORMSPREE_ID_HERE with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/mkoqeklj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        
        // Party bomber animation
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#00DCFF', '#ffffff', '#ff007f']
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#00DCFF', '#ffffff', '#ff007f']
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());

        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const CONTACT_INFO = [
    {i:'📧', l:'Email', v:'aviralvarshney07@gmail.com', h:'mailto:aviralvarshney07@gmail.com'},
    {i:'📱', l:'Phone', v:'+91 8687883676', h:'tel:+918687883676'},
    {i:'📍', l:'Location', v:'Punjab, India', h:null},
    {
      l:'LinkedIn', 
      v:'in/avi7', 
      h:'https://www.linkedin.com/in/avi7/',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    {
      l:'GitHub', 
      v:'avi-var07', 
      h:'https://github.com/avi-var07',
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-intro rv">
        <div className="section-eyebrow">Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have an opportunity or want to connect? I respond within 24 hours.</p>
      </div>

      <div className="contact-grid rv">
        <div className="contact-info-col rv-l">
          <h3 className="contact-heading">Let's Build Something Great</h3>
          <br />
          <p className="contact-subtext">Currently open to full-time roles, internships, and interesting freelance projects. If you have a problem worth solving — let's talk.</p>
          <br />
          <div className="info-list">
            {CONTACT_INFO.map((d, i) => (
              <div key={i} className="info-box">
                <div className="info-icon-wrapper">
                  {d.svg ? d.svg : d.i}
                </div>
                <div className="info-text">
                  <div className="info-label">{d.l}</div>
                  <div className="info-val">
                    {d.h ? <a href={d.h} target={d.h.startsWith('http')?'_blank':undefined} rel="noreferrer">{d.v}</a> : d.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-col glass-card rv-r">
          {status === 'success' ? (
            <div className="success-state">
              <div className="success-emoji">🎉</div>
              <h4 className="success-title">Thank You! Message Sent.</h4>
              <p>Thanks for reaching out. I have received your message and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="actual-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Aviral Ved Varshney" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="aviralvarshney07@gmail.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Collaboration / Hello" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or role…" required />
              </div>
              {status === 'error' && <p className="error-msg">⚠ Could not send. Please email directly.</p>}
              <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? '⟳ Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-section { padding: 70px 6%; background: var(--bg2); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.55fr; gap: 42px; alignItems: start; }
        
        .contact-heading { fontFamily: 'Syne', sans-serif; fontWeight: 700; fontSize: 1.1rem; color: var(--text-primary); marginBottom: 12px; }
        .contact-subtext { color: var(--text-secondary); fontSize: .9rem; lineHeight: 1.75; marginBottom: 26px; }
        
        .info-list { display: flex; flex-direction: column; gap: 0; }
        .info-box { display: flex; alignItems: center; gap: 12px; padding: 6px 0; borderBottom: 1px solid rgba(255,255,255,.03); }
        .info-box:last-child { border-bottom: none; }
        .info-icon-wrapper { width: 30px; height: 30px; borderRadius: 6px; flexShrink: 0; background: transparent; display: flex; alignItems: center; justifyContent: center; fontSize: 1.2rem; color: var(--a1); }
        .info-label { fontSize: .68rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-dim); marginBottom: 2px; }
        .info-val { fontSize: .88rem; color: var(--text-primary); fontWeight: 500; }
        .info-val a { color: inherit; text-decoration: none; transition: color .2s; }
        .info-val a:hover { color: var(--a1); }

        .contact-form-col { padding: 28px; }
        .actual-form { display: flex; flex-direction: column; gap: 13px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
        .form-group label { display: block; fontSize: .73rem; fontWeight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: .8px; marginBottom: 7px; }
        .form-group input, .form-group textarea {
          width: 100%; background: var(--bg); border: 1px solid rgba(255,255,255,.055); borderRadius: 8px;
          padding: 11px 14px; color: var(--text-primary); fontSize: .9rem; font-family: inherit; outline: none; transition: border-color .2s;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--a1); }
        .form-group textarea { minHeight: 120px; resize: vertical; }
        
        .submit-btn {
          width: 100%; padding: 13px; border: none; borderRadius: 9px; background: var(--a1); color: var(--bg);
          cursor: pointer; fontFamily: 'Syne', sans-serif; fontWeight: 800; fontSize: .95rem; transition: all .22s; margin-top: 2px;
        }
        .submit-btn:hover:not(:disabled) { background: #3decff; transform: translateY(-2px); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        
        .success-state { textAlign: center; padding: 36px 20px; }
        .success-emoji { fontSize: 3rem; marginBottom: 12px; }
        .success-title { fontFamily: 'Syne', sans-serif; fontWeight: 700; fontSize: 1.1rem; color: var(--a3); marginBottom: 8px; }
        .error-msg { color: #f87171; fontSize: .84rem; }

        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default ContactForm;
