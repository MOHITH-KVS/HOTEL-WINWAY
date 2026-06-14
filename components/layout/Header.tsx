'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [diningOpen, setDiningOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    fontFamily: 'Lato, sans-serif',
    fontSize: '12px',
    fontWeight: '700' as const,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: scrolled ? '#1a1a1a' : '#FFFFFF',
    textDecoration: 'none',
    transition: 'color 0.4s ease',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '0',
  };

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 40px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        WebkitTransform: 'translateZ(0)'
      }}>

        {/* LOGO */}
        <Link href="/" style={{
          fontFamily: 'Lato, sans-serif', fontSize: '16px', fontWeight: '800',
          letterSpacing: '0.25em', color: scrolled ? '#1a1a1a' : '#FFFFFF',
          textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.4s ease',
          flexShrink: 0
        }}>
          HOTEL WINWAY
        </Link>

        {/* DESKTOP NAV */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {/* Rooms Dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setRoomsOpen(true)}
            onMouseLeave={() => setRoomsOpen(false)}>
            <span style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '4px' }}>
              ROOMS & SUITES
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke={scrolled ? '#1a1a1a' : '#FFFFFF'} strokeWidth="1.5"/>
              </svg>
            </span>
            {roomsOpen && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', background: '#FFFFFF', minWidth: '200px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', padding: '8px 0', marginTop: '16px', borderTop: '2px solid #B8965A', zIndex: 100 }}>
                {[['Standard Room','/rooms/standard-room'],['Deluxe Room','/rooms/deluxe-room'],['Junior Suite','/rooms/junior-suite'],['Presidential Suite','/rooms/presidential-suite']].map(([name, href]) => (
                  <Link key={href} href={href} style={{ display: 'block', padding: '11px 24px', fontFamily: 'Lato', fontSize: '12px', letterSpacing: '0.08em', color: '#333333', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.2s ease' }}
                    onMouseOver={e => { e.currentTarget.style.color = '#B8965A'; e.currentTarget.style.paddingLeft = '28px'; }}
                    onMouseOut={e => { e.currentTarget.style.color = '#333333'; e.currentTarget.style.paddingLeft = '24px'; }}>
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dining Dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setDiningOpen(true)}
            onMouseLeave={() => setDiningOpen(false)}>
            <span style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '4px' }}>
              DINING
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke={scrolled ? '#1a1a1a' : '#FFFFFF'} strokeWidth="1.5"/>
              </svg>
            </span>
            {diningOpen && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', background: '#FFFFFF', minWidth: '180px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', padding: '8px 0', marginTop: '16px', borderTop: '2px solid #B8965A', zIndex: 100 }}>
                {[['Tiffin','/dining/tiffin'],['The Deck','/dining/the-deck'],['Al Fresco','/dining/al-fresco'],['Cafe','/dining/cafe']].map(([name, href]) => (
                  <Link key={href} href={href} style={{ display: 'block', padding: '11px 24px', fontFamily: 'Lato', fontSize: '12px', letterSpacing: '0.08em', color: '#333333', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.2s ease' }}
                    onMouseOver={e => { e.currentTarget.style.color = '#B8965A'; e.currentTarget.style.paddingLeft = '28px'; }}
                    onMouseOut={e => { e.currentTarget.style.color = '#333333'; e.currentTarget.style.paddingLeft = '24px'; }}>
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[['EVENTS & BANQUET','/events'],['LOCAL ATTRACTIONS','/local-attractions'],['GALLERY','/gallery'],['CONTACT US','/contact']].map(([name, href]) => (
            <Link key={href} href={href} style={navLinkStyle}
              onMouseOver={e => e.currentTarget.style.color = '#B8965A'}
              onMouseOut={e => e.currentTarget.style.color = scrolled ? '#1a1a1a' : '#FFFFFF'}>
              {name}
            </Link>
          ))}

          <a href="tel:07316611111" style={{ ...navLinkStyle, fontSize: '11px' }}>
            📞 0731-661-1111
          </a>

          <Link href="/contact" style={{
            fontFamily: 'Lato', fontSize: '11px', fontWeight: '800',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            background: '#B8965A', color: '#FFFFFF', padding: '12px 22px',
            textDecoration: 'none', transition: 'background 0.3s ease', whiteSpace: 'nowrap'
          }}
            onMouseOver={e => e.currentTarget.style.background = '#9A7B3A'}
            onMouseOut={e => e.currentTarget.style.background = '#B8965A'}>
            ENQUIRE NOW
          </Link>
        </nav>

        {/* HAMBURGER — mobile only */}
        <button className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '10px', minWidth: '44px', minHeight: '44px', flexDirection: 'column', gap: '5px', justifyContent: 'center' }}>
          <span style={{ display: 'block', width: '24px', height: '2px', background: scrolled ? '#1a1a1a' : '#FFFFFF', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: scrolled ? '#1a1a1a' : '#FFFFFF', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: scrolled ? '#1a1a1a' : '#FFFFFF', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: '#1a1a1a', zIndex: 999, display: 'flex', flexDirection: 'column', padding: '90px 32px 40px', overflowY: 'auto', WebkitTransform: 'translateZ(0)' }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', color: '#FFFFFF', fontSize: '28px', cursor: 'pointer', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>

          {[['HOME','/'],['ROOMS & SUITES','/rooms'],['DINING','/dining'],['EVENTS & BANQUET','/events'],['LOCAL ATTRACTIONS','/local-attractions'],['GALLERY','/gallery'],['CONTACT US','/contact']].map(([name, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFFFFF', textDecoration: 'none', padding: '16px 0', borderBottom: '1px solid #2C2C2C', display: 'block', transition: 'color 0.3s ease' }}
              onMouseOver={e => e.currentTarget.style.color = '#B8965A'}
              onMouseOut={e => e.currentTarget.style.color = '#FFFFFF'}>
              {name}
            </Link>
          ))}

          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="tel:07316611111" style={{ fontFamily: 'Lato', fontSize: '14px', color: '#B8965A', textDecoration: 'none', letterSpacing: '0.1em' }}>📞 0731-661-1111</a>
            <a href="mailto:fom1@hotelwinway.com" style={{ fontFamily: 'Lato', fontSize: '14px', color: '#999999', textDecoration: 'none' }}>✉ fom1@hotelwinway.com</a>
          </div>

          <Link href="/contact" onClick={() => setMenuOpen(false)}
            style={{ marginTop: '32px', background: '#B8965A', color: '#FFFFFF', fontFamily: 'Lato', fontSize: '13px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px', textDecoration: 'none', textAlign: 'center', display: 'block' }}>
            ENQUIRE NOW
          </Link>
        </div>
      )}

      {/* RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
