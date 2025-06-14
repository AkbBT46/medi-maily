
"use client";

import type { TargetAndTransition } from "motion/react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function MediMailyAnimation({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>MediMaily</title>

      {/* M */}
      <motion.path
        d="M20 170 L20 50 L50 50 L70 120 L90 50 L120 50 L120 170"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />

      {/* e */}
      <motion.path
        d="M150 170 L150 50 L210 50 M150 110 L200 110 M150 170 L210 170"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(0.2),
          opacity: { duration: 0.3, delay: calc(0.2) },
        }}
      />

      {/* d */}
      <motion.path
        d="M240 170 L240 30 M240 50 Q290 50 290 110 Q290 170 240 170"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.35, delay: calc(0.4) },
        }}
      />

      {/* i */}
      <motion.path
        d="M320 50 L320 170 M320 35 L320 35"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(0.6),
          opacity: { duration: 0.2, delay: calc(0.6) },
        }}
      />

      {/* M */}
      <motion.path
        d="M370 170 L370 50 L400 50 L430 120 L460 50 L490 50 L490 170"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(0.8),
          opacity: { duration: 0.4, delay: calc(0.8) },
        }}
      />

      {/* a */}
      <motion.path
        d="M520 170 L540 50 L560 170 M530 130 L550 130"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(1.0),
          opacity: { duration: 0.3, delay: calc(1.0) },
        }}
      />

      {/* i */}
      <motion.path
        d="M590 50 L590 170 M590 35 L590 35"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(1.2),
          opacity: { duration: 0.2, delay: calc(1.2) },
        }}
      />

      {/* l */}
      <motion.path
        d="M620 30 L620 170"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          delay: calc(1.4),
          opacity: { duration: 0.25, delay: calc(1.4) },
        }}
      />

      {/* y */}
      <motion.path
        d="M650 50 L670 110 L690 50 M670 110 L670 190"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(1.6),
          opacity: { duration: 0.3, delay: calc(1.6) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export { MediMailyAnimation };
