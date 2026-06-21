"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquareText,
  Search,
  FileText,
  ArrowRight,
} from "lucide-react";
import NeoButton from "@/components/ui/NeoButton";

const services = [
  {
    title: "Prompt Consulting",
    description:
      "Bantu merancang dan mengoptimalkan prompt untuk berbagai kebutuhan — dari riset akademik, konten kreatif, hingga automation workflow.",
    icon: MessageSquareText,
    tags: ["Prompt Engineering", "Claude AI", "ChatGPT"],
    color: "bg-yellow",
    shadowColor: "#FFE135",
  },
  {
    title: "Research Assistance",
    description:
      "Bantu menemukan, meringkas, dan mengorganisir literatur akademik menggunakan AI tools — cocok untuk mahasiswa yang sedang skripsi/tugas akhir.",
    icon: Search,
    tags: ["Research", "Summarization", "Literature Review"],
    color: "bg-tosca",
    shadowColor: "#4ECDC4",
  },
  {
    title: "Content & Dokumentasi",
    description:
      "Bantu menulis konten, dokumentasi teknis, atau artikel populer dengan sentuhan information science — terstruktur, akurat, dan mudah dipahami.",
    icon: FileText,
    tags: ["Content Writing", "Dokumentasi", "Artikel"],
    color: "bg-coral",
    shadowColor: "#FF6B6B",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className="bg-cream border-[3px] border-dark flex flex-col"
      style={{ boxShadow: `5px 5px 0px ${service.shadowColor}` }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        x: -3,
        y: -3,
        boxShadow: `8px 8px 0px ${service.shadowColor}`,
      }}
      transition={{
        default: {
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        },
        whileHover: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <div className={`${service.color} border-b-[3px] border-dark p-6`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-dark flex items-center justify-center flex-shrink-0">
            <Icon size={18} className="text-cream" />
          </div>
          <h3 className="font-heading font-black text-lg text-dark leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="font-body text-sm text-dark/75 leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="bg-dark/5 border-[2px] border-dark/20 px-2 py-0.5 font-heading font-bold text-[10px] text-dark/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <NeoButton
          variant="dark"
          size="sm"
          href="#contact"
          className="w-full justify-center"
        >
          Diskusi <ArrowRight size={14} />
        </NeoButton>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-heading font-bold text-sm tracking-widest text-dark/50 uppercase">
            — Layanan
          </span>
          <h2 className="heading-section text-4xl md:text-5xl text-dark mt-1">
            Yang Bisa Aku Bantu
          </h2>
          <p className="font-body text-dark/60 mt-3 max-w-xl">
            Kombinasi library science dan AI untuk membantu kebutuhan
            informasi dan kontenmu.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
