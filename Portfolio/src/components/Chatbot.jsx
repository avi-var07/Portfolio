import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Aviral's AI Assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);

  const SYSTEM_PROMPT = `
    You are Aviral's AI Assistant. Your goal is to provide accurate and professional information about Aviral Varshney to visitors of his portfolio.
    
    ABOUT AVIRAL:
    - Name: Aviral Varshney
    - Education: Computer Science undergraduate at Lovely Professional University (LPU), Punjab, India. CGPA: 8.64.
    - Role: Full Stack Web Developer (MERN), Competitive Programmer, DSA Enthusiast.
    - Focus: Building high-performance, scalable MERN applications with a core focus on algorithmic efficiency.
    - Achievements: LeetCode Rating 1700+ (Top 15%), Top 50 on Codolio, 5+ Major Projects.
    - Contact: aviralvarshney07@gmail.com.
    - Links: LinkedIn (in/avi7), GitHub (avi-var07).

    SKILLS:
    - Programming: Java (Strong), JavaScript, Python, C++, PHP.
    - Frontend: React JS, Tailwind CSS, HTML5, CSS3, Framer Motion.
    - Backend: Node.js, Express JS, REST APIs, Socket.io.
    - Database: MongoDB, MySQL.
    - DSA: Data Structures, Algorithms, OOP, Dynamic Programming.
    - Tools: Git, GitHub, VS Code, Postman.

    PROJECTS:
    1. driveSutraGo: Eco-driving gamification platform using MERN. Real-time trip tracking, rewards, and community engagement.
    2. Skill-Based Candidate Shortlisting System: Java-based CLI application for evaluating candidates using DSA.
    3. Kahan Chale: Responsive tour operator website with booking systems (HTML, Tailwind, JS, PHP).
    4. Khaana Bank Trust Website: Cloud-based archival and retrieval system (Express, Node, React).
    5. Gamified Portfolio: This current website, featuring 10 hidden elements and XP/levels.

    CORE PRINCIPLES:
    - Be professional, polite, and helpful.
    - ONLY answer questions related to Aviral. If asked about something else (e.g., weather, politics, other people), politely explain that you are specialized in answering questions about Aviral's professional background.
    - Keep responses concise but informative.
  `;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    if (!API_KEY || API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
      setMessages(prev => [...prev, { role: 'bot', text: "API Key not configured. Please add VITE_GEMINI_API_KEY to your .env file." }]);
      setIsLoading(false);
      return;
    }

    const MODELS_TO_TRY = ["gemini-1.5-flash"];
    let lastError = null;

    for (const modelName of MODELS_TO_TRY) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        
        const chat = model.startChat({
          history: [
            { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
            { role: "model", parts: [{ text: "Understood. I am Aviral's AI Assistant and will only answer questions about him." }] },
            ...messages.filter(m => !m.text.includes("error")).map(m => ({
              role: m.role === 'bot' ? 'model' : 'user',
              parts: [{ text: m.text }]
            }))
          ],
        });

        const result = await chat.sendMessage(input);
        const response = await result.response;
        const botMessage = { role: 'bot', text: response.text() };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
        return; // Success!
      } catch (error) {
        console.error(`Failed with model ${modelName}:`, error);
        lastError = error;
        if (error.message.includes("404")) continue; // Try next model
        break; // Other errors (like API key) shouldn't be retried with different models
      }
    }

    // If we get here, all models failed
    let errorMsg = "Sorry, I ran into an error.";
    if (lastError?.message.includes("404")) {
      errorMsg += " None of the available AI models could be reached. Please check your API key permissions and region.";
    } else if (lastError?.message.includes("API Key")) {
      errorMsg += " The API Key seems to be missing or invalid.";
    } else {
      errorMsg += " " + (lastError?.message || "Unknown error");
    }
    setMessages(prev => [...prev, { role: 'bot', text: errorMsg }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="toggle-badge" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window glass-card"
            initial={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="header-info">
                <div className="bot-avatar">
                  <Bot size={20} />
                </div>
                <div>
                  <h4>Aviral AI</h4>
                  <span className="status">Online</span>
                </div>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="chat-messages" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`message-wrapper ${m.role}`}>
                  <div className="message">
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="message-wrapper bot">
                  <div className="message loading">
                    <Loader2 size={16} className="spin" />
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
              <input
                type="text"
                placeholder="Ask about Aviral..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="send-btn" onClick={handleSend} disabled={isLoading || !input.trim()}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .chatbot-toggle {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--a1);
          color: #000;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 220, 255, 0.4);
          cursor: pointer;
          z-index: 1000;
          transition: transform 0.3s;
        }
        .toggle-badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 14px;
          height: 14px;
          background: #00ffb3;
          border: 3px solid #04070f;
          border-radius: 50%;
          animation: pulseDot 2s infinite;
        }

        .chat-window {
          position: fixed;
          bottom: 100px;
          right: 30px;
          width: 380px;
          height: 550px;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
          background: rgba(11, 20, 34, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100% - 40px);
            right: 20px;
            bottom: 90px;
          }
        }

        .chat-header {
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-info { display: flex; align-items: center; gap: 12px; }
        .bot-avatar {
          width: 36px;
          height: 36px;
          background: rgba(0, 220, 255, 0.1);
          color: var(--a1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .chat-header h4 { font-family: 'Syne', sans-serif; font-size: 1rem; margin: 0; color: #fff; }
        .status { font-size: 0.7rem; color: #00ffb3; display: flex; align-items: center; gap: 4px; }
        .status::before { content: ""; width: 6px; height: 6px; background: currentColor; border-radius: 50%; }

        .chat-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          scrollbar-width: thin;
          scrollbar-color: var(--a1) transparent;
        }
        .message-wrapper { display: flex; width: 100%; }
        .message-wrapper.user { justify-content: flex-end; }
        .message {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .user .message {
          background: var(--a1);
          color: #000;
          border-bottom-right-radius: 4px;
        }
        .bot .message {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border-bottom-left-radius: 4px;
        }
        .message.loading { display: flex; align-items: center; gap: 8px; font-style: italic; opacity: 0.8; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .chat-input-area {
          padding: 15px 20px;
          background: rgba(4, 7, 15, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          gap: 10px;
        }
        .chat-input-area input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 10px 15px;
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .chat-input-area input:focus { border-color: var(--a1); }
        .send-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--a1);
          border: none;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .send-btn:not(:disabled):hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 220, 255, 0.3); }

        .close-btn { background: transparent; border: none; color: var(--text-dim); cursor: pointer; transition: color 0.3s; }
        .close-btn:hover { color: #fff; }
      `}} />
    </>
  );
};

export default Chatbot;
