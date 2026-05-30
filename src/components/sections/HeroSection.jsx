import React, { useState, useEffect } from "react";
import { Terminal, Code2, Play, CheckCircle2, Zap, Target, Award, Cpu, AlertTriangle } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("challenge"); // challenge, logs, coverage
  const [simulatedCode, setSimulatedCode] = useState(
    `def compute_metrics(records):\n    # TODO: Optimize lookup from O(N) to O(1)\n    seen = set()\n    duplicate_count = 0\n    for item in records:\n        if item in seen:\n            duplicate_count += 1\n        seen.add(item)\n    return len(seen), duplicate_count`
  );
  const [isRunning, setIsRunning] = useState(false);
  const [runLogs, setRunLogs] = useState([
    "// Click 'RUN TEST HARNESS' to evaluate your code speed & memory footprints",
  ]);
  const [metrics, setMetrics] = useState({
    precision: 94.2,
    speed: 18,
    memory: "4.2 MB",
    score: 872,
    badge: "Elite Pythonist",
  });

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRunLogs((prev) => [...prev, "⚡ Initializing evaluation runtime environment...", "🔍 Analyzing Abstract Syntax Tree (AST)..."]);
    
    // Step simulations
    setTimeout(() => {
      setRunLogs((prev) => [
        ...prev,
        "✓ AST analysis completed: No syntax exceptions found",
        "⚙ Running test suites: [01_lookup, 02_large_scale, 03_edge_cases]"
      ]);
    }, 800);

    setTimeout(() => {
      setRunLogs((prev) => {
        const next = [
          ...prev,
          "✓ Test 01_lookup passed in 0.04ms",
          "✓ Test 02_large_scale passed in 4.10ms [Time Complexity: O(N)]",
          "✓ Test 03_edge_cases passed (Duplicate records with None entries)",
          "🚀 Success: Optimization verified!",
        ];
        return next;
      });
      setIsRunning(false);
      setMetrics({
        precision: 99.8,
        speed: 4, // Faster!
        memory: "2.1 MB", // More efficient!
        score: 980,
        badge: "ZeToD Champion",
      });
    }, 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0A0A0A]">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#0052CC]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00875A]/8 blur-[150px] pointer-events-none" />
      
      {/* Visual top subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium tracking-wider text-slate-300 uppercase rounded-full bg-zinc-900 border border-zinc-800 mb-6 shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00875A] animate-pulse" />
              Empowering African Python Excellence
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight mb-6">
              Measure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#00875A] to-[#FF8B00]">Real Python</span> Skill Level
            </h1>

            <p className="text-lg text-zinc-400 font-sans leading-relaxed mb-10 max-w-xl">
              ZeToD evaluates your precision, speed, and real-time problem-solving ability against world-class, production-ready engineering standards. Zero multiple-choice tests, one hundred percent runnable Python challenges.
            </p>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button id="hero-cta-start" to="/register" variant="primary" size="lg" className="shadow-[0_4px_20px_rgba(0,82,204,0.3)]">
                Start Assessment
                <Zap className="w-4 h-4 fill-white text-white" />
              </Button>
              <button
                id="hero-cta-learn"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 text-sm font-medium text-zinc-400 hover:text-white transition duration-300 border border-zinc-800 rounded-lg hover:border-zinc-700 hover:bg-zinc-900/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="mt-12 pt-8 border-t border-zinc-900 w-full grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-white">100%</span>
                <span className="text-xs text-zinc-500 font-mono">Hands-on Code</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-white">&lt; 30m</span>
                <span className="text-xs text-zinc-500 font-mono">Per Assessment</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-white">400+</span>
                <span className="text-xs text-zinc-500 font-mono">African Devs Synced</span>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Sandbox / Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0052CC]/15 to-[#00875A]/10 rounded-2xl blur-[80px] -z-10 animate-pulse duration-[8000ms]" />
            
            <div className="surface-glass border-glass rounded-xl overflow-hidden glow-primary relative">
              
              {/* Header Tab simulation */}
              <div className="flex items-center justify-between px-4 py-3.5 bg-black/40 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                
                <div className="flex bg-white/5 p-1 rounded-md border border-white/5">
                  <button
                    id="sandbox-tab-challenge"
                    onClick={() => setActiveTab("challenge")}
                    className={`px-3 py-1 text-xs font-mono font-medium rounded transition ${
                      activeTab === "challenge" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    sandbox.py
                  </button>
                  <button
                    id="sandbox-tab-logs"
                    onClick={() => setActiveTab("logs")}
                    className={`px-3 py-1 text-xs font-mono font-medium rounded transition ${
                      activeTab === "logs" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Test Logs
                  </button>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#00875A]/10 border border-[#00875A]/20">
                  <span className="w-1.5 h-1.5 bg-[#00875A] rounded-full animate-ping" />
                  <span className="text-[10px] text-[#00875A] font-mono leading-none font-semibold">Live Sandbox</span>
                </div>
              </div>

              {/* Main Tab Area */}
              {activeTab === "challenge" ? (
                <div className="p-5 font-mono text-zinc-300 text-xs leading-relaxed overflow-x-auto min-h-[190px]">
                  <div className="flex items-center gap-2 text-[#0052CC] mb-3 border-b border-white/5 pb-2">
                    <Terminal className="w-4 h-4 text-[#0052CC]" />
                    <span className="text-white/80">Optimize Set Membership Complexity</span>
                  </div>
                  <pre className="text-[#A0AEC0]">{simulatedCode}</pre>
                </div>
              ) : (
                <div className="p-5 bg-black/50 font-mono text-[11px] text-zinc-400 min-h-[190px] overflow-y-auto max-h-[190px]">
                  {runLogs.map((log, index) => (
                    <div
                      key={index}
                      className={`${
                        log.startsWith("✓")
                          ? "text-[#00875A]"
                          : log.startsWith("🚀")
                          ? "text-white font-bold"
                          : log.startsWith("⚡")
                          ? "text-[#0052CC]"
                          : "text-zinc-500"
                      } mb-1`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}

              {/* Dashboard metrics strip inside mockup */}
              <div className="grid grid-cols-4 gap-px bg-white/5 border-t border-white/5">
                <div className="bg-white/[0.02] p-4 text-center border-r border-white/5">
                  <span className="block text-[10px] text-zinc-500 uppercase font-mono tracking-wider">Skill Score</span>
                  <span className="block text-lg font-bold font-heading text-white mt-1">{metrics.score}</span>
                </div>
                <div className="bg-white/[0.02] p-4 text-center border-r border-white/5">
                  <span className="block text-[10px] text-zinc-500 uppercase font-mono tracking-wider">Precision</span>
                  <span className="block text-lg font-bold font-heading text-[#00875A] mt-1">{metrics.precision}%</span>
                </div>
                <div className="bg-white/[0.02] p-4 text-center border-r border-white/5">
                  <span className="block text-[10px] text-zinc-500 uppercase font-mono tracking-wider">Latency</span>
                  <span className="block text-lg font-bold font-heading text-[#FF8B00] mt-1">{metrics.speed}ms</span>
                </div>
                <div className="bg-white/[0.02] p-4 text-center">
                  <span className="block text-[10px] text-zinc-500 uppercase font-mono tracking-wider">Allocation</span>
                  <span className="block text-xs font-bold font-mono text-zinc-300 mt-2.5">{metrics.memory}</span>
                </div>
              </div>

              {/* Interaction Panel */}
              <div className="p-4 bg-black/40 border-t border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FF8B00]" />
                  <span className="text-xs font-mono text-zinc-300">{metrics.badge}</span>
                </div>
                
                <button
                  id="sandbox-run-btn"
                  onClick={() => {
                    setActiveTab("logs");
                    runSimulation();
                  }}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-4 py-2 hover:shadow-[0_0_15px_rgba(0,135,90,0.3)] bg-[#0052CC] hover:bg-[#0047b3] text-white font-mono text-xs font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3 h-3 fill-white text-white" />
                  {isRunning ? "Running Sandbox..." : "RUN TEST HARNESS"}
                </button>
              </div>

            </div>

            {/* Glowing floating label */}
            <div className="absolute -top-6 -right-6 px-4 py-2 bg-[#FF8B00] text-black text-xs font-bold rounded-lg rotate-12 glow-accent select-none pointer-events-none">
              ELITE LEVEL
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
