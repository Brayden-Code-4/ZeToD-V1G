import React from "react";
import { Compass, GitBranch, ShieldCheck, Award } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";

export default function StatsSection() {
  const stats = [
    {
      id: "stat-benchmark",
      icon: <Compass className="w-6 h-6 text-[#0052CC]" />,
      title: "Real Skill Benchmark",
      value: "99.4%",
      description: "Match rate between ZeToD automated code evaluations and professional Python developer audits.",
      color: "primary",
    },
    {
      id: "stat-opensource",
      icon: <GitBranch className="w-6 h-6 text-[#00875A]" />,
      title: "100% Open Source",
      value: "MIT/Apache",
      description: "Auditable grading mechanisms and containerized sandboxes inspectable on GitHub.",
      color: "secondary",
    },
    {
      id: "stat-assessments",
      icon: <ShieldCheck className="w-6 h-6 text-[#FF8B00]" />,
      title: "Fast Assessments",
      value: "25 min",
      description: "Concise algorithm challenges built to measure algorithmic speed and parsing memory footprints.",
      color: "accent",
    },
    {
      id: "stat-jobready",
      icon: <Award className="w-6 h-6 text-[#0052CC]" />,
      title: "Job Readiness",
      value: "3.5x",
      description: "Increase in recruitment query responses for applicants with high-tier verified ZeToD scores.",
      color: "primary",
    },
  ];

  return (
    <section id="stats" className="py-20 bg-[#0A0A0A] relative border-y border-zinc-900/60">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.id}
              id={stat.id}
              glowColor={stat.color}
              className="flex flex-col h-full bg-[#111111]/80 hover:bg-[#141414] border-zinc-800/80 hover:border-zinc-700/80 duration-500"
            >
              <div className="flex items-center gap-3.5 mb-4 border-b border-zinc-900 pb-3">
                <div className="p-2 rounded-lg bg-zinc-900/40">
                  {stat.icon}
                </div>
                <h3 className="text-sm font-semibold text-zinc-300 font-sans">
                  {stat.title}
                </h3>
              </div>
              
              <div className="mt-auto">
                <p className="text-3xl md:text-4xl font-heading font-black text-white tracking-wider mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
