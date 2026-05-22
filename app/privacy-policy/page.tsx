import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BambinoPandalini",
  description: "Privacy Policy for BambinoPandalini by CosQ Entertainments.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 22, 2025";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="font-label-pixel text-label-pixel text-outline mb-12 uppercase tracking-widest">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-10 font-body-standard text-body-standard text-on-surface-variant leading-relaxed max-w-3xl">
          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">1. Introduction</h2>
            <p>
              CosQ Entertainments (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the BambinoPandalini mobile application and website (the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-on-surface">Personal Data:</strong> Name, email address, and account credentials when you register.</li>
              <li><strong className="text-on-surface">Usage Data:</strong> Information on how you interact with the app, including features accessed and time spent.</li>
              <li><strong className="text-on-surface">Device Data:</strong> Device type, operating system, unique device identifiers, and mobile network information.</li>
              <li><strong className="text-on-surface">Log Data:</strong> IP addresses, browser type, pages visited, and timestamps.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To provide, operate, and maintain the Service.</li>
              <li>To personalise and improve your experience.</li>
              <li>To send administrative notifications and updates.</li>
              <li>To monitor usage and diagnose technical issues.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal data. We may share it with trusted third-party service providers who assist in operating the Service, subject to confidentiality obligations. We may also disclose information where required by law.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">5. Cookies &amp; Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to monitor activity on our Service and hold certain information. You can instruct your browser to refuse cookies, though some parts of the Service may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary for the purposes outlined in this policy, or as required by law. When data is no longer needed, we securely delete or anonymise it.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">7. Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">8. Children&apos;s Privacy</h2>
            <p>
              The Service is not directed to individuals under 13. We do not knowingly collect personal data from children under 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">9. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Data portability.</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <span className="text-secondary">harshit@cosq.in</span>.</p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &ldquo;Last updated&rdquo; date above. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-secondary mb-4 uppercase">11. Contact Us</h2>
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
            <Link href="/privacy-policy" className="text-secondary">Privacy Policy</Link>
            <Link href="/terms" className="text-outline hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
