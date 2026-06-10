'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#2C2C2C', color: '#FFFFFF', padding: '80px 0 0 0', fontFamily: 'Lato, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>

        {/* TOP ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', paddingBottom: '60px', borderBottom: '1px solid #444444' }}>

          {/* COLUMN 1 — Brand */}
          <div>
            <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '26px', fontWeight: '600', color: '#FFFFFF', letterSpacing: '0.04em', marginBottom: '12px', marginTop: '0' }}>
              Hotel Winway
            </h3>
            <p style={{ fontSize: '14px', color: '#CCCCCC', lineHeight: '1.8', marginBottom: '28px', maxWidth: '260px' }}>
              An elite &amp; exquisite hotel reflecting the great hospitality of Malwa, Indore.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
              {['f', 'in', 'X'].map((s) => (
                <a key={s} href="#" style={{ width: '36px', height: '36px', border: '1px solid #555555', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#AAAAAA', fontSize: '12px', textDecoration: 'none' }}>{s}</a>
              ))}
            </div>
            {/* Contact Info */}
            <div style={{ fontSize: '13px', color: '#AAAAAA', lineHeight: '2' }}>
              <div>📍 164/1 RNT Marg, Near Madhumilan Square,</div>
              <div style={{ paddingLeft: '18px' }}>South Tukoganj, Indore — 452001</div>
              <div>📞 0731-661-1111</div>
              <div>✉ fom1@hotelwinway.com</div>
              <div>🕐 Check-in: 12:00 | Check-out: 11:00</div>
            </div>
          </div>

          {/* COLUMN 2 — Rooms */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.2em', marginBottom: '20px', marginTop: '0', textTransform: 'uppercase' }}>
              Rooms & Suites
            </h4>
            {['Standard Room', 'Deluxe Room', 'Junior Suite', 'Presidential Suite'].map(item => (
              <div key={item} style={{ marginBottom: '0' }}>
                <a href="#" style={{ fontSize: '14px', color: '#BBBBBB', textDecoration: 'none', letterSpacing: '0.02em', lineHeight: '2.2' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#C4A882')}
                  onMouseOut={e => (e.currentTarget.style.color = '#BBBBBB')}>
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* COLUMN 3 — Dining */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.2em', marginBottom: '20px', marginTop: '0', textTransform: 'uppercase' }}>
              Dining
            </h4>
            {['Tiffin Restaurant', 'The Deck', 'Al Fresco', 'Cafe', 'Events & Banquet'].map(item => (
              <div key={item} style={{ marginBottom: '0' }}>
                <a href="#" style={{ fontSize: '14px', color: '#BBBBBB', textDecoration: 'none', letterSpacing: '0.02em', lineHeight: '2.2' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#C4A882')}
                  onMouseOut={e => (e.currentTarget.style.color = '#BBBBBB')}>
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* COLUMN 4 — Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.2em', marginBottom: '20px', marginTop: '0', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            {['About Hotel Winway', 'Local Attractions', 'Gallery', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'].map(item => (
              <div key={item} style={{ marginBottom: '0' }}>
                <a href="#" style={{ fontSize: '14px', color: '#BBBBBB', textDecoration: 'none', letterSpacing: '0.02em', lineHeight: '2.2' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#C4A882')}
                  onMouseOut={e => (e.currentTarget.style.color = '#BBBBBB')}>
                  {item}
                </a>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', fontSize: '12px', color: '#666666', letterSpacing: '0.05em' }}>
          <span>© 2026 Hotel Winway, Indore. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/terms-and-conditions" style={{ color: '#666666', textDecoration: 'none' }}>Terms & Conditions</a>
            <a href="/privacy-policy" style={{ color: '#666666', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
