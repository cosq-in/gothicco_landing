import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account or Data | BambinoPandalini by CosQ Entertainments",
  description:
    "Request deletion of your BambinoPandalini account or personal data. Step-by-step instructions, data types affected, and retention periods.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 22, 2026";

const IN_APP_STEPS = [
  {
    step: "1",
    title: "Open the app",
    body: "Launch BambinoPandalini on your Android device.",
  },
  {
    step: "2",
    title: "Go to your Profile",
    body: "Tap the Profile tab at the bottom of the screen, then tap the settings icon (⚙) in the top-right corner to open the Settings Matrix.",
  },
  {
    step: "3",
    title: 'Tap "REQUEST ACCOUNT DELETION"',
    body: 'Find the orange "REQUEST ACCOUNT DELETION" option in the Settings Matrix panel, above the Log Out button.',
  },
  {
    step: "4",
    title: "Choose your request type",
    body: 'Select either "Delete my entire account" or "Delete my personal data only" and optionally provide a reason.',
  },
  {
    step: "5",
    title: "Submit",
    body: "Tap SUBMIT REQUEST. A confirmation message will appear. Our team reviews all requests within 7 days.",
  },
];

export default function DeleteMyData() {
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

      <main className="px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto space-y-14">

        {/* Hero */}
        <div className="space-y-3">
          <p className="font-label-pixel text-label-pixel text-outline uppercase tracking-widest">
            CosQ Entertainments · BambinoPandalini
          </p>
          <h1 className="font-press-start text-2xl md:text-4xl text-primary tracking-tighter drop-shadow-[0_0_10px_rgba(208,188,255,0.5)]">
            Delete Account or Data
          </h1>
          <p className="text-on-background/70 leading-relaxed max-w-2xl">
            You have the right to delete your account entirely, or to request deletion of specific
            personal data without closing your account. This page covers both options, what gets
            deleted, what is retained, and how long we keep it.
          </p>
          <p className="text-outline text-xs">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Option cards */}
        <section className="space-y-4">
          <h2 className="font-press-start text-lg text-primary tracking-tight">Choose Your Option</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Option A */}
            <a
              href="#delete-account"
              className="block p-6 rounded-xl border-2 border-red-500/40 bg-surface-container hover:border-red-500/70 transition-colors space-y-2"
            >
              <p className="font-press-start text-sm text-red-400">Option A</p>
              <p className="font-semibold text-on-background text-base">Delete My Entire Account</p>
              <p className="text-on-background/60 text-sm leading-relaxed">
                Permanently closes your account. Your username and password are removed and the
                account becomes inaccessible. Some anonymised content may be retained.
              </p>
              <p className="text-red-400 text-xs font-semibold mt-2">→ Jump to instructions</p>
            </a>

            {/* Option B */}
            <a
              href="#delete-data"
              className="block p-6 rounded-xl border-2 border-primary/40 bg-surface-container hover:border-primary/70 transition-colors space-y-2"
            >
              <p className="font-press-start text-sm text-primary">Option B</p>
              <p className="font-semibold text-on-background text-base">Delete My Personal Data Only</p>
              <p className="text-on-background/60 text-sm leading-relaxed">
                Removes identifiable data (username, credentials) while keeping your account shell
                so anonymised game data is preserved. You will no longer be able to log in.
              </p>
              <p className="text-primary text-xs font-semibold mt-2">→ Jump to instructions</p>
            </a>
          </div>
        </section>

        {/* ── Option A ── */}
        <section id="delete-account" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="font-press-start text-sm text-red-400 border border-red-500/40 px-2 py-1 rounded">
              Option A
            </span>
            <h2 className="font-press-start text-lg text-red-400 tracking-tight">Delete Entire Account</h2>
          </div>

          <p className="text-on-background/70 text-sm leading-relaxed">
            This permanently and irreversibly closes your BambinoPandalini account. You will not be
            able to recover your username, level, XP, panda, or posts after approval.
          </p>

          {/* Steps */}
          <div className="space-y-3">
            <h3 className="font-semibold text-on-background">In-App Steps</h3>
            <ol className="space-y-3 list-none">
              {IN_APP_STEPS.map(({ step, title, body }) => (
                <li
                  key={step}
                  className="flex gap-4 items-start p-4 rounded-lg border border-outline-variant/20 bg-surface-container"
                >
                  <span className="font-press-start text-lg text-red-400 shrink-0">{step}</span>
                  <div>
                    <p className="font-semibold text-on-background text-sm mb-0.5">{title}</p>
                    <p className="text-on-background/60 text-sm leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-on-background/50 text-sm">
              Prefer email? Send a message to{" "}
              <a href="mailto:harshit@cosq.in" className="text-primary hover:underline">
                harshit@cosq.in
              </a>{" "}
              with the subject <strong>Delete My Account</strong> and your username.
            </p>
          </div>

          {/* Data table – Option A */}
          <div className="space-y-3">
            <h3 className="font-semibold text-on-background">Data Deleted vs. Retained (Account Deletion)</h3>
            <div className="overflow-x-auto rounded-lg border border-outline-variant/20">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface-container text-on-background/60 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Data Type</th>
                    <th className="px-4 py-3">Action</th>
                    <th className="px-4 py-3">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    ["Username", "Replaced with deleted_user_<id> (anonymised)", "Anonymised record kept indefinitely"],
                    ["Password / credentials", "Cleared permanently — account inaccessible", "Not retained"],
                    ["Posts & comments", "Remain in feed, attributed to anonymised username", "Indefinite (anonymised)"],
                    ["XP, level, panda state", "Retained under anonymised account for system integrity", "Indefinite (anonymised)"],
                    ["Achievements & quests", "Retained under anonymised account", "Indefinite (anonymised)"],
                    ["Deletion request record", "Kept for legal / compliance audit", "Up to 3 years"],
                  ].map(([type, action, retention]) => (
                    <tr key={type} className="bg-background/40">
                      <td className="px-4 py-3 font-medium text-on-background">{type}</td>
                      <td className="px-4 py-3 text-on-background/70">{action}</td>
                      <td className="px-4 py-3 text-outline">{retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Option B ── */}
        <section id="delete-data" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="font-press-start text-sm text-primary border border-primary/40 px-2 py-1 rounded">
              Option B
            </span>
            <h2 className="font-press-start text-lg text-primary tracking-tight">Delete Personal Data Only</h2>
          </div>

          <p className="text-on-background/70 text-sm leading-relaxed">
            This removes identifiable personal data (username, credentials) while keeping your
            anonymised game data intact. You will not be able to log in after this is processed. Use
            this option if you want your identity removed but don&apos;t mind your anonymised
            posts/panda data remaining.
          </p>

          {/* Steps – same in-app flow, note the option choice */}
          <div className="space-y-3">
            <h3 className="font-semibold text-on-background">In-App Steps</h3>
            <ol className="space-y-3 list-none">
              {IN_APP_STEPS.map(({ step, title, body }) => (
                <li
                  key={step}
                  className="flex gap-4 items-start p-4 rounded-lg border border-outline-variant/20 bg-surface-container"
                >
                  <span className="font-press-start text-lg text-primary shrink-0">{step}</span>
                  <div>
                    <p className="font-semibold text-on-background text-sm mb-0.5">{title}</p>
                    <p className="text-on-background/60 text-sm leading-relaxed">
                      {step === "4"
                        ? 'Select "Delete my personal data only" and optionally provide a reason.'
                        : body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-on-background/50 text-sm">
              Prefer email? Send a message to{" "}
              <a href="mailto:harshit@cosq.in" className="text-primary hover:underline">
                harshit@cosq.in
              </a>{" "}
              with the subject <strong>Delete My Personal Data</strong> and your username.
            </p>
          </div>

          {/* Data table – Option B */}
          <div className="space-y-3">
            <h3 className="font-semibold text-on-background">Data Deleted vs. Retained (Data-Only Deletion)</h3>
            <div className="overflow-x-auto rounded-lg border border-outline-variant/20">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface-container text-on-background/60 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Data Type</th>
                    <th className="px-4 py-3">Action</th>
                    <th className="px-4 py-3">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    ["Username", "Replaced with deleted_user_<id> (anonymised)", "Anonymised record kept indefinitely"],
                    ["Password / credentials", "Cleared permanently — login disabled", "Not retained"],
                    ["Posts & comments", "Remain in feed, attributed to anonymised username", "Indefinite (anonymised)"],
                    ["XP, level, panda state", "Retained under anonymised account", "Indefinite (anonymised)"],
                    ["Achievements & quests", "Retained under anonymised account", "Indefinite (anonymised)"],
                    ["Deletion request record", "Kept for legal / compliance audit", "Up to 3 years"],
                  ].map(([type, action, retention]) => (
                    <tr key={type} className="bg-background/40">
                      <td className="px-4 py-3 font-medium text-on-background">{type}</td>
                      <td className="px-4 py-3 text-on-background/70">{action}</td>
                      <td className="px-4 py-3 text-outline">{retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Processing time */}
        <section className="p-5 rounded-lg border border-outline-variant/20 bg-surface-container space-y-2">
          <h3 className="font-semibold text-on-background text-sm">Processing Time</h3>
          <p className="text-on-background/60 text-sm leading-relaxed">
            All deletion requests are reviewed by our team within <strong className="text-on-background">7 days</strong> of submission.
            You will not receive an in-app notification upon completion. If you need confirmation,
            email{" "}
            <a href="mailto:harshit@cosq.in" className="text-primary hover:underline">
              harshit@cosq.in
            </a>
            .
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-2 border-t border-outline-variant/20 pt-8">
          <h2 className="font-press-start text-base text-primary tracking-tight">Contact</h2>
          <p className="text-on-background/70 text-sm leading-relaxed">
            For questions about your data rights or this process:
          </p>
          <p className="text-on-background text-sm">
            CosQ Entertainments ·{" "}
            <a href="mailto:harshit@cosq.in" className="text-primary hover:underline">
              harshit@cosq.in
            </a>
          </p>
          <div className="flex gap-4 pt-2 text-xs text-outline">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
