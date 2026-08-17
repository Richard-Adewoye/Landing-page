/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilmGrainOverlay from "./components/FilmGrainOverlay";
import TopProgressBar from "./components/TopProgressBar";
import { InteractionProvider } from "./context/InteractionContext";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.18,
      delayChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function App() {
  return (
    <InteractionProvider>
      <motion.main
        id="app-root"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0"
      >
        <TopProgressBar />
        <BackgroundVideo />
        <FilmGrainOverlay />
        
        <motion.div variants={sectionVariants} className="w-full relative z-20">
          <Navbar />
        </motion.div>
        
        <motion.div variants={sectionVariants} className="flex-1 flex flex-col w-full relative z-10">
          <Hero />
        </motion.div>
      </motion.main>
    </InteractionProvider>
  );
}


