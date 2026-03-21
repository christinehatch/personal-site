"use client";

import { motion } from "framer-motion";

export default function LetsAppliPage() {
  return (
    <section className="mx-auto max-w-[1400px] space-y-10 px-6">
        {/* Hero Header */}
        <header className="group relative overflow-hidden rounded-xl border border-gray-200 bg-[#0a0a0a] p-10 shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500/20" />

        <div className="mb-4 font-mono">
          <span className="text-purple-400">class</span>{" "}
          <span className="text-blue-400">letsA(ppl)I</span>{" "}
          <span className="text-zinc-500">extends</span>{" "}
          <span className="text-orange-400">applyAI</span>{" "}
          <span className="text-zinc-500">{"{"}</span>
        </div>

        <h1 className="mb-4 border-l-2 border-purple-500/50 pl-4 text-4xl font-bold text-white">
          letsA(ppl)I
        </h1>

        <p className="max-w-3xl pl-4 text-lg leading-relaxed text-zinc-400">
          A structured job discovery and navigation system designed to support
          deliberate, user-controlled exploration.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 pl-4 text-sm">
          <a
            href="#"
            className="rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-500"
          >
            Launch_System
          </a>
          <a
            href="https://github.com/christinehatch/letsappli"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-700 px-4 py-2 font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
          >
            View_Source
          </a>
        </div>

        <div className="mt-6 pl-4 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Status:{" "}
          <span className="text-green-500/80">Active (Phase_4_Persistence)</span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[260px_1fr]">
        {/* Rail (The "Specs" Column) */}
        <aside className="sticky top-24 hidden self-start space-y-8 xl:block">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Core Philosophy
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>No hidden transitions</li>
              <li>No automatic interpretation</li>
              <li>No mutation of upstream data</li>
              <li>Deterministic, consent-gated flow</li>
            </ul>
          </div>

          <section className="rounded-lg border-l-4 border-purple-200 py-3 pl-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Guiding Principle
            </h3>
            <p className="text-sm italic text-gray-700">
              "Trust is built by staying within clear, reliable boundaries."
            </p>
          </section>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              System Stack
            </h3>
            <ul className="list-inside list-disc space-y-1 font-mono text-sm text-gray-700">
              <li>Python (FastAPI)</li>
              <li>SQLite (WAL Mode)</li>
              <li>React + Vite</li>
              <li>Structured Interpretation Layer</li>
            </ul>
          </div>
        </aside>

        {/* Narrative (The Storytelling Column) */}
        <main className="space-y-6">
          <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Project Context</h2>
            <div className="prose prose-zinc max-w-none space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>letsA(ppl)I</strong> emerged as a natural extension of{" "}
                <strong>applyAI</strong>.
              </p>

              <p>
                While <strong>applyAI</strong> focuses on how a person thinks:
                their internal processes, goals, and patterns,{" "}
                <strong>letsA(ppl)I</strong> explores how those same signals
                interact with the external world of job search.
              </p>

              <p>The two systems are designed to inform each other:</p>

              <ul>
                <li>
                  <strong>applyAI</strong> helps a user understand themselves
                </li>
                <li>
                  <strong>letsA(ppl)I</strong> helps a user navigate
                  opportunities
                </li>
              </ul>

              <p>
                Together, they form a loop between reflection and action.
              </p>

              <p>
                This project began during an active job search, where the
                process itself became the problem to solve.
              </p>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Framing Question
                </span>
                <p>
                  Most job platforms are designed to show opportunities.
                </p>
                <p>
                  But what does it mean to actually help someone navigate a job
                  search?
                </p>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Core Belief
                </span>
                <p>
                  When I used existing tools, the experience followed a familiar
                  pattern:
                </p>
                <p>
                  Initial excitement -&gt; immediate friction.
                </p>
                <ul>
                  <li>Searching felt broad and imprecise.</li>
                  <li>Clicking into a role often meant losing your place.</li>
                  <li>
                    Applications were difficult to track across sessions,
                    emails, and platforms.
                  </li>
                </ul>
                <p>
                  Over time, the process became less about finding the right
                  role and more about managing the burden of searching,
                  applying, and remembering.
                </p>
                <p>
                  Most job platforms optimize for showing as many listings as
                  possible.
                </p>
                <p>
                  I do not think job search tools should optimize for volume,
                  visibility, or engagement.
                </p>
                <p>
                  I think they should optimize for whether a user can actually{" "}
                  <strong>move through and complete the process</strong>.
                </p>
                <p>I built letsA(ppl)I around a different model:</p>
                <p>
                  Instead of treating jobs like a feed, it treats them like a
                  pipeline.
                </p>
                <p>Users can:</p>
                <ul>
                  <li>collect roles intentionally</li>
                  <li>understand what each role actually expects</li>
                  <li>evaluate whether they truly want it</li>
                  <li>track their progress over time</li>
                </ul>
                <p>
                  The system is designed to reduce cognitive load, preserve
                  context, and support deliberate movement through the job
                  search process rather than passive scrolling.
                </p>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  System Philosophy
                </span>
                <p>
                  From the beginning, I made a set of explicit decisions about
                  what this system would not do.
                </p>
                <p>
                  I rejected hidden personalization.
                </p>
                <p>
                  The system does not silently rank, filter, or prioritize
                  roles on behalf of the user. There is no "we think you'll
                  like this." What you see is a direct result of your own inputs
                  and actions.
                </p>
                <p>
                  I also rejected prescriptive AI.
                </p>
                <p>
                  The system does not tell users what they should do to get a
                  job. It does not make promises about outcomes or suggest that
                  following a specific path will lead to success. That kind of
                  guidance often creates false confidence and ultimately erodes
                  trust.
                </p>
                <p>
                  Instead, the system is designed around a narrower, more honest
                  responsibility:
                </p>
                <p>It helps users orient themselves.</p>
                <p>In this context, orientation means:</p>
                <ul>
                  <li>understanding what a role actually expects</li>
                  <li>
                    understanding how their experience relates to those
                    expectations
                  </li>
                  <li>
                    finding the right language to describe themselves clearly
                  </li>
                </ul>
                <p>
                  Many people can easily describe the strengths of others but
                  struggle to articulate their own. Part of this system's role
                  is to surface and reframe what is already there, not to invent
                  or exaggerate, but to make it visible and usable.
                </p>
                <p>The goal is not to guarantee an outcome.</p>
                <p>
                  The goal is to reduce confusion, lower cognitive load, and
                  help users move through the process with more clarity and
                  confidence.
                </p>
                <p>
                  Trust is not built by doing more.
                </p>
                <p>
                  It is built by staying within clear, reliable boundaries.
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  System Overview
                </span>
                <p>
                  letsA(ppl)I is a structured job discovery and navigation
                  system designed to support deliberate, user-controlled
                  exploration.
                </p>
                <p>
                  Rather than acting as a recommendation engine or automation
                  tool, the system focuses on:
                </p>
                <ul>
                  <li>explicit user intent</li>
                  <li>deterministic data flow</li>
                  <li>clear separation between system responsibilities</li>
                </ul>
                <p>
                  Job search is treated as a sequence of phases, not a single
                  action.
                </p>
                <p>
                  Each phase produces a concrete artifact, and no phase executes
                  without user awareness or consent.
                </p>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  System Shape
                </span>
                <p>
                  The system is organized as a phase-based architecture, where
                  each stage operates independently and progresses only through
                  explicit user action.
                </p>
                <p>Key principles:</p>
                <ul>
                  <li>No hidden transitions</li>
                  <li>No automatic interpretation</li>
                  <li>No mutation of upstream data</li>
                </ul>
                <p>
                  Each phase produces a well-defined output that becomes the
                  input to the next.
                </p>
                <p>
                  Cohesion comes from clear boundaries, not from collapsing
                  everything into a single layer.
                </p>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Architecture - Phase Model
                </span>
                <p>
                  letsA(ppl)I is structured around four primary phases:
                </p>
                <p>
                  <strong>Phase 1 - Discovery</strong>
                </p>
                <ul>
                  <li>Collects job metadata from providers</li>
                  <li>Stores only surface-level fields: title, company, location, URL</li>
                  <li>No ranking or interpretation</li>
                </ul>
                <p>
                  <strong>Phase 2 - Hydration</strong>
                </p>
                <ul>
                  <li>Retrieves full job posting content</li>
                  <li>Preserves raw source data</li>
                  <li>No transformation or summarization</li>
                </ul>
                <p>
                  <strong>Phase 3 - Structured Interpretation (Consent-Gated)</strong>
                </p>
                <ul>
                  <li>Triggered only by explicit user action</li>
                  <li>Produces: role summary, explicit requirements, capability signals</li>
                  <li>Strictly descriptive: no advice, no predictions, no personalization</li>
                </ul>
                <p>
                  <strong>Phase 4 - User State &amp; Tracking</strong>
                </p>
                <ul>
                  <li>Tracks: saved, applied, progressed roles</li>
                  <li>Enables pipeline-style interaction: collect -&gt; review -&gt; act -&gt; track</li>
                </ul>
              </div>

              <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <div className="border-b border-gray-200 bg-zinc-50 px-6 py-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                    Technical_Specifications
                  </h3>
                </div>
                <table className="w-full border-collapse text-left">
                  <tbody className="divide-y divide-gray-100 font-mono text-xs">
                    <tr>
                      <td className="w-1/3 bg-zinc-50/50 px-6 py-4 font-semibold text-gray-900">
                        SYSTEM_TYPE
                      </td>
                      <td className="px-6 py-4 italic text-gray-600">
                        Phase-Based Web Application
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-zinc-50/50 px-6 py-4 font-semibold text-gray-900">
                        BACKEND
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        Python (FastAPI) + SQLite (WAL Mode)
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-zinc-50/50 px-6 py-4 font-semibold text-gray-900">
                        FRONTEND
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        React + Vite
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-zinc-50/50 px-6 py-4 font-semibold text-gray-900">
                        DATA_MODEL
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        Immutable Artifacts + Explicit State Transitions
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-zinc-50/50 px-6 py-4 font-semibold text-gray-900">
                        AI_USAGE
                      </td>
                      <td className="px-6 py-4 font-bold text-blue-600">
                        Structured Interpretation Only (No Autonomy)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* System Diagram Figure */}
              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  System Diagram
                </span>
              </div>
              <figure className="my-10 rounded-xl border border-zinc-100 bg-zinc-50/50 p-8 text-center shadow-inner">
                <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 rounded-lg bg-[#0a0a0a] p-6 font-mono text-[10px] md:text-xs">
                  <span className="text-zinc-500">EXTERNAL JOB SOURCES</span>
                  <span className="text-zinc-800">-&gt;</span>
                  <span className="text-blue-400">DISCOVERY (metadata only)</span>
                  <span className="text-zinc-800">-&gt;</span>
                  <span className="text-purple-400">HYDRATION (raw job posting)</span>
                  <span className="text-zinc-800">-&gt;</span>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="rounded border border-zinc-700 bg-zinc-800 px-2 py-1 font-bold text-white"
                  >
                    INTERPRETATION (user-triggered)
                  </motion.span>
                  <span className="text-zinc-800">-&gt;</span>
                  <span className="text-green-400">USER PIPELINE STATE</span>
                </div>
                <figcaption className="mt-4 font-mono text-xs italic text-zinc-400">
                  Fig 1. Deterministic, consent-gated progression from raw job
                  data to user-managed job search pipeline.
                </figcaption>
              </figure>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Data &amp; Interfaces
                </span>
                <p>
                  The system maintains strict separation between:
                </p>
                <ul>
                  <li>provider data</li>
                  <li>structured interpretation</li>
                  <li>user state</li>
                </ul>
                <p>Each layer is:</p>
                <ul>
                  <li>independently stored</li>
                  <li>immutable once written</li>
                  <li>explicitly referenced</li>
                </ul>
                <p>This allows:</p>
                <ul>
                  <li>traceability from output -&gt; source</li>
                  <li>predictable system behavior</li>
                  <li>safe iteration without side effects</li>
                </ul>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Frontend &amp; Interaction Model
                </span>
                <p>
                  The interface is built around pipeline-based navigation, not
                  infinite scroll.
                </p>
                <p>Users:</p>
                <ul>
                  <li>collect roles into a saved set</li>
                  <li>review them intentionally</li>
                  <li>trigger interpretation explicitly</li>
                  <li>track progress across stages</li>
                </ul>
                <p>The UI prioritizes:</p>
                <ul>
                  <li>continuity (no lost position)</li>
                  <li>clarity of action</li>
                  <li>visible system state</li>
                </ul>
                <p>
                  Rather than guiding users through a fixed flow, the system
                  supports self-directed progression.
                </p>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Shift in Approach
                </span>
                <p>
                  One of the biggest changes during this project was how I think
                  about building systems.
                </p>
                <p>
                  Before this, I struggled to understand how a project could be
                  divided into separate parts while still feeling cohesive. I
                  assumed that maintaining consistency required keeping
                  everything tightly controlled.
                </p>
                <p>
                  As the system grew, that perspective changed.
                </p>
                <p>
                  letsA(ppl)I is built around distinct phases with clear
                  boundaries. Each part operates independently, yet contributes
                  to a unified experience.
                </p>
                <p>I began to understand that:</p>
                <p>
                  Cohesion does not come from keeping everything together.
                </p>
                <p>
                  It comes from <strong>defining how things fit together</strong>.
                </p>
                <p>
                  This also changed how I think about collaboration.
                </p>
                <p>
                  With clear system boundaries and shared goals, multiple people
                  can contribute without introducing inconsistency. Structure
                  makes collaboration possible.
                </p>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Why This Mattered
                </span>
                <p>
                  This project changed how I think about evolving a system.
                </p>
                <p>
                  Early on, it was easy to add features by reshaping what
                  already existed. But as complexity increased, small changes
                  began to introduce unintended side effects.
                </p>
                <p>Over time, my prompts became:</p>
                <p>"without touching anything else"</p>
                <p>
                  That constraint became a principle.
                </p>
                <p>
                  New features were no longer allowed to reshape the system.
                  They had to fit within it.
                </p>
                <p>This reinforced a deeper idea:</p>
                <p>
                  A system should not constantly adapt to every new idea.
                </p>
                <p>
                  It should be stable enough that new ideas must prove they
                  belong.
                </p>
                <p>
                  That shift made the system more predictable, more
                  understandable, and more trustworthy.
                </p>
                <p>
                  It also changed how I see my role as a builder.
                </p>
                <p>I am not just creating features.</p>
                <p>
                  I am protecting the integrity of the system as it grows.
                </p>
              </div>

              <div className="space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Human Lens
                </span>
                <p>I wanted this system to feel trustworthy.</p>
                <p>
                  Not because it does more, but because it does exactly what it
                  says it does: nothing hidden, nothing implied.
                </p>
                <p>Every action has a visible cause.</p>
                <p>Every output can be traced back to its source.</p>
                <p>
                  Instead of trying to anticipate what the user wants, the
                  system waits.
                </p>
                <p>
                  It responds when asked, and only within clearly defined
                  boundaries.
                </p>
                <p>The goal is not to automate the process.</p>
                <p>The goal is to make it understandable.</p>
              </div>
            </div>
          </section>

          {/* Signature Terminal Footer */}
          <section className="mt-20 overflow-hidden rounded-lg border border-zinc-800 bg-[#0d0d0d] font-mono shadow-2xl">
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#1a1a1a] px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <span className="ml-2 text-[10px] uppercase tracking-widest text-zinc-500">
                audit.log
              </span>
            </div>
            <div className="space-y-3 p-6 text-xs leading-relaxed md:text-sm">
              <div className="flex gap-3">
                <span className="text-zinc-600">[2026-03-19]</span>
                <span className="text-blue-400">INFO:</span>
                <span className="text-zinc-300">
                  System boundaries stable. Phase model aligned with user intent.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-600">[META]:</span>
                <p className="text-zinc-400">
                  This system is not about doing more. It is about doing
                  exactly what it says. Every action has a visible cause. Every
                  output can be traced back to its source.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-green-500">&gt;</span>
                <span className="font-bold text-zinc-300">
                  Intent clarified. System understandable.
                </span>
                <span className="h-4 w-2 animate-pulse bg-purple-500" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
