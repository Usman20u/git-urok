const features = [
  {
    title: "AI Systems",
    description: "Smart automation and intelligent workflows",
  },
  {
    title: "Analytics",
    description: "Data-driven insights for better decisions",
  },
  {
    title: "Future Products",
    description: "Scalable concepts for tomorrow",
  },
];

const projects = [
  {
    title: "Architect Pilot",
    description: "AI-assisted concept validation for early product ideas",
    status: "In Progress",
  },
  {
    title: "Vision Flow",
    description: "Analytics dashboard for operational decision systems",
    status: "Prototype",
  },
  {
    title: "Future Stack",
    description: "Modular architecture for scalable AI products",
    status: "Research",
  },
];

const insights = [
  {
    title: "Purposeful AI",
    description:
      "Effective AI products are built around clear decisions, practical workflows, and trustworthy outcomes.",
  },
  {
    title: "Product strategy",
    description:
      "Strong systems connect experimentation with product strategy so ideas can grow into measurable business value.",
  },
  {
    title: "Scalable architecture",
    description:
      "Thoughtful architecture helps prototypes evolve into scalable platforms for analytics, automation, and growth.",
  },
];

const cardShell =
  "group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_28px_90px_rgba(59,130,246,0.18)]";

const sectionHeading =
  "mt-4 text-[2.65rem] font-bold tracking-tight text-white sm:text-[3.35rem]";

const fadeUp = "translate-y-0 opacity-100 transition-all duration-300 ease-out";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(139,92,246,0.18),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.12),transparent_30%),linear-gradient(180deg,#050816_0%,#070b1d_55%,#050816_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />
      <div className="absolute left-1/2 top-24 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute left-[-6rem] bottom-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 backdrop-blur-xl">
          <div className="text-sm font-medium tracking-[0.2em] text-zinc-200 uppercase">
            YOUR NEW PROJECT NAME
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition-colors duration-300 hover:text-white">
              About
            </a>
            <a
              href="#features"
              className="transition-colors duration-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#insights"
              className="transition-colors duration-300 hover:text-white"
            >
              Insights
            </a>
          </nav>
        </header>

        <section
          className={`relative flex min-h-[84vh] flex-col items-center justify-center py-32 text-center sm:py-40 ${fadeUp}`}
        >
          <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_55%)] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-[38rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_60%)] blur-3xl" />
          <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1 text-xs font-medium tracking-[0.28em] text-zinc-400 uppercase backdrop-blur-xl">
            Premium AI Systems
          </div>
          <h1 className="mt-8 max-w-5xl text-6xl font-bold tracking-[-0.05em] text-white sm:text-7xl lg:text-[6.6rem] lg:leading-[0.92]">
            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              YOUR NEW PROJECT NAME
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Building intelligent systems, analytics, and future-ready solutions
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-w-40 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(59,130,246,0.28)] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_18px_56px_rgba(99,102,241,0.42)]"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex min-w-40 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.03] hover:border-white/25 hover:bg-white/[0.1]"
            >
              View Projects
            </a>
          </div>

          <div className="mt-20 grid w-full max-w-5xl gap-5 sm:grid-cols-3">
            <div className={cardShell}>
              <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.16),transparent_35%,transparent_70%,rgba(139,92,246,0.14))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
              <div className="relative">
                <p className="text-sm text-zinc-400">Focus</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Intelligent systems
                </p>
              </div>
            </div>
            <div className={cardShell}>
              <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.16),transparent_35%,transparent_70%,rgba(139,92,246,0.14))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
              <div className="relative">
                <p className="text-sm text-zinc-400">Approach</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Analytics + architecture
                </p>
              </div>
            </div>
            <div className={cardShell}>
              <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.16),transparent_35%,transparent_70%,rgba(139,92,246,0.14))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
              <div className="relative">
                <p className="text-sm text-zinc-400">Outcome</p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Future-ready products
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`relative py-28 sm:py-32 ${fadeUp}`}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          <div className="absolute left-0 top-12 h-40 w-40 rounded-full bg-violet-500/8 blur-3xl" />
          <div className="rounded-[2rem] bg-white/[0.025]">
            <div className="grid gap-10 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.012))] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="px-1">
                <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">
                  About the project
                </p>
                <h2 className={sectionHeading}>
                  Building ideas into structured AI systems
                </h2>
              </div>
              <div className={cardShell}>
                <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_30%,transparent_70%,rgba(99,102,241,0.14))] opacity-80" />
                <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
                <p className="relative max-w-xl text-base leading-8 text-zinc-300">
                  AI Vision Studio explores intelligent systems through
                  analytics, technical architecture, and disciplined product
                  thinking. The goal is to turn ambitious concepts into clear,
                  practical solutions designed for long-term scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className={`relative py-28 sm:py-32 ${fadeUp}`}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
          <div className="absolute right-0 top-12 h-44 w-44 rounded-full bg-cyan-400/8 blur-3xl" />
          <div className="rounded-[2rem] bg-white/[0.038]">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">
                Features
              </p>
              <h2 className={sectionHeading}>
                Core capabilities designed for modern AI work
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className={cardShell}>
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.16),transparent_35%,transparent_70%,rgba(139,92,246,0.14))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
                  <div className="relative">
                    <div className="h-11 w-11 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-violet-400/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`relative py-28 sm:py-32 ${fadeUp}`}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
          <div className="absolute left-0 top-14 h-44 w-44 rounded-full bg-violet-500/8 blur-3xl" />
          <div className="rounded-[2rem] bg-white/[0.022]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">
                  Projects
                </p>
                <h2 className={sectionHeading}>Real concepts taking shape</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-zinc-400">
                A small portfolio of concepts focused on decision systems,
                product exploration, and scalable AI architecture.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className={cardShell}>
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(99,102,241,0.16),transparent_35%,transparent_70%,rgba(168,85,247,0.14))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className={`relative py-28 sm:py-32 ${fadeUp}`}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
          <div className="absolute right-0 top-14 h-44 w-44 rounded-full bg-blue-500/8 blur-3xl" />
          <div className="rounded-[2rem] bg-white/[0.038]">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">
                Insights
              </p>
              <h2 className={sectionHeading}>
                Thoughts on building serious AI products
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {insights.map((item) => (
                <article key={item.title} className={cardShell}>
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.16),transparent_35%,transparent_70%,rgba(139,92,246,0.14))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-px rounded-[1.7rem] border border-white/5" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`relative py-28 sm:py-32 ${fadeUp}`}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          <div className="absolute left-1/2 top-10 h-40 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-8 py-16 text-center backdrop-blur-xl transition-all duration-300 ease-out hover:border-white/15 hover:shadow-[0_28px_90px_rgba(99,102,241,0.16)] sm:px-12">
            <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">
              Start building
            </p>
            <h2 className={sectionHeading}>Ready to build something serious?</h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-zinc-400">
              Let&apos;s turn ideas into intelligent products with the right
              mix of strategy, architecture, and execution.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex min-w-52 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(59,130,246,0.28)] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_18px_56px_rgba(99,102,241,0.42)]"
            >
              Contact / Start Building
            </a>
          </div>
        </section>

        <footer className={`relative py-10 ${fadeUp}`}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-white">YOUR NEW PROJECT NAME</p>
            <p className="max-w-xl text-sm text-zinc-500">
              Intelligent systems, analytics, and future-ready product thinking.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
