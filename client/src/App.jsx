import { useState } from 'react';
import { GameProvider } from './context/GameContext';
import { ThemeProvider } from './context/ThemeContext';
import Cursor from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameHUD from './components/GameHUD';
import Toast from './components/Toast';
import PartyOverlay from './components/PartyOverlay';
import AviBot from './components/AviBot';
import ChallengePopup from './components/ChallengePopup';
import {
  StatsStrip, About, Skills, Projects,
  Training, Achievements, ExtraCurricular, Contact
} from './components/Sections';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';

function Portfolio() {
  const [launched, setLaunched] = useState(false);
  const [challengeStarted, setChallengeStarted] = useState(false);

  return (
    <>
      <Cursor />
      {!launched && <IntroScreen onDone={() => setLaunched(true)} />}

      {/* Challenge Popup */}
      {launched && !challengeStarted && (
        <ChallengePopup onStart={() => setChallengeStarted(true)} />
      )}

      {/* Always mount but hide until launched */}
      <div style={{ visibility: launched ? 'visible' : 'hidden' }}>
        <ParticleCanvas />
        <Navbar visible={launched} />
        <GameHUD visible={launched} />
        <Toast />
        <PartyOverlay />
        <AviBot />

        <main>
          <Hero />
          <StatsStrip />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Training />
          <Testimonials />
          <Achievements />
          <ExtraCurricular />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <Portfolio />
      </GameProvider>
    </ThemeProvider>
  );
}
