import Link from 'next/link';
import { Home, Phone, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2014 50%, #1A1A1A 100%)' }}
    >
      {/* Gold ornament lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      <div className="text-center max-w-xl">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-[#C9A96E]/40" />
          <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-light">Hotel Winway</span>
          <div className="w-16 h-px bg-[#C9A96E]/40" />
        </div>

        {/* 404 Number */}
        <p className="font-serif text-[120px] sm:text-[160px] font-light text-[#C9A96E] leading-none opacity-20 select-none">
          404
        </p>

        {/* Message */}
        <div className="-mt-6 sm:-mt-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4 leading-tight">
            Page Not Found
          </h1>
          <p className="text-[#8B8A84] text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            The page you&apos;re looking for may have been moved, renamed, or no longer exists.
            Let us guide you back to where you need to be.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="flex items-center gap-3 bg-[#C9A96E] hover:bg-[#b8955a] text-white px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl min-w-[200px] justify-center"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <a
            href="tel:+910731-661-1111"
            className="flex items-center gap-3 border border-white/20 hover:border-[#C9A96E] text-white hover:text-[#C9A96E] px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 min-w-[200px] justify-center"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-5">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Rooms & Suites', href: '/rooms' },
              { label: 'Dining', href: '/dining' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Contact', href: '/contact' },
              { label: 'About Us', href: '/about' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1.5 text-sm text-[#8B8A84] hover:text-white transition-colors"
              >
                {link.label}
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* Address */}
        <p className="mt-10 text-xs text-[#555] leading-relaxed">
          164/1 RNT Marg, Near Madhumilan Square, South Tukoganj, Indore — 452001
        </p>
      </div>
    </div>
  );
}
