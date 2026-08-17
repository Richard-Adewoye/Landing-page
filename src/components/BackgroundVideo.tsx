import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      <video
        id="bg-video-element"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-100"
      />
      {/* Subtle digital vignette to improve typography legibility over video frames */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 pointer-events-none" />
    </div>
  );
}
