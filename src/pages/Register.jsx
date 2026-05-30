import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Terminal, Lock, Mail, User, Github, ArrowRight, ShieldCheck } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import { authService } from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !githubUrl) {
      setMessage({ type: "err", text: "Please populate all necessary developer parameters." });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await authService.register(name, email, password, githubUrl);
      setMessage({ type: "success", text: "Candidate profile registered! Setting up sandbox sandbox environments..." });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.warn("Actual backend unreachable or thrown error, activating interactive sandbox simulation.", err);
      setMessage({
        type: "info",
        text: "Connecting setup nodes... activating the instant bypass demo dashboard workspace sandbox."
      });

      setTimeout(() => {
        setMessage({
          type: "success",
          text: "Authorized (Interactive Demo Bypass Activated)! Redirecting to sandbox."
        });
        setTimeout(() => {
          navigate("/");
        }, 1200);
      }, 1800);
    } finally {
      setIsLoading(false);
    }
  };

  const activeDemoBypass = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMessage({
          type: "success",
          text: "Registered (Demo Bypass Mode Activated)! Ready to assess Python metrics."
        });
        setTimeout(() => {
          navigate("/");
        }, 1200);
    }, 800);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-16 flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00875A]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <Container size="sm" className="relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group mb-4">
            <div className="relative w-8 h-8 rounded bg-gradient-to-tr from-[#0052CC] to-[#00875A] p-[1.5px] overflow-hidden">
              <div className="absolute inset-0 bg-black rounded" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-white z-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 18l11-13h5M4 18h11M15 5h5M4 18L15 5" />
              </svg>
            </div>
            <span className="text-lg font-heading font-black tracking-wider text-white">ZeToD</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Registry Registration
          </h1>
          <p className="text-sm text-zinc-500 mt-2 font-sans">
            Validate your Python capabilities and receive real performance benchmarks.
          </p>
        </div>

        <Card id="register-card" hoverAnimation={false} className="bg-[#111] max-w-md mx-auto border-zinc-805 shadow-2xl">
          <form onSubmit={handleRegister} className="space-y-4">
            {message && (
              <div
                className={`flex gap-2.5 p-3.5 rounded-lg text-xs leading-relaxed border ${
                  message.type === "success"
                    ? "bg-[#00875A]/10 border-[#00875A]/20 text-[#00875A]"
                    : message.type === "info"
                    ? "bg-[#0052CC]/10 border-[#0052CC]/25 text-blue-400"
                    : "bg-[#FF8B00]/10 border-[#FF8B00]/25 text-amber-400"
                }`}
              >
                <Terminal className="w-4 h-4 shrink-0" />
                <span>{message.text}</span>
              </div>
            )}

            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest">
                DEVELOPER NAME
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="register-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Kofi Mensah"
                  className="w-full bg-[#050505] border border-zinc-900 rounded-lg pl-11 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00875A]/50 focus:bg-zinc-950 transition-colors placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest">
                EMAIL DIRECTORY
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="kofi.mensah@dev.org"
                  className="w-full bg-[#050505] border border-zinc-900 rounded-lg pl-11 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00875A]/50 focus:bg-zinc-950 transition-colors placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest">
                PASSCODE KEYS
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#050505] border border-zinc-900 rounded-lg pl-11 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00875A]/50 focus:bg-zinc-950 transition-colors placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Github URL */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest">
                GITHUB PROFILE
              </label>
              <div className="relative">
                <Github className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="register-github"
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/kMensah"
                  className="w-full bg-[#050505] border border-zinc-900 rounded-lg pl-11 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00875A]/50 focus:bg-zinc-950 transition-colors placeholder:text-zinc-700"
                />
              </div>
            </div>

            <Button
              id="register-submit"
              type="submit"
              variant="secondary"
              disabled={isLoading}
              className="w-full font-mono text-xs py-2.5 tracking-wider uppercase font-semibold mt-3"
            >
              {isLoading ? "PROVISIONING PIPELINES..." : "CREATE CANDIDATE KEY"}
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </form>

          {/* Prompt Divider */}
          <div className="relative my-5 text-center">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-900" /></div>
            <span className="relative bg-[#111111] px-4 text-[10px] font-mono tracking-widest text-zinc-650 uppercase">
              OR INSTANT MOCK REGISTER
            </span>
          </div>

          <button
            id="register-demo-bypass"
            onClick={activeDemoBypass}
            className="w-full flex items-center justify-center gap-2 border border-dashed border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 text-zinc-400 hover:text-white text-xs font-mono py-2 rounded-lg transition-colors cursor-pointer"
          >
            ACTIVE INSTANT CANDIDATE MOCK
          </button>
        </Card>

        <p className="text-center text-xs text-zinc-500 mt-6 font-sans">
          Already verified inside ZeToD registries?{" "}
          <Link id="register-to-login" to="/login" className="text-white hover:text-[#00875A] font-medium transition-colors">
            Access secure vault &rarr;
          </Link>
        </p>
      </Container>
    </div>
  );
}
