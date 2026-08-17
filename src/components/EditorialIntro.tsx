import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Cpu, Sparkles, Layers, Terminal } from "lucide-react";
import { useInteraction } from "../context/InteractionContext";

export default function EditorialIntro() {
  const { recordInteraction } = useInteraction();
  const [activeTab, setActiveTab] = useState<"synthesis" | "topology" | "latency">("synthesis");

  const handleTabChange = (tab: "synthesis" | "topology" | "latency") => {
    setActiveTab(tab);
    recordInteraction(6);
  };

  return (
    <section
      id="editorial-intro"
      className="relative z-10 w-full py-24 md:py-32 px-6 border-t border-white/10 bg-black/95 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Micro Section Marker */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10 text-[11px] font-mono tracking-widest text-white/50 uppercase">
          <span>// 01 ARCHITECTURAL MANIFESTO</span>
          <span>SYSTEM CALIBRATION 2026.08</span>
        </div>

        {/* Two-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Span 7) - Large Editorial Typography & Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-block text-[11px] font-mono tracking-[0.25em] text-[#002FA7] uppercase font-semibold bg-[#002FA7]/10 px-3 py-1 rounded-full border border-[#002FA7]/30">
                Cognitive Mediums
              </span>

              <h2
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] text-white tracking-[-0.01em]"
              >
                We dissolve the friction between <span className="italic font-normal text-white/80">raw thought</span> and computational execution.
              </h2>

              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Asme re-engineers human-machine symbiosis. By synthesizing generative logic directly into responsive, visual workflows, creators deploy production-grade intelligent platforms with zero boilerplate friction.
              </p>
            </div>

            {/* Interactive Specs Selector */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex gap-3 mb-6">
                {(["synthesis", "topology", "latency"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`text-xs uppercase tracking-widest font-mono py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-[#002FA7] text-white border border-[#002FA7] shadow-[0_0_15px_rgba(0,47,167,0.5)]"
                        : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Insights */}
              <div className="liquid-glass rounded-xl p-5 border border-white/10 min-h-[100px] flex items-center justify-between">
                {activeTab === "synthesis" && (
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-5 h-5 text-[#002FA7] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-white">Instant Multimodal Compilation</h4>
                      <p className="text-xs text-white/60 mt-1 leading-normal">
                        Transforms conceptual sketches and natural prompts into deterministic application trees within 340ms.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "topology" && (
                  <div className="flex items-start gap-4">
                    <Layers className="w-5 h-5 text-[#002FA7] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-white">Non-Destructive Neural State</h4>
                      <p className="text-xs text-white/60 mt-1 leading-normal">
                        Maintains isolated branching graphs ensuring live hot-swaps never disrupt end-user pipelines.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "latency" && (
                  <div className="flex items-start gap-4">
                    <Cpu className="w-5 h-5 text-[#002FA7] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-white">Edge-Accelerated Inference</h4>
                      <p className="text-xs text-white/60 mt-1 leading-normal">
                        Global edge routing distributes model execution across 42 ultra-low-latency localized POP nodes.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Link */}
            <div className="mt-8">
              <a
                href="#case-studies"
                onClick={() => recordInteraction(10)}
                className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white hover:text-[#002FA7] transition-colors duration-200 group py-2"
              >
                <span>Read Technical Whitepaper</span>
                <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-[#002FA7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right Column (Span 5) - High-Fashion Editorial Spec Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden liquid-glass border border-white/15 p-6 backdrop-blur-xl">
              {/* Monogram graphic header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#002FA7] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">ASME CORE V4.8</span>
                </div>
                <span className="text-[10px] font-mono text-white/40">LAT: 52.5200° N</span>
              </div>

              {/* High Contrast Visual Card */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 flex flex-col justify-between p-6 group">
                {/* Visual Graphic Gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-black pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#002FA7]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#002FA7]/30 transition-all duration-700" />

                {/* Top Overlay Badge */}
                <div className="relative z-10 flex justify-between items-center text-white/60">
                  <Terminal className="w-4 h-4 text-[#002FA7]" />
                  <span className="text-[10px] font-mono tracking-widest">FIG. 08 — SYNC</span>
                </div>

                {/* Center Monogram Typography */}
                <div className="relative z-10 my-auto text-center">
                  <span
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-7xl md:text-8xl text-white/90 italic tracking-tighter"
                  >
                    Asme
                  </span>
                  <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em] mt-2">
                    Neural Canvas Edition
                  </p>
                </div>

                {/* Bottom Card Metric Rules */}
                <div className="relative z-10 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">THROUGHPUT</div>
                    <div className="text-sm font-semibold text-white mt-0.5">14.8M ops/sec</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">ACCURACY</div>
                    <div className="text-sm font-semibold text-white mt-0.5">99.94%</div>
                  </div>
                </div>
              </div>

              {/* Micro Caption */}
              <p className="text-[11px] text-white/40 font-mono text-center mt-4">
                [ PRECISION ARCHITECTURE FOR GENERATIVE WORKSPACES ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
