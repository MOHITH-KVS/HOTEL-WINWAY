'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hideMain, setHideMain] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [diningOpen, setDiningOpen] = useState(false);
  const roomsTimeout = useRef<NodeJS.Timeout | null>(null);
  const diningTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleRoomsEnter = () => {
    if (roomsTimeout.current) clearTimeout(roomsTimeout.current);
    setRoomsOpen(true);
  };

  const handleRoomsLeave = () => {
    roomsTimeout.current = setTimeout(() => {
      setRoomsOpen(false);
    }, 250);
  };

  const handleDiningEnter = () => {
    if (diningTimeout.current) clearTimeout(diningTimeout.current);
    setDiningOpen(true);
  };

  const handleDiningLeave = () => {
    diningTimeout.current = setTimeout(() => {
      setDiningOpen(false);
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const secNav = document.getElementById('secondary-nav');
      if (secNav) {
        if (secNav.getBoundingClientRect().top <= 0) {
          setHideMain(true);
        } else {
          setHideMain(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="main-navbar" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(0,0,0,0.55)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transform: hideMain ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease, background 0.4s ease, padding 0.4s ease',
      padding: '0 0 0 24px',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'nowrap', whiteSpace: 'nowrap', width: '100%', boxSizing: 'border-box'
    }}>

      {/* LOGO */}
      <Link href="/" style={{
        fontFamily: 'Lato, sans-serif',
        fontSize: '14px',
        fontWeight: '700',
        letterSpacing: '2px',
        color: scrolled ? '#1a1a1a' : '#FFFFFF',
        textShadow: scrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.4)',
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'color 0.4s ease',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        lineHeight: 1
      }}>
        HOTEL WINWAY
      </Link>

      {/* NAV LINKS */}
      <nav style={{ 
        display: 'flex', alignItems: 'center', gap: '16px', 
        flex: 1, justifyContent: 'center', listStyle: 'none', margin: 0, padding: 0 
      }}>

        {/* ROOMS DROPDOWN */}
        <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
          onMouseEnter={handleRoomsEnter}
          onMouseLeave={handleRoomsLeave}
          onClick={() => { if (window.innerWidth < 1024) setRoomsOpen(!roomsOpen); }}>
          <Link href="/rooms" style={{
            fontFamily: 'Lato', fontSize: '11px', fontWeight: '500',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            color: scrolled ? '#1a1a1a' : '#FFFFFF',
            textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
            transition: 'color 0.4s ease, text-shadow 0.4s ease',
            whiteSpace: 'nowrap',
            textDecoration: 'none'
          }} onClick={(e) => { if (window.innerWidth < 1024) e.preventDefault(); }}>
            ROOMS & SUITES
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke={scrolled ? '#1a1a1a' : '#FFFFFF'} strokeWidth="1.5"/>
            </svg>
          </Link>
          <div style={{
            position: 'absolute', top: '100%', left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: '20px', // Invisible bridge
            visibility: roomsOpen ? 'visible' : 'hidden',
            opacity: roomsOpen ? 1 : 0,
            transition: 'opacity 0.2s ease, visibility 0.2s ease',
            zIndex: 100
          }}>
            <div style={{
              background: '#FFFFFF', minWidth: '220px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              padding: '8px 0',
              borderTop: '2px solid #B8965A',
              transform: roomsOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'transform 0.2s ease'
            }}>
              {[['Standard Room','/rooms/standard'],['Deluxe Room','/rooms/deluxe'],['Junior Suite','/rooms/junior-suite'],['Presidential Suite','/rooms/presidential-suite']].map(([name, href]) => (
                <Link key={href} href={href} style={{
                  display: 'block', padding: '12px 24px',
                  fontFamily: 'Lato', fontSize: '11px',
                  letterSpacing: '1px', color: '#333333',
                  textDecoration: 'none', textTransform: 'uppercase',
                  transition: 'all 0.2s ease', whiteSpace: 'nowrap'
                }}
                onMouseOver={e => { e.currentTarget.style.color = '#B8965A'; e.currentTarget.style.paddingLeft = '28px'; }}
                onMouseOut={e => { e.currentTarget.style.color = '#333333'; e.currentTarget.style.paddingLeft = '24px'; }}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DINING DROPDOWN */}
        <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
          onMouseEnter={handleDiningEnter}
          onMouseLeave={handleDiningLeave}
          onClick={() => { if (window.innerWidth < 1024) setDiningOpen(!diningOpen); }}>
          <Link href="/dining" style={{
            fontFamily: 'Lato', fontSize: '11px', fontWeight: '500',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            color: scrolled ? '#1a1a1a' : '#FFFFFF',
            textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
            transition: 'color 0.4s ease, text-shadow 0.4s ease',
            whiteSpace: 'nowrap',
            textDecoration: 'none'
          }} onClick={(e) => { if (window.innerWidth < 1024) e.preventDefault(); }}>
            DINING
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke={scrolled ? '#1a1a1a' : '#FFFFFF'} strokeWidth="1.5"/>
            </svg>
          </Link>
          <div style={{
            position: 'absolute', top: '100%', left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: '20px', // Invisible bridge
            visibility: diningOpen ? 'visible' : 'hidden',
            opacity: diningOpen ? 1 : 0,
            transition: 'opacity 0.2s ease, visibility 0.2s ease',
            zIndex: 100
          }}>
            <div style={{
              background: '#FFFFFF', minWidth: '180px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              padding: '8px 0',
              borderTop: '2px solid #B8965A',
              transform: diningOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'transform 0.2s ease'
            }}>
              {[['Tiffin','/dining/tiffin'],['The Deck','/dining/the-deck'],['Al Fresco','/dining/al-fresco'],['Cafe','/dining/cafe']].map(([name, href]) => (
                <Link key={href} href={href} style={{
                  display: 'block', padding: '12px 24px',
                  fontFamily: 'Lato', fontSize: '11px',
                  letterSpacing: '1px', color: '#333333',
                  textDecoration: 'none', textTransform: 'uppercase',
                  transition: 'all 0.2s ease', whiteSpace: 'nowrap'
                }}
                onMouseOver={e => { e.currentTarget.style.color = '#B8965A'; e.currentTarget.style.paddingLeft = '28px'; }}
                onMouseOut={e => { e.currentTarget.style.color = '#333333'; e.currentTarget.style.paddingLeft = '24px'; }}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* REGULAR LINKS */}
        {[['EVENTS & BANQUET','/events'],['LOCAL ATTRACTIONS','/local-attractions'],['GALLERY','/gallery'],['CONTACT US','/contact']].map(([name, href]) => (
          <Link key={href} href={href} style={{
            fontFamily: 'Lato', fontSize: '11px', fontWeight: '500',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            color: scrolled ? '#1a1a1a' : '#FFFFFF',
            textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
            textDecoration: 'none', transition: 'color 0.4s ease, text-shadow 0.4s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseOver={e => e.currentTarget.style.color = '#B8965A'}
          onMouseOut={e => e.currentTarget.style.color = scrolled ? '#1a1a1a' : '#FFFFFF'}>
            {name}
          </Link>
        ))}

        {/* PHONE */}
        <a href="tel:07316611111" style={{
          fontFamily: 'Lato', fontSize: '13px', fontWeight: '500',
          letterSpacing: '1px', color: scrolled ? '#1a1a1a' : '#FFFFFF',
          textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
          textDecoration: 'none', transition: 'color 0.4s ease, text-shadow 0.4s ease',
          whiteSpace: 'nowrap', flexShrink: 0, marginRight: '16px'
        }}>
          📞 0731-661-1111
        </a>
      </nav>

      {/* ENQUIRE NOW BUTTON */}
      <Link href="/contact" style={{
        fontFamily: 'Lato', fontSize: '12px', fontWeight: '600',
        letterSpacing: '2px', textTransform: 'uppercase',
        background: '#B8965A', color: '#FFFFFF',
        padding: '0 20px', textDecoration: 'none',
        border: 'none', cursor: 'pointer',
        boxShadow: 'none', borderRadius: 0,
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap', flexShrink: 0, height: '100%',
        display: 'flex', alignItems: 'center'
      }}
      onMouseOver={e => { e.currentTarget.style.background = scrolled ? '#1a1a1a' : '#FFFFFF'; e.currentTarget.style.color = scrolled ? '#FFFFFF' : '#B8965A'; }}
      onMouseOut={e => { e.currentTarget.style.background = '#B8965A'; e.currentTarget.style.color = '#FFFFFF'; }}>
        ENQUIRE NOW
      </Link>

    </header>
  );
}
