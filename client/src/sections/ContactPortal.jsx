import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
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
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      url: 'https://github.com/aviralvarshney', 
      color: 'from-gray-600 to-gray-800',
      description: 'View my code repositories'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      url: 'https://linkedin.com/in/aviralvarshney', 
      color: 'from-blue-600 to-blue-800',
      description: 'Connect professionally'
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      url: 'https://twitter.com/aviralvarshney', 
      color: 'from-sky-500 to-blue-600',
      description: 'Follow for updates'
    },
    { 
      name: 'Email', 
      icon: FaEnvelope, 
      url: 'mailto:[email]', 
      color: 'from-red-500 to-pink-600',
      description: 'Send me an email'
    }
  ]

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          📧 Contact Portal
        </h1>
        <p className="text-gray-400">Let's connect and build something amazing</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl opacity-20 blur"
          />

          {/* Form Card */}
          <div className="relative bg-dark border-2 border-red-500/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-darker border border-red-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-darker border border-red-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full bg-darker border border-red-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-red-500/50 transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
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
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="relative block group"
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${link.color} rounded-xl opacity-20 blur group-hover:opacity-40 transition-opacity`}
                />

                {/* Card */}
                <div className={`relative bg-gradient-to-r ${link.color} p-1 rounded-xl`}>
                  <div className="bg-dark rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                      <Icon className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{link.name}</h3>
                      <p className="text-sm text-gray-400">{link.description}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPortal
