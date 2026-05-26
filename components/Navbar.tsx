"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-primary/30"
          : "bg-transparent border-b border-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 0 20px rgba(208,188,255,0.25), 0 1px 0 rgba(208,188,255,0.1)" } : {}}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Logo — mobile uses headline-lg-mobile, desktop uses headline-lg */}
        <div className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg tracking-tighter text-primary uppercase italic hover:skew-x-2 transition-transform cursor-pointer">
          BambinoPandalini
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          <a className="font-headline-md text-headline-md text-secondary border-b-2 border-secondary font-bold hover:text-tertiary transition-colors duration-300" href="#">Feed</a>
          <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-tertiary transition-colors duration-300" href="#">Den</a>
          <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-tertiary transition-colors duration-300" href="#">Engine</a>
          <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-tertiary transition-colors duration-300" href="#">Cursed</a>
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-primary text-on-primary font-label-pixel text-label-pixel px-6 py-2 rounded-lg font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-all uppercase tracking-widest">
          DOWNLOAD
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary material-symbols-outlined text-3xl hover:skew-x-2 transition-transform"
          aria-label="Toggle menu"
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-outline-variant/30 px-margin-mobile py-6 flex flex-col gap-4">
          {[
            { label: "Feed", href: "#" },
            { label: "Den", href: "#" },
            { label: "Engine", href: "#" },
            { label: "Cursed", href: "#" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary uppercase tracking-widest transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full bg-primary text-on-primary font-label-pixel text-label-pixel px-6 py-3 rounded-lg font-bold uppercase tracking-widest"
          >
            DOWNLOAD
          </button>
        </div>
      )}
    </header>
  );
}
