"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
} from "lucide-react";

const certificates = [
  {
    title: "Prompt Engineering for Beginners",
    issuer: "DeepLearning.AI",
    year: "2025",
    link: "#",
    category: "AI",
    gradient: "from-yellow to-yellow/80",
    shadowColor: "#FFE135",
  },
  {
    title: "Information Literacy Fundamentals",
    issuer: "Coursera",
    year: "2024",
    link: "#",
    category: "Academic",
    gradient: "from-tosca to-tosca/80",
    shadowColor: "#4ECDC4",
  },
  {
    title: "Research Methods in Library Science",
    issuer: "Universitas Terbuka",
    year: "2025",
    link: "#",
    category: "Academic",
    gradient: "from-coral to-coral/80",
    shadowColor: "#FF6B6B",
  },
  {
    title: "AI Tools & Productivity",
    issuer: "LinkedIn Learning",
    year: "2025",
    link: "#",
    category: "AI",
    gradient: "from-yellow to-yellow/80",
    shadowColor: "#FFE135",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Certificates() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="certificates"
      className="max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      <div ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-heading font-bold text-sm tracking-widest text-dark/50 uppercase">
            — Sertifikat
          </span>
          <h2 className="heading-section text-4xl md:text-5xl text-dark mt-1">
            Pencapaian & Sertifikasi
          </h2>
          <p className="font-body text-dark/60 mt-3 max-w-xl">
            Beberapa sertifikat yang sudah diraih dalam perjalanan belajar.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, i) => (
          <CertificateCard key={i} cert={cert} index={i} isInView={isHeaderInView} />
        ))}
      </div>
    </section>
  );
}

function CertificateCard({
  cert,
  index,
  isInView,
}: {
  cert: (typeof certificates)[0];
  index: number;
  isInView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="bg-cream border-[3px] border-dark flex flex-col"
      style={{ boxShadow: `4px 4px 0px ${cert.shadowColor}` }}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        x: -3,
        y: -3,
        boxShadow: `7px 7px 0px ${cert.shadowColor}`,
      }}
      transition={{
        default: { duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
        whileHover: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <div className="p-5 flex flex-col flex-1">
        <div
          className={`w-10 h-10 bg-gradient-to-br ${cert.gradient} border-[2px] border-dark flex items-center justify-center mb-4`}
          style={{ boxShadow: "2px 2px 0px #0A0A0A" }}
        >
          <Award size={18} className="text-dark" />
        </div>

        <h3 className="font-heading font-bold text-sm text-dark leading-snug mb-3 flex-1">
          {cert.title}
        </h3>

        <div className="flex flex-col gap-1.5 mb-4">
          <span className="flex items-center gap-1.5 font-body text-xs text-dark/60">
            <Building2 size={12} />
            {cert.issuer}
          </span>
          <span className="flex items-center gap-1.5 font-body text-xs text-dark/60">
            <Calendar size={12} />
            {cert.year}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <span
            className={`px-2 py-0.5 border-[2px] border-dark font-heading font-bold text-[10px] ${
              cert.category === "AI" ? "bg-yellow" : "bg-tosca"
            } text-dark`}
          >
            {cert.category}
          </span>
          <motion.a
            href={cert.link}
            className="ml-auto flex items-center gap-1 font-heading font-bold text-xs text-dark/50 hover:text-dark transition-colors"
            whileHover={{ x: 2 }}
          >
            Lihat <ExternalLink size={10} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
