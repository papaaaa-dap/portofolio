"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function NeoCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.closest("[role='button']");

    if (cursorRef.current) {
      if (isClickable) {
        cursorRef.current.style.width = "32px";
        cursorRef.current.style.height = "32px";
        cursorRef.current.style.borderWidth = "4px";
      } else {
        cursorRef.current.style.width = "20px";
        cursorRef.current.style.height = "20px";
        cursorRef.current.style.borderWidth = "3px";
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver, true);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver, true);
      document.body.style.cursor = "auto";
    };
  }, [handleMouseMove, handleMouseOver]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none bg-cream border-dark"
      style={{
        width: 20,
        height: 20,
        borderStyle: "solid",
        borderWidth: 3,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        boxShadow: "2px 2px 0px #0A0A0A",
        transition: "width 0.15s ease, height 0.15s ease, border-width 0.15s ease",
      }}
    />
  );
}
