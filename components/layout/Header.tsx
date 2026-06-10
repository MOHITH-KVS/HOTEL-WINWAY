'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hideMain, setHideMain] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [diningOpen, setDiningOpen] = useState(false);

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
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transform: hideMain ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease, background 0.4s ease, padding 0.4s ease',
      padding: scrolled ? '0 60px' : '0 60px',
      height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>

      {/* LOGO */}
      <Link href="/" style={{
        fontFamily: 'Lato, sans-serif',
        fontSize: '20px',
        fontWeight: '800',
        letterSpacing: '0.3em',
        color: scrolled ? '#1a1a1a' : '#FFFFFF',
        textShadow: scrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.4)',
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'color 0.4s ease'
      }}>
        HOTEL WINWAY
      </Link>

      {/* NAV LINKS */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>

        {/* ROOMS DROPDOWN */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setRoomsOpen(true)}
          onMouseLeave={() => setRoomsOpen(false)}>
          <span style={{
            fontFamily: 'Lato', fontSize: '13px', fontWeight: '700',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: scrolled ? '#1a1a1a' : '#FFFFFF',
            textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
            transition: 'color 0.4s ease, text-shadow 0.4s ease'
          }}>
            ROOMS & SUITES
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke={scrolled ? '#1a1a1a' : '#FFFFFF'} strokeWidth="1.5"/>
            </svg>
          </span>
          {roomsOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: '50%',
              transform: 'translateX(-50%)',
              background: '#FFFFFF', minWidth: '200px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              padding: '8px 0', marginTop: '16px',
              borderTop: '2px solid #B8965A'
            }}>
              {[['Standard Room','/rooms/standard-room'],['Deluxe Room','/rooms/deluxe-room'],['Junior Suite','/rooms/junior-suite'],['Presidential Suite','/rooms/presidential-suite']].map(([name, href]) => (
                <Link key={href} href={href} style={{
                  display: 'block', padding: '12px 24px',
                  fontFamily: 'Lato', fontSize: '12px',
                  letterSpacing: '0.08em', color: '#333333',
                  textDecoration: 'none', textTransform: 'uppercase',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => { e.currentTarget.style.color = '#B8965A'; e.currentTarget.style.paddingLeft = '28px'; }}
                onMouseOut={e => { e.currentTarget.style.color = '#333333'; e.currentTarget.style.paddingLeft = '24px'; }}>
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* DINING DROPDOWN */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setDiningOpen(true)}
          onMouseLeave={() => setDiningOpen(false)}>
          <span style={{
            fontFamily: 'Lato', fontSize: '13px', fontWeight: '700',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: scrolled ? '#1a1a1a' : '#FFFFFF',
            textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
            transition: 'color 0.4s ease, text-shadow 0.4s ease'
          }}>
            DINING
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke={scrolled ? '#1a1a1a' : '#FFFFFF'} strokeWidth="1.5"/>
            </svg>
          </span>
          {diningOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: '50%',
              transform: 'translateX(-50%)',
              background: '#FFFFFF', minWidth: '180px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              padding: '8px 0', marginTop: '16px',
              borderTop: '2px solid #B8965A'
            }}>
              {[['Tiffin','/dining/tiffin'],['The Deck','/dining/the-deck'],['Al Fresco','/dining/al-fresco'],['Cafe','/dining/cafe']].map(([name, href]) => (
                <Link key={href} href={href} style={{
                  display: 'block', padding: '12px 24px',
                  fontFamily: 'Lato', fontSize: '12px',
                  letterSpacing: '0.08em', color: '#333333',
                  textDecoration: 'none', textTransform: 'uppercase',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => { e.currentTarget.style.color = '#B8965A'; e.currentTarget.style.paddingLeft = '28px'; }}
                onMouseOut={e => { e.currentTarget.style.color = '#333333'; e.currentTarget.style.paddingLeft = '24px'; }}>
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* REGULAR LINKS */}
        {[['EVENTS & BANQUET','/events'],['LOCAL ATTRACTIONS','/local-attractions'],['GALLERY','/gallery'],['CONTACT US','/contact']].map(([name, href]) => (
          <Link key={href} href={href} style={{
            fontFamily: 'Lato', fontSize: '13px', fontWeight: '700',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: scrolled ? '#1a1a1a' : '#FFFFFF',
            textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
            textDecoration: 'none', transition: 'color 0.4s ease, text-shadow 0.4s ease'
          }}
          onMouseOver={e => e.currentTarget.style.color = '#B8965A'}
          onMouseOut={e => e.currentTarget.style.color = scrolled ? '#1a1a1a' : '#FFFFFF'}>
            {name}
          </Link>
        ))}

        {/* PHONE */}
        <a href="tel:07316611111" style={{
          fontFamily: 'Lato', fontSize: '13px', fontWeight: '700',
          letterSpacing: '0.08em', color: scrolled ? '#1a1a1a' : '#FFFFFF',
          textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.5)',
          textDecoration: 'none', transition: 'color 0.4s ease, text-shadow 0.4s ease'
        }}>
          📞 0731-661-1111
        </a>

        {/* ENQUIRE NOW BUTTON */}
        <Link href="/contact" style={{
          fontFamily: 'Lato', fontSize: '12px', fontWeight: '800',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          background: '#B8965A', color: '#FFFFFF',
          padding: '14px 28px', textDecoration: 'none',
          border: '2px solid #B8965A', cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(184,150,90,0.5)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#B8965A'; }}
        onMouseOut={e => { e.currentTarget.style.background = '#B8965A'; e.currentTarget.style.color = '#FFFFFF'; }}>
          ENQUIRE NOW
        </Link>

      </nav>
    </header>
  );
}
