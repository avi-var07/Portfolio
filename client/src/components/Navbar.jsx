import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-darker/90 backdrop-blur-md border-b border-primary/20"
    >
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Name */}
          <div className="flex items-center gap-4">
            <motion.div
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              AV
            </motion.div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aviral Varshney
              </h1>
              <p className="text-xs text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/aviralvarshney"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark border border-primary/30 hover:border-primary/60 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/aviralvarshney"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark border border-blue-500/30 hover:border-blue-500/60 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-xl text-blue-400" />
            </motion.a>
            
            <motion.button
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
