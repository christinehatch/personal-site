const projects = [
  {
    id: "openflights",
    title: "OpenFlights Explorer",
    description:
      "A full-stack, interactive route exploration system built as a capstone in data structures, systems thinking, and AI-assisted development.",
    href: "/projects/openflights",
    details:
      "I build systems that make sense to people. OpenFlights Explorer is a full-stack, interactive route exploration system built as a capstone for De Anza College's Data Structures & Algorithms Honors cohort. Every line of code was generated with AI, but the system itself was architected, directed, and verified by me-from data structures and request flow to user experience and correctness. The project explores AI-assisted development, systems thinking, and trust-driven design through a real, usable product that invites exploration rather than instruction.",
  },
  {
    id: "letsappli",
    title: "letsA(ppl)I",
    subtitle: "Multi-Phase AI Orchestration System",
    tech: ["Python", "Flask", "TypeScript", "LLM Adapters"],
    description:
      "A career exploration tool that uses deterministic pipelines and language guardrails to interpret job market data with high integrity.",
    href: "/projects/letsappli",
    image: "/projects/letsappli-thumb.png",
  },
] as const;

export default function ProjectsPage() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-4">
        {/* Page intro */}
        <p className="text-gray-600">
          Case studies and explorations.
        </p>

        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              <a href={project.href} className="hover:underline">
                {project.title}
              </a>
            </h2>

            {"subtitle" in project ? (
              <p className="mt-1 text-sm font-medium text-gray-500">
                {project.subtitle}
              </p>
            ) : null}

            <p className="mt-2 text-gray-700">{project.description}</p>

            {"tech" in project ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}

            {"details" in project ? (
              <div className="mt-4 space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  TL;DR
                </span>
                <p className="text-gray-600">{project.details}</p>
              </div>
            ) : null}
          </article>
        ))}

        <p className="text-sm text-gray-500">
          More projects coming.
        </p>
      </div>
    </section>
  );
}
