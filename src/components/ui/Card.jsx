import React from "react";

export default function Card({
  children,
  className = "",
  glowColor = "primary", // primary, secondary, accent, none
  hoverAnimation = true,
  onClick,
  id,
}) {
  const glowStyles = {
    primary: "hover:border-[#0052CC]/50 hover:shadow-[0_0_30px_rgba(0,82,204,0.15)]",
    secondary: "hover:border-[#00875A]/50 hover:shadow-[0_0_30px_rgba(0,135,90,0.12)]",
    accent: "hover:border-[#FF8B00]/50 hover:shadow-[0_0_30px_rgba(255,139,0,0.12)]",
    none: "",
  };

  return (
    <div
      id={id}
      onClick={onClick}
      className={`
        relative rounded-xl p-6 transition-all duration-300 md:duration-500
        surface-glass border-glass text-white
        ${hoverAnimation ? `hover:-translate-y-1 hover:bg-white/10 ${glowStyles[glowColor]}` : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Subtle top glare line */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
