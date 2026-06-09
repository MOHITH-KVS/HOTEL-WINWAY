'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';

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
  const { openModal } = useEnquiryModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const textColor = scrolled ? 'text-[#45443f]' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'header-solid' : 'header-transparent'
        }`}
        style={{ height: 'var(--nav-height)' }}
      >
        <div className="container-main h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 z-10">
            <span
              className={`text-xl font-normal tracking-[0.1em] uppercase transition-colors duration-300 ${textColor}`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hotel Winway
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`nav-link flex items-center gap-1.5 text-[12px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${textColor} hover:text-[#8d6346]`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-0 min-w-[220px] bg-white border border-[#e6e6e6] transition-all duration-300 ${
                      activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-[12px] text-[#45443f] hover:text-[#8d6346] hover:bg-[#faf9f7] transition-colors duration-300 tracking-wide"
                          style={{ fontFamily: 'var(--font-sans)' }}
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

          <div className="hidden xl:flex items-center gap-5">
            <a
              href="tel:+910731-661-1111"
              className={`flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] transition-colors duration-300 ${textColor} hover:text-[#8d6346]`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Phone size={13} />
              <span>0731-661-1111</span>
            </a>
            <button
              type="button"
              onClick={() => openModal()}
              className={`btn btn-sm ${scrolled ? 'btn-primary' : 'btn-accent'}`}
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={`xl:hidden p-2 transition-colors duration-300 ${textColor}`}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-[#e6e6e6]">
            <span className="text-sm font-medium tracking-[0.1em] uppercase text-[#45443f]" style={{ fontFamily: 'var(--font-display)' }}>
              Hotel Winway
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-[#45443f]" aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          <nav className="p-5">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-[#f0f0f0]">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-4 text-[#45443f] font-medium text-[11px] tracking-[0.12em] uppercase"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === item.label ? 'max-h-96' : 'max-h-0'}`}>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block pl-4 py-3 text-sm text-[#57585b] hover:text-[#8d6346]">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-4 text-[#45443f] font-medium text-[11px] tracking-[0.12em] uppercase hover:text-[#8d6346]" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-5 space-y-3 border-t border-[#e6e6e6]">
            <a href="tel:+9107316611111" className="flex items-center gap-3 text-[#45443f] text-sm">
              <Phone size={16} /> 0731-661-1111
            </a>
            <button type="button" onClick={() => { setMobileOpen(false); openModal(); }} className="btn btn-primary w-full">
              Contact Us
            </button>
            <a href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
