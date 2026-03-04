import { motion } from 'framer-motion'
import { useEffect } from 'react'
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
          'Built gamified eco-driving platform using MERN stack',
          'Developed skill-based candidate shortlisting system',
          'Created tour operator website with booking management'
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            📄 Resume Vault
          </h1>
          <p className="text-gray-400">Professional credentials and experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-dark border border-indigo-500/30 rounded-2xl p-8 space-y-8"
        >
          {/* Header */}
          <div className="text-center border-b border-gray-700 pb-6">
            <h2 className="text-3xl font-bold mb-2">{resumeData.name}</h2>
            <p className="text-xl text-primary mb-4">{resumeData.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>📧 {resumeData.email}</span>
              <span>📱 {resumeData.phone}</span>
              <span>📍 {resumeData.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Summary</h3>
            <p className="text-gray-300">{resumeData.summary}</p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="bg-indigo-500/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">{edu.degree} - {edu.field}</h4>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="bg-indigo-500/10 rounded-lg p-4">
                <h4 className="font-bold text-lg">{exp.title}</h4>
                <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className="text-center pt-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              Download Resume PDF
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResumeVault
