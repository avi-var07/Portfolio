import { motion } from 'framer-motion'
import { FaRobot } from 'react-icons/fa'

const AIAssistant = () => {
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
          🤖 AI Assistant
        </h1>
        <p className="text-gray-400">Your intelligent portfolio guide</p>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-20 blur"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Card Content */}
        <div className="relative bg-dark border-2 border-green-500/50 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <FaRobot className="text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">AI Portfolio Guide</h2>
              <p className="text-gray-400">Powered by OpenAI</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3">What I Can Do</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Answer questions about Aviral's skills and experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Provide detailed information about projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Navigate you to different sections of the portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Explain technical concepts and achievements</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Try These Commands</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Show me the projects',
                  'What skills does Aviral have?',
                  'Tell me about driveSutraGo',
                  'Open achievements',
                  'Show resume',
                  'Navigate to contact'
                ].map((command, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-sm"
                  >
                    💬 "{command}"
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-green-400">💡 Tip:</span> Click the floating AI button in the bottom-right corner to start chatting!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AIAssistant
