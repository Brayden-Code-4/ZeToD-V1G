import React from "react";
import { Quote, MessageSquare, Briefcase, Award } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Testimonials() {
  const testimonials = [
    {
      id: "testi-1",
      name: "Tobi Adebayo",
      role: "Senior backend dev",
      location: "Lagos, Nigeria",
      avatarBg: "bg-radial from-[#0052CC] to-zinc-900",
      quote: "ZeToD helped me verify my code efficiency score without navigating generic, time-wasting certificates. Sharing my verified index URL directly got me interviews with three top European startups in weeks.",
      score: "Level 4 (Elite)",
      placement: "Hired remote @ ScalableIO",
    },
    {
      id: "testi-2",
      name: "Salma Diallo",
      role: "Python Engineering Lead",
      location: "Dakar, Senegal",
      avatarBg: "bg-radial from-[#00875A] to-zinc-900",
      quote: "No multiple choice, strictly pure engineering algorithms. When assessing candidate applications, we now bypass standard resumes and request their live ZeToD scores. It has shortened our screening lifecycle by 70%.",
      score: "Level 5 (Champion)",
      placement: "Lead Hires @ TekTek Senegal",
    },
    {
      id: "testi-3",
      name: "Joseph Kamau",
      role: "Systems Architect",
      location: "Nairobi, Kenya",
      avatarBg: "bg-radial from-[#FF8B00] to-zinc-900",
      quote: "I loved the sandbox analytics. Knowing exactly how many microseconds my dictionary compression functions saved under extreme mock payloads is incredibly cool. This is a game-changer for African developers.",
      score: "Level 4 (Elite)",
      placement: "Hired remote @ CloudCore",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#0052CC]/4 rounded-full blur-[130px] pointer-events-none" />

      <Container size="xl">
        <SectionTitle
          tag="Success Stories"
          title="Engineers Leading The Curve"
          subtitle="Discover how developers and tech managers use ZeToD indices to stand out in international recruitment cycles and bypass resume bloating."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              id={t.id}
              glowColor="primary"
              className="flex flex-col bg-[#111111]/80 hover:bg-[#131313] border border-zinc-905 flex-1 duration-500"
            >
              <Quote className="w-8 h-8 text-zinc-700 mb-6" />

              <p className="text-zinc-300 text-sm leading-relaxed font-sans mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Developer Avatar detail */}
              <div className="mt-auto border-t border-zinc-900 pt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Styled Avatar Placeholder */}
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center font-bold font-mono text-white border border-zinc-800 text-xs`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-medium text-white">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-sans">
                      {t.role} &bull; {t.location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-[10px] font-mono text-[#FF8B00] bg-[#FF8B00]/10 px-2 py-0.5 rounded border border-[#FF8B00]/15 mb-1.5 inline-block">
                    {t.score}
                  </span>
                  <span className="block text-[10px] text-zinc-500 font-mono">
                    {t.placement}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
