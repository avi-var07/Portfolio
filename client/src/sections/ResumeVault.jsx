import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useGame } from '../context/GameContext'
import { XP_ACTIONS } from '../utils/gamification'

const ResumeVault = () => {
  const { addXP } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_ZONE)
  }, [])

  const resumeData = {
    name: 'Aviral Varshney',
    title: 'Full Stack Developer',
    email: '[email]',
    phone: '[phone_number]',
    location: 'India',
    summary: 'Passionate Full Stack Developer with expertise in MERN stack, competitive programming, and building scalable web applications. Strong problem-solving skills with achievements in LeetCode, Codolio, and CodeChef.',
    education: [
      {
        degree: 'Bachelor of Technology',
        field: 'Computer Science',
        institution: 'University Name',
        year: '2020-2024'
      }
    ],
    experience: [
      {
        title: 'Full Stack Developer',
        company: 'Project Work',
        period: '2023-Present',
        points: [
          'Built gamified eco-driving platform using MERN stack with real-time features',
          'Developed skill-based candidate shortlisting system using Java and DSA',
          'Created tour operator website with comprehensive booking management',
          'Implemented real-time communication using Socket.io'
        ]
      }
    ]
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          📄 Resume Vault
        </h1>
        <p className="text-gray-400">Professional credentials and experience</p>
      </motion.div>

      {/* Resume Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur"
        />

        {/* Card Content */}
        <div className="relative bg-dark border-2 border-indigo-500/50 rounded-2xl p-8 space-y-8">
          {/* Header Section */}
          <div className="text-center border-b border-gray-700 pb-6">
            <h2 className="text-3xl font-bold mb-2">{resumeData.name}</h2>
            <p className="text-xl text-primary mb-4">{resumeData.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                {resumeData.email}
              </span>
              <span className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                {resumeData.phone}
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                {resumeData.location}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Summary</h3>
            <p className="text-gray-300 leading-relaxed">{resumeData.summary}</p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Education</h3>
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4"
              >
                <h4 className="font-bold text-lg">{edu.degree} - {edu.field}</h4>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4"
              >
                <h4 className="font-bold text-lg">{exp.title}</h4>
                <p className="text-gray-400 mb-3">{exp.company} | {exp.period}</p>
                <ul className="space-y-2 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Download Button */}
          <div className="text-center pt-4">
            <motion.button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume PDF
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ResumeVault
