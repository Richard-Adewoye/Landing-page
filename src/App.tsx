/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilmGrainOverlay from "./components/FilmGrainOverlay";
import TopProgressBar from "./components/TopProgressBar";
import { InteractionProvider } from "./context/InteractionContext";

export default function App() {
  return (
    <InteractionProvider>
      <main className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
        <TopProgressBar />
        <BackgroundVideo />
        <FilmGrainOverlay />
        <Navbar />
        <Hero />
      </main>
    </InteractionProvider>
  );
}

