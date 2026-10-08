import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type Project = {
  number: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  accent: string;
};

const skillGroups = [
  { label: 'Languages', icon: Code2, skills: ['JavaScript ES6+', 'TypeScript', 'Python', 'HTML5', 'CSS3'] },
  { label: 'Frontend', icon: Sparkles, skills: ['React.js', 'Next.js', 'Redux', 'Material UI', 'Tailwind CSS'] },
  { label: 'Backend & APIs', icon: BriefcaseBusiness, skills: ['Node.js', 'Express.js', 'FastAPI', 'Strapi', 'REST', 'GraphQL', 'SOAP'] },
  { label: 'Data & cloud', icon: Award, skills: ['MongoDB', 'DynamoDB', 'Redis', 'RabbitMQ', 'AWS Lambda', 'S3', 'ECS', 'CodePipeline', 'Docker', 'Azure AD', 'Firebase', 'GitHub Actions'] },
  { label: 'Delivery & learning', icon: GraduationCap, skills: ['Jest', 'Postman', 'Git', 'GitHub', 'Jira', 'Agile/Scrum', 'LLMs', 'RAG', 'Vector Databases', 'LangChain'] },
];

const projects: Project[] = [
  {
    number: '01', title: 'GlobalX', subtitle: 'Airline technology', period: 'Apr 2022 — Present',
    description: 'Confidential airline technology work spanning crew check-in, flight operations, scheduling, integrations, and serverless automation.',
    highlights: ['Delivered 10+ airline technology products, including Crew Check-In.', 'Built responsive interfaces and scalable backend services for airline operations.', 'Automated flight and crew scheduling updates with AWS Lambda.', 'Built CI/CD pipelines with GitHub Actions and AWS CodePipeline.', 'Maintained 95% on-time delivery across sprint planning, reviews, and client demonstrations.'],
    tags: ['Node.js', 'Next.js', 'TypeScript', 'MUI', 'DynamoDB', 'MongoDB', 'Redis', 'AWS', 'REST / SOAP'], accent: 'coral',
  },
  {
    number: '02', title: 'MFU', subtitle: 'Mutual fund utility', period: 'Dec 2024 — Present',
    description: 'Confidential product delivery work focused on API documentation, backend service integration, and collaborative Agile execution.',
    highlights: ['Led end-to-end project execution and client coordination.', 'Developed a custom API documentation platform.', 'Integrated multiple APIs and backend service layers.', 'Managed Agile sprints, releases, and task allocation.', 'Resolved production issues and optimized performance.'],
    tags: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Jira'], accent: 'blue',
  },
  {
    number: '03', title: 'HKM', subtitle: 'AI-enabled operations', period: 'Dec 2024 — Mar 2026',
    description: 'Confidential full-stack application work bringing AI-driven automation workflows into business operations.',
    highlights: ['Developed full-stack application features with MERN technologies.', 'Built AI-driven automation workflows using AWS Lambda.', 'Reduced manual effort and streamlined operational processes.'],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'AWS Lambda'], accent: 'yellow',
  },
];

