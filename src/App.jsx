import { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";

/* ------------------------------------------------------------------ */
/*  Data — edit here to update site content                            */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: "Muhammad Talha Rauf",
  role: "Full-Stack Developer / Graphic Designer",
  location: "Rawalpindi, Pakistan",
  email: "123mtalha789@gmail.com",
  phone: "+92-313-0576364",
  linkedin: "https://www.linkedin.com/in/talha-rauf-9244a23a0/",
  github: "https://github.com/talhaw-cmd/",
  portfolio: "https://coding-portfolio-ten.vercel.app",
};

const SKILLS = [
  { group: "Languages", items: ["JavaScript", "Python", "C++", "SQL"] },
  { group: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"],
  },
  { group: "Database", items: ["MongoDB", "PL/SQL"] },
  {
    group: "Tools & Practice",
    items: ["Git & GitHub", "Postman", "VS Code", "OOP", "Responsive Design"],
  },
];

const EXPERIENCE = [
  {
    role: "Freelance Frontend Developer & Graphic Designer",
    org: "Fiverr",
    time: "Ongoing",
    points: [
      "Designed packaging and web layouts for small-business clients, taking projects from brief to delivery.",
      "Built responsive, mobile-first landing pages and product interfaces using React and Tailwind CSS.",
    ],
  },
  {
    role: "Independent Full-Stack Engineering",
    org: "Self-directed projects",
    time: "Ongoing",
    points: [
      "Designed and deployed multi-module production-style apps end to end — schema, API, auth, and UI.",
      "Diagnosed and fixed a cross-origin issue caused by an Nginx reverse proxy stripping headers between a React frontend and FastAPI backend.",
      "Migrated a Flask application's storage layer to MongoDB Atlas and deployed it on Railway.",
    ],
  },
];

// Fill in the real URLs below for each project.
// - liveLink: the deployed/live URL (leave as "" to hide the "Live Demo" button)
// - githubLink: the specific repo URL (falls back to your GitHub profile if left as PROFILE.github)
const PROJECTS = [
  {
    name: "Smart Disaster Relief System",
    tag: "SDRS",
    stack: ["Flask", "MongoDB Atlas", "Python", "Railway"],
    description:
      "A relief-coordination platform with seven data modules — auth, requests, resources, volunteers — built on session-based login, bcrypt password hashing, and full CRUD. Migrated from local storage to MongoDB Atlas and deployed on Railway.",
    liveLink: "https://smart-relief-system-production.up.railway.app/", // e.g. "https://sdrs.up.railway.app"
    githubLink: "https://github.com/talhaw-cmd/smart-relief-system", // e.g. "https://github.com/talhaw-cmd/smart-disaster-relief-system"
  },
  {
    name: "AI Resume Analyzer",
    tag: "Resume AI",
    stack: ["React", "FastAPI", "Python"],
    description:
      "A resume feedback tool pairing a React frontend with a FastAPI backend. Involved tracking down a tricky CORS failure caused by an Nginx reverse proxy silently dropping headers in production.",
    liveLink: "https://ai-resume-analyzer-two-hazel.vercel.app/", // e.g. "https://ai-resume-analyzer.vercel.app"
    githubLink: "https://github.com/talhaw-cmd/AI-Resume-Analyzer", // e.g. "https://github.com/talhaw-cmd/ai-resume-analyzer"
  },
  {
    name: "Foodies — Food Ordering App",
    tag: "E-commerce",
    stack: ["React.js", "EmailJS", "localStorage"],
    description:
      "A food-ordering platform with category filters, a persistent cart backed by localStorage, and automated order-confirmation emails via EmailJS. Built mobile-first for a consistent experience on any screen.",
    liveLink: "https://foodies-app-self-eight.vercel.app/", // e.g. "https://foodies-app.vercel.app"
    githubLink: "https://github.com/talhaw-cmd/foodies-app", // e.g. "https://github.com/talhaw-cmd/foodies"
  },
  {
    name: "Developer Portfolio",
    tag: "Personal Site",
    stack: ["React", "Vite", "CSS"],
    description:
      "A performance-first personal site showcasing full-stack and frontend work — the same site framework this page is built from. Has drawn over 1,000 views from potential employers and clients.",
    liveLink: "https://coding-portfolio-ten.vercel.app/",
    githubLink: "https://github.com/talhaw-cmd/Coding-Portfolio", // e.g. "https://github.com/talhaw-cmd/portfolio"
  },
];

