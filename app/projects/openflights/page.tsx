"use client";

import { motion } from "framer-motion";

export default function OpenFlightsPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 space-y-10">

      {/* Hero */}
      {/* Updated Hero Section for openflights/page.tsx */}
<header className="rounded-xl border border-gray-200 bg-[#111111] p-10 shadow-2xl overflow-hidden relative group">
  {/* Subtle "Status Bar" at the top */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500/20" />
  
  <div className="font-mono mb-4">
    <span className="text-purple-400">class</span>{" "}
    <span className="text-blue-400">OpenFlightsExplorer</span>{" "}
    <span className="text-zinc-500">{"{"}</span>
  </div>

  <h1 className="text-4xl font-bold text-white mb-4 pl-4 border-l-2 border-blue-500/50">
    OpenFlights Explorer
  </h1>

  <p className="text-lg text-zinc-400 max-w-3xl pl-4">
    A full-stack route exploration system built as a capstone in data
    structures, systems thinking, and AI-assisted development.
  </p>

  <div className="mt-8 flex flex-wrap gap-3 text-sm pl-4">
    <a
      href="https://capstoneprojectcis22c.fly.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500 transition-colors"
    >
      Run Live Demo
    </a>

    <a
      href="https://github.com/christinehatch/CapstoneProjectCIS22C"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md border border-zinc-700 px-4 py-2 font-medium text-zinc-300 hover:bg-zinc-800 transition-colors"
    >
      View Source
    </a>
  </div>
  
  <div className="mt-6 font-mono text-[10px] text-zinc-600 pl-4 uppercase tracking-widest">
    Status: <span className="text-green-500/80">Running (C++ Graph Engine v1.0)</span>
  </div>
</header>

      {/* Rail + Narrative */}
      <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-10">

        {/* Rail */}
        <aside className="hidden xl:block space-y-8 sticky top-24 self-start">

          {/* My Role */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              My Role
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>Defined what the system should do</li>
              <li>Specified how the system should behave</li>
              <li>Determined which data needed to be accessible — and when</li>
              <li>Designed required endpoints</li>
              <li>Shaped what users should understand as they explored</li>
            </ul>
          </div>

          <section className="rounded-lg border-l-4 border-gray-200 pl-4 py-3">

            {/* Key Insight */}

            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
              Guiding Principle
            </h3>

            <p className="text-sm italic text-gray-700">
              A solution can be technically correct and still be architecturally wrong.
            </p>

            <p className="mt-2 text-sm text-gray-600">
              This project focused on system shape, clarity, and long-term reasoning —
              not just producing working output.
            </p>
          </section>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Tech Stack
            </h3>

            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>C++ (custom HTTP server)</li>
              <li>Vanilla JavaScript</li>
              <li>Mapbox GL JS</li>
              <li>GeoJSON</li>
              <li>HTML-rendered + JSON APIs</li>
            </ul>
          </div>

          {/* System Characteristics */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
              System Characteristics
            </h3>

            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li>In-memory indexed graph</li>
              <li>Deterministic request handling</li>
              <li>No external framework dependencies</li>
              <li>Readable failure modes</li>
            </ul>
          </div>

         

        </aside>

        {/* Narrative */}
        <main className="space-y-6">

          {/* Project Context */}
          <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm scroll-mt-24">
            <h2 className="text-xl font-semibold mb-4">Project Context</h2>

            <div className="prose prose-zinc max-w-none">
              <p className="text-lg text-gray-700">
                This project was built as a capstone for De Anza College’s{" "}
                <strong>Data Structures and Algorithms Honors cohort</strong>.
              </p>

              <p>
                <strong>The goal wasn’t to produce the most code</strong>, but to
                explore a different way of building software — one that treats{" "}
                <strong>architecture, intent, and shared understanding</strong> as
                primary skills.
              </p>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Framing Question
              </p>
              <p>
                Rather than writing code by hand, students were asked to use AI to
                generate implementations.
              </p>

              <blockquote>
                <strong>The underlying question:</strong>
                <br />
                If English is becoming a kind of programming language, what does it
                mean to be a good builder in that world?
              </blockquote>

              <p>
                From my professor’s perspective, while traditional software
                engineering roles may evolve, the need for people who can{" "}
                <strong>reason about systems</strong>,{" "}
                <strong>align with domain experts</strong>, and{" "}
                <strong>guide complex projects</strong> will only increase.
              </p>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                AI & Human Responsibility
              </p>

              <p>
                <strong>AI generated every line of code you see.</strong> That part
                is true. But none of it would exist without sustained human
                direction.
              </p>

              <p>
                This project is less about code generation and more about{" "}
                <strong>system shaping</strong>.
              </p>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Shift in Approach
              </p>

              <p>
                Early on, my prompts were long and highly detailed as I worked to
                establish shared context and vocabulary. Over time, that
                relationship changed.
              </p>

              <p>I began to:</p>

              <ul className="my-4 space-y-1 list-disc pl-5 text-gray-700">
                <li>describe intent at a higher level</li>
                <li>ask the AI to propose approaches</li>
                <li>review and refine those proposals</li>
                <li>introduce explicit review loops</li>
              </ul>
              <p>
                At that point, the work became less about prompting and more about{" "}
                <strong>orchestration</strong>.
              </p>

              <p>
                AI will always produce something when given an ambiguous request.
                When intent is unclear, assumptions fill the gaps. Part of my role
                was noticing when those assumptions didn’t align with how I wanted
                the system to scale, feel, or integrate — and redirecting
                accordingly.
              </p>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Why This Mattered
              </p>

              <p>
                What made this project meaningful to me is that it was the{" "}
                <strong>first time something I built felt real</strong>.
              </p>

              <p>
                Instead of walking users through scripted console interactions, the
                system invites exploration. Users can start anywhere — an airport,
                an airline, or a route — and follow their curiosity.
              </p>

              <p>
                More importantly, it gave me confidence. This project showed me that{" "}
                <strong>
                  complex systems are understandable, navigable, and buildable
                </strong>{" "}
                — and that I am capable of shaping them.
              </p>

              <p>
                That realization directly influenced my decision to pursue larger,
                more ambitious projects afterward, including{" "}
                <strong>applyAI</strong>, <strong>letsA(ppl)I</strong>, and{" "}
                <strong>TrainMap</strong>.
              </p>

              <p>
                At the core of all of this is how I think about building. I care
                deeply about how technology feels to use and whether it earns a
                user’s trust.
              </p>
            </div>
          </section>

          {/* System Overview */}
          <section className="relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm scroll-mt-24">
            <div className="absolute left-0 top-8 h-[calc(100%-4rem)] w-1 rounded-full bg-gray-200" />

            <h2 className="text-xl font-semibold mb-4">System Overview</h2>

            <div className="prose prose-zinc max-w-none">
              <p className="text-lg text-gray-700">
                The OpenFlights Explorer is a full-stack, read-heavy system designed for
                interactive exploration over a static aviation dataset.
              </p>

              <p>
                It prioritizes <strong>clarity of behavior</strong>,{" "}
                <strong>deterministic data flow</strong>, and{" "}
                <strong>explicit system boundaries</strong> over framework abstraction.
              </p>

              {/* System Specs Table */}
              <section className="mt-12 rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                    Technical Specifications
                  </h3>
                </div>
                
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-gray-100 font-mono text-xs">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/50 w-1/3">DATASET_SCALE</td>
                      <td className="px-6 py-4 text-gray-600">67,663 global routes | 10,000+ airports</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/50">GRAPH_IMPLEMENTATION</td>
                      <td className="px-6 py-4 text-gray-600">Directed Adjacency List (C++ Vectors/Maps)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/50">AVG_QUERY_LATENCY</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">&lt; 1.0ms (In-Memory Processing)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/50">SERVER_ARCHITECTURE</td>
                      <td className="px-6 py-4 text-gray-600">Custom HTTP Socket Listener (Zero-Framework)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/50">VISUAL_ENGINE</td>
                      <td className="px-6 py-4 text-gray-600">Mapbox GL JS v3 (GeoJSON Tile Injection)</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                System Shape
              </p>
              <p>
                The system is intentionally structured as a single, coherent service rather
                than a collection of loosely coupled components. Its design emphasizes
                transparency and traceability, allowing system behavior to be understood
                without hidden layers or implicit conventions.
              </p>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Backend Architecture
              </p>
              <p>
                At its core, the system is built around a{" "}
                <strong>custom C++ HTTP server</strong> that loads the OpenFlights dataset
                into memory at startup. Rather than relying on external web frameworks,
                the server handles request parsing, routing, and response generation
                directly, keeping control flow explicit and easy to reason about.
              </p>

              <p>
                The backend constructs <strong>in-memory indexed graph structures</strong>{" "}
                over the dataset to support fast, targeted queries. Routes are grouped
                and accessed by airline, source airport, and destination airport,
                allowing the system to respond efficiently without repeated computation
                or database lookups.
              </p>

              {/* System Architecture Visualization */}
<figure className="my-10 rounded-xl border border-gray-100 bg-zinc-50/50 p-8 shadow-inner">
  <div className="mx-auto max-w-2xl p-8 bg-[#0a0a0a] rounded-lg border border-white/5 shadow-2xl flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] md:text-xs">
    <span className="px-3 py-1.5 bg-orange-500/10 rounded border border-orange-500/20 text-orange-400">RAW_CSVs</span>
    
    <span className="text-zinc-700">→</span>
    
    <motion.span 
      animate={{ 
        boxShadow: [
          "0 0 10px rgba(59, 130, 246, 0.2)", 
          "0 0 25px rgba(59, 130, 246, 0.5)", 
          "0 0 10px rgba(59, 130, 246, 0.2)"
        ] 
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="px-3 py-1.5 bg-blue-500/20 rounded border border-blue-400/50 text-blue-300 font-bold z-10"
    >
      C++_GRAPH_ENGINE
    </motion.span>
    
    <span className="text-zinc-700">→</span>
    
    <span className="px-3 py-1.5 bg-purple-500/10 rounded border border-purple-500/20 text-purple-400">JSON_ENDPOINT</span>
    
    <span className="text-zinc-700">→</span>
    
    <span className="px-3 py-1.5 bg-green-500/10 rounded border border-green-500/20 text-green-400">MAPBOX_UI</span>
  </div>
  <figcaption className="mt-6 text-center text-sm text-gray-500 font-mono italic">
    Fig 1. Deterministic data flow from OpenFlights CSVs to the interactive client.
  </figcaption>
</figure>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Data & Interfaces
              </p>

              <p>
                The same server exposes both <strong>human-readable HTML views</strong> and{" "}
                <strong>raw JSON APIs</strong>. This dual interface allows system behavior
                to be inspected at multiple levels — from interactive exploration to
                direct data access — without duplicating logic or introducing hidden
                transformation layers.
              </p>

              <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Frontend & Interaction Model
              </p>

              <p>
                On the frontend, the interface is intentionally built with{" "}
                <strong>vanilla JavaScript and Mapbox GL JS</strong>. Route data is
                transformed into GeoJSON and rendered directly onto an interactive map,
                keeping visual state tightly coupled to the underlying data model.
              </p>

              <p>
                Rather than guiding users through a fixed workflow, the system supports{" "}
                <strong>exploration from multiple entry points</strong>. Users can begin
                with an airport, an airline, or a route and follow their curiosity, with
                each interaction revealing concrete data rather than inferred meaning.
              </p>
            </div>
            <div className="my-8 rounded-lg border-l-4 border-gray-200 bg-gray-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Human Lens
              </p>
              <p className="text-sm text-gray-700">
              I wanted users to feel oriented, not guided.
              By keeping the interface closely tied to the data model, exploration become predictable and trustworthy. Each interaction reveals what the system knows —and nothing it doesn’t.
              </p>
            </div>
            {/* Terminal Reflection Block */}
<section className="mt-20 rounded-lg bg-[#0d0d0d] border border-zinc-800 shadow-2xl overflow-hidden font-mono">
  {/* Terminal Header */}
  <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-zinc-800">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
    </div>
    <span className="text-[10px] text-zinc-500 ml-2 uppercase tracking-widest">reflections.log</span>
  </div>

  {/* Terminal Body */}
  <div className="p-6 text-xs md:text-sm space-y-3 leading-relaxed">
    <div className="flex gap-3">
      <span className="text-zinc-600">[2026-01-31 02:46:17]</span>
      <span className="text-blue-400">INFO:</span>
      <span className="text-zinc-300">System orchestration complete. Intent verified.</span>
    </div>

    <div className="flex gap-3">
      <span className="text-zinc-600">[2026-01-31 02:46:18]</span>
      <span className="text-purple-400">META:</span>
      <p className="text-zinc-400">
        This project proved that complex systems are buildable when architecture is primary. 
        The C++ engine serves 67k routes with &lt;1ms latency—not because of luck, but because of 
        deterministic design choices.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-zinc-600">[2026-01-31 02:46:20]</span>
      <span className="text-orange-400">NOTE:</span>
      <span className="text-zinc-500 italic">
        "A solution can be technically correct and still be architecturally wrong."
      </span>
    </div>

    <div className="mt-4 flex gap-2 items-center">
      <span className="text-green-500">➜</span>
      <span className="text-zinc-300">Ready for next deployment:</span>
      <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">letsA(ppl)I</span>
      <span className="animate-pulse w-2 h-4 bg-blue-500" />
    </div>
  </div>
</section>
</section>

          {/* Remaining sections unchanged */}
          {/* Designing for Familiarity */}
          {/* System Overview */}
          {/* What I Learned */}

        </main>
      </div>
    </section>
  );
}
