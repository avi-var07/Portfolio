import { motion } from 'framer-motion'
import { useXP } from '../hooks/useXP'
import { FaStar } from 'react-icons/fa'

const XPBar = () => {
  const { xp, level, levelName, getXPProgress, getXPForNextLevel } = useXP()

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-[64px] left-0 right-0 z-40 bg-dark/80 backdrop-blur-md border-b border-primary/20 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* Level Badge */}
        <motion.div
          className="flex items-center gap-2 min-w-fit"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-300" />
                <span className="text-sm font-bold">Level {level}</span>
              </div>
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 blur"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-sm text-gray-300 hidden sm:block font-semibold">
            {levelName}
          </span>
        </motion.div>

        {/* XP Progress Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative h-8 bg-darker rounded-full overflow-hidden border-2 border-primary/30 shadow-inner">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${getXPProgress()}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold drop-shadow-lg z-10">
                {xp} / {getXPForNextLevel()} XP
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <span>Current: {xp} XP</span>
            <span>Next: {getXPForNextLevel()} XP</span>
          </div>
        </div>

        {/* Total XP */}
        <div className="hidden md:block text-right">
          <div className="text-sm font-bold text-primary">{xp} XP</div>
          <div className="text-xs text-gray-400">Total Earned</div>
        </div>
      </div>
    </motion.div>
  )
}

export default XPBar
