import React from "react";

export default function Container({
  children,
  className = "",
  size = "xl", // sm, md, lg, xl
  id,
}) {
  const maxWidths = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidths[size]} ${className}`}
    >
      {children}
    </div>
  );
}
