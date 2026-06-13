'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1C', color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>

      {/* MAIN FOOTER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '70px 60px 50px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '60px' }}>

        {/* COL 1 — Brand */}
        <div>
          <h3 style={{ fontFamily: 'Lato, sans-serif', fontSize: '16px', fontWeight: '700', letterSpacing: '0.25em', color: '#FFFFFF', marginBottom: '16px', marginTop: '0' }}>
            HOTEL WINWAY
          </h3>
          <p style={{ fontSize: '13px', color: '#999999', lineHeight: '1.9', marginBottom: '24px', maxWidth: '240px' }}>
            Experience the perfect blend of modern luxury and traditional Malwa hospitality in the heart of Indore.
          </p>
          <p style={{ fontSize: '13px', color: '#999999', lineHeight: '1.9', marginBottom: '6px' }}>
            R.N.T. Marg, Indore, Madhya Pradesh
          </p>
          <p style={{ fontSize: '13px', color: '#999999', lineHeight: '1.9', marginBottom: '6px' }}>
            India — 452 001
          </p>
          <p style={{ fontSize: '13px', color: '#999999', lineHeight: '1.9', marginBottom: '6px' }}>
            ✆ 0731-661-1111
          </p>
          <p style={{ fontSize: '13px', color: '#999999', lineHeight: '1.9', marginBottom: '24px' }}>
            ✉ fom1@hotelwinway.com
          </p>
          {/* Social */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {[['FB','#'],['IG','#'],['TW','#'],['YT','#']].map(([label, href]) => (
              <a key={label} href={href} style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999999', fontSize: '10px', fontWeight: '700', textDecoration: 'none', letterSpacing: '0.05em', transition: 'all 0.3s ease' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = '#B8965A'; e.currentTarget.style.color = '#B8965A'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#999999'; }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* COL 2 — Rooms */}
        <div>
          <h4 style={{ fontFamily: 'Lato', fontSize: '11px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.2em', marginBottom: '24px', marginTop: '0', textTransform: 'uppercase' }}>
            ROOMS & SUITES
          </h4>
          {[['Standard Room','/rooms/standard-room'],['Deluxe Room','/rooms/deluxe-room'],['Junior Suite','/rooms/junior-suite'],['Presidential Suite','/rooms/presidential-suite']].map(([name, href]) => (
            <div key={name} style={{ marginBottom: '14px' }}>
              <Link href={href} style={{ fontSize: '13px', color: '#999999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseOver={e => e.currentTarget.style.color = '#B8965A'}
                onMouseOut={e => e.currentTarget.style.color = '#999999'}>
                {name}
              </Link>
            </div>
          ))}
        </div>

        {/* COL 3 — Dining */}
        <div>
          <h4 style={{ fontFamily: 'Lato', fontSize: '11px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.2em', marginBottom: '24px', marginTop: '0', textTransform: 'uppercase' }}>
            DINING
          </h4>
          {[['Tiffin Restaurant','/dining/tiffin'],['The Deck','/dining/the-deck'],['Al Fresco','/dining/al-fresco'],['Cafe','/dining/cafe'],['Events & Banquet','/events']].map(([name, href]) => (
            <div key={name} style={{ marginBottom: '14px' }}>
              <Link href={href} style={{ fontSize: '13px', color: '#999999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseOver={e => e.currentTarget.style.color = '#B8965A'}
                onMouseOut={e => e.currentTarget.style.color = '#999999'}>
                {name}
              </Link>
            </div>
          ))}
        </div>

        {/* COL 4 — Quick Links */}
        <div>
          <h4 style={{ fontFamily: 'Lato', fontSize: '11px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.2em', marginBottom: '24px', marginTop: '0', textTransform: 'uppercase' }}>
            QUICK LINKS
          </h4>
          {[['About Us','/about'],['Local Attractions','/local-attractions'],['Gallery','/gallery'],['Contact Us','/contact'],['Terms & Conditions','/terms-and-conditions'],['Privacy Policy','/privacy-policy']].map(([name, href]) => (
            <div key={name} style={{ marginBottom: '14px' }}>
              <Link href={href} style={{ fontSize: '13px', color: '#999999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseOver={e => e.currentTarget.style.color = '#B8965A'}
                onMouseOut={e => e.currentTarget.style.color = '#999999'}>
                {name}
              </Link>
            </div>
          ))}
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: '1px solid #2C2C2C', maxWidth: '1200px', margin: '0 auto', padding: '20px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: '#555555', letterSpacing: '0.04em' }}>
          © 2026 Hotel Winway. All Rights Reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/privacy-policy" style={{ fontSize: '12px', color: '#555555', textDecoration: 'none' }}>Privacy Policy</Link>
          <span style={{ color: '#333' }}>|</span>
          <Link href="/terms-and-conditions" style={{ fontSize: '12px', color: '#555555', textDecoration: 'none' }}>Terms & Conditions</Link>
        </div>
      </div>

    </footer>
  );
}
