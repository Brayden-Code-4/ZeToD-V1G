import React from "react";
import { Link } from "react-router-dom";
import { Github, Globe, Terminal, ArrowUp } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#050505] border-t border-zinc-900 pt-16 pb-8 text-zinc-400">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo + Mission */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <Link
              id="footer-logo"
              to="/"
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-gradient-to-tr from-[#0052CC] to-[#00875A] p-[1.5px] overflow-hidden">
                <div className="absolute inset-0 bg-black rounded" />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white z-10 transition-transform duration-300 group-hover:rotate-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 18l11-13h5M4 18h11M15 5h5M4 18L15 5"
                  />
                </svg>
              </div>
              <span className="text-lg font-heading font-black tracking-wider text-white">
                ZeToD
              </span>
            </Link>

            <p className="max-w-xs text-sm text-zinc-500 leading-relaxed font-sans mt-2">
              ZeToD (Zero To Deploy) is a global open-source assessment platform mapping real Python developer capabilities through technical simulations. Empowering developers across Africa and beyond to secure world-class tech careers.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a
                id="footer-github-link"
                href="https://github.com/naboudjat/ZETOD-Platform"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-site-link"
                href="#"
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 font-heading">
              Platform
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <button
                  id="footer-link-features"
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  id="footer-link-how"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  id="footer-link-stats"
                  onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Benchmarks
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Dev */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-6 font-heading">
              Developer Ecosystem
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link id="footer-link-login" to="/login" className="hover:text-white transition-colors">
                  Login Portals
                </Link>
              </li>
              <li>
                <Link id="footer-link-register" to="/register" className="hover:text-white transition-colors">
                  New Candidate Registries
                </Link>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  FAQ & Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright stuff */}
        <div className="border-t border-zinc-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-mono">
            &copy; {new Date().getFullYear()} ZeToD. Open-source under Apache-2.0 License. Powered by high-fidelity simulations.
          </p>
          <button
            id="footer-scroll-to-top"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors font-mono cursor-pointer"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
