import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { useInteraction } from "../context/InteractionContext";

export default function TopProgressBar() {
  const { progress } = useInteraction();
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  // Combine scroll progress with interaction progress for continuous feedback
  const displayProgress = Math.min(100, Math.max(progress, scrollPercent));

  return (
    <div
      id="top-progress-container"
      aria-label="User engagement progress"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2px] w-full bg-white/[0.04] overflow-visible"
    >
      <motion.div
        id="top-progress-bar"
        className="h-full relative bg-gradient-to-r from-[#002FA7]/40 via-white/80 to-white"
        initial={{ width: "0%" }}
        animate={{ width: `${displayProgress}%` }}
        transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.8 }}
      >
        {/* Luminous Leading Sparkle / Tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[3px] bg-white rounded-full shadow-[0_0_12px_2px_rgba(255,255,255,0.95)] pointer-events-none" />

        {/* Subtle Accent Glow Trail */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#002FA7]/30 to-white opacity-80 blur-[0.5px]" />
      </motion.div>
    </div>
  );
}

