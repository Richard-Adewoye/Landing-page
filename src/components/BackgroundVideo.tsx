import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion, useScroll, useTransform } from "motion/react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll();
  const videoY = useTransform(scrollYProgress, [0, 0.4], ["0%", "22%"]);
  const videoScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.12]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.3]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoUrl = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Browser supports HLS natively (Safari/iOS)
      video.src = videoUrl;
    } else if (Hls.isSupported()) {
      // Use hls.js for other browsers
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
      });
      hls.loadSource(videoUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.log("Automatic play prevented:", err);
        });
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <div id="bg-video-wrapper" className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: videoY, scale: videoScale, opacity: videoOpacity }}
        className="w-full h-full will-change-transform"
      >
        <video
          id="bg-video-element"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Digital vignette & gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />
    </div>
  );
}

