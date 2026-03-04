import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import MissionCard from '../components/MissionCard'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const projects = [
  {
    id: 1,
    name: 'driveSutraGo',
    title: 'Gamified Eco Driving Platform',
    difficulty: 'Hard',
    xpReward: 50,
    problem: 'Lack of awareness and motivation for sustainable driving habits among drivers',
    solution: 'MERN platform with real-time geolocation tracking, AI driving coach, eco-score analytics, challenges, leaderboards, and virtual community forests to gamify and promote eco-friendly driving',
    architecture: 'Microservices architecture with React frontend, Node.js/Express backend, MongoDB database, Socket.io for real-time updates, and AI integration for driving analysis',
    tech: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'AI/ML'],
    github: 'https://github.com/aviralvarshney',
    demo: '#',
    icon: '🚗'
  },
  {
    id: 2,
    name: 'Skill Based Candidate Shortlisting',
    title: 'Automated Recruitment System',
    difficulty: 'Medium',
    xpReward: 35,
    problem: 'Manual candidate screening is time-consuming, inconsistent, and prone to bias',
    solution: 'Java-based DSA system that automatically shortlists candidates using intelligent skill mapping algorithms and custom weightage rules for different job requirements',
    architecture: 'Object-oriented design with modular components for skill parsing, matching algorithms, and scoring system using advanced data structures',
    tech: ['Java', 'DSA', 'OOP', 'Algorithms'],
    github: 'https://github.com/aviralvarshney',
    demo: '#',
    icon: '👔'
  },
  {
    id: 3,
    name: 'Kahan Chale',
    title: 'Tour Operator Website',
    difficulty: 'Medium',
    xpReward: 30,
    problem: 'Difficulty in managing tour packages, bookings, and customer interactions efficiently',
    solution: 'Comprehensive tour planning platform with package management, booking system, guide assignment, filtering by budget/destination, and integrated user feedback system',
    architecture: 'Traditional MVC architecture with PHP backend, MySQL database, and responsive frontend using Tailwind CSS',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/aviralvarshney',
    demo: '#',
    icon: '✈️'
  },
  {
    id: 4,
    name: 'Real Estate Platform',
    title: 'Property Management Solution',
    difficulty: 'Easy',
    xpReward: 25,
    problem: 'Fragmented property listings and inefficient communication between buyers and sellers',
    solution: 'Centralized platform for property listings, search, and management with user-friendly interface',
    architecture: 'Full-stack web application with modern frontend and RESTful API backend',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/aviralvarshney',
    demo: '#',
    icon: '🏠'
  }
]

const ProjectArena = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const { addXP, unlockAchievement } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_ZONE)
  }, [])

  const handleStartMission = (project) => {
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
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          🚀 Project Arena
        </h1>
        <p className="text-gray-400">Select a mission to explore and earn XP</p>
      </motion.div>

      {/* Mission Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MissionCard project={project} onStart={handleStartMission} />
          </motion.div>
        ))}
      </div>

      {/* Mission Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark border-2 border-primary/50 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">MISSION BRIEFING</div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.name}</h2>
                  <p className="text-gray-400">{selectedProject.title}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              {/* Content Sections */}
              <div className="space-y-6">
                {/* Problem */}
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                    <span>⚠️</span> Problem Statement
                  </h3>
                  <p className="text-gray-300 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                    <span>✅</span> Solution
                  </h3>
                  <p className="text-gray-300 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Architecture */}
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                    <span>🏗️</span> Architecture
                  </h3>
                  <p className="text-gray-300 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                    <span>⚡</span> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectArena
