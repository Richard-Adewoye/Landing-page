import React, { useState } from "react";
import { ArrowRight, Check, Globe } from "lucide-react";
import { useInteraction } from "../context/InteractionContext";

export default function Footer() {
  const { recordInteraction, setProgress } = useInteraction();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-mono text-white/40 gap-4">
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
