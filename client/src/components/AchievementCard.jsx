import { motion } from 'framer-motion'
import { FaLock, FaCheck } from 'react-icons/fa'

const AchievementCard = ({ achievement, isUnlocked }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: isUnlocked ? 1.05 : 1 }}
      className={`relative group ${isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
    >
      {/* Glow Effect for Unlocked */}
      {isUnlocked && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl opacity-20 blur group-hover:opacity-40 transition-opacity"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Card Content */}
      <div
        className={`relative rounded-2xl p-6 text-center transition-all ${
          isUnlocked
            ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/50'
            : 'bg-dark/50 border border-gray-700 opacity-60'
        }`}
      >
        {/* Unlock Badge */}
        {isUnlocked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <FaCheck className="text-white text-sm" />
          </motion.div>
        )}

        {/* Lock Icon for Locked */}
        {!isUnlocked && (
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <FaLock className="text-gray-400 text-sm" />
          </div>
        )}

        {/* Icon */}
        <motion.div
          className="text-6xl mb-4"
          animate={isUnlocked ? { rotate: [0, 5, -5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {achievement.icon}
        </motion.div>

        {/* Name */}
        <h3 className={`font-bold mb-2 ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
          {achievement.name}
        </h3>

        {/* Description */}
        <p className={`text-sm ${isUnlocked ? 'text-gray-300' : 'text-gray-600'}`}>
          {achievement.description}
        </p>

        {/* Condition for Locked */}
        {!isUnlocked && (
          <div className="mt-3 text-xs text-gray-500 italic">
            🔒 {achievement.condition}
          </div>
        )}

        {/* Unlocked Date (optional) */}
        {isUnlocked && (
          <div className="mt-3 text-xs text-yellow-400">
            ✨ Unlocked!
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default AchievementCard
