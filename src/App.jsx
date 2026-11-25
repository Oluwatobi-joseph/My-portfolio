import './portfolio/portfolio.css';
import PortNav from './portfolio/PortNav.jsx';
import Bio from './portfolio/Bio.jsx';
import Projects from './portfolio/Projects.jsx';
import Contacting from './portfolio/Contacting.jsx';
import { useScrollReveal } from './portfolio/useScrollReveal.js';

function App() {
  // Initialize scroll-triggered animations
  useScrollReveal();

  return (
    <div className="portfolio-app-root">
      {/* Background Animated Ambient Glow Orbs */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb orb-primary"></div>
        <div className="ambient-orb orb-secondary"></div>
        <div className="ambient-orb orb-tertiary"></div>
      </div>

      <PortNav />
      <main className="portfolio-main-content">
        <Bio />
        <Projects />
      </main>
      <Contacting />
    </div>
  );
}

export default App;
