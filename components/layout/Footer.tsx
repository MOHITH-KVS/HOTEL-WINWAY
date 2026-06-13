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
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>

            {/* Facebook */}
            <a href="https://facebook.com/HotelWinway" target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: '#B8965A' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#B8965A'; e.currentTarget.style.background = 'rgba(184,150,90,0.1)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.background = 'transparent'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#B8965A">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/hotelwinway" target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: '#B8965A' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#B8965A'; e.currentTarget.style.background = 'rgba(184,150,90,0.1)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.background = 'transparent'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#B8965A" stroke="none"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="https://twitter.com/hotelwinway" target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#B8965A'; e.currentTarget.style.background = 'rgba(184,150,90,0.1)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.background = 'transparent'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#B8965A">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@hotelwinway" target="_blank" rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #444', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#B8965A'; e.currentTarget.style.background = 'rgba(184,150,90,0.1)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.background = 'transparent'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#B8965A">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1C1C1C"/>
              </svg>
            </a>

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
