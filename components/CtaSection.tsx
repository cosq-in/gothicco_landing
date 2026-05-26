export default function CtaSection() {
  return (
    <>
      {/* ── Mobile CTA (hidden md+) ───────────────────────────────────────── */}
      <section className="md:hidden w-full bg-surface-container-highest/50 py-16 px-margin-mobile text-center border-t border-primary/20">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase italic mb-8">SECURE THE LINK</h2>
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <a
            href="#"
            className="flex items-center justify-center gap-3 border border-secondary text-secondary py-3 px-6 rounded-lg font-headline-md hover:bg-secondary/10 transition-all neon-border"
          >
            <span className="material-symbols-outlined">ios</span>
            APP STORE
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-3 border border-secondary text-secondary py-3 px-6 rounded-lg font-headline-md hover:bg-secondary/10 transition-all neon-border"
          >
            <span className="material-symbols-outlined">play_arrow</span>
            GOOGLE PLAY
          </a>
        </div>
      </section>

      {/* ── Desktop CTA (hidden below md) ────────────────────────────────── */}
      <section className="hidden md:block py-32 bg-surface-container-lowest border-t border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="text-[200px] font-press-start opacity-5 select-none leading-none">ROT</div>
        </div>
        <div className="px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
          <h2 className="font-press-start text-4xl md:text-6xl text-secondary mb-12 tracking-tighter">GET ROTMAXXED</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Primary CTA — App Store */}
            <button className="flex items-center gap-4 bg-primary text-on-primary px-8 py-4 rounded-xl transition-all glow-pink group">
              <span className="material-symbols-outlined text-4xl" data-weight="fill">phone_iphone</span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-label-pixel opacity-70">Download on the</div>
                <div className="text-xl font-bold font-headline-md leading-none">App Store</div>
              </div>
            </button>
            {/* Secondary CTA — Google Play */}
            <button className="flex items-center gap-4 bg-transparent text-secondary border-2 border-secondary/50 px-8 py-4 rounded-xl hover:bg-secondary/10 hover:border-secondary transition-all group neon-border">
              <span className="material-symbols-outlined text-4xl text-secondary" data-weight="fill">play_arrow</span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-label-pixel text-secondary/60 group-hover:text-secondary transition-colors">Get it on</div>
                <div className="text-xl font-bold font-headline-md leading-none text-secondary">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
