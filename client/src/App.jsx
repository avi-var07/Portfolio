import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GameProvider } from './context/GameContext'
import LandingPage from './pages/LandingPage'
import GameMap from './pages/GameMap'
import SkillsLab from './pages/SkillsLab'
import ProjectArena from './pages/ProjectArena'
import AchievementHall from './pages/AchievementHall'
import AIAssistant from './pages/AIAssistant'
import ResumeVault from './pages/ResumeVault'
import ContactPortal from './pages/ContactPortal'
import GamificationDemo from './components/GamificationDemo'
import XPBar from './components/XPBar'

function App() {
  return (
    <GameProvider>
      <Router>
        <XPBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<GameMap />} />
          <Route path="/skills" element={<SkillsLab />} />
          <Route path="/projects" element={<ProjectArena />} />
          <Route path="/achievements" element={<AchievementHall />} />
          <Route path="/ai" element={<AIAssistant />} />
          <Route path="/resume" element={<ResumeVault />} />
          <Route path="/contact" element={<ContactPortal />} />
          <Route path="/demo" element={<GamificationDemo />} />
        </Routes>
      </Router>
    </GameProvider>
  )
}

export default App
