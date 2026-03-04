import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'
import axios from 'axios'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const AIChatWidget = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your AI guide. Ask me about projects, skills, or achievements. I can also help you navigate!' 
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const { addXP, unlockAchievement } = useGame()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const parseNavigationCommand = (message) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('project') || lowerMessage.includes('mission')) {
      return 'projects'
    }
    if (lowerMessage.includes('skill')) {
      return 'skills'
    }
    if (lowerMessage.includes('achievement') || lowerMessage.includes('badge')) {
      return 'achievements'
    }
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return 'resume'
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
      return 'contact'
    }
    return null
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Check for first AI interaction
    const hasAskedAI = localStorage.getItem('hasAskedAI')
    if (!hasAskedAI) {
      unlockAchievement('ai-conversationalist')
      addXP(XP_ACTIONS.TALK_TO_AI)
      localStorage.setItem('hasAskedAI', 'true')
    } else {
      addXP(XP_ACTIONS.TALK_TO_AI)
    }

    // Check for navigation command
    const navSection = parseNavigationCommand(input)

    try {
      const response = await axios.post('/api/ai', { 
        message: input,
        context: 'You are a portfolio navigation assistant. When users ask to see projects, skills, achievements, resume, or contact, acknowledge their request and provide information.'
      })
      
      let aiContent = response.data.reply

      // Add navigation hint if command detected
      if (navSection) {
        aiContent += `\n\n✨ Opening ${navSection.charAt(0).toUpperCase() + navSection.slice(1)} section...`
        setTimeout(() => {
          onNavigate(navSection)
          setIsOpen(false)
        }, 1500)
      }

      const aiMessage = { role: 'assistant', content: aiContent }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      const errorMessage = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please make sure the backend server is running.' 
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaRobot className="text-2xl text-white" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-dark border-2 border-green-500/50 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaRobot className="text-xl" />
                <div>
                  <h3 className="font-bold">AI Guide</h3>
                  <p className="text-xs opacity-80">Portfolio Navigator</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary'
                        : 'bg-green-500/20 border border-green-500/30'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-green-500/20 border border-green-500/30 p-3 rounded-2xl">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-green-500/30 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-darker border border-green-500/30 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 text-sm"
                  disabled={loading}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane />
                </motion.button>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Try: "show projects", "tell me about skills", "open achievements"
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIChatWidget
