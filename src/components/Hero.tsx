import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Play, X, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Typewriting state for CTA placeholder
  const [placeholder, setPlaceholder] = useState("");
  const targetTextDefault = "Enter Your Email Here For Early Access";
  const targetTextSubmitted = "You Will Receive Notifications By Email";

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isFormOpen) {
      setPlaceholder("");
      return;
    }

    const textToType = isSubmitted ? targetTextSubmitted : targetTextDefault;
    setPlaceholder(""); // Reset typing
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setPlaceholder(() => textToType.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [isFormOpen, isSubmitted]);

  // Handle submit with resetting timing
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
      setEmail("");
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="relative flex-1 flex flex-col items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-12">
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
          >
            BUILD A NO-CODE AI APP IN MINUTES
          </motion.p>

          {/* Heading */}
          <motion.h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-[64px] font-medium tracking-[-0.01em] leading-[1.1] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
          >
            A new way to think and <br className="hidden md:block" />
            create with computers
          </motion.h1>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="min-h-[50px] mt-2 flex items-center justify-center w-full z-20"
          >
            <AnimatePresence mode="wait">
              {!isFormOpen ? (
                <motion.button
                  key="cta-button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsFormOpen(true)}
                  className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer whitespace-nowrap shadow-lg flex items-center gap-2 group"
                >
                  Get early access
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </motion.button>
              ) : (
                <motion.form
                  key="email-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[340px] focus-within:border-white/40 transition-colors duration-300"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    disabled={isSubmitted}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    autoFocus
                    className="bg-transparent border-none outline-none text-white placeholder-white/45 flex-1 pr-2 text-sm w-full leading-relaxed focus:ring-0"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    aria-label="Submit Email Address"
                    className={`p-2 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ${
                      isSubmitted ? "bg-white text-black" : "hover:bg-white/20 text-white bg-white/5"
                    }`}
                  >
                    {isSubmitted ? (
                      <Check className="w-4 h-4 text-black font-bold" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-white" />
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Play Video Demo Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4"
          >
            <button
              onClick={() => setShowDemoModal(true)}
              className="text-white/80 hover:text-white transition-colors duration-300 text-[13px] font-medium tracking-wide cursor-pointer flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-white/80" />
              Play Video Demo
            </button>
          </motion.div>

        </div>
      </section>

      {/* Elegant Cinematic Playback Modal (Alternative to alert/window.open) */}
      <AnimatePresence>
        {showDemoModal && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDemoModal(false)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full transition-all duration-200 border border-white/15"
                aria-label="Close presentation"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video elements duplicating background clip or hosting customized stream */}
              <div className="absolute inset-0 bg-neutral-900 flex flex-col justify-between p-8">
                {/* Embedded Video */}
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                  title="Asme Platform Demo"
                  className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
