import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import XPBar from './XPBar'
import SkillsLab from '../sections/SkillsLab'
import ProjectArena from '../sections/ProjectArena'
import AchievementHall from '../sections/AchievementHall'
import AIAssistant from '../sections/AIAssistant'
import ResumeVault from '../sections/ResumeVault'
import ContactPortal from '../sections/ContactPortal'
import AIChatWidget from './AIChatWidget'
import ParticleBackground from './ParticleBackground'

const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState('projects')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const sections = {
    skills: <SkillsLab />,
    projects: <ProjectArena />,
    achievements: <AchievementHall />,
    ai: <AIAssistant />,
    resume: <ResumeVault />,
    contact: <ContactPortal />
  }

  const handleNavigate = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-darker text-white overflow-hidden">
      <ParticleBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* XP Bar */}
      <XPBar />
      
      <div className="flex pt-[120px]">
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection}
          onNavigate={handleNavigate}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        {/* Main Content Area */}
        <main 
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'
          }`}
        >
          <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {sections[activeSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      
      {/* Floating AI Chat Widget */}
      <AIChatWidget onNavigate={handleNavigate} />
    </div>
  )
}

export default DashboardLayout
