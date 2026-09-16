"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Heart } from "lucide-react";

export const ScrollProgress: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-pastel-pink-100/60 pointer-events-none"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-pastel-pink-300 via-pastel-pink-500 to-pastel-rose-500 origin-left relative"
        style={{ scaleX }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-md border border-pastel-pink-300 flex items-center justify-center">
          <Heart className="w-2.5 h-2.5 text-pastel-pink-600 fill-pastel-pink-500 animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

