import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Briefcase, Code2, Brain, Linkedin, GraduationCap, Gift, Users, Bluetooth, Ticket } from 'lucide-react';
import './App.css';
import portfolioConfig from './config.json';
import profileImage from './assets/profile.jpg';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['About', 'Experience', 'Education', 'Projects', 'Recommendations', 'Skills', 'Contact'];

  const smoothScroll = (targetId, duration = 2000) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const targetPosition = element.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth motion
      const easeInOutCubic = progress < 0.5
        ? 4 * progress ** 3
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (elapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleSmoothScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      smoothScroll(targetId, 2000);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Map icon names to icon components
  const iconMap = {
    Brain,
    Code2,
    Briefcase,
    Mail,
    Phone,
    Linkedin,
    GraduationCap,
    Gift,
    Users,
    Bluetooth,
    Ticket
  };

  // Map icon names from config to actual icon components
  const projects = portfolioConfig.projects.map(project => ({
    ...project,
    icon: iconMap[project.icon] || Code2
  }));

  const skills = portfolioConfig.skills;
  const experience = portfolioConfig.experience;

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">{portfolioConfig.personal.name}</div>

          {/* Desktop Menu */}
          <div className="nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleSmoothScroll}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 20px', borderTop: '1px solid rgba(139, 92, 246, 0.2)' }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ color: '#d1d5db', textDecoration: 'none' }}
                onClick={handleSmoothScroll}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="container">
          {/* Profile Picture Placeholder */}
          <div className="profile-image-wrapper">
            <div className="profile-image-outer">
              <div className="profile-image-glow"></div>
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <div>
              <h1 className="hero-title">
                <span>{portfolioConfig.personal.title}</span>
              </h1>
              <p className="hero-subtitle">{portfolioConfig.personal.subtitle}</p>
            </div>

            <p className="hero-description">
              {portfolioConfig.personal.description}
            </p>

            <div className="badges">
              {portfolioConfig.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>

            <div className="cta-buttons">
              <a href={`mailto:${portfolioConfig.personal.email}`} className="cta-btn">
                <Mail size={20} />
                Get in Touch
              </a>
              <a href={portfolioConfig.personal.linkedin} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-secondary">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="experience-list">
            {experience.map((job, idx) => (
              <div key={idx} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{job.role}</h3>
                    <p className="experience-company">{job.company} • {job.location}</p>
                  </div>
                  <span className="experience-period">{job.period}</span>
                </div>

                <ul className="experience-highlights">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>

          <div className="education-list">
            {portfolioConfig.education.map((edu, idx) => (
              <div key={idx} className="education-item">
                <div className="education-header-content">
                  <GraduationCap size={32} className="education-icon" />

                  <div className="education-info">
                    <div className="education-top-section">
                      <div>
                        <h3 className="education-degree">{edu.degree}</h3>
                        <p className="education-institution">{edu.institution}</p>
                        <p className="education-location">{edu.location}</p>
                      </div>
                      <div className="education-meta">
                        <span className="education-period">{edu.period}</span>
                        {edu.gpa && (
                          <p className="education-gpa">GPA: {edu.gpa}</p>
                        )}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="education-description">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} className="project-card">
                  <div className="project-icon">
                    <Icon size={32} />
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="recommendations">
        <div className="container">
          <h2 className="section-title">Recommendations</h2>

          <div className="recommendations-list">
            {portfolioConfig.recommendations.map((rec, idx) => (
              <div key={idx} className="recommendation-card">
                <div className="recommendation-quote">"</div>

                <p className="recommendation-text">
                  {rec.text}
                </p>

                <div className="recommendation-author">
                  {rec.author.image && (
                    <img
                      src={rec.author.image}
                      alt={rec.author.name}
                      className="author-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <div>
                    <p className="author-name">{rec.author.name}</p>
                    <p className="author-title">{rec.author.title}, {rec.author.company}</p>
                    <p className="author-location">{rec.author.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={idx} className="skill-category">
                <h3 className="skill-category-title">
                  {category}
                </h3>
                <div className="skill-items">
                  {skillList.map((skill, i) => (
                    <span key={i} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <a href={`mailto:${portfolioConfig.personal.email}`} className="contact-btn contact-btn-primary">
            <Mail size={20} />
            {portfolioConfig.personal.email}
          </a>

          <div className="contact-links">
            <a href={`tel:${portfolioConfig.personal.phone}`} className="contact-btn contact-btn-secondary">
              <Phone size={20} />
              {portfolioConfig.personal.phone}
            </a>
            <a href={portfolioConfig.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 {portfolioConfig.personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
