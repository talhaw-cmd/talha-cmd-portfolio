import React, { useState, useEffect } from 'react';
import "./App.css"
// ==========================================
// 100% PURE INLINE SVGS (No Installation Required)
// ==========================================
const TerminalIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);
const CpuIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
);
const CodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const GlobeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);
const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const ExternalLinkIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const MenuIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const ArrowUpRightIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);
const AwardIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);
const GraduationCapIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
);
const BriefcaseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const LayersIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* HEADER & NAVIGATION */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            TALHA<span>.CMD</span>
          </a>
          
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={closeMenu}
              >
                //{item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="container hero-wrapper">
        <div className="hero-terminal">
          <div className="terminal-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <p className="hero-pre">const developer = async () =&gt; &#123;</p>
          <h1 className="hero-name">Muhammad Talha Rauf</h1>
          <p className="hero-title">Full Stack Developer &amp; Graphic Designer</p>
          <p className="hero-tagline">
            Building performance-optimized digital architecture and high-fidelity interfaces from ecosystem to asset.
          </p>
          <div style={{ marginBottom: '1.5rem' }}>
            <a href="#projects" className="btn">
              View Deployment <ArrowUpRightIcon size={16} />
            </a>
          </div>
          <p className="hero-pre">&#125;; developer();</p>
        </div>
      </header>

      {/* ABOUT ME SECTION */}
      <section id="about" className="section container">
        <div className="section-tag"><TerminalIcon size={14} /> 01. About</div>
        <h2 className="section-title">System Overview</h2>
        <div className="grid-2">
          <div className="card">
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Compilation Profile</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              I am a Full Stack Developer based in Rawalpindi, Pakistan, combining precise structural computer science logic with aesthetic visual system deployment[cite: 1]. I specialize in engineering clean backend ecosystems and responsive frontend architectures that maximize end-user processing efficiency[cite: 1].
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              My design background bridges structural visual hierarchy with functional digital execution, enabling me to build seamless, comprehensive systems from backend endpoints to production interface design[cite: 1].
            </p>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Current Operation</p>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>BS Computer Science Undergraduate[cite: 1]</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Actively engineering core computational logic stacks, algorithmic optimization, and system databases[cite: 1].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS MATRIX */}
      <section id="skills" className="section container">
        <div className="section-tag"><CpuIcon size={14} /> 02. Engine</div>
        <h2 className="section-title">Technical Capabilities</h2>
        <div className="skill-matrix-grid">
          
          <div className="card">
            <h3 className="skill-group-title"><CodeIcon size={16} /> Languages</h3>
            <div className="skill-tags">
              {['JavaScript', 'C++', 'HTML5', 'CSS3'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="skill-group-title"><LayersIcon size={16} /> Frontend Ecosystem</h3>
            <div className="skill-tags">
              {['React.js', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="skill-group-title"><CpuIcon size={16} /> Core Backend</h3>
            <div className="skill-tags">
              {['Node.js', 'Express.js', 'Python (Flask / FastAPI)', 'REST APIs'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="skill-group-title"><GlobeIcon size={16} /> Data &amp; Environments</h3>
            <div className="skill-tags">
              {['MongoDB', 'Basic SQL', 'Git / GitHub', 'Postman'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="section container">
        <div className="section-tag"><BriefcaseIcon size={14} /> 03. Operations</div>
        <h2 className="section-title">Execution History</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-meta">
              <div>
                <h3 className="timeline-title">MERN Stack Developer &amp; General Freelancer</h3>
                <span className="timeline-org">Independent Contractor</span>
              </div>
              <span className="timeline-date">Active System</span>
            </div>
            <div className="timeline-content">
              <ul>
                <li>Optimized system performance using rendering logic overhauls, noticeably lowering response overhead and improving interactive visual layout layers[cite: 1].</li>
                <li>Refactored legacy code blocks to optimize long-term maintenance loops and reduce runtime code overhead redundancy[cite: 1].</li>
                <li>Authored modular layouts across multiple client platforms to maximize conversion mechanics and navigation flow continuity[cite: 1].</li>
              </ul>
            </div>
          </div>
        </div>

        {/* KEY PERFORMANCE METRICS BAR */}
        <div className="card achievement-box">
          <div className="section-tag" style={{ marginBottom: '1rem' }}><AwardIcon size={14} /> Core Achievements Matrix</div>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            <div>
              <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '500' }}>🚀 Execution Overhaul</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Successfully refactored structural logic blocks, minimizing file size dependencies and enhancing cross-platform delivery speed[cite: 1].</p>
            </div>
            <div>
              <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '500' }}>🌐 Traffic Pipeline Development</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Deployed an online portfolio ecosystem capturing over 1,000 algorithmic views while maintaining efficient client load times[cite: 1].</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section container">
        <div className="section-tag"><CodeIcon size={14} /> 04. Repositories</div>
        <h2 className="section-title">Functional Deployments</h2>
        
        <div className="grid-3">
          
          {/* PROJECT 1 */}
          <div className="card project-card">
            <div>
              <div className="project-header">
                <div className="project-icon"><TerminalIcon size={20} /></div>
                <div className="project-links">
                  <a href="https://github.com/talhaw-cmd" className="project-link" target="_blank" rel="noreferrer" aria-label="GitHub Link"><GithubIcon size={18} /></a>
                </div>
              </div>
              <h3 className="project-title">AI Resume Analyzer</h3>
              <p className="project-desc">
                An intelligent system engineered using React and FastAPI. Parses incoming resume structures, runs comparison logic against job profiles, and streams performance optimizations.
              </p>
            </div>
            <div className="project-tech">
              {['React.js', 'FastAPI', 'Python', 'Tailwind'].map(t => <span key={t} className="tech-span">{t}</span>)}
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="card project-card">
            <div>
              <div className="project-header">
                <div className="project-icon"><TerminalIcon size={20} /></div>
                <div className="project-links">
                  <a href="https://github.com/talhaw-cmd" className="project-link" target="_blank" rel="noreferrer" aria-label="GitHub Link"><GithubIcon size={18} /></a>
                </div>
              </div>
              <h3 className="project-title">Foodies Web Platform</h3>
              <p className="project-desc">
                A high-fidelity client system featuring local storage architecture for state persistence and asynchronous multi-channel notification engines[cite: 1].
              </p>
            </div>
            <div className="project-tech">
              {['React.js', 'LocalStorage', 'EmailJS', 'CSS3'].map(t => <span key={t} className="tech-span">{t}</span>)}
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="card project-card">
            <div>
              <div className="project-header">
                <div className="project-icon"><TerminalIcon size={20} /></div>
                <div className="project-links">
                  <a href="https://github.com/talhaw-cmd" className="project-link" target="_blank" rel="noreferrer" aria-label="GitHub Link"><GithubIcon size={18} /></a>
                </div>
              </div>
              <h3 className="project-title">Smart Disaster Relief System</h3>
              <p className="project-desc">
                An academic web deployment orchestrating local database communication lines, secure session allocation, and emergency distribution management mapping[cite: 1].
              </p>
            </div>
            <div className="project-tech">
              {['HTML5', 'CSS3', 'JavaScript', 'Auth System'].map(t => <span key={t} className="tech-span">{t}</span>)}
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="card project-card">
            <div>
              <div className="project-header">
                <div className="project-icon"><TerminalIcon size={20} /></div>
                <div className="project-links">
                  <a href="https://coding-portfolio-ten.vercel.app" className="project-link" target="_blank" rel="noreferrer" aria-label="External Link"><ExternalLinkIcon size={18} /></a>
                </div>
              </div>
              <h3 className="project-title">Coding Portfolio Hub</h3>
              <p className="project-desc">
                A minimalist platform designed to act as an edge node to distribute internal assets, professional milestones, and track incoming search visibility paths[cite: 1].
              </p>
            </div>
            <div className="project-tech">
              {['React.js', 'Vite', 'CSS Modules', 'Vercel'].map(t => <span key={t} className="tech-span">{t}</span>)}
            </div>
          </div>

          {/* PROJECT 5 */}
          <div className="card project-card">
            <div>
              <div className="project-header">
                <div className="project-icon"><TerminalIcon size={20} /></div>
                <div className="project-links">
                  <a href="https://github.com/talhaw-cmd" className="project-link" target="_blank" rel="noreferrer" aria-label="GitHub Link"><GithubIcon size={18} /></a>
                </div>
              </div>
              <h3 className="project-title">Player Management System</h3>
              <p className="project-desc">
                A granular client-side state manipulation engine performing active structural CRUD mutations natively inside data models[cite: 1].
              </p>
            </div>
            <div className="project-tech">
              {['Vanilla JS', 'Data Manipulation', 'CSS Grid'].map(t => <span key={t} className="tech-span">{t}</span>)}
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section container">
        <div className="section-tag"><GraduationCapIcon size={14} /> 05. Core Logic Training</div>
        <h2 className="section-title">Education Nodes</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-meta">
              <div>
                <h3 className="timeline-title">BS Computer Science</h3>
                <span className="timeline-org">Institute of Space and Technology</span>
              </div>
              <span className="timeline-date">Oct 2024 - Present</span>
            </div>
            <div className="timeline-content">
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                Location Node: Rawalpindi, Pakistan[cite: 1]
              </p>
              <div className="skill-tags" style={{ marginTop: '0.5rem' }}>
                {['Object-Oriented Programming', 'Data Structures', 'Database Systems'].map(course => (
                  <span key={course} className="tech-span" style={{ color: 'var(--text-main)' }}>{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section container" style={{ paddingBottom: '8rem' }}>
        <div className="section-tag"><MailIcon size={14} /> 06. Communication</div>
        <h2 className="section-title">Establish Handshake</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '550px', marginBottom: '3rem', fontSize: '0.95rem' }}>
          Open to full-stack integration positions or premium identity architecture consultations[cite: 1]. Hit the endpoints below to sync schedules.
        </p>

        <div className="contact-grid">
          <a href="mailto:123mtalha789@gmail.com" className="card contact-card">
            <div className="icon-wrap"><MailIcon size={20} /></div>
            <div className="contact-info">
              <label>Direct Protocol</label>
              <span>123mtalha789@gmail.com</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/talha-rauf-9244a23a0" target="_blank" rel="noreferrer" className="card contact-card">
            <div className="icon-wrap"><LinkedinIcon size={20} /></div>
            <div className="contact-info">
              <label>Professional Profile</label>
              <span>talha-rauf-9244a23a0</span>
            </div>
          </a>

          <a href="https://github.com/talhaw-cmd" target="_blank" rel="noreferrer" className="card contact-card">
            <div className="icon-wrap"><GithubIcon size={20} /></div>
            <div className="contact-info">
              <label>Data Stream</label>
              <span>talhaw-cmd</span>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} MUHAMMAD TALHA RAUF. SYSTEM STATUS: DEPLOYED SECURELY.</p>
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', marginTop: '0.5rem' }}>BUILT WITH ZERO-DEPENDENCY NATIVE CSS LOGIC</p>
        </div>
      </footer>
    </>
  );
}