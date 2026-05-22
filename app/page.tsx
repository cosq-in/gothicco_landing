import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import {
  MobileFeedCard, MobileDenCard, MobileEngineCard,
  FeedSection, DenSection, EngineSection,
} from "@/components/FeatureSections";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";

export default function Home() {
  return (
    <>
      {/* CRT scanline overlay */}
      <div className="scanlines" aria-hidden="true" />

      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      {/* ── Mobile layout (hidden at md+) ─────────────────────────────────── */}
      <main className="md:hidden relative z-10 bg-void-gradient min-h-screen flex flex-col items-center">
        <HeroSection />
        <section className="w-full px-margin-mobile space-y-gutter pb-24">
          <MobileFeedCard />
          <MobileDenCard />
          <MobileEngineCard />
        </section>
        <CtaSection />
      </main>

      {/* ── Desktop layout (hidden below md) ─────────────────────────────── */}
      <main className="hidden md:block relative z-10">
        <HeroSection />
        <FeedSection />
        <DenSection />
        <EngineSection />
        <CtaSection />
      </main>

      <Footer />

      {/* FAB — mobile only */}
      <div className="md:hidden">
        <FloatingChatButton />
      </div>
    </>
  );
}
