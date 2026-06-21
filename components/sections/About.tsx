/**
 * About.tsx
 * Section tentang diri — avatar, cerita singkat, skill pills, fun facts.
 * Animasi: fade + slide up saat masuk viewport.
 */

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BookOpen, Brain, Coffee, MapPin, GraduationCap } from "lucide-react";

// === ANIMATION VARIANTS ===
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// === DATA SKILL PILLS ===
const skillPills = [
  { label: "Prompt Engineering", bg: "bg-yellow" },
  { label: "Claude AI", bg: "bg-tosca" },
  { label: "ChatGPT", bg: "bg-coral" },
  { label: "Midjourney", bg: "bg-yellow" },
  { label: "Research", bg: "bg-tosca" },
  { label: "Information Science", bg: "bg-cream" },
  { label: "HTML/CSS", bg: "bg-coral" },
  { label: "Vibe Coding", bg: "bg-yellow" },
];

// === FUN FACTS ===
const funFacts = [
  { icon: GraduationCap, text: "Semester 4, Ilmu Perpustakaan & Informasi", color: "text-coral" },
  { icon: Brain, text: "Sudah coba 10+ AI tools dalam setahun", color: "text-tosca" },
  { icon: BookOpen, text: "Percaya bahwa informasi = kekuatan", color: "text-yellow" },
  { icon: Coffee, text: "Coding sambil minum susu, bukan kopi", color: "text-coral" },
  { icon: MapPin, text: "Berbasis di Indonesia", color: "text-tosca" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      {/* Section label */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-12"
      >
        <span className="font-heading font-bold text-sm tracking-widest text-dark/50 uppercase">
          — Tentang Aku
        </span>
        <h2 className="heading-section text-4xl md:text-5xl text-dark mt-1">
          Siapa Saya?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* === LEFT: Avatar + Cerita === */}
        <motion.div
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-cream border-[3px] border-dark p-8"
          style={{ boxShadow: "5px 5px 0px #FFE135" }}
        >
          {/* Avatar Foto */}
          <div className="flex items-center gap-5 mb-6">
            <div
              className="w-20 h-20 bg-yellow border-[3px] border-dark flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{ boxShadow: "3px 3px 0px #0A0A0A" }}
            >
              <Image
                src="/images/foto.jpg"
                alt="Muhammad Fajar Dafa"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-dark leading-tight">
                Muhammad Fajar Dafa
              </h3>
              <p className="font-body text-dark/60 text-sm mt-0.5">
                Library Science × AI Explorer
              </p>
              <div
                className="inline-block mt-2 bg-tosca border-[2px] border-dark px-2 py-0.5 text-xs font-bold font-heading"
                style={{ boxShadow: "2px 2px 0px #0A0A0A" }}
              >
                Semester 4
              </div>
            </div>
          </div>

          {/* Cerita singkat */}
          <p className="font-body text-dark/80 leading-relaxed mb-4">
            Aku mahasiswa <strong>Ilmu Perpustakaan & Informasi</strong> yang jatuh
            cinta dengan dunia AI dan prompt engineering. Bagiku, keduanya punya
            satu kesamaan — sama-sama soal{" "}
            <span className="bg-yellow px-1 font-semibold">
              mengorganisir & menemukan informasi
            </span>
            .
          </p>
          <p className="font-body text-dark/80 leading-relaxed">
            Aku percaya bahwa skill <em>information literacy</em> dari ilmu
            perpustakaan justru membuat seorang{" "}
            <span className="bg-coral px-1 font-semibold">prompt engineer</span>{" "}
            lebih efektif — karena kita tahu cara bertanya yang tepat.
          </p>
        </motion.div>

        {/* === RIGHT: Skill Pills + Fun Facts === */}
        <div className="flex flex-col gap-6">
          {/* Skill Pills */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-cream border-[3px] border-dark p-6"
            style={{ boxShadow: "5px 5px 0px #4ECDC4" }}
          >
            <h4 className="font-heading font-bold text-lg text-dark mb-4">
              Skills & Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillPills.map((pill, i) => (
                <motion.span
                  key={pill.label}
                  className={`skill-pill ${pill.bg} text-dark`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.3 }}
                >
                  {pill.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-cream border-[3px] border-dark p-6"
            style={{ boxShadow: "5px 5px 0px #FF6B6B" }}
          >
            <h4 className="font-heading font-bold text-lg text-dark mb-4">
              Fun Facts
            </h4>
            <ul className="flex flex-col gap-3">
              {funFacts.map((fact, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 font-body text-sm text-dark/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.09, duration: 0.4 }}
                >
                  <fact.icon
                    size={16}
                    className={`${fact.color} flex-shrink-0 mt-0.5`}
                  />
                  {fact.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        custom={0.5}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
      >
        {[
          { label: "AI Tools Explored", value: "10+" },
          { label: "Projects Built", value: "5+" },
          { label: "Months Learning", value: "12+" },
          { label: "Certificates", value: "4+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-dark border-[3px] border-dark py-4 px-4 text-center"
            style={{ boxShadow: "4px 4px 0px #FFE135" }}
          >
            <p className="font-heading font-black text-2xl text-cream">
              {stat.value}
            </p>
            <p className="font-heading font-bold text-xs text-cream/70 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
