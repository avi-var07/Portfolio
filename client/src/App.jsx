import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GameProvider } from './context/GameContext'
import LandingPage from './pages/LandingPage'
import DashboardLayout from './components/DashboardLayout'

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </GameProvider>
  )
}

export default App
