import React from 'react';
import { createRoot } from 'react-dom/client';
import headshot from './assets/headshot.jpg';
import './styles.css';

const Icon = ({ children }) => <span className="icon" aria-hidden="true">{children}</span>;
const Github = ({ size }) => <Icon>GH</Icon>;
const Linkedin = () => <Icon>in</Icon>;
const Mail = () => <Icon>@</Icon>;
const ExternalLink = () => <Icon>↗</Icon>;
const Code2 = () => <Icon>{'{ }'}</Icon>;
const Server = () => <Icon>API</Icon>;
const ShieldCheck = () => <Icon>JWT</Icon>;
const Database = () => <Icon>DB</Icon>;
const Briefcase = () => <Icon>💼</Icon>;
const GraduationCap = () => <Icon>🎓</Icon>;

const projects = [
  {
    title: 'Fitness Coaching Portal',
    type: 'Full-stack Web App',
    description: 'A client and admin portal for a fitness coaching brand with client creation, check-ins, progress ratings, and dashboard views.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'CSS'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'Backend Movie API',
    type: 'REST API Project',
    description: 'A backend-focused API designed to demonstrate authentication, role-based access, protected routes, and third-party API integration.',
    tech: ['Node.js', 'Express', 'JWT', 'Prisma', 'PostgreSQL'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'Blog API',
    type: 'Backend API',
    description: 'A blog backend with users, posts, comments, roles, and database relationships built to practice clean API design.',
    tech: ['Express', 'Prisma', 'PostgreSQL', 'REST'],
    links: { github: '#', live: '#' }
  }
];

const skills = [
  { icon: <Code2 />, label: 'Frontend', details: 'React, JavaScript, HTML, CSS, Tailwind CSS responsive UI' },
  { icon: <Server />, label: 'Backend', details: 'Node.js, Express, REST APIs, routing, middleware' },
  { icon: <ShieldCheck />, label: 'Auth', details: 'JWT, protected routes, roles, secure flows' },
  { icon: <Database />, label: 'Database', details: 'PostgreSQL, Prisma, schemas, relationships' }
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top">SP</a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="hero-text">
          <p className="eyebrow">IT Graduate • Full-Stack Developer</p>
          <h1>Hi, I’m Sergio Padilla.</h1>
          <p className="hero-copy">
            I build clean, practical web applications with a focus on backend systems, APIs, authentication, and user-friendly interfaces.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href="mailto:sergiopadilla0987@gmail.com">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <img src={headshot} alt="Sergio Padilla headshot" />
          <div>
            <h2>Sergio Padilla</h2>
            <p>React • Node.js • PostgreSQL</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Work</p>
          <h2>Featured Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="card-links">
                <a href={project.links.github} aria-label={`${project.title} GitHub link`}><Github /> Code</a>
                <a href={project.links.live} aria-label={`${project.title} live link`}><ExternalLink /> Live</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">About</p>
          <h2>Focused on becoming job-ready through real projects.</h2>
        </div>
        <div className="about-copy">
          <p>
            I’m an Information Technology graduate from UCF building projects that show practical full-stack development skills. My current focus is backend development: REST APIs, authentication, database design, roles, and secure application structure.
          </p>
          <div className="quick-facts">
            <div><GraduationCap /> UCF Information Technology Graduate</div>
            <div><Briefcase /> Open to junior developer and IT opportunities</div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools I’m working with</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.label}>
              {skill.icon}
              <h3>{skill.label}</h3>
              <p>{skill.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect.</h2>
        <p>Have an opportunity, project, or feedback? Reach out anytime.</p>
        <div className="contact-links">
          <a href="mailto:sergiopadilla0987@gmail.com"><Mail /> Email</a>
          <a href="https://github.com/sergiopadilla0987" target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
