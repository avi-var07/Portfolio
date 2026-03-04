import { motion } from 'framer-motion'
import { useXP } from '../hooks/useXP'
import { useLocation } from 'react-router-dom'

const XPBar = () => {
  const { xp, level, levelName, getXPProgress, getXPForNextLevel } = useXP()
  const location = useLocation()

  // Don't show on landing page
  if (location.pathname === '/') return null

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-darker/90 backdrop-blur-sm border-b border-primary/20 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="flex items-center gap-2 min-w-fit">
          <div className="bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full">
            <span className="text-sm font-bold">Level {level}</span>
          </div>
          <span className="text-sm text-gray-400 hidden sm:block">{levelName}</span>
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative h-6 bg-dark rounded-full overflow-hidden border border-primary/30">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${getXPProgress()}%` }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold drop-shadow-lg">
                {xp} / {getXPForNextLevel()} XP
              </span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400 hidden md:block">
          {xp} XP
        </div>
      </div>
    </motion.div>
  )
}

export default XPBar
