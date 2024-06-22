"use client";
import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  direction: "x" | "y";
  initialPlace ?: number;
};

const RevealAnimate = ({ children, className, direction, initialPlace = -100 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainAnimate = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainAnimate.start("visible");
    }
  }, [isInView, mainAnimate]);

  const variant = {
    hidden: { opacity: 0, [direction]: initialPlace },
    visible: { opacity: 1, [direction]: 0 },
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate={mainAnimate}
      transition={{ delay: 0.1, duration: 0.2 }}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimate;
