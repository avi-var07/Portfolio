import { motion } from 'framer-motion'
import { FaStar, FaCode, FaTrophy } from 'react-icons/fa'

const MissionCard = ({ project, onStart }) => {
  const difficultyColors = {
    Easy: 'from-green-500 to-emerald-500',
    Medium: 'from-yellow-500 to-orange-500',
    Hard: 'from-red-500 to-pink-500'
  }

  const difficultyIcons = {
    Easy: 1,
    Medium: 2,
    Hard: 3
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${difficultyColors[project.difficulty]} rounded-2xl opacity-20 blur group-hover:opacity-40 transition-opacity`}
      />
      
      {/* Card Content */}
      <div className="relative bg-dark border border-primary/30 rounded-2xl p-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <FaCode className="w-full h-full" />
        </div>

        {/* Mission Badge */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-xs text-gray-400 mb-1">MISSION</div>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          </div>
          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${difficultyColors[project.difficulty]} text-xs font-bold`}>
            {project.difficulty}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.title}</p>

        {/* Difficulty Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(difficultyIcons[project.difficulty])].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          {[...Array(3 - difficultyIcons[project.difficulty])].map((_, i) => (
            <FaStar key={i} className="text-gray-600" />
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">TECH STACK</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* XP Reward */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-yellow-400">
            <FaTrophy />
            <span className="text-sm font-bold">+{project.xpReward} XP</span>
          </div>
        </div>

        {/* Start Mission Button */}
        <motion.button
          onClick={() => onStart(project)}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary font-bold hover:shadow-lg hover:shadow-primary/50 transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Mission
        </motion.button>
      </div>
    </motion.div>
  )
}

export default MissionCard
