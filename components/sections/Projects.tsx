/**
 * Projects.tsx
 * Section proyek — 3 project card placeholder.
 * Hover: card geser ke kiri-atas, shadow makin panjang.
 * Animasi: stagger saat scroll (useInView).
 */

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";

// === PROJECT DATA ===
const projects = [
  {
    id: 1,
    title: "Sky Force 1945",
    description:
      "Classic shoot-em-up arcade game dibangun dengan JavaScript murni. Kontrol pesawat tempur, tembak musuh, dan kumpulkan skor tertinggi.",
    tags: ["JavaScript", "Game Development", "HTML5", "Canvas"],
    color: "bg-yellow",
    shadowColor: "#FFE135",
    status: "Live",
    statusColor: "bg-tosca",
    github: "https://github.com/papaaaa-dap/airplane",
    demo: "https://papaaaa-dap.github.io/airplane/",
  },
  {
    id: 2,
    title: "Formula One Test",
    description:
      "Game balap Formula One sederhana untuk menguji refleks dan kecepatan reaksi dalam mengambil keputusan di lintasan.",
    tags: ["JavaScript", "Game", "Racing", "Refleks"],
    color: "bg-coral",
    shadowColor: "#FF6B6B",
    status: "Live",
    statusColor: "bg-yellow",
    github: "https://github.com/papaaaa-dap/formula-one-test.git",
    demo: "https://github.com/papaaaa-dap/formula-one-test",
  },
  {
    id: 3,
    title: "Reaction Speed Test",
    description:
      "Uji kecepatan refleks tangan dengan leaderboard. Semakin cepat kamu klik, semakin tinggi skormu. Dibangun dengan JavaScript dan localStorage.",
    tags: ["JavaScript", "Game", "Reaction Test", "LocalStorage"],
    color: "bg-tosca",
    shadowColor: "#4ECDC4",
    status: "Live",
    statusColor: "bg-coral",
    github: "https://github.com/papaaaa-dap/testrefleks",
    demo: "https://papaaaa-dap.github.io/testrefleks/",
  },
];

// === PROJECT CARD COMPONENT ===
function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="bg-cream border-[3px] border-dark flex flex-col"
      style={{ boxShadow: `5px 5px 0px ${project.shadowColor}` }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        x: -4,
        y: -4,
        boxShadow: `10px 10px 0px ${project.shadowColor}`,
      }}
      transition={{
        default: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        whileHover: { duration: 0.2, ease: "easeOut" },
      }}
    >
      {/* Card Header */}
      <div
        className={`${project.color} border-b-[3px] border-dark p-5 flex items-start justify-between`}
      >
        <div className="flex items-center gap-3">
          <div>
            <h3 className="font-heading font-black text-xl text-dark leading-tight">
              {project.title}
            </h3>
          </div>
        </div>
        {/* Status badge */}
        <span
          className={`${project.statusColor} border-[2px] border-dark px-2 py-0.5 font-heading font-bold text-xs text-dark flex-shrink-0 ml-2`}
          style={{ boxShadow: "2px 2px 0px #0A0A0A" }}
        >
          {project.status}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-body text-dark/75 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-heading font-bold text-xs text-dark border-[2px] border-dark px-2 py-0.5 bg-cream"
              style={{ boxShadow: "2px 2px 0px #0A0A0A" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.demo}
            className="flex-1 bg-dark text-cream border-[3px] border-dark py-2.5 font-heading font-bold text-sm flex items-center justify-center gap-2"
            style={{ boxShadow: "3px 3px 0px #0A0A0A" }}
            whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px #0A0A0A" }}
            whileTap={{ x: 1, y: 1, boxShadow: "1px 1px 0px #0A0A0A" }}
            transition={{ duration: 0.15 }}
          >
            <ArrowUpRight size={14} />
            View
          </motion.a>
          <motion.a
            href={project.github}
            className="bg-cream border-[3px] border-dark px-3 py-2.5 flex items-center justify-center"
            style={{ boxShadow: "3px 3px 0px #0A0A0A" }}
            whileHover={{ x: -2, y: -2, boxShadow: "5px 5px 0px #0A0A0A" }}
            whileTap={{ x: 1, y: 1, boxShadow: "1px 1px 0px #0A0A0A" }}
            transition={{ duration: 0.15 }}
            title="GitHub"
          >
            <Github size={16} className="text-dark" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// === MAIN SECTION ===
export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="projects"
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
            — Proyek
          </span>
          <h2 className="heading-section text-4xl md:text-5xl text-dark mt-1">
            Yang Sudah Aku Buat
          </h2>
          <p className="font-body text-dark/60 mt-3 max-w-xl">
            Beberapa proyek yang menggabungkan passion-ku di bidang AI dan
            information science. Masih terus berkembang!
          </p>
        </motion.div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.12} />
        ))}
      </div>

      {/* CTA tambah proyek */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHeaderInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 text-center"
      >
        <p className="font-body text-dark/50 text-sm">
          Banyak lagi yang sedang dikerjakan —{" "}
          <a
            href="#contact"
            className="font-bold text-dark underline underline-offset-2 hover:text-coral transition-colors"
          >
            tanya aku langsung
          </a>
        </p>
      </motion.div>
    </section>
  );
}
