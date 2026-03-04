import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const skillsData = {
  Languages: [
    { name: 'Java', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', level: 75, color: 'from-blue-500 to-blue-600' },
    { name: 'C++', level: 70, color: 'from-blue-600 to-purple-600' },
    { name: 'PHP', level: 65, color: 'from-purple-500 to-indigo-500' }
  ],
  Frameworks: [
    { name: 'React', level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'NodeJS', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'Express', level: 85, color: 'from-gray-500 to-gray-700' },
    { name: 'Tailwind CSS', level: 80, color: 'from-cyan-400 to-blue-500' }
  ],
  Databases: [
    { name: 'MongoDB', level: 85, color: 'from-green-500 to-emerald-600' },
    { name: 'MySQL', level: 80, color: 'from-blue-500 to-cyan-500' }
  ],
  Tools: [
    { name: 'Git', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Socket.io', level: 75, color: 'from-gray-600 to-gray-800' },
    { name: 'DSA', level: 80, color: 'from-purple-500 to-pink-500' }
  ]
}

const SkillsLab = () => {
  const { addXP } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_SKILLS)
  }, [])

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          🔬 Skills Lab
        </h1>
        <p className="text-gray-400">My technical arsenal and expertise levels</p>
      </motion.div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-xl opacity-20 blur group-hover:opacity-40 transition-opacity`}
                  />
                  
                  {/* Card */}
                  <div className="relative bg-dark border border-primary/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-lg">{skill.name}</h3>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-darker rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsLab
