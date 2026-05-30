import React from "react";
import { Server, Activity, Compass, Bookmark, Terminal, ShieldAlert, BadgeCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function FeaturesSection() {
  const features = [
    {
      id: "feature-realworld",
      icon: <Server className="w-5 h-5 text-[#0052CC]" />,
      title: "Real-World Evaluation",
      description: "No simple multiple-choice Q&As or trick trivia. ZeToD launches complete sandboxed Python execution kernels to rate candidate code under actual runtime conditions and computational bounds.",
      accent: "primary",
    },
    {
      id: "feature-speed",
      icon: <Activity className="w-5 h-5 text-[#00875A]" />,
      title: "Speed & Precision Analysis",
      description: "Our testing harness measures execution speeds in microseconds and quantifies heap sizing profiles. Your code is thoroughly stressed against big-O edge tests to identify real memory-leak profiles.",
      accent: "secondary",
    },
    {
      id: "feature-honest",
      icon: <BadgeCheck className="w-5 h-5 text-[#FF8B00]" />,
      title: "Honest Skill Benchmark",
      description: "We bypass certification fluff to create real engineering metrics recruiters trust. Discover your actual standing in mathematical logic, concurrency, OOP structures, and memory efficiency.",
      accent: "accent",
    },
    {
      id: "feature-personalized",
      icon: <Terminal className="w-5 h-5 text-[#0052CC]" />,
      title: "Improvement Guidance",
      description: "Every assessment calculates personalized code feedback, identifying critical bottleneck lines of code in your Python answers and recommending explicit Big-O adjustments to power your skills.",
      accent: "primary",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0052CC]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl">
        <SectionTitle
          tag="Engineering Features"
          title="Eliminating Fluff. Empowering Real Python Craft."
          subtitle="Explore the sophisticated features built into ZeToD to deliver real, auditable proof of your engineering qualifications."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {features.map((feature) => (
            <Card
              key={feature.id}
              id={feature.id}
              glowColor={feature.accent}
              className="group flex flex-col items-start bg-[#111111]/70 border border-zinc-900 duration-500 hover:bg-[#131313]/90 hover:border-zinc-800"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800/80 group-hover:border-zinc-700 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white group-hover:text-white transition duration-300">
                  {feature.title}
                </h3>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
