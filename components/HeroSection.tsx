"use client";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const handler = () => {
      const pos = window.scrollY;
      if (pos % 500 < 5) {
        document.body.style.filter = `hue-rotate(${pos / 10}deg)`;
        setTimeout(() => { document.body.style.filter = "none"; }, 50);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* ── Mobile Hero (hidden md+) ─────────────────────────────────────── */}
      <section className="md:hidden flex flex-col items-center text-center px-margin-mobile pt-12 pb-20 w-full max-w-lg mx-auto">
        <div className="relative w-64 h-64 mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Glowing Panda mascot"
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_#d0bcff]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5X0w_G7vEWijC7D7WR0NhUNuTWQgJ_0pml7ezheOSFOT1SDw_Q2jNNylifJk0FxGlqmlRW-D4OxGqMMRaHaA2NlZzMkfkGcObuO0fvPk9Vuy77xHtBmyycFssg7ga4PbOKUZxVb61zU6lsnNiE4HlIaMXai7vgHwrTv99ZjIWWGZhVfsQghcBRf9ddw1BcHoj8GtHdC8zU3HepLKCJ00VHLYYITjgkXGzf9T2AdK5F9_H0_BuF463E8noTdAmYmrIUnk_-Pds0Gw"
          />
        </div>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 leading-tight">
          <span className="block text-secondary neon-text-pink">ENTER THE</span>
          <span className="block text-primary text-4xl tracking-widest font-black uppercase italic">VOID</span>
        </h2>
        <p className="font-body-standard text-on-surface-variant mb-8 max-w-xs mx-auto">
          The digital purgatory for your virtual familiar. Rot in style. Feed the machine. Become one with the cursor.
        </p>
        <button className="w-full py-4 bg-primary text-on-primary rounded-lg font-headline-md text-headline-md uppercase tracking-widest shadow-[4px_4px_0px_#FF49DB] active:shadow-none active:translate-y-1 transition-all">
          DOWNLOAD
        </button>
      </section>

      {/* ── Desktop Hero (hidden below md) ──────────────────────────────── */}
      <section className="hidden md:flex min-h-[921px] flex-col items-center justify-center text-center px-margin-mobile relative overflow-hidden">
        <div className="mb-8 floating-panda">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="A stylized, gothic digital panda illustration with glowing cyan eyes and neon pink accents."
            className="w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_40px_rgba(208,188,255,0.6)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDf8qCSON5wx9Llb10BkRbmgLx5ITYpVdeqUYYQ_do5w7okTmBr0wmh8zQ1SnsMls778Q-RrTrIk_nhP51ODDIan1mL4_fCNlekOzp6y3rcqY6bvseVfdkz3oIdZTr-1TMDn30GHfKv7ok3rVQroydV5uVDa5wojRgrJKfKzSL-QtHAdIkmmUERPsZfMc9CXKEEnM7GDzIkZVhfxWDARdLajySJ0XfcTjY0w6NXM-u2BNtCzS0ogtiYY72zLmMHKEtGZoVGa6T278"
          />
        </div>
        <h1 className="font-press-start text-4xl md:text-7xl mb-6 text-primary tracking-tighter leading-tight filter drop-shadow-[0_0_10px_rgba(208,188,255,0.5)]">
          ENTER THE <br /> <span className="text-[#FF49DB] animate-pulse">VOID</span>
        </h1>
        <p className="font-vt323 text-2xl md:text-3xl text-on-surface-variant max-w-2xl mb-10 terminal-cursor">
          Your new digital companion is hungry for data. Feed it your attention, or watch it rot in the neon-soaked abyss of the Pandalini Den.
        </p>
        <button className="font-headline-md text-headline-md uppercase bg-[#8B5CF6] text-white px-10 py-5 rounded-lg transition-all glow-pink">
          DOWNLOAD NOW
        </button>
      </section>
    </>
  );
}
