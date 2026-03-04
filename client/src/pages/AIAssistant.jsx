import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'
import axios from 'axios'

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m Aviral\'s AI assistant. Ask me anything about his skills, projects, achievements, or contact info!' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const { addXP, unlockAchievement } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_ZONE)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

    try {
      const response = await axios.post('/api/ai', { message: input })
      const aiMessage = { role: 'assistant', content: response.data.reply }
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
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            🤖 AI Assistant
          </h1>
          <p className="text-gray-400">Ask me anything about Aviral</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-dark border border-green-500/30 rounded-2xl overflow-hidden"
        >
          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-secondary'
                      : 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30'
                  }`}
                >
                  <p className="text-sm md:text-base">{msg.content}</p>
                </div>
              </motion.div>
            ))}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 p-4 rounded-2xl">
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
                className="flex-1 bg-darker border border-green-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIAssistant
