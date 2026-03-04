import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const LandingPage = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const fullText = "Welcome to Aviral's Developer World"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-primary/20" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {text}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Full Stack Developer | Problem Solver | Code Enthusiast
          </p>

          <motion.button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Developer World 🚀
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {['💻', '🎮', '🚀', '⚡'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-4xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage
