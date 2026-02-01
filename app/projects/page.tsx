export default function ProjectsPage() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-4">
        {/* Page intro */}
        <p className="text-gray-600">
          Case studies and explorations.
        </p>

        {/* Project card */}
        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            <a href="/projects/openflights" className="hover:underline">
              OpenFlights Explorer
            </a>
          </h2>

          <p className="mt-2 text-gray-700">
            A full-stack, interactive route exploration system built as a
            capstone in data structures, systems thinking, and AI-assisted
            development.
          </p>

          <div className="mt-4 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              TL;DR
            </span>
            <p className="text-gray-600">
              I build systems that make sense to people. OpenFlights Explorer is
              a full-stack, interactive route exploration system built as a
              capstone for De Anza College’s Data Structures & Algorithms Honors
              cohort. Every line of code was generated with AI, but the system
              itself was architected, directed, and verified by me—from data
              structures and request flow to user experience and correctness.
              The project explores AI-assisted development, systems thinking,
              and trust-driven design through a real, usable product that
              invites exploration rather than instruction.
            </p>
          </div>
        </article>

        <p className="text-sm text-gray-500">
          More projects coming.
        </p>
      </div>
    </section>
  );
}
