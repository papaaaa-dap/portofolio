/**
 * Contact.tsx
 * Section kontak — teks besar "Let's Connect", 3 link neobrutalism.
 * Animasi: bounce saat hover, stagger masuk viewport.
 */

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowRight, Sparkles, Download, Camera, MessageCircle, Globe } from "lucide-react";

// === CONTACT LINKS DATA ===
const socialLinks = [
  {
    label: "Instagram",
    handle: "@fajardafa",
    href: "https://instagram.com/fajardafa",
    icon: Camera,
    bg: "bg-yellow/60",
  },
  {
    label: "Twitter / X",
    handle: "@fajardafa",
    href: "https://x.com/fajardafa",
    icon: MessageCircle,
    bg: "bg-dark/10",
  },
  {
    label: "Kompasiana",
    handle: "dafaafajar8099",
    href: "https://www.kompasiana.com/dafaafajar8099",
    icon: Globe,
    bg: "bg-tosca/60",
  },
];
const contactLinks = [
  {
    label: "Email",
    handle: "profpaparazi@gmail.com",
    href: "mailto:profpaparazi@gmail.com",
    icon: Mail,
    bg: "bg-yellow",
    description: "Kirimi aku pesan",
  },
  {
    label: "LinkedIn",
    handle: "/in/fajardafa",
    href: "https://www.linkedin.com/in/fajardafa",
    icon: Linkedin,
    bg: "bg-tosca",
    description: "Connect profesional",
  },
  {
    label: "GitHub",
    handle: "@papaaaa-dap",
    href: "https://github.com/papaaaa-dap",
    icon: Github,
    bg: "bg-coral",
    description: "Lihat kode-ku",
  },
];

// === CONTACT CARD COMPONENT ===
function ContactCard({
  link,
  delay,
}: {
  link: (typeof contactLinks)[0];
  delay: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = link.icon;

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`${link.bg} border-[3px] border-dark p-6 flex flex-col gap-3 cursor-pointer`}
      style={{ boxShadow: "5px 5px 0px #0A0A0A" }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        y: -6,
        x: -3,
        boxShadow: "8px 11px 0px #0A0A0A",
      }}
      whileTap={{
        y: 0,
        x: 0,
        boxShadow: "3px 3px 0px #0A0A0A",
      }}
      transition={{
        default: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] },
        whileHover: { duration: 0.2, ease: "easeOut" },
        whileTap: { duration: 0.1 },
      }}
    >
      {/* Icon + Label */}
      <div className="flex items-center justify-between">
        <div
          className="w-12 h-12 bg-dark flex items-center justify-center"
          style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.3)" }}
        >
          <Icon size={22} className="text-cream" />
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="font-heading font-black text-xl text-dark">
          {link.label}
        </p>
        <p className="font-body text-sm text-dark/70 mt-0.5">
          {link.description}
        </p>
        <p className="font-heading font-bold text-sm text-dark/50 mt-1">
          {link.handle}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-1 font-heading font-bold text-sm text-dark mt-auto">
        Hubungi <ArrowRight size={14} />
      </div>
    </motion.a>
  );
}

// === MAIN SECTION ===
export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden noise-overlay"
    >
      {/* Background aksen */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(255,251,240,0.90)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="font-heading font-bold text-sm tracking-widest text-dark/50 uppercase">
              — Kontak
            </span>
          </motion.div>

          {/* Heading besar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
          >
            <h2 className="heading-display text-5xl md:text-7xl text-dark leading-none">
              Let&apos;s{" "}
              <span
                style={{
                  WebkitTextStroke: "3px #0A0A0A",
                  color: "transparent",
                  textShadow: "4px 4px 0px #4ECDC4",
                }}
              >
                Connect
              </span>
              
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-dark/60 text-lg max-w-lg mb-12"
          >
            Tertarik untuk kolaborasi, diskusi soal AI, atau sekadar ngobrol?
            Jangan ragu untuk reach out — aku selalu senang berkenalan!
          </motion.p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, i) => (
            <ContactCard key={link.label} link={link} delay={0.3 + i * 0.1} />
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="font-heading font-bold text-sm text-dark/50 uppercase tracking-widest text-center mb-4"
          >
            — Social Media
          </motion.p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.bg} border-[2px] border-dark px-4 py-2.5 flex items-center gap-2 font-heading font-bold text-sm text-dark`}
                  style={{ boxShadow: "3px 3px 0px #0A0A0A" }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{
                    x: -2,
                    y: -2,
                    boxShadow: "5px 5px 0px #0A0A0A",
                  }}
                  transition={{
                    default: {
                      duration: 0.3,
                      delay: 0.5 + i * 0.07,
                    },
                    whileHover: { duration: 0.15 },
                  }}
                >
                  <Icon size={14} />
                  {link.label}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.a
            href="/files/CV_Muhammad_Fajar_Dafa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-cream border-[3px] border-dark px-6 py-3 font-heading font-bold text-sm"
            style={{ boxShadow: "4px 4px 0px #0A0A0A" }}
            whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" }}
            whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #0A0A0A" }}
            transition={{ duration: 0.15 }}
          >
            <Download size={16} />
            Download CV (PDF)
          </motion.a>
        </motion.div>

        {/* Tagline penutup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <div
            className="flex items-center gap-2 bg-yellow border-[3px] border-dark px-5 py-3"
            style={{ boxShadow: "4px 4px 0px #0A0A0A" }}
          >
            <Sparkles size={16} className="text-dark" />
            <span className="font-heading font-bold text-dark text-sm">
              Response time: &lt; 24 jam
            </span>
            <Sparkles size={16} className="text-dark" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
