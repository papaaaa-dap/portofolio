"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Layanan", href: "#services" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export default function NeoNavbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-[3px] border-dark"
        style={{ boxShadow: "0 4px 0px #0A0A0A" }}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#hero"
            className="font-heading font-black text-base text-dark hover:text-coral transition-colors"
          >
            MFD
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading font-bold text-xs text-dark/70 hover:text-dark hover:bg-yellow px-3 py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 border-[2px] border-dark flex items-center justify-center bg-cream"
            style={{ boxShadow: "2px 2px 0px #0A0A0A" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-cream pt-14 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col border-t-[3px] border-dark">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading font-bold text-lg text-dark border-b-[3px] border-dark px-6 py-4 hover:bg-yellow transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
