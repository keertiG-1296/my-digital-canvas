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
} from "lucide-react";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aria Sharma — Frontend Developer & UI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Aria Sharma, a frontend developer crafting fast, accessible, beautifully designed web experiences.",
      },
    ],
  }),
});

const skills = [
  { name: "React & Next.js", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "UI / UX Design", icon: Palette },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Node & APIs", icon: Database },
  { name: "Framer Motion", icon: Sparkles },
  { name: "PostgreSQL", icon: Database },
  { name: "Figma", icon: Palette },
];

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Lumen Labs",
    period: "2023 — Present",
    desc: "Leading the design system and shipping product features used by 200k+ users monthly.",
    icon: Briefcase,
  },
  {
    role: "Frontend Engineer",
    company: "Pixelforge Studio",
    period: "2021 — 2023",
    desc: "Built marketing sites and dashboards for early-stage startups across fintech and SaaS.",
    icon: Rocket,
  },
];

const education = [
  {
    role: "B.Tech, Computer Science",
    company: "NIT Surathkal",
    period: "2017 — 2021",
    desc: "Graduated with honors. Founded the campus design club and led 12 hackathon teams.",
    icon: GraduationCap,
  },
  {
    role: "Higher Secondary, Science",
    company: "Delhi Public School",
    period: "2015 — 2017",
    desc: "Top 1% in board exams. National finalist in the CBSE coding olympiad.",
    icon: GraduationCap,
  },
];

const projects = [
  {
    title: "Nimbus Analytics",
    tag: "SaaS Dashboard",
    desc: "Real-time analytics platform with custom chart engine and collaborative reports.",
    stack: ["Next.js", "tRPC", "D3"],
  },
  {
    title: "Hue — Color Tools",
    tag: "Design Utility",
    desc: "An OKLCH-first color palette generator loved by 8k+ designers worldwide.",
    stack: ["React", "Canvas", "OKLCH"],
  },
  {
    title: "Quill CMS",
    tag: "Open Source",
    desc: "Headless CMS with a delightful editor experience and granular permissions.",
    stack: ["TypeScript", "Postgres", "Prisma"],
  },
];

function Index() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display font-bold text-lg tracking-tight">
            aria<span className="text-gradient">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          </div>
          <a
            href="#contact"
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
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Aria</span>.
              <br />
              I build delightful interfaces.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Frontend developer & UI engineer crafting fast, accessible, beautifully animated web experiences for ambitious teams.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition glow"
              >
                See my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary/50 transition"
              >
                Get in touch
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <MapPin className="h-4 w-4" /> Based in Bangalore, India
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 blur-3xl opacity-60 pointer-events-none"
                 style={{ background: "var(--gradient-text)" }} />
            <div className="relative w-72 md:w-[26rem] aspect-square rounded-full overflow-hidden border border-primary/30 bg-card/40 backdrop-blur glow">
              <img
                src={portrait}
                alt="Illustrated portrait of Aria, smiling and wearing round glasses"
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
            I'm a frontend developer with <span className="text-primary">5+ years</span> of experience turning fuzzy ideas into polished products. I care deeply about typography, motion, performance, and the small details that make software feel alive.
          </p>
          <div className="space-y-4 text-sm">
            <Stat value="50+" label="Projects shipped" />
            <Stat value="8k+" label="Designers using my tools" />
            <Stat value="5y" label="Building for the web" />
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
        <div className="mt-12 space-y-4">
          {education.map((e) => (
            <div key={e.role} className="card-elevated rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
              <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <e.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <p className="text-accent text-sm font-medium mt-1">{e.company}</p>
                <p className="text-muted-foreground text-sm mt-2 max-w-2xl">{e.desc}</p>
              </div>
              <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{e.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="04 — Projects" title="Selected work" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card-elevated rounded-2xl p-6 group cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-accent font-mono">{p.tag}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs rounded-full border border-border bg-secondary px-2.5 py-1 text-muted-foreground">
                    {s}
                  </span>
                ))}
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
              Have a project in mind, or just want to say hi? My inbox is always open.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:hello@aria.dev" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition glow">
                <Mail className="h-4 w-4" /> hello@aria.dev
              </a>
              <a href="#" aria-label="GitHub" className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aria Sharma. Crafted with care.
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
