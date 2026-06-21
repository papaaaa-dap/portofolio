/**
 * Hero.tsx
 * Section pertama — nama besar, tagline, badge, 2 CTA button.
 * Animasi: stagger dari bawah saat page load, floating elements.
 * Background: dot grid pattern.
 */

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import NeoButton from "@/components/ui/NeoButton";

// === TYPEWRITER HOOK ===
function useTypewriter(words: string[], speed = 100, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          // Mengetik
          setDisplayed(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            // Tunggu sebelum menghapus
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          // Menghapus
          setDisplayed(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setCharIndex(0);
            setWordIndex((w) => (w + 1) % words.length);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

// === ANIMATION VARIANTS ===
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// === FLOATING DECORATIVE ELEMENTS ===
const floatingItems = [
  { label: "AI", color: "bg-yellow", delay: 0, x: "10%", y: "15%" },
  { label: "Pustaka", color: "bg-tosca", delay: 1.5, x: "82%", y: "20%" },
  { label: "Prompt", color: "bg-coral", delay: 0.8, x: "75%", y: "70%" },
  { label: "Ideas", color: "bg-yellow", delay: 2, x: "8%", y: "72%" },
];

export default function Hero() {
  const typewriterText = useTypewriter(
    ["Prompt Engineer.", "AI Enthusiast.", "Info Science Student.", "Vibe Coder."],
    90,
    1800
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid noise-overlay"
    >
      {/* Overlay cream tipis agar dot tidak terlalu mencolok */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(255,251,240,0.88)" }}
      />

      {/* === FLOATING DECORATIVE ELEMENTS === */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.label}
          className={`absolute hidden md:flex items-center gap-1 ${item.color} border-[3px] border-dark px-3 py-1.5 font-heading font-bold text-sm text-dark z-10`}
          style={{
            left: item.x,
            top: item.y,
            boxShadow: "3px 3px 0px #0A0A0A",
          }}
          animate={{
            y: [0, -12, -6, 0],
            rotate: [0, 2, -1, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          {item.label}
        </motion.div>
      ))}

      {/* === MAIN CONTENT === */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-6 py-24 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge "Open to Collaborate" */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="inline-flex items-center gap-2 bg-tosca border-[3px] border-dark px-4 py-2 font-heading font-bold text-sm text-dark"
            style={{ boxShadow: "3px 3px 0px #0A0A0A" }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={14} className="text-dark" />
            Open to Collaborate
            <Sparkles size={14} className="text-dark" />
          </motion.span>
        </motion.div>

        {/* Nama Besar */}
        <motion.div variants={itemVariants}>
          <h1 className="heading-display text-5xl sm:text-6xl md:text-8xl text-dark mb-2 leading-none">
            Halo, Aku
          </h1>
          <h1
            className="heading-display text-5xl sm:text-6xl md:text-8xl leading-none mb-4"
            style={{
              WebkitTextStroke: "3px #0A0A0A",
              color: "transparent",
              textShadow: "5px 5px 0px #FFE135",
            }}
          >
            Muhammad Fajar Dafa
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-coral flex-shrink-0" />
            <span className="font-heading font-bold text-xl md:text-2xl text-dark">
              {typewriterText}
              <span className="animate-pulse text-coral">|</span>
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-dark/80 max-w-xl mb-10 leading-relaxed"
        >
          <span className="bg-yellow px-1 font-semibold">Library Science</span>{" "}
          meets <span className="bg-coral px-1 font-semibold">AI</span> —
          mengorganisir pengetahuan, membangun dengan prompt.
        </motion.p>

        {/* Currently status */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center gap-2 font-body text-sm text-dark/60">
            <span className="w-2 h-2 bg-tosca inline-block animate-pulse" />
            <span>
              <strong className="text-dark">Saat ini:</strong> Mempelajari{" "}
              <span className="bg-yellow/60 px-1 font-semibold">Next.js</span>{" "}
              &amp;{" "}
              <span className="bg-coral/60 px-1 font-semibold">
                Prompt Engineering
              </span>
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 items-center"
        >
          <NeoButton variant="dark" size="lg" href="#projects">
            Lihat Karyaku
          </NeoButton>
          <NeoButton variant="primary" size="lg" href="#contact">
            Ayo Ngobrol
          </NeoButton>
          <NeoButton
            variant="secondary"
            size="lg"
            href="/files/CV_Muhammad_Fajar_Dafa.pdf"
            external
          >
            Download CV
          </NeoButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center gap-2 text-dark/50 font-body text-sm"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
          <span>Scroll untuk explore</span>
        </motion.div>
      </motion.div>

      {/* Bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2 bg-yellow"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
}
