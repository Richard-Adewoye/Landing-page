import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Globe, Sparkles, ArrowUpRight, Code2 } from "lucide-react";
import { useInteraction } from "../context/InteractionContext";

export default function Footer() {
  const { recordInteraction, setProgress } = useInteraction();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSignatureHovered, setIsSignatureHovered] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    recordInteraction(15);
    setProgress(100);

    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail("");
    }, 4000);
  };

  const handleSignatureInteraction = () => {
    recordInteraction(8);
  };

  return (
    <footer
      id="footer"
      className="relative z-10 w-full py-20 px-6 border-t border-white/10 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#002FA7] uppercase block mb-3 font-semibold">
              // DISPATCH & ARCHIVES
            </span>
            <h4
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl sm:text-5xl text-white tracking-[-0.01em] leading-tight max-w-lg"
            >
              Don’t Miss A Thing. <br />
              <span className="italic text-white/70 font-normal">Join the generative frontier.</span>
            </h4>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <form onSubmit={handleSubscribe} className="relative w-full">
              <div className="flex items-center border-b border-white/30 focus-within:border-[#002FA7] pb-2 transition-colors duration-300">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  disabled={subscribed}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={subscribed ? "SUBSCRIPTION CONFIRMED" : "ENTER YOUR EMAIL ADDRESS"}
                  className="bg-transparent border-none outline-none text-white placeholder-white/40 text-xs font-mono tracking-wider flex-1 uppercase focus:ring-0"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  aria-label="Submit Dispatch Subscription"
                  className="text-white/60 hover:text-[#002FA7] transition-colors p-1 cursor-pointer"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4 text-[#002FA7]" />
                  ) : (
                    <ArrowRight className="w-4 h-4 hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
              <p className="text-[10px] font-mono text-white/40 mt-3">
                Bi-weekly dispatch on generative systems, typography, and edge AI.
              </p>
            </form>
          </div>
        </div>

        {/* Sitemap Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs font-mono">
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-4">PLATFORM</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#features" className="hover:text-[#002FA7] transition-colors">Synthesis Engine</a></li>
              <li><a href="#case-studies" className="hover:text-[#002FA7] transition-colors">Multimodal Canvas</a></li>
              <li><a href="#editorial-intro" className="hover:text-[#002FA7] transition-colors">Neural Topologies</a></li>
              <li><a href="#pricing" className="hover:text-[#002FA7] transition-colors">Cloud Workspaces</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-4">COMPANY</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-[#002FA7] transition-colors">Manifesto</a></li>
              <li><a href="#case-studies" className="hover:text-[#002FA7] transition-colors">Selected Work</a></li>
              <li><a href="#about" className="hover:text-[#002FA7] transition-colors">Engineering Logs</a></li>
              <li><a href="#about" className="hover:text-[#002FA7] transition-colors">Careers [03]</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-4">RESOURCES</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#editorial-intro" className="hover:text-[#002FA7] transition-colors">Documentation</a></li>
              <li><a href="#editorial-intro" className="hover:text-[#002FA7] transition-colors">API References</a></li>
              <li><a href="#case-studies" className="hover:text-[#002FA7] transition-colors">Design Guidelines</a></li>
              <li><a href="#features" className="hover:text-[#002FA7] transition-colors">Status: Operational</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-4">LOCATIONS</div>
            <ul className="space-y-2 text-white/60 text-[11px]">
              <li>SAN FRANCISCO // CA</li>
              <li>BERLIN // MITTE</li>
              <li>TOKYO // SHIBUYA</li>
              <li className="pt-2 text-white/30 text-[10px]">ALL SYSTEMS SECURE</li>
            </ul>
          </div>
        </div>

        {/* Refined 'Made by Asme' Expanding Brand Signature */}
        <div className="pt-10 pb-6 flex justify-center">
          <motion.div
            id="brand-signature"
            onMouseEnter={() => {
              setIsSignatureHovered(true);
              handleSignatureInteraction();
            }}
            onMouseLeave={() => setIsSignatureHovered(false)}
            onClick={handleSignatureInteraction}
            layout
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="group relative cursor-pointer liquid-glass rounded-full border border-white/15 hover:border-[#002FA7]/60 hover:bg-white/[0.04] p-1.5 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            {/* Ambient Klein Blue Glow on Hover */}
            <div className="absolute inset-0 rounded-full bg-[#002FA7]/0 group-hover:bg-[#002FA7]/15 blur-md transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex items-center gap-3 px-3.5 py-1">
              {/* Monogram Badge */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#002FA7] group-hover:shadow-[0_0_8px_#002FA7] transition-shadow duration-300" />
                <span
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  className="text-base text-white/90 italic tracking-tight font-normal"
                >
                  Asme
                </span>
              </div>

              {/* Dividing separator */}
              <div className="w-[1px] h-3 bg-white/20" />

              {/* Dynamic Label */}
              <span className="text-[11px] font-mono tracking-widest text-white/70 group-hover:text-white uppercase whitespace-nowrap transition-colors">
                Made by Asme
              </span>

              {/* Expanding details on hover */}
              <AnimatePresence>
                {isSignatureHovered && (
                  <motion.div
                    initial={{ opacity: 0, width: 0, scale: 0.95 }}
                    animate={{ opacity: 1, width: "auto", scale: 1 }}
                    exit={{ opacity: 0, width: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 overflow-hidden pl-1 whitespace-nowrap"
                  >
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      // ATELIER FOR COGNITIVE ARTIFACTS
                    </span>
                    <span className="text-[9px] font-mono bg-[#002FA7]/20 border border-[#002FA7]/40 text-white px-2 py-0.5 rounded-full">
                      SF • TYO
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#002FA7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 text-[11px] font-mono text-white/40 gap-4">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-white/50" />
            <span>© 2026 ASME LABS INC. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">PRIVACY PROTOCOL</a>
            <a href="#terms" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <span className="text-[#002FA7]">BUILD 4.8.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

