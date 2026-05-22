import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | BambinoPandalini",
  description: "Terms and Conditions for BambinoPandalini by CosQ Entertainments.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 22, 2025";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Header */}
      <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30" style={{ boxShadow: "0 0 15px rgba(208,188,255,0.2)" }}>
        <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Link href="/" className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tighter text-primary uppercase italic hover:skew-x-2 transition-transform">
            BambinoPandalini
          </Link>
          <Link href="/" className="font-label-pixel text-label-pixel text-outline hover:text-primary transition-colors uppercase tracking-widest">
            ← Back
          </Link>
        </div>
      </header>

      <main className="px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        <h1 className="font-press-start text-2xl md:text-4xl text-primary mb-4 tracking-tighter drop-shadow-[0_0_10px_rgba(208,188,255,0.5)]">
          Terms of Service
        </h1>
        <p className="font-label-pixel text-label-pixel text-outline mb-12 uppercase tracking-widest">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-10 font-body-standard text-body-standard text-on-surface-variant leading-relaxed max-w-3xl">
          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">1. Acceptance of Terms</h2>
            <p>
              By accessing or using BambinoPandalini (the &ldquo;Service&rdquo;), operated by CosQ Entertainments, you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">2. Eligibility</h2>
            <p>
              You must be at least 13 years of age to use the Service. By using the Service, you represent that you meet this requirement. If you are under 18, you confirm that you have parental or guardian consent.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">3. Account Registration</h2>
            <p>
              You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. Notify us immediately of any unauthorised use.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">4. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Use the Service for any unlawful purpose.</li>
              <li>Attempt to gain unauthorised access to any part of the Service.</li>
              <li>Transmit harmful, offensive, or disruptive content.</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Service.</li>
              <li>Use automated tools to scrape or harvest data from the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">5. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property associated with BambinoPandalini and CosQ Entertainments are owned by or licensed to us. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">6. User Content</h2>
            <p>
              If you submit or post content through the Service, you grant CosQ Entertainments a non-exclusive, worldwide, royalty-free licence to use, reproduce, modify, and display that content in connection with operating the Service. You retain ownership of your content.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">7. In-App Purchases</h2>
            <p>
              Certain features or virtual goods may be available for purchase. All purchases are final and non-refundable unless required by applicable law. Prices may change at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">8. Disclaimers</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied. CosQ Entertainments does not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CosQ Entertainments shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">11. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with applicable law. Any disputes shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where CosQ Entertainments is registered.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">12. Changes to Terms</h2>
            <p>
              We may revise these Terms at any time. We will update the &ldquo;Last updated&rdquo; date and, where appropriate, notify you via email or in-app notification. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">13. Contact Us</h2>
            <p>
              CosQ Entertainments<br />
              Email: <span className="text-secondary">harshit@cosq.in</span>
            </p>
          </section>
        </div>
      </main>

      <footer className="w-full py-8 border-t border-primary/20 bg-surface-container-lowest mt-16">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-pixel text-label-pixel text-outline uppercase">
            © 2024 CosQ Entertainments. All rights reserved.
          </p>
          <div className="flex gap-6 font-label-pixel text-label-pixel uppercase">
            <Link href="/privacy-policy" className="text-outline hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-secondary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
