import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTimes, FaBars, FaArrowRight } from "react-icons/fa";

function PortNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      {/* Top Navigation Bar */}
      <header className={`top-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner-container">
          {/* Logo / Brand Name */}
          <a href="#" className="nav-brand" onClick={closeSidebar}>
            <span className="brand-dot"></span>
            <span className="brand-name">Tobi E. Finesse</span>
            <span className="brand-badge">Portfolio</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          {/* Desktop Socials & Action Button */}
          <div className="nav-actions">
            <div className="social-links-desktop">
              <a
                href="https://wa.me/2349126475414"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn whatsapp-btn"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/oluwatobi-joseph"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn github-btn"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tobi-finesse"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn linkedin-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <a href="#contact" className="nav-cta-btn">
              <span>Let's Talk</span>
              <FaArrowRight className="cta-arrow" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`drawer-backdrop ${isSidebarOpen ? "visible" : ""}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        className={`mobile-drawer ${isSidebarOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="brand-dot"></span>
            <span>Tobi E. Finesse</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="drawer-nav">
          <a href="#about" className="drawer-link" onClick={closeSidebar}>
            About
          </a>
          <a href="#skills" className="drawer-link" onClick={closeSidebar}>
            Skills
          </a>
          <a href="#projects" className="drawer-link" onClick={closeSidebar}>
            Projects
          </a>
          <a href="#contact" className="drawer-link" onClick={closeSidebar}>
            Contact
          </a>
        </nav>

        <div className="drawer-footer">
          <p className="drawer-footer-title">Connect with me</p>
          <div className="drawer-socials">
            <a
              href="https://wa.me/2349126475414"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-social-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/oluwatobi-joseph"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tobi-finesse"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <a href="#contact" className="drawer-cta" onClick={closeSidebar}>
            Contact Me
          </a>
        </div>
      </aside>
    </>
  );
}

export default PortNav;
