'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SecondaryNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.scrollLeft = 0;
    }
  }, []);

  const tabs = [
    { label: 'OVERVIEW', href: '/#overview' },
    { label: 'ROOMS & SUITES', href: '/rooms' },
    { label: 'OFFERS', href: '/#offers' },
    { label: 'DINING', href: '/dining' },
    { label: 'VENUES', href: '/venues' },
    { label: 'EXPERIENCES', href: '/#experiences' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'LOCAL ATTRACTIONS', href: '/local-attractions' },
    { label: 'TERMS & CONDITIONS', href: '/terms-and-conditions' }
  ];

  return (
    <>
      <style>{`
        .secondary-nav-scroll::-webkit-scrollbar { display: none; }
        .secondary-nav-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="secondary-nav-scroll" ref={navRef} style={{
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        borderBottom: '1px solid #e0e0e0',
        background: '#FFFFFF',
        position: 'sticky',
        top: '70px',
        zIndex: 100,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          minWidth: 'max-content',
          width: 'max-content',
          padding: '0',
          margin: '0',
        }}>
          {tabs.map((tab) => {
            const isActive = (() => {
              if (tab.href === '/' || tab.href === '/#overview') {
                return pathname === '/';
              }
              if (tab.href === '/rooms') {
                return pathname === '/rooms' || pathname.startsWith('/rooms/');
              }
              if (tab.href === '/dining') {
                return pathname === '/dining' || pathname.startsWith('/dining/');
              }
              if (tab.href === '/terms-and-conditions') {
                return pathname === '/terms-and-conditions';
              }
              if (tab.href.startsWith('/#')) return false;
              return pathname === tab.href;
            })();
            
            return (
              <Link 
                key={tab.label} 
                href={tab.href}
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '16px 20px',
                  whiteSpace: 'nowrap',
                  display: 'block',
                  borderBottom: isActive ? '2px solid #B8965A' : '2px solid transparent',
                  color: isActive ? '#B8965A' : '#333333',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
