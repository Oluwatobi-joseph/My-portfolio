import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaFolder, FaLayerGroup } from "react-icons/fa";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "PayFlow & Logistics Portal",
    category: "Finance & Logistics",
    description:
      "A frontend interface engineered for shipment tracking, cross-border payments, and real-time transaction monitoring. Built with modular React components and responsive tables.",
    tech: ["React", "JavaScript", "Vite", "CSS Grid", "Figma"],
    github: "https://github.com/oluwatobi-joseph",
    demo: "https://github.com/oluwatobi-joseph",
    featured: true,
  },
  {
    id: 2,
    title: "SwiftTask Management Suite",
    category: "Productivity Web App",
    description:
      "Dynamic task board featuring in-line editing, multi-state progress indicators (To-Do, In Progress, Done), customizable subjects, and persistent state controls.",
    tech: ["React", "State Hooks", "Component Driven", "Responsive UI"],
    github: "https://github.com/oluwatobi-joseph",
    demo: "https://github.com/oluwatobi-joseph",
    featured: true,
  },
  {
    id: 3,
    title: "ArchStudio Editorial Showcase",
    category: "Architecture & Design",
    description:
      "Minimalist architectural portfolio site emphasizing spatial rhythm, fluid typography, high-impact project galleries, and seamless mobile transitions.",
    tech: ["React", "Design Systems", "Figma to Code", "CSS Variables"],
    github: "https://github.com/oluwatobi-joseph",
    demo: "https://github.com/oluwatobi-joseph",
    featured: false,
  },
  {
    id: 4,
    title: "CardCosmic Digital Experience",
    category: "Web Application",
    description:
      "Modern interactive landing page and web application showcasing digital assets with rich micro-animations, glassmorphism accents, and responsive card layouts.",
    tech: ["React", "JavaScript", "Modern CSS", "Accessibility"],
    github: "https://github.com/oluwatobi-joseph",
    demo: "https://github.com/oluwatobi-joseph",
    featured: false,
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Web Apps", value: "apps" },
    { label: "Architecture & Design", value: "design" },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "apps") {
      return project.category.includes("Finance") || project.category.includes("Productivity") || project.category.includes("Web App");
    }
    if (filter === "design") {
      return project.category.includes("Design") || project.category.includes("Architecture");
    }
    return true;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="section-header-block reveal-on-scroll">
        <div className="section-badge-wrapper">
          <span className="section-badge">Selected Work</span>
        </div>
        <h2 className="section-title">Featured Projects &amp; Experiments</h2>
        <p className="section-subtitle">
          A showcase of responsive web applications, design systems, and
          interactive tools built with clean code and high attention to detail.
        </p>

        {/* Filter Tabs */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={`filter-btn ${filter === cat.value ? "active" : ""}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article
            key={`${project.id}-${filter}`}
            className={`project-card project-card-animated reveal-on-scroll reveal-stagger-${(index % 2) + 1}`}
          >
            <div className="project-top-row">
              <div className="project-folder-icon">
                <FaFolder />
              </div>
              <div className="project-external-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                  title="View GitHub Repository"
                  aria-label="GitHub Repository"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                  title="View Live Site"
                  aria-label="Live Site"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <div className="project-category-tag">
              <FaLayerGroup className="category-icon" />
              <span>{project.category}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech-list">
              {project.tech.map((item, idx) => (
                <span key={idx} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-card-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-cta"
              >
                <span>View Project</span>
                <FaExternalLinkAlt className="cta-icon" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
