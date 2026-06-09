import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// Social icons as inline SVGs (lucide-react v1.17 doesn't export brand icons)
const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const footerLinks = {
  'Rooms & Suites': [
    { label: 'Standard Room', href: '/rooms/standard-room' },
    { label: 'Deluxe Room', href: '/rooms/deluxe-room' },
    { label: 'Junior Suite', href: '/rooms/junior-suite' },
    { label: 'Presidential Suite', href: '/rooms/presidential-suite' },
  ],
  'Dining': [
    { label: 'Tiffin Restaurant', href: '/dining/tiffin' },
    { label: 'The Deck', href: '/dining/the-deck' },
    { label: 'Al Fresco', href: '/dining/al-fresco' },
    { label: 'Cafe', href: '/dining/cafe' },
    { label: 'Events & Banquet', href: '/events' },
  ],
  'Explore': [
    { label: 'About Hotel Winway', href: '/about' },
    { label: 'Local Attractions', href: '/local-attractions' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-30 bg-[#1A1A1A] text-white isolate">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2
              className="font-serif text-2xl font-normal text-white mb-5 tracking-wide"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Hotel Winway
            </h2>
            <div className="w-12 h-px bg-[#C9A96E] mb-6" />
            <p className="text-sm text-[#8B8A84] leading-relaxed mb-6 max-w-xs">
              An elite & exquisite business hotel reflecting the great hospitality of Malwa.
              Offering world-class amenities and personalized service in the heart of Indore.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.facebook.com/HotelWinway"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#8B8A84] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/hotelwinway"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#8B8A84] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://x.com/hotelwinway"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#8B8A84] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-200"
                aria-label="Twitter / X"
              >
                <XIcon />
              </a>
            </div>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="text-[#C9A96E] mt-1 flex-shrink-0" />
                <p className="text-xs text-[#8B8A84] leading-relaxed">
                  164/1 RNT Marg, Near Madhumilan Square,<br />
                  South Tukoganj, Indore — 452001
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="text-[#C9A96E] flex-shrink-0" />
                <a href="tel:+910731-661-1111" className="text-xs text-[#8B8A84] hover:text-[#C9A96E] transition-colors">
                  0731-661-1111
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="text-[#C9A96E] flex-shrink-0" />
                <a href="mailto:fom1@hotelwinway.com" className="text-xs text-[#8B8A84] hover:text-[#C9A96E] transition-colors">
                  fom1@hotelwinway.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Clock size={14} className="text-[#C9A96E] flex-shrink-0" />
                <p className="text-xs text-[#8B8A84]">Check-in: 12:00 | Check-out: 11:00</p>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2 lg:col-start-auto">
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A96E] mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8B8A84] hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enquiry Bar */}
        <div className="mt-14 pt-10 pb-10 border-t border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="relative z-10">
              <p className="text-xs text-[#C9A96E] tracking-[0.2em] uppercase mb-2">Plan Your Stay</p>
              <p
                className="font-serif text-xl md:text-2xl text-white font-light leading-snug"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Experience Malwa&apos;s Finest Hospitality
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="tel:+910731-661-1111"
                className="flex items-center gap-2 px-5 py-3 border border-[#C9A96E] text-[#C9A96E] text-sm font-medium hover:bg-[#C9A96E] hover:text-white transition-all duration-200"
              >
                <Phone size={14} />
                Call Us
              </a>
              <a
                href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-sm font-medium hover:bg-[#1da851] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.03 18.99a9.955 9.955 0 01-4.766-1.21L2.93 19.07l1.323-4.228A9.987 9.987 0 012 11.97C2 6.477 6.477 2 11.97 2S22 6.477 22 11.97s-4.477 9.97-9.97 9.97z"/>
                </svg>
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-3 bg-[#C9A96E] text-white text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#b8955a] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Mail size={14} />
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            &copy; {new Date().getFullYear()} Hotel Winway, Indore. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms-and-conditions" className="text-xs text-[#555] hover:text-[#C9A96E] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="text-xs text-[#555] hover:text-[#C9A96E] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
