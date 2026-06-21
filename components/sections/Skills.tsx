/**
 * Skills.tsx
 * Section skills — 3 kategori: AI Tools / Information Science / Coding.
 * Setiap skill tampil sebagai card kecil neobrutalism.
 * Animasi: stagger saat masuk viewport.
 */

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Library, Code2 } from "lucide-react";

// === SKILL DATA ===
const skillCategories = [
  {
    id: "ai",
    label: "AI Tools",
    icon: Bot,
    bgHeader: "bg-yellow",
    shadowColor: "#FFE135",
    skills: [
      { name: "Claude AI", level: 90 },
      { name: "ChatGPT", level: 88 },
      { name: "Midjourney", level: 75 },
      { name: "Perplexity", level: 80 },
      { name: "Gemini", level: 70 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
  {
    id: "info",
    label: "Information Science",
    icon: Library,
    bgHeader: "bg-tosca",
    shadowColor: "#4ECDC4",
    skills: [
      { name: "Research Methods", level: 85 },
      { name: "Information Literacy", level: 90 },
      { name: "Knowledge Organization", level: 80 },
      { name: "Cataloging", level: 75 },
      { name: "Reference Service", level: 78 },
      { name: "Database Search", level: 82 },
    ],
  },
  {
    id: "coding",
    label: "Coding",
    icon: Code2,
    bgHeader: "bg-coral",
    shadowColor: "#FF6B6B",
    skills: [
      { name: "HTML", level: 72 },
      { name: "CSS", level: 68 },
      { name: "Vibe Coding", level: 80 },
      { name: "Next.js (learning)", level: 50 },
      { name: "Tailwind CSS", level: 55 },
      { name: "Git Dasar", level: 60 },
    ],
  },
];

// === SKILL CARD COMPONENT ===
function SkillCard({
  name,
  level,
  delay,
  shadowColor,
}: {
  name: string;
  level: number;
  delay: number;
  shadowColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="bg-cream border-[3px] border-dark p-3"
      style={{ boxShadow: `4px 4px 0px ${shadowColor}` }}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.95 }
      }
      whileHover={{
        x: -2,
        y: -2,
        boxShadow: `6px 6px 0px ${shadowColor}`,
      }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-sm text-dark">
            {name}
          </span>
        </div>
        <span className="font-heading font-black text-sm text-dark/40">
          {level}%
        </span>
      </div>
      {/* Progress bar */}
      <div
        className="h-2 bg-dark/10 border border-dark/20 overflow-hidden"
        style={{ borderRadius: "0px" }}
      >
        <motion.div
          className="h-full"
          style={{ backgroundColor: shadowColor }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

// === CATEGORY COLUMN COMPONENT ===
function CategoryColumn({
  category,
  columnDelay,
}: {
  category: (typeof skillCategories)[0];
  columnDelay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: columnDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Category Header */}
      <div
        className={`${category.bgHeader} border-[3px] border-dark p-4 flex items-center gap-3`}
        style={{ boxShadow: `5px 5px 0px #0A0A0A` }}
      >
        <div className="w-9 h-9 bg-dark flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-cream" />
        </div>
        <h3 className="font-heading font-black text-xl text-dark">
          {category.label}
        </h3>
      </div>

      {/* Skill Cards Grid */}
      <div className="flex flex-col gap-3">
        {category.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={columnDelay + i * 0.07}
            shadowColor={category.shadowColor}
          />
        ))}
      </div>
    </motion.div>
  );
}

// === MAIN SECTION ===
export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      {/* Section Header */}
      <div ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-heading font-bold text-sm tracking-widest text-dark/50 uppercase">
            — Kemampuan
          </span>
          <h2 className="heading-section text-4xl md:text-5xl text-dark mt-1">
            Apa yang Aku Bisa
          </h2>
          <p className="font-body text-dark/60 mt-3 max-w-xl">
            Kombinasi unik antara ilmu perpustakaan, AI tools, dan coding dasar —
            semuanya bermuara pada satu hal: menemukan & menyampaikan informasi
            dengan tepat.
          </p>
        </motion.div>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <CategoryColumn
            key={cat.id}
            category={cat}
            columnDelay={i * 0.15}
          />
        ))}
      </div>
    </section>
  );
}
