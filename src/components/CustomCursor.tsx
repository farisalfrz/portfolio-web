"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseEnterHandler = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.closest('[role="button"]')
        ) {
          setCursorVariant("interactive");
        }
      }
    };
    const mouseLeaveHandler = () => {
      setCursorVariant("default");
    };
    document.addEventListener("mouseover", mouseEnterHandler);
    document.addEventListener("mouseout", mouseLeaveHandler);
    return () => {
      document.removeEventListener("mouseover", mouseEnterHandler);
      document.removeEventListener("mouseout", mouseLeaveHandler);
    };
  }, []);

  const variants = {
    default: {
      x: x - 10,
      y: y - 10,
      height: 20,
      width: 20,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      mixBlendMode: "difference",
      boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
    },
    interactive: {
      x: x - 20,
      y: y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 255, 255, 0)", 
      border: "2px solid #3b82f6", 
      mixBlendMode: "normal", 
      boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)", 
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[9999] pointer-events-none"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 1000, damping: 40 }}
    />
  );
};

export default CustomCursor;