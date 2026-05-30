import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does ZeToD work?",
      answer: "Candidates register and choose one of our specific assessments. When the timer starts, you are given a coding environment with interactive instructions. You write Python code inside the interface. Upon submission, we spin up sandboxed environments that run custom tests, evaluating parsing logic, absolute correctness, memory heap allocations, and microsecond response latencies.",
    },
    {
      question: "Is ZeToD free?",
      answer: "Yes, ZeToD is fully open-source and free for developers to take assessments, track performance data, and share their portfolios. Our main vision is to remove barriers for talented developers in Africa to enter global tech, replacing expensive corporate certificates with real, verifiable metrics.",
    },
    {
      question: "What technologies are supported?",
      answer: "Currently, we focus primarily on Python, evaluating Core OOP structures, standard data manipulation algorithms, algorithmic caching, recursive tasks, concurrency, and FastAPI/Django server logics. More backend tracks are scheduled in the open-source pipeline.",
    },
    {
      question: "How are assessments evaluated?",
      answer: "Rather than scoring solely on passing unit tests, our AST (Abstract Syntax Tree) engine inspects complexity models (Big-O analysis) and tests your solutions under severe payloads (100k+ inputs). If your code causes excessive time complexity (O(N^2)) when a linear lookup (O(N)) is possible, our system highlights the exact code lines and lowers efficiency benchmarks.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] relative border-t border-zinc-900">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#0052CC]/4 rounded-full blur-[100px] pointer-events-none" />

      <Container size="md">
        <SectionTitle
          tag="Information Center"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about taking code assessments, data privacy, and sharing credentials with global hiring teams."
          align="center"
        />

        <div className="flex flex-col gap-4 relative z-10 mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                id={`faq-card-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                glowColor={isOpen ? "primary" : "none"}
                hoverAnimation={false}
                className={`cursor-pointer bg-[#111111]/80 hover:bg-[#131313]/90 border ${
                  isOpen ? "border-[#0052CC]/50" : "border-zinc-850"
                } transition-all duration-300`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 ${isOpen ? "text-[#0052CC]" : "text-zinc-500"} transition-colors`} />
                    <h3 className="text-base md:text-lg font-heading font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <span className={`p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </div>

                {/* Smooth visual accordion content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[300px] opacity-100 mt-5 pt-4 border-t border-zinc-900" : "max-h-0 opacity-0"
                }`}>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
