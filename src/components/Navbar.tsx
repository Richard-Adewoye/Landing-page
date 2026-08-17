import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, X, Cookie } from "lucide-react";
import { useInteraction } from "../context/InteractionContext";

export default function Navbar() {
  const { recordInteraction } = useInteraction();
  const [cookieAccepted, setCookieAccepted] = useState(() => {
    try {
      return localStorage.getItem("asme_cookie_consent") === "true";
    } catch {
      return false;
    }
  });

  const handleAcceptCookies = () => {
    try {
      localStorage.setItem("asme_cookie_consent", "true");
    } catch (e) {
      console.warn(e);
    }
    recordInteraction(12);
    setCookieAccepted(true);
  };

  return (
    <>
      <nav
        id="navbar"
        className="relative z-20 px-6 py-6 w-full"
      >
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          {/* Left Side */}
          <div className="flex items-center gap-8">
            <div
              onClick={() => recordInteraction(5)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Globe id="navbar-logo-icon" className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-white font-semibold text-lg tracking-wider">Asme</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
              <a
                href="#features"
                onClick={() => recordInteraction(8)}
                className="hover:text-white transition-colors duration-300 relative py-1"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => recordInteraction(8)}
                className="hover:text-white transition-colors duration-300 relative py-1"
              >
                Pricing
              </a>
              <a
                href="#about"
                onClick={() => recordInteraction(8)}
                className="hover:text-white transition-colors duration-300 relative py-1"
              >
                About
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => recordInteraction(10)}
              className="text-white hover:text-white/80 transition-colors text-sm font-medium cursor-pointer"
            >
              Sign Up
            </button>
            <button
              onClick={() => recordInteraction(10)}
              className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Accessible Cookie Compliance Banner */}
      <AnimatePresence>
        {!cookieAccepted && (
          <motion.div
            id="cookie-compliance-banner"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-50 rounded-2xl liquid-glass border border-white/10 p-5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-2 rounded-xl text-white shrink-0">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm">We value your privacy</h4>
                <p className="text-white/70 text-xs mt-1 leading-relaxed">
                  We use cookies to optimize your platform experience, tailor intelligence pipelines, and build a more humanized visual canvas.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={handleAcceptCookies}
                    className="flex-1 bg-white text-black hover:bg-white/90 active:scale-95 transition-all rounded-lg py-1.5 px-3 text-xs font-semibold cursor-pointer text-center"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => {
                      recordInteraction(6);
                      setCookieAccepted(true);
                    }}
                    className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-colors rounded-lg py-1.5 px-3 text-xs font-medium cursor-pointer"
                  >
                    Preferences
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  recordInteraction(4);
                  setCookieAccepted(true);
                }}
                className="text-white/50 hover:text-white transition-colors p-1"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
