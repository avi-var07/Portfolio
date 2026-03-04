import { motion } from 'framer-motion'
import { 
  FaFlask, 
  FaRocket, 
  FaTrophy, 
  FaRobot, 
  FaFileAlt, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa'

const Sidebar = ({ activeSection, onNavigate, isOpen, onToggle }) => {
  const menuItems = [
    { id: 'skills', icon: FaFlask, label: 'Skills Lab', color: 'from-blue-500 to-cyan-500' },
    { id: 'projects', icon: FaRocket, label: 'Project Arena', color: 'from-purple-500 to-pink-500' },
    { id: 'achievements', icon: FaTrophy, label: 'Achievement Hall', color: 'from-yellow-500 to-orange-500' },
    { id: 'ai', icon: FaRobot, label: 'AI Assistant', color: 'from-green-500 to-emerald-500' },
    { id: 'resume', icon: FaFileAlt, label: 'Resume Vault', color: 'from-indigo-500 to-purple-500' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact Portal', color: 'from-red-500 to-pink-500' }
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="fixed top-[76px] left-4 z-50 md:hidden p-3 rounded-lg bg-dark border border-primary/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        className="fixed left-0 top-[120px] bottom-0 w-64 bg-dark/50 backdrop-blur-md border-r border-primary/20 z-40 overflow-y-auto"
      >
        <div className="p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} shadow-lg`
                    : 'bg-darker/50 hover:bg-darker border border-transparent hover:border-primary/30'
                }`}
              >
                <Icon className={`text-xl ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span className={`font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                  {item.label}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 rounded-full bg-white"
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary/20">
          <div className="text-center text-xs text-gray-500">
            <p>Developer Dashboard v1.0</p>
            <p className="mt-1">Built with React + Vite</p>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onToggle}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  )
}

export default Sidebar
