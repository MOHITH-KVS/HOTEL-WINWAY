'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { label: 'Overview', href: '/#overview' },
  { label: 'Rooms & Suites', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Dining', href: '/#dining' },
  { label: 'Attractions', href: '/#attractions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Local Attractions', href: '/local-attractions' },
  { label: 'Contact', href: '/contact' },
];

export default function SecondaryNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (!isHome) return null;

  return (
    <nav className="subnav-tabs" aria-label="Page sections">
      <div className="container-main">
        <div className="subnav-tabs-inner">
          {TABS.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="subnav-tab"
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
