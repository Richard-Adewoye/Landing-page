/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilmGrainOverlay from "./components/FilmGrainOverlay";

export default function App() {
  return (
    <main className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
      <BackgroundVideo />
      <FilmGrainOverlay />
      <Navbar />
      <Hero />
    </main>
  );
}
