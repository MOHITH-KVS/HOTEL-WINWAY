'use client';
import Link from 'next/link';

export default function SecondaryNav() {
  const navItems = [
    'OVERVIEW',
    'ROOMS & SUITES',
    'OFFERS',
    'DINING',
    'VENUES',
    'WELLNESS',
    'EXPERIENCES',
    'GALLERY',
    'LOCAL ATTRACTIONS'
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
        {navItems.map((item) => {
          const isActive = item === 'OVERVIEW';
          return (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '13.5px',
                fontWeight: '500',
                color: '#333333',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                borderBottom: isActive ? '2px solid #111' : '2px solid transparent',
                whiteSpace: 'nowrap'
              }}
            >
              {item}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
