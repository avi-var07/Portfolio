import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const zones = [
  { id: 'skills', name: 'Skills Lab', icon: '🔬', path: '/skills', color: 'from-blue-500 to-cyan-500' },
  { id: 'projects', name: 'Project Arena', icon: '🚀', path: '/projects', color: 'from-purple-500 to-pink-500' },
  { id: 'achievements', name: 'Achievement Hall', icon: '🏆', path: '/achievements', color: 'from-yellow-500 to-orange-500' },
  { id: 'ai', name: 'AI Assistant', icon: '🤖', path: '/ai', color: 'from-green-500 to-emerald-500' },
  { id: 'resume', name: 'Resume Vault', icon: '📄', path: '/resume', color: 'from-indigo-500 to-purple-500' },
  { id: 'contact', name: 'Contact Portal', icon: '📧', path: '/contact', color: 'from-red-500 to-pink-500' },
]

const GameMap = () => {
  const navigate = useNavigate()
  const { addXP, unlockAchievement, visitZone } = useGame()

  useEffect(() => {
    // First visit achievement
    const hasVisited = localStorage.getItem('hasVisitedMap')
    if (!hasVisited) {
      unlockAchievement('first-visit')
      addXP(XP_ACTIONS.VISIT_ZONE)
      localStorage.setItem('hasVisitedMap', 'true')
    }
  }, [])

  const handleZoneClick = (zone) => {
    visitZone(zone.id)
    addXP(XP_ACTIONS.VISIT_ZONE)
    navigate(zone.path)
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Developer World Map
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          Choose your destination and explore
        </motion.p>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => handleZoneClick(zone)}
              className="cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${zone.color} p-1 rounded-2xl`}>
                <div className="bg-dark rounded-2xl p-6 h-full">
                  <div className="text-6xl mb-4">{zone.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{zone.name}</h3>
                  <p className="text-gray-400 text-sm">Click to explore</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-4">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleZoneClick(zone)}
              className="cursor-pointer"
            >
              <div className={`bg-gradient-to-r ${zone.color} p-1 rounded-xl`}>
                <div className="bg-dark rounded-xl p-4 flex items-center gap-4">
                  <div className="text-4xl">{zone.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{zone.name}</h3>
                    <p className="text-gray-400 text-sm">Tap to explore</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameMap
