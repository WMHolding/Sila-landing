"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type TextEffectProps = {
  children: string;
  per?: "word" | "char" | "line";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?:
    | "blur"
    | "fade"
    | "slide"
    | "fade-in-blur"
    | "scale"
    | "shake";
  delay?: number;
  trigger?: boolean;
  speedSegment?: number;
  onAnimationComplete?: () => void;
};

const defaultStaggerTimes: Record<"char" | "word" | "line", number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const defaultVariants = {
  blur: {
    hidden: { filter: "blur(12px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in-blur": {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
  shake: {
    hidden: { x: 0 },
    visible: { x: [-5, 5, -5, 5, 0] },
  },
};

export function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  speedSegment,
  onAnimationComplete,
}: TextEffectProps) {
  const MotionComponent = motion[as] as typeof motion.div;
  const selectedVariants: Variants = preset
    ? defaultVariants[preset]
    : variants?.item
    ? variants.item
    : defaultVariants.fade;

  let segments: string[] = [];

  if (per === "word") {
    segments = children.split(" ");
  } else if (per === "char") {
    segments = children.split("");
  } else if (per === "line") {
    segments = children.split("\n");
  }

  const staggerTime = speedSegment || defaultStaggerTimes[per];

  const containerVariants: Variants = variants?.container || {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerTime,
        delayChildren: delay,
      },
    },
  };

  return (
    <MotionComponent
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={selectedVariants}
          style={{ display: "inline-block", whiteSpace: per === "line" ? "pre-wrap" : "pre" }}
        >
          {segment}
          {per === "word" && index < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
