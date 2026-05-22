/* ── Desktop phone mockup ────────────────────────────────────────────────── */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-[320px] aspect-[9/19] glass-card rounded-[3rem] p-4 ring-8 ring-surface-container-highest shadow-2xl overflow-hidden">
      <div className="w-full h-full rounded-[2.5rem] bg-background border border-primary/20 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={alt} className="w-full h-full object-cover" src={src} />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-container-highest rounded-b-2xl" />
    </div>
  );
}

/* ── Mobile feature card ─────────────────────────────────────────────────── */
function MobileFeatureCard({
  icon, title, imageSrc, description,
}: { icon: string; title: string; imageSrc: string; description: string }) {
  return (
    <div className="group relative bg-surface-container-low/80 backdrop-blur-md border border-outline-variant/30 rounded-xl p-4 overflow-hidden transition-all hover:border-primary/50">
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        <h3 className="font-headline-md text-headline-md uppercase text-secondary">{title}</h3>
      </div>
      <div className="aspect-video w-full rounded-lg overflow-hidden border border-outline-variant/30 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src={imageSrc}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40" />
      </div>
      <p className="mt-4 font-body-standard text-on-surface-variant text-sm">{description}</p>
    </div>
  );
}

/* ── Mobile exports ──────────────────────────────────────────────────────── */
export function MobileFeedCard() {
  return (
    <MobileFeatureCard
      icon="rss_feed"
      title="The Feed"
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCc-YyFV_9A-zssv77wzUnZN_4N2YPFylxUii-kTv7xwj4AHhps-IPv4jqMdq0y1SPG3JgiF6xgcpzcbwdx42MSkpg0gDGpvWTjdxWtc7hzFB6pQdZBS2D8eLdh0BxmQnVPgzwbIFTrrwYKGJaDGF9LLynIIUT6cvJ01sgMa_sAL-ro624pjPIXXdpa_fhOI2iLmjn02_3JeUBTlkpga6wDkZQO57hsEwTO6476vrJFTTodDK2joBcQODVsLAtBgbdkYHmxSyxb9JM"
      description="Synchronize your suffering with the collective. Infinite scrolling into the digital abyss."
    />
  );
}

export function MobileDenCard() {
  return (
    <MobileFeatureCard
      icon="house"
      title="The Den"
      imageSrc="den.png"
      description="Customize your containment cell. Aesthetics for the modern rotmaxxer."
    />
  );
}

export function MobileEngineCard() {
  return (
    <MobileFeatureCard
      icon="bolt"
      title="Engine"
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAaDo088B4VIybRx-CZYVpXC11ibNvSiTxW5N50d3xM4byIxtBoonPyaebW7G0H3SQJ_SU5Zk3_Kqj1NAaD4s5KXjuNsD5np7SyJ5b9IMcY5mn1t5cHEdYBFr9PeK4kVRpcNsST_FbCQLMhcjX1_MuEiuUgYjvlAVdVtiFIil6N2tMiy1lmuMiJqk6turBHk_On4HZCRIp6L7RB8Fx5Tp3PJJVx_X_uG4i1F9iSA9R6ja8jyPInJnvi1chwKvOPAqbb2zEuo_UIKdA"
      description="Max out your attributes with our cursed algorithms. Optimization through decay."
    />
  );
}

/* ── Desktop exports ─────────────────────────────────────────────────────── */
export function FeedSection() {
  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-press-start text-2xl text-secondary mb-6 glitch-text">THE CURSED STREAM</h2>
          <p className="font-body-standard text-body-standard text-on-surface-variant mb-8 text-lg leading-relaxed">
            Witness the descent. The Cursed Stream is a real-time feed of Bambino&apos;s most unhinged thoughts and digital interactions. Monitor the rot as it spreads across the decentralized network, influencing global mood parameters in real-time.
          </p>
          <ul className="space-y-4 font-label-pixel text-label-pixel uppercase tracking-widest text-primary">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              Real-time data corruption
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>skull</span>
              Occult algorithm tracking
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
              24/7 existential monitoring
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <PhoneMockup
            alt="Screen 10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBtOWvOe-xuN4vpmH9If5GZRQPCjMvk57I852pt9oZHXPGKLohLLxFFOQ13Cn8MZJiN5Q90uciRMm9de29jsK8Vk1-qbfWyQpHCGSiiY0C7rUKqYtxjIYqmjGLhLV8EnbSxssIkJ6JroU3WiCL_lB0LQYSmJHbOhbYfNKP6IZ5KaHoqbDDg6NNCnjBcK8eXTm4BzVbKpoSEOsvrdirDhaHF54GvJf0WlB4YUOkqEd69ftHc3X639nrMn2SRNgfnFYgwfBJSUYW638"
          />
        </div>
      </div>
    </section>
  );
}

export function DenSection() {
  return (
    <section className="py-24 bg-surface-container-lowest/50">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <PhoneMockup
            alt="Screen 12"
            src="den.png"
          />
        </div>
        <div>
          <h2 className="font-press-start text-2xl text-tertiary mb-6 glitch-text">BAMBINO&apos;S DEN</h2>
          <p className="font-body-standard text-body-standard text-on-surface-variant mb-8 text-lg leading-relaxed">
            Customize your digital haunt. The Den is where Bambino rests—or schemes. Unlock 10 unique moods ranging from &ldquo;Existential Dread&rdquo; to &ldquo;Neon Euphoria.&rdquo; Every interaction alters the room&apos;s atmosphere, creating a personalized ritual space for your companion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-lg border-l-4 border-tertiary">
              <span className="font-label-pixel text-label-pixel text-tertiary">MOOD_SYSTEM_01</span>
              <div className="font-headline-md text-headline-md mt-1">EUPHORIA</div>
            </div>
            <div className="glass-card p-4 rounded-lg border-l-4 border-secondary">
              <span className="font-label-pixel text-label-pixel text-secondary">MOOD_SYSTEM_04</span>
              <div className="font-headline-md text-headline-md mt-1">THE_VOID</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EngineSection() {
  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-press-start text-2xl text-primary mb-6 glitch-text">ROTMAXXER ENGINE</h2>
          <p className="font-body-standard text-body-standard text-on-surface-variant mb-8 text-lg leading-relaxed">
            Fine-tune the absurdity. Our proprietary Rotmaxxer Engine features a high-fidelity absurdity slider and a gamified XP system that rewards your most degenerate digital habits. Level up to unlock cursed artifacts and forbidden Panda skins.
          </p>
          <div className="space-y-6">
            <div className="w-full h-8 bg-surface-container rounded-full overflow-hidden border border-primary/30 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary w-[75%] shadow-[0_0_15px_rgba(208,188,255,0.8)]" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-label-pixel text-label-pixel text-white">ABSURDITY: 75%</span>
            </div>
            <p className="font-body-dialogue text-body-dialogue italic text-outline">&ldquo;The engine is purring... or maybe that&apos;s just the sound of reality tearing.&rdquo;</p>
          </div>
        </div>
        <div className="flex justify-center">
          <PhoneMockup
            alt="Screen 7"
            src="rotmaxxer.png"
          />
        </div>
      </div>
    </section>
  );
}
