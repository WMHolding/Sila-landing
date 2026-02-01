"use client";

import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  blurAmount?: number;
  staggerDelay?: number;
  animateOpacity?: boolean;
  animateY?: boolean;
}

export function BlurText({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  blurAmount = 10,
  staggerDelay = 0.02,
  animateOpacity = true,
  animateY = true
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <h1 ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {word.split("").map((char) => {
            const currentIndex = charIndex++;
            return (
              <span
                key={currentIndex}
                style={{
                  display: "inline-block",
                  opacity: isVisible ? 1 : (animateOpacity ? 0 : 1),
                  filter: isVisible ? "blur(0px)" : `blur(${blurAmount}px)`,
                  transform: isVisible ? "translateY(0)" : (animateY ? "translateY(8px)" : "translateY(0)"),
                  transition: `all ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
                  transitionDelay: `${delay + currentIndex * staggerDelay}s`,
                  willChange: "filter, transform, opacity",
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && " "}
        </span>
      ))}
    </h1>
  );
}
