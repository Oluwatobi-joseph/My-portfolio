import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaArrowUp,
  FaPaperPlane,
} from "react-icons/fa";

function Contacting() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "oluwatobijoseph.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-main-card reveal-on-scroll">
        <div className="contact-grid">
          {/* Left Column: Pitch & Message */}
          <div className="contact-pitch-col">
            <div className="section-badge-wrapper">
              <span className="section-badge">Get In Touch</span>
            </div>
            <h2 className="contact-heading">
              Let's Build Something <span className="gradient-text">Exceptional</span>
            </h2>
            <p className="contact-body-text">
              I am open to <strong>Frontend Developer</strong> roles,
              high-impact internships, contract projects, and collaborations
              with startups and innovative teams &mdash; available remote or
              on-site.
            </p>
            <p className="contact-body-text">
              Have an idea, an existing product in need of a frontend overhaul,
              or a design you want translated into pixel-perfect React code?
            </p>
            <div className="contact-highlight-quote">
              <span className="quote-bar"></span>
              <p>
                Whether it is a high-converting landing page, an executive
                portfolio, or a full interactive web application &mdash; I will
                help you build it fast, clean, and responsive.
              </p>
            </div>

            {/* Quick Email Copy Box */}
            <div className="email-copy-box">
              <div className="email-text-wrap">
                <FaEnvelope className="email-icon" />
                <span className="email-address">{emailAddress}</span>
              </div>
              <button
                type="button"
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <FaCheck className="copy-icon" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="copy-icon" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Direct Channels & Social Cards */}
          <div className="contact-channels-col">
            <div className="channels-card-inner">
              <div className="channels-header">
                <FaPaperPlane className="paperplane-icon float-subtle" />
                <div>
                  <h3 className="channels-title">Direct Channels</h3>
                  <p className="channels-sub">
                    Fastest response via WhatsApp or LinkedIn
                  </p>
                </div>
              </div>

              <div className="channels-list">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/2349126475414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card whatsapp-channel"
                >
                  <div className="channel-icon-wrap">
                    <FaWhatsapp />
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">WhatsApp</span>
                    <span className="channel-desc">Chat directly &bull; +234 912 647 5414</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/tobi-finesse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card linkedin-channel"
                >
                  <div className="channel-icon-wrap">
                    <FaLinkedinIn />
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">LinkedIn</span>
                    <span className="channel-desc">Professional profile &bull; InMail</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/oluwatobi-joseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card github-channel"
                >
                  <div className="channel-icon-wrap">
                    <FaGithub />
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">GitHub</span>
                    <span className="channel-desc">Code repositories &bull; @oluwatobi-joseph</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bar reveal-on-scroll">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Tobi E. Finesse. Crafted with React &amp; Vite.</p>
        </div>
        <div className="footer-right">
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FaArrowUp className="bounce-subtle" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Contacting;
