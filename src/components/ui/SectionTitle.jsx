import React from "react";

export default function SectionTitle({
  title,
  subtitle,
  tag,
  align = "center", // center, left
  className = "",
  id,
}) {
  const isCenter = align === "center";

  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {tag && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800/80 mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC] animate-pulse" />
          {tag}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-base md:text-lg text-zinc-400 max-w-2xl ${isCenter ? "mx-auto" : ""} font-sans font-normal leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
