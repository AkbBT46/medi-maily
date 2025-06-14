
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
      strokeWidth="8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>MediMaily</title>

      {/* M */}
      <motion.path
        d="M30 170 L30 50 L60 50 L90 120 L120 50 L150 50 L150 170"
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
        d="M180 170 L180 50 L240 50 M180 110 L230 110 M180 170 L240 170"
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
        d="M270 170 L270 30 M270 50 Q320 50 320 110 Q320 170 270 170"
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
        d="M350 50 L350 170 M350 35 L350 35"
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
        d="M400 170 L400 50 L430 50 L460 120 L490 50 L520 50 L520 170"
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
        d="M550 170 L570 50 L590 170 M560 130 L580 130"
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
        d="M620 50 L620 170 M620 35 L620 35"
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
        d="M650 30 L650 170"
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
        d="M680 50 L700 110 L720 50 M700 110 L700 190"
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
