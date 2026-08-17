import { useEffect, useRef, useState } from "react";

export default function FilmGrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [useCanvas, setUseCanvas] = useState(true);

  // High performance procedural micro-grain generator for authentic 24fps cinema flutter
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      setUseCanvas(false);
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth > 0 ? Math.min(window.innerWidth, 1920) : 800);
    let height = (canvas.height = window.innerHeight > 0 ? Math.min(window.innerHeight, 1080) : 600);

    // Off-screen canvas pattern cache for ultra-low CPU overhead
    const patternCanvas = document.createElement("canvas");
    const patternSize = 256;
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const pCtx = patternCanvas.getContext("2d");
    if (!pCtx) return;

    // Pre-generate 4 random grain frames to cycle through at ~20-24fps (classic cinema frame rate)
    const grainFrames: ImageData[] = [];
    for (let f = 0; f < 6; f++) {
      const imgData = pCtx.createImageData(patternSize, patternSize);
      const buffer = new Uint32Array(imgData.data.buffer);
      const len = buffer.length;
      for (let i = 0; i < len; i++) {
        // High-contrast subtle grain distribution
        if (Math.random() < 0.45) {
          const val = Math.floor(Math.random() * 255);
          // RGBA 32-bit pixel: Alpha + RGB
          buffer[i] = (255 << 24) | (val << 16) | (val << 8) | val;
        } else {
          buffer[i] = 0;
        }
      }
      grainFrames.push(imgData);
    }

    let frameIndex = 0;
    let lastTime = 0;
    const fpsInterval = 1000 / 24; // 24 frames per second

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      const elapsed = time - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = time - (elapsed % fpsInterval);

      // Cycle pattern
      pCtx.putImageData(grainFrames[frameIndex % grainFrames.length], 0, 0);
      frameIndex++;

      const pattern = ctx.createPattern(patternCanvas, "repeat");
      if (pattern) {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, width, height);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = Math.min(window.innerWidth, 1920);
      height = canvas.height = Math.min(window.innerHeight, 1080);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="film-grain-overlay"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none"
    >
      {useCanvas ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.045] mix-blend-screen pointer-events-none"
        />
      ) : null}

      {/* CSS-based SVG noise layer as fallback and depth enhancer */}
      <div className="absolute -inset-[100%] w-[300%] h-[300%] opacity-[0.035] mix-blend-overlay pointer-events-none animate-film-grain bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* SVG Turbulence Noise Filter */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </div>
  );
}
