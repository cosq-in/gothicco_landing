import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Child Safety Policy | BambinoPandalini by CosQ Entertainments",
  description:
    "CosQ Entertainments' standards against child sexual abuse and exploitation (CSAE) for BambinoPandalini.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 22, 2026";

export default function ChildSafetyPolicy() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Header */}
      <header
        className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30"
        style={{ boxShadow: "0 0 15px rgba(208,188,255,0.2)" }}
      >
        <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Link
            href="/"
            className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tighter text-primary uppercase italic hover:skew-x-2 transition-transform"
          >
            BambinoPandalini
          </Link>
          <Link
            href="/"
            className="font-label-pixel text-label-pixel text-outline hover:text-primary transition-colors uppercase tracking-widest"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto space-y-12">

        {/* Hero */}
        <div className="space-y-3">
          <p className="font-label-pixel text-label-pixel text-outline uppercase tracking-widest">
            CosQ Entertainments · BambinoPandalini
          </p>
          <h1 className="font-press-start text-2xl md:text-3xl text-primary tracking-tighter drop-shadow-[0_0_10px_rgba(208,188,255,0.5)]">
            Child Safety Policy
          </h1>
          <p className="text-outline text-xs">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Commitment */}
        <section className="space-y-4">
          <h2 className="font-press-start text-base text-primary tracking-tight">Our Commitment</h2>
          <p className="text-on-background/80 leading-relaxed">
            CosQ Entertainments has zero tolerance for child sexual abuse and exploitation (CSAE) in
            any form on BambinoPandalini or any platform we operate. We are committed to maintaining
            a safe environment and to taking immediate, decisive action against any content or
            behaviour that sexualises, exploits, or endangers minors.
          </p>
          <p className="text-on-background/80 leading-relaxed">
            This policy applies to all users, all user-generated content, and all features of the
            BambinoPandalini application.
          </p>
        </section>

        {/* Prohibited content */}
        <section className="space-y-4">
          <h2 className="font-press-start text-base text-primary tracking-tight">Prohibited Content & Behaviour</h2>
          <p className="text-on-background/70 text-sm leading-relaxed">
            The following are strictly prohibited and will result in immediate account termination
            and reporting to the relevant authorities:
          </p>
          <ul className="space-y-2 text-sm text-on-background/70 list-disc list-inside leading-relaxed">
            <li>Child sexual abuse material (CSAM) of any kind</li>
            <li>Content that sexualises, objectifies, or demeans minors in any way</li>
            <li>Grooming, solicitation, or any attempt to exploit minors</li>
            <li>Sharing, distributing, or linking to CSAE material on or off platform</li>
            <li>Any content that glorifies, normalises, or promotes abuse or exploitation of children</li>
          </ul>
        </section>

        {/* Enforcement */}
        <section className="space-y-4">
          <h2 className="font-press-start text-base text-primary tracking-tight">Detection & Enforcement</h2>
          <div className="space-y-3">
            {[
              {
                title: "Content review",
                body: "All user-generated posts are subject to review. Reports from users are investigated promptly. Violating content is removed immediately upon identification.",
              },
              {
                title: "Account action",
                body: "Accounts found to be in violation of this policy are permanently banned without appeal. No prior warning is given for CSAE violations.",
              },
              {
                title: "Law enforcement reporting",
                body: "We report confirmed CSAM and CSAE incidents to the National Center for Missing & Exploited Children (NCMEC) CyberTipline and to relevant local law enforcement authorities as required by law.",
              },
              {
                title: "Data preservation",
                body: "When a report is made to law enforcement, we preserve relevant account data and content in accordance with applicable legal obligations.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="p-4 rounded-lg border border-outline-variant/20 bg-surface-container space-y-1"
              >
                <p className="font-semibold text-on-background text-sm">{title}</p>
                <p className="text-on-background/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Age requirement */}
        <section className="space-y-4">
          <h2 className="font-press-start text-base text-primary tracking-tight">Age Requirement</h2>
          <p className="text-on-background/70 text-sm leading-relaxed">
            BambinoPandalini is intended for users aged <strong className="text-on-background">13 and older</strong>.
            Users under 13 are not permitted to create an account. If we become aware that a user
            under 13 has registered, the account is removed. Parents or guardians who believe a
            child under 13 has an account should contact us immediately at{" "}
            <a href="mailto:harshit@cosq.in" className="text-primary hover:underline">
              harshit@cosq.in
            </a>
            .
          </p>
        </section>

        {/* Reporting */}
        <section className="space-y-4">
          <h2 className="font-press-start text-base text-primary tracking-tight">How to Report</h2>
          <p className="text-on-background/70 text-sm leading-relaxed">
            If you encounter content or behaviour on BambinoPandalini that you believe violates this
            policy, report it immediately:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-primary/30 bg-surface-container space-y-1">
              <p className="font-semibold text-on-background text-sm">In-app reporting</p>
              <p className="text-on-background/60 text-sm">
                Use the report function on any post or user profile.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-primary/30 bg-surface-container space-y-1">
              <p className="font-semibold text-on-background text-sm">Email</p>
              <p className="text-on-background/60 text-sm">
                Send details to{" "}
                <a href="mailto:harshit@cosq.in" className="text-primary hover:underline">
                  harshit@cosq.in
                </a>{" "}
                with the subject line <strong>CSAE Report</strong>. Include as much detail as
                possible. We respond within 24 hours.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-primary/30 bg-surface-container space-y-1">
              <p className="font-semibold text-on-background text-sm">NCMEC CyberTipline</p>
              <p className="text-on-background/60 text-sm">
                You can also report directly to the National Center for Missing & Exploited
                Children at{" "}
                <a
                  href="https://www.missingkids.org/gethelpnow/cybertipline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  missingkids.org/cybertipline
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-2 border-t border-outline-variant/20 pt-8">
          <h2 className="font-press-start text-base text-primary tracking-tight">Contact</h2>
          <p className="text-on-background/70 text-sm">
            CosQ Entertainments ·{" "}
            <a href="mailto:harshit@cosq.in" className="text-primary hover:underline">
              harshit@cosq.in
            </a>
          </p>
          <div className="flex gap-4 pt-2 text-xs text-outline">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/delete-my-data" className="hover:text-primary transition-colors">Delete My Data</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
