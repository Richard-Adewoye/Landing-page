import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Award, ChevronRight, X, ExternalLink, Activity, Box, Compass } from "lucide-react";
import { useInteraction } from "../context/InteractionContext";

interface Project {
  id: string;
  tag: string;
  year: string;
  title: string;
  subtitle: string;
  category: string;
  gradient: string;
  description: string;
  metrics: string[];
}

const projects: Project[] = [
  {
    id: "01",
    tag: "SYNAPTIC MATRIX",
    year: "2026",
    title: "Spatial Generative Intelligence",
    subtitle: "Real-time Multimodal Canvas for Architectural Synthesis",
    category: "Neural Interface",
    gradient: "from-blue-950/40 via-neutral-900 to-black",
    description:
      "A zero-latency design sandbox enabling generative 3D wireframing and acoustic geometry directly through adaptive speech and prompt interaction.",
    metrics: ["0.22s Render Loop", "3.4M Tokens/Min", "Universal Export"],
  },
  {
    id: "02",
    tag: "MONOCHROME MONOLITH",
    year: "2026",
    title: "Fluid Typographic Physics Engine",
    subtitle: "Mathematical Letterform Deformation & Variable Grid Systems",
    category: "Computational Design",
    gradient: "from-neutral-900 via-neutral-950 to-black",
    description:
      "Algorithmic kinetic typesetting engineered for next-generation digital editorials and high-fashion interactive identity systems.",
    metrics: ["60 FPS Interpolation", "Variable OpenType 2.0", "WebGPU Accelerated"],
  },
  {
    id: "03",
    tag: "KINETIC VECTOR",
    year: "2025",
    title: "Autonomous Agent Orchestration",
    subtitle: "Multi-model Workflow Orchestrator for Engineering Teams",
    category: "Agent Systems",
    gradient: "from-indigo-950/30 via-neutral-900 to-black",
    description:
      "Declarative multi-agent swarm architecture designed to autonomously verify, test, and containerize complex microservice applications.",
    metrics: ["99.98% Uptime", "Zero-trust Sandbox", "Sub-second Routing"],
  },
];

const awards = [
  { name: "AWWWARDS", label: "Site of the Month", year: "2026" },
  { name: "TOKYO TDC", label: "Annual Design Prize", year: "2026" },
  { name: "RED DOT", label: "Best of the Best", year: "2025" },
  { name: "MONOTYPE", label: "Excellence in Typography", year: "2025" },
  { name: "FWA", label: "Site of the Day", year: "2025" },
];

export default function CaseStudies() {
  const { recordInteraction, setProgress } = useInteraction();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Staggered parallax depth transforms for each card column
  const card1Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Ambient parallax glow
  const ambientAuraY = useTransform(scrollYProgress, [0, 1], [-100, 120]);
  const awardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    recordInteraction(15);
  };

  const getCardYTransform = (index: number) => {
    if (index === 0) return card1Y;
    if (index === 1) return card2Y;
    return card3Y;
  };

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="relative z-10 w-full py-24 md:py-32 px-6 border-t border-white/10 bg-black text-white overflow-hidden"
    >
      {/* Parallax Ambient Aura */}
      <motion.div
        style={{ y: ambientAuraY }}
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#002FA7]/12 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Split Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-white/10 gap-6">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#002FA7] uppercase block mb-3 font-semibold">
              // 02 SELECTED WORKS & ARCHIVES
            </span>
            <h3
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl md:text-5xl text-white tracking-[-0.01em]"
            >
              Case Studies & Mediums
            </h3>
          </div>

          <a
            href="#footer"
            onClick={() => recordInteraction(8)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-[#002FA7] transition-colors duration-200 group py-2"
          >
            <span>View All Repositories</span>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#002FA7] group-hover:translate-x-1 transition-all duration-200" />
          </a>
        </div>

        {/* 3-Column Parallax Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              style={{ y: getCardYTransform(idx) }}
              onClick={() => handleOpenProject(project)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden liquid-glass border border-white/10 hover:border-[#002FA7]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer p-6 min-h-[460px]"
            >
              {/* Card Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Hover Klein Blue Aura */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#002FA7]/0 group-hover:bg-[#002FA7]/30 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              {/* Card Header Info */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/50 border-b border-white/10 pb-4">
                <span className="group-hover:text-[#002FA7] transition-colors duration-200 font-semibold">
                  [{project.id} // {project.tag}]
                </span>
                <span>{project.year}</span>
              </div>

              {/* Central Visual Graphic */}
              <div className="relative z-10 my-8 py-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#002FA7] group-hover:scale-110 transition-all duration-300 bg-white/5">
                  {project.id === "01" && <Activity className="w-6 h-6 text-white/70 group-hover:text-[#002FA7] transition-colors" />}
                  {project.id === "02" && <Box className="w-6 h-6 text-white/70 group-hover:text-[#002FA7] transition-colors" />}
                  {project.id === "03" && <Compass className="w-6 h-6 text-white/70 group-hover:text-[#002FA7] transition-colors" />}
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-4">
                  {project.category}
                </span>
              </div>

              {/* Card Footer Typography */}
              <div className="relative z-10 pt-4 border-t border-white/10">
                <h4
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  className="text-2xl text-white group-hover:text-white transition-colors leading-tight"
                >
                  {project.title}
                </h4>
                <p className="text-xs text-white/60 font-light mt-2 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between pt-2 text-[11px] font-mono text-white/40 group-hover:text-white transition-colors">
                  <span>Explore Case</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#002FA7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Award Marquee & Industry Recognition */}
        <motion.div style={{ y: awardsY }} className="mt-24 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
              [ RECOGNITION & EDITORIAL HONORS ]
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {awards.map((award) => (
              <div
                key={award.name}
                onClick={() => recordInteraction(4)}
                className="liquid-glass rounded-xl p-4 text-center border border-white/5 hover:border-[#002FA7]/50 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-4 h-4 text-white/30 group-hover:text-[#002FA7] transition-colors duration-200" />
                </div>
                <div className="text-xs font-mono font-bold tracking-widest text-white/80 group-hover:text-white transition-colors">
                  {award.name}
                </div>
                <div className="text-[10px] text-white/40 mt-1 leading-tight">{award.label}</div>
                <div className="text-[9px] font-mono text-white/30 mt-1.5">{award.year}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Project Case Study Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl rounded-2xl liquid-glass border border-white/20 p-8 shadow-2xl bg-neutral-950 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Project Detail"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-[10px] font-mono text-[#002FA7] tracking-widest uppercase font-semibold mb-2">
                PROJECT DOSSIER // {selectedProject.id}
              </div>

              <h3
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-3xl sm:text-4xl text-white mb-2 leading-tight"
              >
                {selectedProject.title}
              </h3>

              <p className="text-xs text-white/50 font-mono tracking-wide mb-6">
                CATEGORY: {selectedProject.category} // {selectedProject.year}
              </p>

              <p className="text-sm text-white/80 leading-relaxed font-light mb-8">
                {selectedProject.description}
              </p>

              {/* Performance Metrics Matrix */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-8">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[9px] font-mono text-white/40 uppercase">BENCHMARK {i + 1}</div>
                    <div className="text-xs font-mono font-semibold text-white mt-1">{metric}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  Dismiss
                </button>
                <button
                  onClick={() => {
                    recordInteraction(15);
                    setSelectedProject(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#002FA7] hover:bg-[#002FA7]/90 text-white text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(0,47,167,0.4)] transition-all cursor-pointer"
                >
                  <span>Launch Live Spec</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

