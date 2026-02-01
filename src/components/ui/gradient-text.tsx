"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className = "",
  from = "#D4AF37",
  via,
  to = "#F59E0B",
  animate = false,
}: GradientTextProps) {
  const gradientStyle = via
    ? `linear-gradient(135deg, ${from}, ${via}, ${to})`
    : `linear-gradient(135deg, ${from}, ${to})`;

  return (
    <span
      className={`bg-clip-text text-transparent ${animate ? "animate-gradient-x" : ""} ${className}`}
      style={{
        backgroundImage: gradientStyle,
        backgroundSize: animate ? "200% 200%" : "100% 100%",
      }}
    >
      {children}
    </span>
  );
}
