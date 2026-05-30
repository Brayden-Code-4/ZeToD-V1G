import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  onClick,
  to,
  type = "button",
  variant = "primary", // primary, secondary, outline, accent, text
  size = "md", // sm, md, lg
  className = "",
  disabled = false,
  id,
}) {
  const baseStyle = "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none select-none cursor-pointer overflow-hidden";
  
  const sizes = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base duration-300",
  };

  const variants = {
    primary: "bg-[#0052CC] text-white hover:bg-[#0043a4] hover:shadow-[0_0_20px_rgba(0,82,204,0.4)] border border-transparent",
    secondary: "bg-[#00875A] text-white hover:bg-[#006e49] hover:shadow-[0_0_20px_rgba(0,135,90,0.4)] border border-transparent",
    accent: "bg-[#FF8B00] text-black font-semibold hover:bg-[#e67d00] hover:shadow-[0_0_20px_rgba(255,139,0,0.4)] border border-transparent",
    outline: "border border-zinc-800 text-white hover:bg-zinc-900/60 hover:text-white hover:border-zinc-700",
    text: "text-zinc-400 hover:text-white hover:bg-zinc-900/40 px-3 py-1.5",
  };

  const content = (
    <span className="flex items-center gap-2">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link
        id={id}
        to={to}
        className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {content}
    </button>
  );
}
