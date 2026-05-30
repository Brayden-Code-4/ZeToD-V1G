import React from "react";
import { Layers, Network, Award, Cpu, Globe } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <Layers className="w-5 h-5 text-[#0052CC]" />,
      title: "Take The Assessment",
      description: "Login securely and initiate our standard 25-minute test sandbox. You'll write standard Python functions to solve data manipulation, database parsing, and concurrent task challenges.",
    },
    {
      step: "02",
      icon: <Cpu className="w-5 h-5 text-[#00875A]" />,
      title: "Analyze Your Skills",
      description: "Our distributed test runner executes edge scenarios to measure memory heap allocations and CPU latency down to the microsecond level, parsing code syntax models dynamically.",
    },
    {
      step: "03",
      icon: <Award className="w-5 h-5 text-[#FF8B00]" />,
      title: "Know Your Real Level",
      description: "Obtain a secure performance scorecard and verified rank. Export your live, tamper-proof ZeToD profile link directly to regional recruiters, GitHub repos, and CV listings.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0A0A0A] relative border-t border-zinc-900/80">
      {/* Accent glow on top right */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00875A]/4 rounded-full blur-[110px] pointer-events-none" />

      <Container size="xl">
        <SectionTitle
          tag="Workflows"
          title="From Code Commit To Live Vet In Three Steps"
          subtitle="Designed by developers for developers. Check how our sandboxed testing pipeline automates real candidate code evaluations."
          align="center"
        />

        <div className="relative mt-16">
          {/* Connector horizontal lines for larger screens */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-zinc-800/20 via-zinc-800 to-zinc-800/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4 group">
                {/* Visual Circle Node */}
                <div className="relative w-16 h-16 rounded-full bg-zinc-950 flex items-center justify-center border-2 border-zinc-900 group-hover:border-[#0052CC]/60 transition-all duration-300 shadow-xl mb-6">
                  {item.icon}
                  
                  {/* Floating index label */}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-850 font-mono text-[10px] font-bold text-[#FF8B00]">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Informative block showing developer target */}
        <div className="mt-20 p-8 border border-zinc-800/60 bg-[#121212]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg">
              <Network className="w-6 h-6 text-[#00875A]" />
            </div>
            <div>
              <h4 className="text-md font-heading font-medium text-white mb-1">
                Are you an open-source technical developer in Africa?
              </h4>
              <p className="text-xs text-zinc-500 max-w-xl">
                ZeToD focuses closely on mapping talent throughout regional communities inside Nigeria, Kenya, Ghana, Senegal, South Africa, and more — boosting visibility for global engineering hires.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => {
              const el = document.getElementById("faq");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 text-xs font-mono font-medium text-zinc-400 hover:text-white border border-zinc-800 rounded hover:border-zinc-700 transition cursor-pointer"
          >
            VETTING POLICIES &rarr;
          </button>
        </div>
      </Container>
    </section>
  );
}
