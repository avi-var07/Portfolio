import { useState } from 'react';
import { GameProvider } from './context/GameContext';
import Cursor from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameHUD from './components/GameHUD';
import Toast from './components/Toast';
import PartyOverlay from './components/PartyOverlay';
import AviBot from './components/AviBot';
import {
  StatsStrip, About, Skills, Projects,
  Training, Achievements, ExtraCurricular, Contact
} from './components/Sections';

function Portfolio() {
  const [launched, setLaunched] = useState(false);

  return (
    <>
      <Cursor />
      {!launched && <IntroScreen onDone={() => setLaunched(true)} />}

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
          <Skills />
          <Projects />
          <Training />
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
    <GameProvider>
      <Portfolio />
    </GameProvider>
  );
}