const impact = [
  ['5+', 'years experience'], ['5+', 'enterprise projects'], ['10+', 'applications supported'], ['5+', 'developers mentored'], ['25+', 'code reviews'], ['30–55%', 'performance improvement'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');
  const [expandedProject, setExpandedProject] = useState('GlobalX');
  const [activeSkillGroup, setActiveSkillGroup] = useState('Languages');
  const [formStatus, setFormStatus] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const subject = String(form.get('subject') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !subject || !message) {
      setFormStatus('Please complete every field before continuing.');
      return;
    }
    setFormStatus('Opening your email app…');
    window.location.href = `mailto:bavithra7241@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  };

  return (
    <div className={`site-shell theme-${theme}`} id="top">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">BM</span><span>Bavithra Meena</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#achievements" onClick={closeMenu}>Achievements</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="/resume.pdf" download onClick={closeMenu}><Download size={14} /> Resume</a>
        </nav>
        <div className="header-actions"><button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button><button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>

      <main>
        <section className="hero section-grid" id="about">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Chennai, Tamil Nadu · 5+ years experience</p>
            <h1>Engineering scalable <span>digital experiences.</span></h1>
            <p className="hero-role">Full Stack Developer <span>|</span> MERN Stack <span>|</span> React <span>|</span> Node.js <span>|</span> AWS</p>
            <p className="hero-intro">Software developer specializing in full-stack web applications, enterprise API integrations, cloud services, and production-ready solutions.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore projects <ArrowUpRight size={17} /></a><a className="button button-ghost" href="mailto:bavithra7241@gmail.com?subject=Portfolio%20enquiry">Get in touch <Mail size={16} /></a><a className="button button-ghost" href="/resume.pdf" download>Download resume <Download size={16} /></a></div>
            <div className="social-row"><a href="https://github.com/bavithrameena" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://linkedin.com/in/bavithra-v-09250a398" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="mailto:bavithra7241@gmail.com"><Mail size={17} /> Email</a></div>
          </div>
          <div className="hero-aside"><div className="code-visual"><div className="code-top"><span><i /><i /><i /></span><span>portfolio.tsx</span><Code2 size={15} /></div><div className="code-lines"><p><b>01</b><span className="pink">const</span> <span className="cyan">developer</span> = {'{'}</p><p><b>02</b>&nbsp;&nbsp;focus: <span className="green">'impact'</span>,</p><p><b>03</b>&nbsp;&nbsp;stack: [<span className="green">'MERN'</span>, <span className="green">'AWS'</span>],</p><p><b>04</b>&nbsp;&nbsp;mindset: <span className="green">'always learning'</span>,</p><p><b>05</b>{'}'}</p><p><b>06</b></p><p><b>07</b><span className="pink">export default</span> developer;</p></div><div className="code-glow" /></div><div className="hero-note"><span>01 / 04</span><span>Systems · Interfaces · Delivery</span></div></div>
        </section>

        <section className="marquee" aria-label="Specialties"><div className="marquee-track"><span>Product-minded engineering</span><i>✳</i><span>Cloud-native systems</span><i>✳</i><span>Enterprise delivery</span><i>✳</i><span>Product-minded engineering</span><i>✳</i><span>Cloud-native systems</span><i>✳</i></div></section>

        <section className="intro-section section-grid"><div className="section-label"><span>01</span><span>About me</span></div><div className="intro-content"><h2>Engineering with clarity, curiosity, and <span>care.</span></h2><p>I’m a software developer with 5+ years of full-stack MERN experience, building scalable applications for airline, financial, and e-commerce clients. I work across frontend and backend development, APIs, cloud deployment, CI/CD, production support, mentoring, and Agile delivery.</p><p className="learning-note"><Sparkles size={17} /> Currently exploring Generative AI — LLMs, RAG, vector databases, and LangChain.</p></div></section>

        <section className="work-section" id="work"><div className="section-heading section-grid"><div className="section-label"><span>02</span><span>Selected work</span></div><div><p className="eyebrow">Confidential client work</p><h2>Built for the real <span>world.</span></h2></div></div><div className="projects">{projects.map((project) => { const isExpanded = expandedProject === project.title; return <article className={`project-card ${project.accent} ${isExpanded ? 'is-expanded' : ''}`} key={project.title}><div className="project-meta"><span>{project.number}</span><span>{project.period}</span></div><div className="project-body"><p className="project-type">{project.subtitle}</p><h3>{project.title}</h3><p>{project.description}</p>{isExpanded && <ul>{project.highlights.map((highlight) => <li key={highlight}><Check size={15} />{highlight}</li>)}</ul>}</div><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button type="button" aria-expanded={isExpanded} onClick={() => setExpandedProject(isExpanded ? '' : project.title)}>{isExpanded ? 'Hide' : 'Details'} <ChevronDown size={15} className={isExpanded ? 'rotate' : ''} /></button></div></article>; })}</div></section>

        <section className="experience-section section-grid" id="experience"><div className="section-label"><span>03</span><span>Experience</span></div><div className="experience-content"><div className="timeline-line" /><div className="experience-item"><span className="timeline-dot" /><div className="experience-header"><div><p className="eyebrow">Trident SQA · Chennai</p><h3>Software Developer (Full Stack)</h3></div><span>Aug 2021 — Present</span></div><p>Building scalable full-stack products across airline, financial, and e-commerce domains.</p><ul><li>Delivered 5+ enterprise projects across airline, financial, and e-commerce domains.</li><li>Improved system performance by 30–55% through scalable solutions.</li><li>Supported 10+ mission-critical applications and completed 25+ code reviews.</li><li>Mentored 5+ junior developers and led 4 technical workshops.</li><li>Contributed to approximately 20% improvement in team delivery efficiency.</li></ul></div></div></section>

        <section className="impact-section" id="achievements"><div className="section-grid"><div className="section-label"><span>04</span><span>Achievements</span></div><div className="impact-grid">{impact.map(([value, label]) => <div className="impact-tile" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div><div className="awards-row"><div className="award-card"><Award size={20} /><div><strong>Best Performer of the Quarter</strong><span>Trident SQA</span></div></div><div className="award-card"><Award size={20} /><div><strong>Center of Excellence Award</strong><span>Delivery, mentoring, production support, and AWS Lambda automation for GlobalX Airlines.</span></div></div></div></section>

        <section className="skills-section section-grid" id="skills"><div className="section-label"><span>05</span><span>Toolkit</span></div><div className="skills-content"><h2>The tools behind <span>the work.</span></h2><div className="skill-explorer"><div className="skill-tabs" role="tablist" aria-label="Skill categories">{skillGroups.map((group) => { const Icon = group.icon; const isActive = activeSkillGroup === group.label; return <button className={isActive ? 'skill-tab is-active' : 'skill-tab'} key={group.label} type="button" role="tab" aria-selected={isActive} onClick={() => setActiveSkillGroup(group.label)}><Icon size={15} />{group.label}</button>; })}</div>{skillGroups.filter((group) => group.label === activeSkillGroup).map((group) => <div className="skill-panel" key={group.label} role="tabpanel"><p>Technologies I use across production work and continuous learning.</p><div className="skills-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

        <section className="education-section section-grid"><div className="section-label"><span>06</span><span>Education</span></div><div className="education-card"><GraduationCap size={24} /><div><p className="eyebrow">2016 — 2020 · Score 85%</p><h3>B.E. Electronics and Communication Engineering</h3><p>Hindusthan College of Engineering and Technology, Coimbatore</p></div></div></section>

        <section className="contact-section" id="contact"><div className="contact-inner"><div className="contact-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Have a project in mind?</p><h2>Let’s build something <span>great.</span></h2><div className="contact-details"><a href="mailto:bavithra7241@gmail.com?subject=Portfolio%20enquiry"><Mail size={16} /> bavithra7241@gmail.com</a><a href="tel:+919344212555"><MapPin size={16} /> +91 9344212555</a><span><MapPin size={16} /> Chennai, India</span></div></div><form className="contact-form" onSubmit={handleContactSubmit}><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Subject<input name="subject" type="text" placeholder="How can I help?" required /></label><label>Message<textarea name="message" rows={4} placeholder="Tell me a little about your project..." required /></label><button className="button button-dark" type="submit">Open email draft <Send size={16} /></button><p className="form-help">If your email app does not open, <a href="mailto:bavithra7241@gmail.com?subject=Portfolio%20enquiry">email me directly</a>.</p>{formStatus && <p className="form-status" role="status">{formStatus}</p>}</form></div></section>
      </main>

      <footer className="footer"><span>© 2026 Bavithra Meena</span><span>Designed & built with intention.</span><div className="socials"><a href="https://linkedin.com/in/bavithra-v-09250a398" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/bavithrameena" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="mailto:bavithra7241@gmail.com" aria-label="Email"><Mail size={17} /></a></div></footer>
    </div>
  );
}

export default App;
