import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://bambinopandalini.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BambinoPandalini | Enter the Void",
    template: "%s | BambinoPandalini",
  },
  description:
    "Your new digital companion is hungry for data. Feed it your attention, or watch it rot in the neon-soaked abyss of the Pandalini Den. Download the app and get Rotmaxxed.",
  keywords: [
    "BambinoPandalini", "gothic", "neon", "vaporwave", "digital pet",
    "rotmaxxer", "CosQ Entertainments", "gothic app", "digital companion",
  ],
  authors: [{ name: "CosQ Entertainments", url: BASE_URL }],
  creator: "CosQ Entertainments",
  publisher: "CosQ Entertainments",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "BambinoPandalini | Enter the Void",
    description: "The digital purgatory for your virtual familiar. Rot in style.",
    url: BASE_URL,
    siteName: "BambinoPandalini",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BambinoPandalini — Enter the Void",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BambinoPandalini | Enter the Void",
    description: "The digital purgatory for your virtual familiar. Rot in style.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;700&family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background overflow-x-hidden selection:bg-secondary/30 selection:text-secondary">
        {children}
      </body>
    </html>
  );
}
