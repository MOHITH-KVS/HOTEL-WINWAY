'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function SecondaryNav() {
  const pathname = usePathname();

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
    <div id="secondary-nav" className="secondary-nav" style={{
      position: 'sticky',
      top: '0px',
      zIndex: 900,
      background: '#FFFFFF',
      borderBottom: '1px solid #e5e5e5',
      width: '100%',
      height: '56px',
      marginTop: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      whiteSpace: 'nowrap'
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        height: '100%',
        whiteSpace: 'nowrap'
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
            // For all anchor links like /#offers, /#venues etc — NEVER active
            if (tab.href.startsWith('/#')) return false;
            return pathname === tab.href;
          })();
          
          return (
            <Link 
              key={tab.label} 
              href={tab.href}
              className={isActive ? 'tab-active' : ''}
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '13.5px',
                fontWeight: isActive ? '600' : '500',
                color: isActive ? '#1a1a1a' : '#333333',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                borderBottom: isActive ? '2px solid #1a1a1a' : '2px solid transparent',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