const EDUCATION = {
  degree: "BS Computer Science",
  school: "Institute of Space Technology — Rawalpindi, Pakistan",
  time: "Oct 2024 — Present",
  coursework: ["Object-Oriented Programming", "Data Structures", "Database Systems"],
};

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const TERMINAL_LINES = [
  "const developer = {",
  `  name: "Muhammad Talha Rauf",`,
  `  role: "Full-Stack Developer",`,
  `  stack: ["React", "Node", "Flask", "FastAPI"],`,
  `  location: "Rawalpindi, PK",`,
  `  status: "open to work"`,
  "};",
];

/* ------------------------------------------------------------------ */
/*  Hook — reveal elements on scroll using IntersectionObserver        */
/*  (no animation library, keeps the bundle small)                     */
/* ------------------------------------------------------------------ */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", ...NAV_LINKS.map((l) => l.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const closeNav = useCallback(() => setNavOpen(false), []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "site-header-solid" : ""}`}>
        <div className="header-inner">
          <a href="#hero" className="brand" onClick={closeNav}>
            <span className="brand-mark">&lt;TR/&gt;</span>
          </a>

          <nav className={`nav ${navOpen ? "nav-open" : ""}`} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? "nav-link-active" : ""}`}
                onClick={closeNav}
              >
                {link.label}
              </a>
            ))}
            <a href={`mailto:${PROFILE.email}`} className="nav-cta" onClick={closeNav}>
              Say hello
            </a>
          </nav>

          <button
            className={`nav-toggle ${navOpen ? "nav-toggle-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        {/* ---------------------------- HERO ---------------------------- */}
        <section id="hero" className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Full-stack developer · {PROFILE.location}
              </p>
              <h1 className="hero-title">{PROFILE.name}</h1>
              <p className="hero-subtitle">
                I build fast, responsive web apps — and design the pixels
                around them.
              </p>
              <p className="hero-desc">
                React and Node on the frontend, Python and MongoDB
                underneath. Currently studying Computer Science while
                shipping real projects and freelance work on the side.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View my work
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get in touch
                </a>
              </div>
              <div className="hero-links">
                <a href={PROFILE.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="terminal">
                <div className="terminal-bar">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                  <span className="terminal-title">profile.js</span>
                </div>
                <pre className="terminal-body">
                  <code>
                    {TERMINAL_LINES.map((line, i) => (
                      <span
                        key={i}
                        className="terminal-line"
                        style={{ animationDelay: `${0.5 + i * 0.22}s` }}
                      >
                        {line}
                        {"\n"}
                      </span>
                    ))}
                    <span className="terminal-cursor" />
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="scroll-hint" aria-hidden="true">
            <span className="scroll-hint-line" />
            scroll
          </div>
        </section>

        {/* ---------------------------- ABOUT ---------------------------- */}
        <section id="about" className="section">
          <Reveal as="p" className="section-eyebrow">
            About
          </Reveal>
          <Reveal as="h2" className="section-title" delay={60}>
            A developer who also thinks like a designer
          </Reveal>

          <div className="about-grid">
            <Reveal as="p" className="about-text" delay={100}>
              I'm a full-stack developer with hands-on experience across
              React, Node.js, Express, and Python (Flask &amp; FastAPI) —
              currently studying Computer Science at the Institute of Space
              Technology. I like taking a project from a blank file to a
              deployed URL: designing the interface, wiring the backend, and
              making sure the whole thing actually feels fast to use.
            </Reveal>
            <Reveal as="p" className="about-text" delay={160}>
              Outside of client work I freelance as a graphic and packaging
              designer, which keeps my eye for layout and detail sharp on
              both sides of the screen — the code and the canvas.
            </Reveal>
          </div>

          <div className="stats-row">
            <Reveal as="div" className="stat" delay={80}>
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects shipped</span>
            </Reveal>
            <Reveal as="div" className="stat" delay={140}>
              <span className="stat-number">1,000+</span>
              <span className="stat-label">Portfolio views</span>
            </Reveal>
            <Reveal as="div" className="stat" delay={200}>
              <span className="stat-number">2</span>
              <span className="stat-label">Disciplines — code &amp; design</span>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------- SKILLS ---------------------------- */}
        <section id="skills" className="section section-alt">
          <Reveal as="p" className="section-eyebrow">
            Skills
          </Reveal>
          <Reveal as="h2" className="section-title" delay={60}>
            The stack I build with
          </Reveal>

          <div className="skills-grid">
            {SKILLS.map((group, gi) => (
              <Reveal as="div" className="skill-card" delay={gi * 90} key={group.group}>
                <h3 className="skill-card-title">{group.group}</h3>
                <ul className="skill-tags">
                  {group.items.map((item) => (
                    <li className="skill-tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ------------------------- EXPERIENCE ------------------------- */}
        <section id="experience" className="section">
          <Reveal as="p" className="section-eyebrow">
            Experience
          </Reveal>
          <Reveal as="h2" className="section-title" delay={60}>
            What I've been building
          </Reveal>

          <ol className="timeline">
            {EXPERIENCE.map((job, i) => (
              <Reveal as="li" className="timeline-item" delay={i * 120} key={job.role}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-head">
                    <h3 className="timeline-role">{job.role}</h3>
                    <span className="timeline-time">{job.time}</span>
                  </div>
                  <p className="timeline-org">{job.org}</p>
                  <ul className="timeline-points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* -------------------------- PROJECTS -------------------------- */}
        <section id="projects" className="section section-alt">
          <Reveal as="p" className="section-eyebrow">
            Projects
          </Reveal>
          <Reveal as="h2" className="section-title" delay={60}>
            Things I've shipped
          </Reveal>

          <div className="projects-grid">
            {PROJECTS.map((project, i) => (
              <Reveal as="article" className="project-card" delay={i * 100} key={project.name}>
                <div className="project-card-top">
                  <span className="project-tag">{project.tag}</span>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-stack">
                  {project.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-primary"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-ghost"
                    >
                      <svg
                        className="gh-icon"
                        viewBox="0 0 16 16"
                        width="15"
                        height="15"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38
                          0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                          -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                          .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                          -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04
                          2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87
                          3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38
                          A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
                        />
                      </svg>
                      GitHub
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* -------------------------- EDUCATION -------------------------- */}
        <section id="education" className="section">
          <Reveal as="p" className="section-eyebrow">
            Education
          </Reveal>
          <Reveal as="h2" className="section-title" delay={60}>
            Foundations
          </Reveal>

          <Reveal as="div" className="education-card" delay={100}>
            <div className="education-head">
              <h3 className="education-degree">{EDUCATION.degree}</h3>
              <span className="education-time">{EDUCATION.time}</span>
            </div>
            <p className="education-school">{EDUCATION.school}</p>
            <ul className="education-courses">
              {EDUCATION.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* --------------------------- CONTACT --------------------------- */}
        <section id="contact" className="section section-contact">
          <Reveal as="p" className="section-eyebrow">
            Contact
          </Reveal>
          <Reveal as="h2" className="section-title" delay={60}>
            Let's build something
          </Reveal>
          <Reveal as="p" className="contact-lead" delay={100}>
            Open to freelance work, internships, and interesting problems.
            The fastest way to reach me is email.
          </Reveal>

          <Reveal as="div" className="contact-grid" delay={140}>
            <a href={`mailto:${PROFILE.email}`} className="contact-card">
              <span className="contact-label">Email</span>
              <span className="contact-value">{PROFILE.email}</span>
            </a>
            <a href={`tel:${PROFILE.phone}`} className="contact-card">
              <span className="contact-label">Phone</span>
              <span className="contact-value">{PROFILE.phone}</span>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">talha-rauf</span>
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">talhaw-cmd</span>
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Designed &amp; built by {PROFILE.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}