"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Explicitly define the transcript type to fix the 'any' errors
interface TranscriptItem {
  category: string;
  q: string;
  a: string;
}

const transcript: TranscriptItem[] = [
  {
    category: "01_LEARNING",
    q: "How do you start a project?",
    a: "I don’t start by asking AI to build something for me. I start by talking through what I’m thinking — what the project is meant to accomplish, what constraints matter, and how I want people to feel when they use it.\n\nI ask AI to ask me clarifying questions so I can surface gaps in my own thinking and tighten the scope before any implementation begins. Only after alignment is clear do I move on to writing a prompt for a first, intentionally small step.\n\nFor me, AI is most useful early on as a way to externalize intent and reduce ambiguity — not as a shortcut to finished output."
  },
  {
    category: "02_DECISION_MAKING",
    q: "What do you do when the right solution isn’t obvious?",
    a: "I usually start with the end user and work backwards. When a problem feels hard, it’s often because an easy technical solution conflicts with the actual experience I want someone to have.\n\nIn the case of letsA(ppl)I, I knew I didn’t want to put the burden on users to manually search for jobs just so an AI system could evaluate them afterward. I also knew that scraping gated content or doing something unreliable wasn’t acceptable. Those constraints ruled out many obvious approaches, but they clarified what couldn’t be compromised.\n\nWhen I get stuck, I use AI as a sounding board to generate options — not to pick one for me. I push on those options until they either violate user trust, increase cognitive load, or drift from the original intent."
  },
  {
    category: "03_WORKING_WITH_AI",
    q: "How do you work with AI without giving up authorship?",
    a: "I treat AI as a collaborator that helps me reason, not as an authority that decides. I’m careful about the scope of what I ask for and explicit about what I want it not to do.\n\nI often use AI to help me recover fluency in a system — for example, when building this site from scratch instead of using a template. That process let me move from vague recollection, to diagnosing issues, to making changes independently. The value wasn’t speed; it was regaining control over the system and the outcome."
  },
  {
    category: "04_VERIFICATION",
    q: "How do you decide whether to trust or challenge AI output?",
    a: "I can usually tell quickly when AI is filling gaps with assumptions. When that happens, I don’t argue in isolation — I return to earlier conversations that contain more context and reintroduce my documentation, constraints, and checklists.\n\nI ask the system to pressure-test the new idea against the original goals rather than expanding on it. Sometimes that means explicitly asking whether a path forward is legitimate or pointing out where I think alignment might be breaking down."
  },
  {
    category: "05_DEPLOYMENT",
    q: "How do you know when something is ready for deployment?",
    a: "I don’t measure readiness by how much functionality a system has—I measure it by whether the original promises have been kept.\n\nSomething feels ready to deploy when the core intent is met and the user experience reflects what I set out to build. I want to be confident that I haven’t quietly compromised usability, clarity, or trust just to get something ‘done.’\n\nBefore I consider something ready, I walk back through the original goals and constraints and ask whether the system behaves the way I expected it to—not just technically, but experientially. Do users feel oriented? Do the tradeoffs make sense? Are there failure cases I can explain?\n\nI’m comfortable shipping work that isn’t finished, but I’m not comfortable shipping work that misrepresents itself. Deployment means the system is honest about what it does, how it behaves, and what comes next."
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Cross-fade thresholds
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <main ref={containerRef} className="relative bg-[#fafafa] font-sans selection:bg-blue-100">
      
      {/* 1. THE SYSTEM MANIFEST (Intro) */}
      <motion.section 
        style={{ opacity: introOpacity, scale: introScale }}
        className="sticky top-0 h-screen flex flex-col justify-center px-6 mx-auto max-w-5xl z-10 pointer-events-none"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-500 mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          SYSTEM_MANIFEST // ABOUT_ME
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-zinc-900 leading-[1.05] mb-8">
          Documenting the <br /> 
          <span className="text-zinc-400 font-light italic">Orchestration Process.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-3xl leading-relaxed border-l border-zinc-200 pl-8">
          This page documents how I think about building software—a curated transcript of intent, 
          uncertainty, and the process of working with AI.
        </p>
        
        <div className="mt-20 flex items-center gap-6">
          <div className="w-px h-16 bg-zinc-200 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-full bg-blue-500"
            />
          </div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            Scroll_To_Enter_Transcript
          </span>
        </div>
      </motion.section>

      {/* 2. THE RECORDED STEPS */}
      <div className="relative z-20 px-6 pb-40">
        {transcript.map((item, i) => (
          <section key={i} className="min-h-screen relative flex flex-col justify-center py-20">
            <div className="sticky top-[20%] h-fit max-w-6xl mx-auto w-full bg-white/70 backdrop-blur-xl p-12 md:p-20 rounded-2xl border border-zinc-100 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20 items-start">
                
                {/* Meta Column */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-10%", once: true }}
                  className="space-y-4"
                >
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    REF_{item.category}
                  </span>
                  <div className="text-6xl font-bold text-zinc-100 font-mono">
                    0{i + 1}
                  </div>
                </motion.div>

                {/* Content Column */}
                <div className="space-y-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-10%", once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight"
                  >
                    {item.q}
                  </motion.h2>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-15%", once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="prose prose-zinc prose-xl lg:prose-2xl max-w-none"
                  >
                    <p className="text-zinc-500 font-light leading-relaxed whitespace-pre-wrap">
                      {item.a}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. IDENTITY & CONNECTION (Fixes the Spacing/Overlook Issue) */}
      <section className="relative z-30 bg-[#0a0a0a] text-white py-60 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 space-y-6 text-center">
            <div className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.4em]">Final_Verification // SUCCESS</div>
            <h2 className="text-5xl md:text-7xl font-light text-zinc-400 leading-tight">
              Intent clarified. Ready for <br />
              <span className="text-white font-bold underline decoration-blue-500 decoration-4 underline-offset-[12px]">deployment.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-24 items-center border-t border-zinc-800 pt-32">
            {/* The Photo Frame */}
            <div className="relative aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center group shadow-2xl">
                <span className="font-mono text-[10px] text-zinc-600 uppercase group-hover:text-blue-500 transition-colors">Identity_Verified</span>
                {/* <img src="/portrait.jpg" className="absolute inset-0 object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100" /> */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
            </div>

            {/* The Endpoints */}
            <div className="space-y-16">
              <div className="space-y-6">
                <h3 className="text-xs font-mono text-blue-500 uppercase tracking-widest">Connection_Endpoints</h3>
                <p className="text-3xl md:text-4xl font-light text-zinc-400 leading-snug">
                  I’m currently focused on <span className="text-white italic font-normal">letsA(ppl)I</span> in Campbell, CA. 
                  Building for the future of democratic AI orchestration.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-12 gap-x-16 pt-12 border-t border-zinc-800">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email</span>
                  <a href="mailto:christineryan93@icloud.com" className="block text-lg hover:text-blue-400 transition-colors font-light">christineryan93@icloud.com</a>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">GitHub</span>
                  <a href="https://github.com/christinehatch" className="block text-lg hover:text-blue-400 transition-colors font-light">/christinehatch</a>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/christineryan93/" className="block text-lg hover:text-blue-400 transition-colors font-light">/in/christineryan93/</a>
                </div>
                <div className="space-y-2">
  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Document</span>
  <a 
    href="/resume.pdf" 
    download="Christine_Ryan_Resume.pdf"
    className="block text-lg font-medium text-blue-400 hover:text-white transition-colors underline underline-offset-8 decoration-1"
  >
    Download_Résumé.pdf
  </a>
</div>
              </div>
            </div>
          </div>
          
          <div className="mt-60 text-center">
            <a href="/projects" className="inline-block px-12 py-5 bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-full font-mono text-[10px] uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              Return_to_Gallery
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}