"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Constants & Config ---
const TYPING_SPEED = 100;
const BACKSPACE_SPEED = 60;
const INTRO_KEY = "home_intro_played_v3";

export default function HomePage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"typing" | "deleting" | "manual" | "ghosting" | "resolved" | "menu" | "revealed" | "collapsing">("typing");
  const [text, setText] = useState("");
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const played = localStorage.getItem(INTRO_KEY);
    if (played) {
      setHasPlayed(true);
      setPhase("revealed");
      setText("Christine Ryan");
    }
  }, []);

  // --- Keyboard Shortcuts ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase === "menu" && (e.key === "F12" || e.key === "Enter")) {
        e.preventDefault();
        handleGoToDefinition();
      } else if (phase === "revealed" && e.key === "Enter") {
        e.preventDefault();
        handleContinue();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase]);

  // --- Interaction Logic ---
  useEffect(() => {
    if (hasPlayed) return;

    if (phase === "typing") {
      const target = "chrosti";
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), 800);
        return () => clearTimeout(t);
      }
    } 
    
    if (phase === "deleting") {
      if (text.length > 3) {
        const t = setTimeout(() => setText(text.slice(0, -1)), BACKSPACE_SPEED);
        return () => clearTimeout(t);
      } else {
        setPhase("manual");
      }
    }

    if (phase === "manual") {
      const target = "chris";
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("ghosting"), 400);
        return () => clearTimeout(t);
      }
    }

    if (phase === "ghosting") {
      const t = setTimeout(() => {
        setText("Christine Ryan");
        setPhase("resolved");
      }, 1800);
      return () => clearTimeout(t);
    }

    if (phase === "resolved") {
      const t = setTimeout(() => setPhase("menu"), 800);
      return () => clearTimeout(t);
    }
  }, [text, phase, hasPlayed]);

  const handleGoToDefinition = () => {
    setPhase("revealed");
    localStorage.setItem(INTRO_KEY, "true");
  };

  const handleContinue = () => {
    setPhase("collapsing");
    setTimeout(() => router.push("/projects"), 800);
  };

  const handleReplay = () => {
    localStorage.removeItem(INTRO_KEY);
    setHasPlayed(false);
    setText("");
    setPhase("typing");
  };

  const editorVariants: Variants = {
    initial: { scale: 1.2, y: 30, opacity: 0 },
    resolved: { 
      scale: 1, 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] } 
    },
    collapse: { 
      scale: 0.98, 
      y: -120, 
      opacity: 0, 
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      <motion.div
        variants={editorVariants}
        initial={hasPlayed ? "resolved" : "initial"}
        animate={phase === "collapsing" ? "collapse" : "resolved"}
        className="w-[min(1200px,94vw)] aspect-[16/9] md:aspect-auto md:min-h-[650px] bg-[#121212] rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden"
      >
        {/* IDE Tab Bar */}
        <div className="flex items-center px-4 py-2.5 border-b border-white/5 bg-[#1a1a1a]/50 backdrop-blur-md">
          <div className="flex gap-2 mr-8">
            <div className="w-3 h-3 rounded-full bg-white/5" />
            <div className="w-3 h-3 rounded-full bg-white/5" />
            <div className="w-3 h-3 rounded-full bg-white/5" />
          </div>
          <div className="px-4 py-1.5 bg-[#121212] border border-white/10 border-b-0 rounded-t-md text-[11px] font-mono text-zinc-400 flex items-center gap-2">
            <span className="text-blue-400 opacity-80">index.ts</span>
          </div>
        </div>

        {/* Editor Stage */}
        <div className="flex-1 p-12 md:p-24 font-mono flex flex-col justify-center relative">
          <div className="absolute left-6 top-0 bottom-0 flex flex-col py-24 text-zinc-800 text-xs select-none space-y-3 opacity-40">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(n => <span key={n}>{n}</span>)}
          </div>

          <div className="relative z-10 ml-4">
            <div className="text-zinc-600 text-lg md:text-xl mb-6 flex items-center gap-3">
              <span className="text-purple-500/80">interface</span> 
              <span className="text-yellow-200/90">ChristineRyan</span> 
              <span className="text-zinc-500">{"{"}</span>
            </div>
            
            <div className="flex items-baseline flex-wrap">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-100">
                {text}
                {phase === "ghosting" && (
                  <span className="text-zinc-700/60 select-none relative">
                    tine Ryan
                    <motion.span 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-6 inline-block text-[10px] bg-zinc-100 text-black px-2 py-1 rounded border border-white/20 tracking-widest font-sans font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                      TAB
                    </motion.span>
                  </span>
                )}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-[4px] h-[0.9em] bg-blue-500/80 ml-2 translate-y-1"
                />
              </h1>
            </div>

            {/* Context Menu Pulse */}
            <AnimatePresence>
              {phase === "menu" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-4 left-0 z-30 bg-[#1c1c1c] border border-white/10 shadow-2xl rounded-lg p-1.5 w-60 backdrop-blur-xl"
                >
                  <button onClick={handleGoToDefinition} className="w-full text-left px-3 py-2 rounded-md transition-all flex justify-between items-center group relative overflow-hidden">
                    <motion.div 
                      animate={{ 
                        backgroundColor: ["rgba(37, 99, 235, 0.05)", "rgba(37, 99, 235, 0.3)", "rgba(37, 99, 235, 0.05)"],
                      }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0 z-0"
                    />
                    <span className="text-zinc-200 text-sm font-sans relative z-10">Go to Definition</span>
                    <span className="text-zinc-400 text-[10px] font-mono relative z-10">F12</span>
                  </button>
                  <div className="h-[1px] bg-white/5 my-1" />
                  <div className="px-3 py-2 text-zinc-600 text-sm italic font-sans flex justify-between items-center">
                    Peek References <span className="text-[10px] font-mono">⇧F12</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Docstring definition reveal */}
            <AnimatePresence>
              {phase === "revealed" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-12 overflow-hidden">
                  <div className="text-zinc-500 italic text-lg leading-relaxed mb-4">
                    <span className="block opacity-40">/**</span>
                    <div className="border-l-2 border-zinc-800 ml-1 pl-6 my-2 space-y-1 opacity-50">
                      <div> * Builds systems and interactive interfaces.</div>
                      <div> * Focused on the intersection of humans, AI, and tooling.</div>
                      <div> * Values clarity over cleverness.</div>
                    </div>
                    <span className="block opacity-40"> */</span>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 ml-1">
                    <button 
                      onClick={handleContinue} 
                      className="group relative flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors font-mono py-1.5 px-4 rounded border border-blue-500/20 bg-blue-500/5 overflow-hidden"
                    >
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }} 
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }} 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent w-1/2" 
                      />
                      <span className="text-purple-400 z-10">await</span> 
                      <span className="z-10">this.navigate(<span className="text-yellow-200/80">'/projects'</span>)</span>
                      <span className="group-hover:translate-x-1 transition-transform opacity-50 z-10">→</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {phase === "revealed" && <div className="mt-6 text-zinc-500 text-lg">{"}"}</div>}
          </div>

          {/* Shortcut Hint */}
          <AnimatePresence>
            {(phase === "menu" || phase === "revealed") && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="absolute bottom-12 right-12 bg-zinc-900 border border-white/10 px-4 py-2 rounded-md shadow-lg flex items-center gap-3">
                <span className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest">Shortcut:</span>
                <span className="text-zinc-300 text-xs font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{phase === "menu" ? "F12" : "ENTER"}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status Bar */}
        <div className="px-4 py-1.5 bg-blue-700/90 flex justify-between items-center text-[10px] text-white/80 font-mono tracking-wider">
          <div className="flex gap-5 items-center">
            <span className="bg-white/10 px-2 py-0.5 rounded uppercase font-bold">ready</span>
            <span className="opacity-70 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> main*</span>
          </div>
          <div className="flex gap-6 opacity-80"><span>UTF-8</span><span>Ln 1, Col {text.length + 1}</span></div>
        </div>
      </motion.div>

      {/* Grounded Replay UI */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "revealed" || phase === "collapsing" ? 1 : 0 }}
        className="mt-12 flex flex-col items-center"
      >
        <p className="text-zinc-400 text-xs uppercase tracking-widest mb-4 font-semibold opacity-60">Sequence complete</p>
        <button 
          onClick={handleReplay}
          className="flex items-center gap-4 px-10 py-4 rounded-xl border-2 border-zinc-300 text-zinc-800 bg-white hover:border-black transition-all group shadow-md active:scale-95"
        >
          <svg className="w-5 h-5 group-hover:rotate-[-120deg] transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-lg font-bold tracking-tight uppercase">Replay Introduction</span>
        </button>
      </motion.div>
    </main>
  );
}