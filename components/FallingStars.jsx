import { motion } from "framer-motion";
import React from "react";

const stars = Array.from({ length: 30 });

export default function FallingStars() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {stars.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: "2px",
            height: "2px",
            backgroundColor: "#31f9c7",
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 100}px`,
            opacity: 0.6,
          }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: Math.random() * 12 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
