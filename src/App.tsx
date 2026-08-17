/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorialIntro from "./components/EditorialIntro";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
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
        className="relative bg-black min-h-screen w-full flex flex-col selection:bg-white selection:text-black overflow-x-hidden snap-y snap-mandatory scroll-smooth"
      >
        <TopProgressBar />
        <FilmGrainOverlay />

        {/* Hero Area (Full Screen with Background Video) */}
        <div id="hero-section" className="relative min-h-screen w-full flex flex-col justify-between snap-start snap-always">
          <BackgroundVideo />

          <motion.div variants={sectionVariants} className="w-full relative z-20">
            <Navbar />
          </motion.div>

          <motion.div variants={sectionVariants} className="flex-1 flex flex-col w-full relative z-10">
            <Hero />
          </motion.div>
        </div>

        {/* Section 1: Editorial Architecture Manifesto */}
        <motion.div variants={sectionVariants} className="w-full relative z-10 snap-start snap-always">
          <EditorialIntro />
        </motion.div>

        {/* Section 2: Case Studies & Industry Accolades */}
        <motion.div variants={sectionVariants} className="w-full relative z-10 snap-start snap-always">
          <CaseStudies />
        </motion.div>

        {/* Footer */}
        <motion.div variants={sectionVariants} className="w-full relative z-10 snap-start snap-always">
          <Footer />
        </motion.div>
      </motion.main>
    </InteractionProvider>
  );
}



