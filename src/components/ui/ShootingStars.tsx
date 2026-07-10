"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ShootingStar = () => {
  const [position, setPosition] = useState({ top: "0%", left: "0%", delay: 0, repeatDelay: 3 });

  useEffect(() => {
    const randomTop = Math.floor(Math.random() * 60) + "%";
    const randomLeft = Math.floor(Math.random() * 80) + 20 + "%";
    const randomDelay = Math.random() * 10;
    const repeatDelay = Math.random() * 5 + 3;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPosition({ top: randomTop, left: randomLeft, delay: randomDelay, repeatDelay });
  }, []);

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: [0, -500],
        y: [0, 500],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: position.repeatDelay,
        delay: position.delay,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: "3px",
        height: "3px",
        background: "#0A1F44",
        boxShadow: "0 0 8px rgba(10, 31, 68, 0.4)",
        borderRadius: "50%",
        zIndex: 5,
      }}
    >
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "200px",
          height: "1.5px",
          background: "linear-gradient(to left, rgba(10, 31, 68, 0.4), transparent)",
          transform: "translate(-0%, -50%) rotate(-45deg)",
          transformOrigin: "left center",
        }}
      />
    </motion.div>
  );
};

export const ShootingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {[...Array(12)].map((_, i) => (
        <ShootingStar key={i} />
      ))}
    </div>
  );
};
