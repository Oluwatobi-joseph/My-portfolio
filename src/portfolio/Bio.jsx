import { FaReact, FaJs, FaFigma, FaGithub, FaMapMarkerAlt, FaGlobe, FaRocket, FaLaptopCode, FaTools, FaGraduationCap } from "react-icons/fa";

function Bio() {
  return (
    <section className="bio-hero-section">
      {/* Hero Container */}
      <div className="hero-card hero-enter-animation">
        {/* Availability & Skills Tags */}
        <div className="hero-tags-wrapper">
          <div className="status-badge pulse-glow">
            <span className="pulsing-beacon"></span>
            <span>Available for remote & on-site roles</span>
          </div>

          <div className="hero-pills">
            <span className="hero-pill highlight-pill">Frontend Developer</span>
            <span className="hero-pill">Logistics &bull; Finance &bull; Payments</span>
            <span className="hero-pill">React &bull; JavaScript &bull; Figma &bull; Git</span>
          </div>
        </div>

        {/* Hero Heading */}
        <div className="hero-header">
          <h1 className="hero-title">
            Tobi E. Finesse &mdash;{" "}
            <span className="gradient-text animated-shimmer">Frontend Developer</span>
          </h1>
        </div>

        {/* Hero Description */}
        <div className="hero-description">
          <p>
            I build fast, responsive, and visually refined web applications and
            websites using React and modern frontend tooling. Combining an eye
            for structural aesthetics from Architecture with clean engineering,
            I create seamless digital experiences that look sharp and perform on
            every screen.
          </p>
        </div>

        {/* Primary Actions */}
        <div className="hero-actions">
          <a href="#projects" className="btn-primary magnetic-btn">
            <span>Explore Projects</span>
            <FaRocket className="btn-icon" />
          </a>
          <a href="#contact" className="btn-secondary">
            <span>Contact Me</span>
          </a>
          <a
            href="https://github.com/oluwatobi-joseph"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaGithub className="btn-icon" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Hero Metrics / Highlights */}
        <div className="hero-metrics-grid">
          <div className="metric-box reveal-on-scroll reveal-stagger-1">
            <div className="metric-icon-wrap">
              <FaRocket className="metric-icon" />
            </div>
            <div className="metric-details">
              <h4 className="metric-title">4 Production Builds</h4>
              <p className="metric-sub">Web applications engineered and deployed</p>
            </div>
          </div>

          <div className="metric-box reveal-on-scroll reveal-stagger-2">
            <div className="metric-icon-wrap">
              <FaMapMarkerAlt className="metric-icon" />
            </div>
            <div className="metric-details">
              <h4 className="metric-title">Based in Edo State, Nigeria</h4>
              <p className="metric-sub">Open to remote teams & worldwide contracts</p>
            </div>
          </div>

          <div className="metric-box reveal-on-scroll reveal-stagger-3">
            <div className="metric-icon-wrap">
              <FaGlobe className="metric-icon" />
            </div>
            <div className="metric-details">
              <h4 className="metric-title">Modern Web Stack</h4>
              <p className="metric-sub">React 19, JavaScript ES6+, Vite, Component Architecture</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section Anchor */}
      <div id="about" className="section-anchor"></div>

      {/* About Section Card */}
      <div className="about-card reveal-on-scroll">
        <div className="section-badge-wrapper">
          <span className="section-badge">About Me</span>
        </div>
        <h2 className="section-title">Design-Driven Frontend Engineering</h2>
        <p className="about-lead">
          I am a frontend developer dedicated to bridging the gap between
          visionary design and solid, scalable code. With a background studying
          Architecture at Ahmadu Bello University, I bring a unique spatial and
          structural sensitivity to user interfaces &mdash; ensuring every layout
          is intuitive, balanced, responsive, and performance-driven.
        </p>

        <div className="about-tags-row">
          <div className="about-tag">
            <FaMapMarkerAlt className="tag-icon" />
            <span>Edo State, Nigeria &bull; Worldwide Remote</span>
          </div>
          <div className="about-tag">
            <FaReact className="tag-icon react-color spin-slow" />
            <FaJs className="tag-icon js-color" />
            <FaFigma className="tag-icon figma-color" />
            <span>React &bull; JavaScript &bull; Figma &bull; Git</span>
          </div>
        </div>
      </div>

      {/* Skills / Pillars Section Anchor */}
      <div id="skills" className="section-anchor"></div>

      {/* Three Pillars Grid (Focus, Tooling, Education) */}
      <div className="pillars-grid">
        {/* Pillar 1: Focus */}
        <div className="pillar-card reveal-on-scroll reveal-stagger-1">
          <div className="pillar-header">
            <div className="pillar-icon-box">
              <FaLaptopCode />
            </div>
            <span className="pillar-tag">Core Focus</span>
          </div>
          <h3 className="pillar-title">Design-Driven Frontend</h3>
          <p className="pillar-body">
            Clean layouts, fully responsive web pages, and smooth user
            interactions. I combine design intuition with React component
            architecture to build digital products that are structured,
            accessible, and delightfully smooth on any viewport.
          </p>
          <div className="pillar-pills">
            <span>Responsive Design</span>
            <span>State Management</span>
            <span>Component Architecture</span>
          </div>
        </div>

        {/* Pillar 2: Tooling */}
        <div className="pillar-card reveal-on-scroll reveal-stagger-2">
          <div className="pillar-header">
            <div className="pillar-icon-box">
              <FaTools />
            </div>
            <span className="pillar-tag">Tooling</span>
          </div>
          <h3 className="pillar-title">Built for Performance</h3>
          <p className="pillar-body">
            Equipped with modern frontend development workflows: React,
            JavaScript, HTML5, modern CSS3 (Flexbox &amp; Grid), Vite, Figma,
            Git &amp; GitHub, paired with CAD design tools like Sketchup and AutoCAD.
          </p>
          <div className="pillar-pills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Vite</span>
            <span>Figma</span>
            <span>Git</span>
          </div>
        </div>

        {/* Pillar 3: Education */}
        <div className="pillar-card reveal-on-scroll reveal-stagger-3">
          <div className="pillar-header">
            <div className="pillar-icon-box">
              <FaGraduationCap />
            </div>
            <span className="pillar-tag">Background</span>
          </div>
          <h3 className="pillar-title">Ahmadu Bello University</h3>
          <p className="pillar-body">
            B.Sc. Architecture (undergraduate). Blending discipline, design theory,
            composition, and spatial hierarchy with modern software engineering
            to craft purposeful web products.
          </p>
          <div className="pillar-pills">
            <span>Spatial Design</span>
            <span>Visual Hierarchy</span>
            <span>Systems Thinking</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
