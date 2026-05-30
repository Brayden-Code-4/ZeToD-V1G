import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    // Handle smooth scrolls on mount and change of hash (e.g., coming from /login /register)
    if (hash) {
      const sectionId = hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div id="home-page" className="w-full">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  );
}
