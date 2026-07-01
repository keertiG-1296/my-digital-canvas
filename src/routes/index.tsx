import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Palette,
  Database,
  Sparkles,
  Briefcase,
  GraduationCap,
  Rocket,
  MapPin,
  ExternalLink,
} from "lucide-react";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Keerti Gadigeppagoudar — Backend Developer & AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Keerti Gadigeppagoudar, a backend and ML engineer building scalable APIs, deep learning pipelines, and computer vision systems with Python, Django, FastAPI, and PyTorch.",
      },
    ],
  }),
});

const skills = [
  { name: "Python", icon: Code2 },
  { name: "Django & FastAPI", icon: Code2 },
  { name: "REST APIs", icon: Database },
  { name: "PyTorch & OpenCV", icon: Sparkles },
  { name: "scikit-learn", icon: Sparkles },
  { name: "MySQL & SQLite", icon: Database },
  { name: "AWS & GCP", icon: Database },
  { name: "Git & pytest", icon: Code2 },
];

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Sarva Suvidhaen Pvt Ltd",
    period: "Aug 2025 – Nov 2025",
    desc: "Built and tested production REST APIs using Python and Django across multiple modules — attendance, journey reports, passenger feedback, and more. Wrote unit and integration tests, maintained Swagger/OpenAPI docs, handled cloud data operations on AWS and GCP, and contributed via GitHub pull requests in a team Agile workflow.",
    icon: Briefcase,
  },
];

const education = [
  {
    degree: "B.E. in Electronics and Communication Engineering",
    institution: "Jain College of Engineering and Technology (VTU)",
    period: "2022 — 2026",
    result: "CGPA: 8.21 / 10",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary — Science (PCMS)",
    institution: "Vidyaniketan PU Science College",
    period: "2020 — 2022",
    result: "85.33%",
    icon: GraduationCap,
  },
  {
    degree: "Secondary School",
    institution: "M.R Sakhare English Medium School",
    period: "2010 — 2020",
    result: "87.84%",
    icon: GraduationCap,
  },
];

const projects = [
  {
    title: "Metal Surface Defect Detection",
    tag: "Computer Vision / ML",
    desc: "Two-phase transfer learning CNN pipeline that classifies 6 types of metal surface defects with 99% test accuracy on the NEU benchmark dataset.",
    stack: ["Python", "PyTorch", "OpenCV", "scikit-learn"],
    github: "https://github.com/keertiG-1296/metal-detection-system",
    demo: "",
  },
  {
    title: "MarketMate",
    tag: "Backend / API",
    desc: "Scalable vendor marketplace backend with role-based JWT authentication, optimized SQL workflows, and zero privilege escalation under load testing.",
    stack: ["FastAPI", "MySQL", "JWT", "Python"],
    github: "https://github.com/keertiG-1296",
    demo: "",
  },
  {
    title: "Smart Traffic Light Controller",
    tag: "Computer Vision",
    desc: "Real-time vehicle detection and adaptive signal control system using YOLOv3 inference pipeline, achieving 40% reduction in simulated vehicle wait time.",
    stack: ["Python", "YOLOv3", "OpenCV"],
    github: "https://github.com/keertiG-1296/Traffic-Controller",
    demo: "",
  },
];

function Index() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display font-bold text-lg tracking-tight">
            Keerti<span className="text-gradient"> G</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#education" className="hover:text-foreground transition-colors">Education</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          </div>
          
           <a href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
          >
            Contact <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 grid md:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Keerti</span>.
              <br />
              I build scalable backends & ML systems.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Backend engineer & ML enthusiast crafting production-grade APIs, deep learning pipelines, and computer vision systems with Python, Django, FastAPI, and PyTorch.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              
               <a href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition glow"
              >
                See my work <ArrowUpRight className="h-4 w-4" />
              </a>
              
                <a href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary/50 transition"
              >
                Get in touch
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <MapPin className="h-4 w-4" /> Based in Bengaluru, Karnataka — open to remote & relocation
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 blur-3xl opacity-60 pointer-events-none"
                 style={{ background: "var(--gradient-text)" }} />
            <div className="relative w-72 md:w-[26rem] aspect-square rounded-full overflow-hidden border border-primary/30 bg-card/40 backdrop-blur glow">
              <img
                src={portrait}
                alt="Portrait of Keerti Gadigeppagoudar"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="01 — About" title="A little about me" />
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-muted-foreground leading-relaxed">
          <p className="md:col-span-2 text-lg text-foreground/90">
           Technical and detail-oriented graduate with hands-on experience in <span className="text-primary">Python, Django, FastAPI,</span> and REST APIs. I've built and deployed real-world ML pipelines — including a metal defect detection system achieving <span className="text-primary">99% accuracy</span> — and I care deeply about writing clean, tested, production-ready code.
          </p>
          <div className="space-y-4 text-sm">
            <Stat value="99%" label="Defect detection accuracy" />
            <Stat value="3+" label="Backend projects shipped" />
            <Stat value="8.1" label="CGPA at VTU" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="02 — Experience" title="Where I've been" />
        <div className="mt-12 space-y-4">
          {experience.map((e) => (
            <div key={e.role} className="card-elevated rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
              <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <e.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <p className="text-primary text-sm font-medium mt-1">{e.company}</p>
                <p className="text-muted-foreground text-sm mt-2 max-w-2xl">{e.desc}</p>
              </div>
              <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{e.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="03 — Education" title="What I've studied" />
        <div className="mt-14 relative">
          <div
            className="absolute left-[88px] md:left-[120px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, var(--color-accent), transparent)" }}
            aria-hidden
          />
          <ol className="space-y-10">
            {education.map((e) => (
              <li key={e.institution} className="grid grid-cols-[80px_auto_1fr] md:grid-cols-[112px_auto_1fr] gap-4 md:gap-8 items-start">
                <div className="text-right pt-1">
                  <span className="font-mono text-sm md:text-base font-semibold text-gradient">
                    {e.period}
                  </span>
                </div>
                <div className="relative flex justify-center pt-1">
                  <div className="h-4 w-4 rounded-full bg-accent ring-4 ring-accent/20 z-10 glow-pink" />
                </div>
                <div className="card-elevated rounded-2xl p-5 md:p-6 -mt-1">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                      <e.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">{e.degree}</h3>
                      <p className="text-accent text-sm font-medium">{e.institution}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">{e.result}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="04 — Projects" title="Selected work" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card-elevated rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-accent font-mono">{p.tag}</span>
                <div className="flex items-center gap-2">
                  
                    <a href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {p.demo && (
                    
                     <a href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs rounded-full border border-border bg-secondary px-2.5 py-1 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/60 text-sm">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition">
                  <Github className="h-4 w-4" /> Code
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition ml-auto">
                    Live demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="05 — Skills" title="My toolkit" />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="card-elevated rounded-xl p-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-sm">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="card-elevated rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none"
               style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's build something <span className="text-gradient">brilliant</span>.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Open to backend and ML engineering roles. Have a project or opportunity? My inbox is always open.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:keerti.s.g2020@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition glow">
                <Mail className="h-4 w-4" /> keerti.s.g2020@gmail.com
              </a>
              <a href="https://github.com/keertiG-1296" target="_blank" rel="noreferrer" aria-label="GitHub" className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/keertig" aria-label="LinkedIn" className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Keerti Gadigeppagoudar. 
      </footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-2xl font-bold text-gradient font-display">{value}</span>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
