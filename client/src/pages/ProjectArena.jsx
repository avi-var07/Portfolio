import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const projects = [
  {
    id: 1,
    name: 'driveSutraGo',
    title: 'Gamified Eco Driving Platform',
    problem: 'Lack of awareness and motivation for sustainable driving habits',
    solution: 'MERN platform with real-time geolocation, AI driving coach, eco-score analytics, challenges, leaderboards, and virtual community forests',
    tech: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/aviralvarshney',
    demo: '#',
    icon: '🚗'
  },
  {
    id: 2,
    name: 'Skill Based Candidate Shortlisting',
    title: 'Automated Recruitment System',
    problem: 'Manual candidate screening is time-consuming and inconsistent',
    solution: 'Java-based DSA system that automatically shortlists candidates using skill mapping and custom weightage rules',
    tech: ['Java', 'DSA', 'OOP'],
    github: 'https://github.com/aviralvarshney',
    demo: '#',
    icon: '👔'
  },
  {
    id: 3,
    name: 'Kahan Chale',
    title: 'Tour Operator Website',
    problem: 'Difficulty in managing tour packages and bookings efficiently',
    solution: 'Tour planning platform with package management, booking system, guide assignment, filtering by budget/destination, and user feedback',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/aviralvarshney',
    demo: '#',
    icon: '✈️'
  }
]

const ProjectArena = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const { addXP, unlockAchievement } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_ZONE)
  }, [])

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    const hasOpenedProject = localStorage.getItem('hasOpenedProject')
    if (!hasOpenedProject) {
      unlockAchievement('project-explorer')
      addXP(XP_ACTIONS.OPEN_PROJECT)
      localStorage.setItem('hasOpenedProject', 'true')
    } else {
      addXP(XP_ACTIONS.OPEN_PROJECT)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            🚀 Project Arena
          </h1>
          <p className="text-gray-400">Mission-based project showcase</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer bg-gradient-to-br from-dark to-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all"
            >
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.title}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs bg-purple-500/20 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs bg-purple-500/20 px-2 py-1 rounded">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark border border-purple-500/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.name}</h2>
                  <p className="text-gray-400">{selectedProject.title}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-2">Problem</h3>
                  <p className="text-gray-300">{selectedProject.problem}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Solution</h3>
                  <p className="text-gray-300">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="bg-purple-500/20 px-3 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg text-center font-bold hover:opacity-90 transition-opacity"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 py-3 rounded-lg text-center font-bold hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ProjectArena
