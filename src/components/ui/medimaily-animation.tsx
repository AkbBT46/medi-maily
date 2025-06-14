
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
        d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
        style={{ strokeLinecap: "round" }}
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
        d="M80 170 L80 50 L140 50 M80 110 L130 110 M80 170 L140 170"
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
        d="M170 170 L170 30 M170 50 Q220 50 220 110 Q220 170 170 170"
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
        d="M250 50 L250 170 M250 35 L250 35"
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
        d="M300 170 L300 50 L330 50 L360 120 L390 50 L420 50 L420 170"
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
        d="M450 170 L470 50 L490 170 M460 130 L480 130"
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
        d="M520 50 L520 170 M520 35 L520 35"
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
        d="M550 30 L550 170"
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
        d="M580 50 L600 110 L620 50 M600 110 L600 190"
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
