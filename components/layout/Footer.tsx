import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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
    <footer className="relative z-30 bg-[#45443f] text-white isolate">
      <div className="container-main pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-lg font-normal tracking-[0.1em] uppercase text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Hotel Winway
            </h2>
            <div className="w-10 h-px bg-[#8d6346] mb-6" />
            <p className="text-sm text-white/65 leading-relaxed mb-6 max-w-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              An elite business hotel reflecting the great hospitality of Malwa, offering world-class amenities in the heart of Indore.
            </p>
            <div className="flex gap-3 mb-8">
              {[
                { href: 'https://www.facebook.com/HotelWinway', label: 'Facebook', Icon: FacebookIcon },
                { href: 'https://www.instagram.com/hotelwinway', label: 'Instagram', Icon: InstagramIcon },
                { href: 'https://x.com/hotelwinway', label: 'Twitter', Icon: XIcon },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#8d6346] hover:border-[#8d6346] transition-all duration-300" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="text-[#8d6346] mt-1 flex-shrink-0" />
                <p className="text-xs text-white/65 leading-relaxed">164/1 RNT Marg, Near Madhumilan Square,<br />South Tukoganj, Indore — 452001</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="text-[#8d6346] flex-shrink-0" />
                <a href="tel:+910731-661-1111" className="text-xs text-white/65 hover:text-[#8d6346] transition-colors">0731-661-1111</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="text-[#8d6346] flex-shrink-0" />
                <a href="mailto:fom1@hotelwinway.com" className="text-xs text-white/65 hover:text-[#8d6346] transition-colors">fom1@hotelwinway.com</a>
              </div>
              <div className="flex gap-3 items-center">
                <Clock size={14} className="text-[#8d6346] flex-shrink-0" />
                <p className="text-xs text-white/65">Check-in: 12:00 | Check-out: 11:00</p>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2">
              <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8d6346] mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] text-[#8d6346] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-display)' }}>Get in Touch</p>
              <p className="text-lg text-white font-normal tracking-[0.06em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                Experience Malwa&apos;s Finest Hospitality
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:+910731-661-1111" className="btn btn-outline btn-sm" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                <Phone size={14} /> Call Now
              </a>
              <a href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                WhatsApp
              </a>
              <Link href="/contact" className="btn btn-accent btn-sm">
                <Mail size={14} /> Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Hotel Winway, Indore. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-and-conditions" className="text-xs text-white/40 hover:text-[#8d6346] transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-[#8d6346] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
