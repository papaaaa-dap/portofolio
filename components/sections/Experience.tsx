"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";

const timeline = [
  {
    type: "education",
    title: "Ilmu Perpustakaan & Informasi",
    institution: "Universitas di Indonesia",
    period: "2024 - Sekarang",
    location: "Indonesia",
    description:
      "Semester 4 — fokus pada information literacy, knowledge organization, dan research methods.",
    highlights: ["Information Literacy", "Research Methods", "Knowledge Organization"],
    icon: GraduationCap,
    color: "bg-yellow",
    shadowColor: "#FFE135",
  },
  {
    type: "experience",
    title: "AI Prompt Explorer",
    institution: "Self-initiated",
    period: "2024 - Sekarang",
    location: "Remote",
    description:
      "Eksplorasi 10+ AI tools: Claude, ChatGPT, Midjourney, Perplexity, Gemini. Mendokumentasikan prompt engineering techniques.",
    highlights: ["Prompt Engineering", "AI Tools", "Content Generation"],
    icon: Star,
    color: "bg-tosca",
    shadowColor: "#4ECDC4",
  },
  {
    type: "education",
    title: "SMA",
    institution: "SMA di Indonesia",
    period: "2021 - 2024",
    location: "Indonesia",
    description:
      "Aktif dalam organisasi dan kegiatan ekstrakurikuler.",
    highlights: ["Organisasi", "Aktif"],
    icon: GraduationCap,
    color: "bg-coral",
    shadowColor: "#FF6B6B",
  },
  {
    type: "experience",
    title: "Penulis Konten",
    institution: "Kompasiana",
    period: "2025 - Sekarang",
    location: "Online",
    description:
      "Menulis artikel isu sosial, politik, dan pendidikan. Membangun kemampuan komunikasi dan analisis tertulis.",
    highlights: ["Content Writing", "Analisis", "Publikasi"],
    icon: Briefcase,
    color: "bg-yellow",
    shadowColor: "#FFE135",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0"
    >
      {/* Desktop: left side */}
      <div className="hidden md:flex md:w-1/2 md:pr-12 md:justify-end">
        {isLeft && (
          <motion.div
            custom={index * 0.1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <TimelineCard item={item} Icon={Icon} />
          </motion.div>
        )}
      </div>

      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
        <motion.div
          className={`w-10 h-10 ${item.color} border-[3px] border-dark flex items-center justify-center`}
          style={{ boxShadow: "3px 3px 0px #0A0A0A" }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: index * 0.1,
          }}
        >
          <Icon size={16} className="text-dark" />
        </motion.div>
      </div>

      {/* Desktop: right side */}
      <div className="flex md:w-1/2 md:pl-12">
        {!isLeft && (
          <motion.div
            custom={index * 0.1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <TimelineCard item={item} Icon={Icon} />
          </motion.div>
        )}
        {isLeft && (
          <motion.div
            custom={index * 0.1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:hidden"
          >
            <TimelineCard item={item} Icon={Icon} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TimelineCard({
  item,
  Icon,
}: {
  item: (typeof timeline)[0];
  Icon: React.ElementType;
}) {
  return (
    <div
      className="bg-cream border-[3px] border-dark p-5"
      style={{ boxShadow: `5px 5px 0px ${item.shadowColor}` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`${item.color} px-2 py-0.5 border-[2px] border-dark font-heading font-bold text-xs text-dark`}
        >
          {item.type === "education" ? "Pendidikan" : "Pengalaman"}
        </span>
      </div>

      <h3 className="font-heading font-black text-lg text-dark leading-tight mb-1">
        {item.title}
      </h3>
      <p className="font-heading font-bold text-sm text-dark/70 mb-3">
        {item.institution}
      </p>

      <div className="flex flex-wrap gap-3 mb-3 text-dark/60 font-body text-xs">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {item.period}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={12} />
          {item.location}
        </span>
      </div>

      <p className="font-body text-sm text-dark/75 leading-relaxed mb-3">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {item.highlights.map((h) => (
          <span
            key={h}
            className="bg-dark/5 border-[2px] border-dark/20 px-2 py-0.5 font-heading font-bold text-[10px] text-dark/60"
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-heading font-bold text-sm tracking-widest text-dark/50 uppercase">
            — Perjalanan
          </span>
          <h2 className="heading-section text-4xl md:text-5xl text-dark mt-1">
            Pendidikan & Pengalaman
          </h2>
          <p className="font-body text-dark/60 mt-3 max-w-xl">
            Dari bangku kuliah hingga eksplorasi AI — setiap langkah adalah
            bagian dari perjalanan.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[3px] bg-dark md:-translate-x-px" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
