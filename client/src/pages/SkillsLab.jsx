import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const skillsData = {
  Languages: ['Java', 'JavaScript', 'Python', 'C++', 'PHP'],
  Frameworks: ['React', 'NodeJS', 'Express', 'HTML', 'Tailwind CSS'],
  Databases: ['MongoDB', 'MySQL']
}

const SkillsLab = () => {
  const { addXP } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_SKILLS)
  }, [])

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            🔬 Skills Lab
          </h1>
          <p className="text-gray-400">My technical arsenal</p>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-dark to-primary/10 border border-primary/30 rounded-xl p-4 text-center"
                  >
                    <p className="font-semibold">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsLab
