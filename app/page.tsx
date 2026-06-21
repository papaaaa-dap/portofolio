/**
 * page.tsx
 * Halaman utama portfolio — merangkai semua section.
 * Semua section di-import dari components/sections/.
 */

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-hidden pt-14">
      {/* ── HERO ── */}
      <Hero />

      {/* Divider tebal neobrutalism */}
      <div className="neo-divider" />

      {/* ── ABOUT ── */}
      <About />

      <div className="neo-divider" />

      {/* ── EXPERIENCE ── */}
      <Experience />

      <div className="neo-divider" />

      {/* ── SKILLS ── */}
      <Skills />

      <div className="neo-divider" />

      {/* ── CERTIFICATES ── */}
      <Certificates />

      <div className="neo-divider" />

      {/* ── SERVICES ── */}
      <Services />

      <div className="neo-divider" />

      {/* ── PROJECTS ── */}
      <Projects />

      <div className="neo-divider" />

      {/* ── CONTACT ── */}
      <Contact />

      {/* ── FOOTER ── */}
      <footer className="bg-dark text-cream py-6 px-6 text-center font-body">
        <p className="text-sm font-medium">
          Dibuat dengan{" "}
          <span className="text-yellow font-bold">Next.js</span> +{" "}
          <span className="text-coral font-bold">Framer Motion</span> +{" "}
           <span className="text-tosca font-bold">♥</span>
          {" "}— {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
