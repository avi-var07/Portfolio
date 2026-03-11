import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './AviBot.css';

const WELCOME = {
  id: 'welcome',
  role: 'assistant',
  text: "Hi there! 👋 I'm **AviBot** — Aviral's personal AI assistant. I can answer anything about Aviral: his skills, projects, education, achievements, or even provide his CV in different formats. What would you like to know?",
};

const SUGGESTIONS = [
  "Tell me about Aviral",
  "What are his skills?",
  "Show me his projects",
  "Give me Aviral's CV",
  "What's his CGPA?",
  "His GitHub profile",
];

function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,     '<em>$1</em>')
    .replace(/`(.*?)`/g,       '<code>$1</code>')
    .replace(/\n/g,            '<br/>');
}

export default function AviBot() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [sessionId]             = useState(() => uuidv4());
  const [unread, setUnread]     = useState(0);
  const bottomRef               = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (!open && messages.length > 1) setUnread(0);
  }, [open, messages]);

  const handleDownload = (cvData) => {
    const blob = new Blob([cvData.content], { type: cvData.mimeType });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = cvData.filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput('');

    const userMsg = { id: Date.now(), role: 'user', text: msg };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const { data } = await axios.post('/api/chat', { message: msg, sessionId });

      const botMsg = {
        id:     Date.now() + 1,
        role:   'assistant',
        text:   data.reply,
        cvData: data.cvData || null,
      };
      setMessages(prev => [...prev, botMsg]);
      if (!open) setUnread(u => u + 1);

      // Auto-download CV if provided
      if (data.cvData) {
        setTimeout(() => handleDownload(data.cvData), 600);
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1, role: 'assistant',
        text: "Sorry, I'm having a moment! Please try again. 🤖",
        isError: true,
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const clearChat = async () => {
    setMessages([WELCOME]);
    try { await axios.post('/api/chat/clear', { sessionId }); } catch {}
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        className={`avibot-fab ${open ? 'open' : ''}`}
        onClick={() => { setOpen(o => !o); setUnread(0); }}
        title="Chat with AviBot"
      >
        {open ? '✕' : '🤖'}
        {!open && unread > 0 && <span className="fab-badge">{unread}</span>}
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="avibot-window">
          {/* Header */}
          <div className="avibot-header">
            <div className="avibot-avatar">🤖</div>
            <div>
              <div className="avibot-name">AviBot</div>
              <div className="avibot-status">
                <span className="status-dot" />
                AI Assistant · Aviral's Portfolio
              </div>
            </div>
            <button className="avibot-clear" onClick={clearChat} title="Clear chat">↺</button>
          </div>

          {/* Messages */}
          <div className="avibot-messages">
            {messages.map(m => (
              <div key={m.id} className={`msg ${m.role} ${m.isError ? 'error' : ''}`}>
                {m.role === 'assistant' && <div className="msg-avatar">🤖</div>}
                <div className="msg-bubble">
                  <div
                    className="msg-text"
                    dangerouslySetInnerHTML={{ __html: formatText(m.text) }}
                  />
                  {m.cvData && (
                    <button className="cv-dl-btn" onClick={() => handleDownload(m.cvData)}>
                      ⬇ Download {m.cvData.ext.toUpperCase()} CV
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="msg assistant">
                <div className="msg-avatar">🤖</div>
                <div className="msg-bubble">
                  <div className="typing-dots"><span/><span/><span/></div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          <div className="avibot-suggestions">
            {SUGGESTIONS.map(s => (
              <button key={s} className="suggestion-chip" onClick={() => sendMessage(s)}>
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="avibot-input-row">
            <textarea
              className="avibot-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Aviral..."
              rows={1}
            />
            <button
              className={`avibot-send ${loading || !input.trim() ? 'disabled' : ''}`}
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
