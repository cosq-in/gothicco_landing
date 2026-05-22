import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-primary/20 bg-surface-container-lowest">
      {/* Mobile: centered stack | Desktop: horizontal flex */}
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-8 max-w-container-max mx-auto text-center md:text-left">
        {/* Brand */}
        <div className="font-headline-md text-headline-md text-secondary uppercase tracking-widest hover:-translate-y-0.5 transition-transform cursor-pointer">
          BAMBINOPANDALINI
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
          <a className="font-label-pixel text-label-pixel text-outline uppercase hover:text-primary transition-all" href="#">The Abyss</a>
          <Link className="font-label-pixel text-label-pixel text-outline uppercase hover:text-primary transition-all" href="/privacy-policy">Privacy Void</Link>
          <Link className="font-label-pixel text-label-pixel text-outline uppercase hover:text-primary transition-all" href="/terms">Terms of Suffering</Link>
          <a className="font-label-pixel text-label-pixel text-outline uppercase hover:text-primary transition-all" href="#">Discord</a>
        </nav>

        {/* Copyright */}
        <p className="font-label-pixel text-label-pixel uppercase text-outline text-center md:text-right">
          © 2024 CosQ Entertainments. Stay Rotmaxing.
        </p>
      </div>
    </footer>
  );
}
