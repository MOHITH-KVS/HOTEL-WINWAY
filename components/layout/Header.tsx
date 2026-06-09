'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const NAV_ITEMS = [
  {
    label: 'Rooms & Suites',
    href: '/rooms',
    children: [
      { label: 'Standard Room', href: '/rooms/standard-room' },
      { label: 'Deluxe Room', href: '/rooms/deluxe-room' },
      { label: 'Junior Suite', href: '/rooms/junior-suite' },
      { label: 'Presidential Suite', href: '/rooms/presidential-suite' },
    ],
  },
  {
    label: 'Dining',
    href: '/dining',
    children: [
      { label: 'Tiffin', href: '/dining/tiffin' },
      { label: 'The Deck', href: '/dining/the-deck' },
      { label: 'Al Fresco', href: '/dining/al-fresco' },
      { label: 'Cafe', href: '/dining/cafe' },
    ],
  },
  { label: 'Events & Banquet', href: '/events' },
  { label: 'Local Attractions', href: '/local-attractions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const textColor = scrolled ? 'text-[#57585B]' : 'text-white';
  const logoFilter = scrolled ? '' : 'brightness-0 invert';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'header-solid' : 'header-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <div className="relative h-12 w-36">
              <Image
                src="/images/facade/facade-1.png"
                alt="Hotel Winway Logo"
                fill
                className={`object-contain transition-all duration-300 ${logoFilter}`}
                priority
                onError={() => {}}
              />
              {/* Text fallback */}
              <span
                className={`absolute inset-0 flex items-center font-serif font-semibold text-lg tracking-wide transition-colors duration-300 ${textColor}`}
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Hotel Winway
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`nav-link flex items-center gap-1 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${textColor} hover:text-[#C9A96E]`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-2 min-w-[200px] bg-white shadow-2xl transition-all duration-200 ${
                      activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-[13px] text-[#57585B] hover:text-[#C9A96E] hover:bg-[#F9F6F0] transition-colors duration-150 tracking-wide"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+910731-661-1111"
              className={`flex items-center gap-2 text-[13px] font-medium transition-colors duration-200 ${textColor} hover:text-[#C9A96E]`}
            >
              <Phone size={14} />
              <span>0731-661-1111</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#57585B] hover:bg-[#C9A96E] text-white text-[12px] font-bold tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 transition-colors duration-200 ${textColor}`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-serif text-xl text-[#1A1A1A]">Hotel Winway</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-[#57585B] hover:text-[#C9A96E] transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="p-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-50">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-4 text-[#57585B] font-medium text-sm tracking-wide uppercase"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileExpanded === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        mobileExpanded === item.label ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-4 py-3 text-sm text-[#8B8A84] hover:text-[#C9A96E] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-[#57585B] font-medium text-sm tracking-wide uppercase hover:text-[#C9A96E] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-6 space-y-3 border-t border-gray-100">
            <a
              href="tel:+9107316611111"
              className="flex items-center gap-3 text-[#57585B] hover:text-[#C9A96E] transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">0731-661-1111</span>
            </a>
            <Link
              href="/contact"
              className="w-full bg-[#57585B] text-white py-3 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#C9A96E] transition-colors text-center block"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 text-sm font-semibold tracking-[0.05em] hover:bg-[#1da851] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.03 18.99a9.955 9.955 0 01-4.766-1.21L2.93 19.07l1.323-4.228A9.987 9.987 0 012 11.97C2 6.477 6.477 2 11.97 2S22 6.477 22 11.97s-4.477 9.97-9.97 9.97z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="px-6 pb-8">
            <p className="text-xs text-[#8B8A84] leading-relaxed">
              164/1 RNT Marg, Near Madhumilan Square,<br />
              South Tukoganj, Indore — 452001
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
