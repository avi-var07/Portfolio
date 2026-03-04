import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const ContactPortal = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const { addXP } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_ZONE)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/aviralvarshney', color: 'from-gray-600 to-gray-800' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/aviralvarshney', color: 'from-blue-600 to-blue-800' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/aviralvarshney', color: 'from-sky-500 to-blue-600' },
    { name: 'Email', icon: '📧', url: 'mailto:[email]', color: 'from-red-500 to-pink-600' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            📧 Contact Portal
          </h1>
          <p className="text-gray-400">Let's connect and build something amazing</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark border border-red-500/30 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-darker border border-red-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-darker border border-red-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full bg-darker border border-red-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-green-500/20 border border-green-500 rounded-lg p-3 text-center"
              >
                Message sent successfully! 🎉
              </motion.div>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`block bg-gradient-to-r ${link.color} p-1 rounded-xl`}
              >
                <div className="bg-dark rounded-xl p-4 flex items-center gap-4">
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <h3 className="font-bold">{link.name}</h3>
                    <p className="text-sm text-gray-400">Click to connect</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPortal
