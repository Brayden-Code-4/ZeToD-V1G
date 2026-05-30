import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Terminal, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolls or page redirects
  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      // The scroll effect will be handled in Home.jsx
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            id="nav-logo"
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-[#0052CC] to-[#00875A] p-[1.5px] overflow-hidden">
              <div className="absolute inset-0 bg-black rounded-lg transition-transform duration-300 group-hover:scale-95" />
              {/* Geometric Stylized Z Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-5 h-5 text-white z-10 transition-transform duration-300 group-hover:rotate-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 18l11-13h5M4 18h11M15 5h5M4 18L15 5"
                />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-heading font-black tracking-wider text-white">
                ZeToD
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#00875A] uppercase -mt-0.5">
                Zero To Deploy
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              id="nav-link-tech"
              onClick={() => handleNavClick("features")}
              className="text-zinc-400 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              id="nav-link-how"
              onClick={() => handleNavClick("how-it-works")}
              className="text-zinc-400 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              id="nav-link-faq"
              onClick={() => handleNavClick("faq")}
              className="text-zinc-400 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              id="nav-btn-login"
              to="/login"
              className="text-zinc-400 hover:text-white font-medium text-sm transition-colors mr-2"
            >
              Login
            </Link>
            <Button id="nav-btn-start" to="/register" variant="primary" size="md">
              Start Assessment
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0A0A0A] border-b border-zinc-900 shadow-xl px-4 py-8 flex flex-col gap-6 animate-fade-in z-40">
          <button
            id="mobile-nav-link-features"
            onClick={() => handleNavClick("features")}
            className="text-left text-zinc-300 hover:text-white font-semibold text-lg py-1 border-b border-zinc-900/40"
          >
            Features
          </button>
          <button
            id="mobile-nav-link-how"
            onClick={() => handleNavClick("how-it-works")}
            className="text-left text-zinc-300 hover:text-white font-semibold text-lg py-1 border-b border-zinc-900/40"
          >
            How It Works
          </button>
          <button
            id="mobile-nav-link-faq"
            onClick={() => handleNavClick("faq")}
            className="text-left text-zinc-300 hover:text-white font-semibold text-lg py-1 border-b border-zinc-900/40"
          >
            FAQ
          </button>

          <div className="flex flex-col gap-4 mt-4">
            <Link
              id="mobile-nav-link-login"
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-lg border border-zinc-800 text-zinc-300 bg-zinc-950 font-medium text-center hover:bg-zinc-900 transition-colors"
            >
              Login
            </Link>
            <Button
              id="mobile-nav-btn-start"
              to="/register"
              onClick={() => setIsOpen(false)}
              variant="primary"
              size="lg"
              className="w-full"
            >
              Start Assessment
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
