'use client';

import Link from 'next/link';

export default function EventsClient() {
  return (
    <main className="events-page">
      <style>{`
        .events-page {
          width: 100%;
        }
        
        /* Section 2: Intro */
        .events-intro {
          background: #FFFFFF;
          padding: 80px 0;
          text-align: center;
        }
        .events-intro-label {
          color: #B8965A;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 11px;
          margin-bottom: 16px;
        }
        .events-intro-title {
          color: #1a1a1a;
          font-family: 'Libre Baskerville', serif, var(--font-serif, serif);
          font-size: 36px;
          margin-bottom: 32px;
        }
        .events-intro-text {
          max-width: 700px;
          margin: 0 auto;
          font-size: 15px;
          color: #666;
          line-height: 1.9;
          padding: 0 20px;
        }

        /* Section 4: Capacity Table */
        .events-capacity {
          padding: 80px 40px;
          text-align: center;
        }
        .events-capacity-label {
          color: #B8965A;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.25em;
          margin-bottom: 16px;
        }
        .events-capacity-title {
          font-family: 'Libre Baskerville', serif, var(--font-serif, serif);
          font-size: 32px;
          margin-bottom: 16px;
          color: #1a1a1a;
        }
        .events-capacity-subtext {
          color: #666;
          margin-bottom: 40px;
        }
        .capacity-table {
          max-width: 700px;
          margin: 0 auto;
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #e8e8e8;
        }
        .capacity-table th {
          background: #1a1a1a;
          color: white;
          font-family: 'Lato', sans-serif, var(--font-sans, sans-serif);
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 16px 40px;
          text-align: left;
        }
        .capacity-table td {
          padding: 14px 40px;
          text-align: left;
          font-size: 14px;
        }
        .capacity-table tr:nth-child(odd) {
          background: #fff;
        }
        .capacity-table tr:nth-child(even) {
          background: transparent;
        }
        .capacity-table td:first-child {
          font-weight: 500;
          color: #1a1a1a;
        }
        .capacity-table td:last-child {
          font-weight: 700;
          color: #B8965A;
          font-size: 16px;
        }

        /* Section 5: Events We Host */
        .events-host {
          background: #FFFFFF;
          padding: 0;
        }
        .events-host-title {
          font-family: 'Libre Baskerville', serif, var(--font-serif, serif);
          font-size: 32px;
          text-align: center;
          margin-bottom: 0;
          padding-top: 60px;
          color: #1a1a1a;
        }
        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px;
        }

        /* Section 6: Enquiry CTA */
        .events-cta {
          background: #1C1C1C;
          padding: 80px 40px;
          text-align: center;
        }
        .events-cta-title {
          color: white;
          font-family: 'Libre Baskerville', serif, var(--font-serif, serif);
          font-size: 40px;
        }
        .events-cta-subtext {
          color: #AAAAAA;
          font-size: 15px;
          margin: 20px 0 40px;
        }
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .btn-primary, .btn-secondary {
          display: inline-block;
          padding: 16px 40px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 0;
        }
        .btn-primary {
          background: #B8965A;
          color: white;
        }
        .btn-primary:hover {
          background: #9A7B3A;
        }
        .btn-secondary {
          background: transparent;
          border: 1.5px solid #555555;
          color: #FFFFFF;
        }
        .btn-secondary:hover {
          border-color: #B8965A;
          color: #B8965A;
        }

        @media (max-width: 992px) {
          .events-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
          .events-capacity {
            padding: 60px 20px;
          }
          .capacity-table th, .capacity-table td {
            padding: 12px 20px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      {/* SECTION 1 - HERO */}
      <section
        style={{
          backgroundImage: `url('/images/events/bh1.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '85vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
          <p style={{ fontFamily: 'Lato', fontSize: '11px', fontWeight: '600', letterSpacing: '0.3em', color: '#B8965A', textTransform: 'uppercase', marginBottom: '16px' }}>HOTEL WINWAY</p>
          <h1 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '64px', fontWeight: '400', color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase', textShadow: '0 4px 20px rgba(0,0,0,0.5)', marginBottom: '20px', margin: '0 0 20px 0' }}>EVENTS & BANQUET</h1>
          <p style={{ fontFamily: 'Lato', fontSize: '18px', fontWeight: '300', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em' }}>Create Unforgettable Celebrations</p>
        </div>
      </section>

      {/* SECTION 2 - INTRO */}
      <section className="events-intro">
        <div className="events-intro-label">VENUES &amp; EVENTS</div>
        <h2 className="events-intro-title">Where Every Celebration Becomes a Memory</h2>
        <p className="events-intro-text">
          At Hotel Winway, we understand that every event is unique. Whether you are hosting an intimate corporate meeting, a grand wedding celebration, a social gathering or a milestone birthday, our dedicated team ensures every detail is executed with precision and warmth. Our elegant banquet hall and versatile event spaces provide the perfect canvas for your vision.
        </p>
      </section>

      {/* SECTION 3 - IMAGE GALLERY GRID */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
        {['bh2.jpeg','bh3.jpeg','bh4.jpeg','bh5.jpeg','bh6.jpeg','bh7.jpeg'].map((img) => (
          <div key={img} style={{ height: '380px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={`/images/events/${img}`}
              alt="Banquet Hall"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </section>

      {/* SECTION 4 - CAPACITY TABLE */}
      <section className="events-capacity" style={{
        background: '#FAF8F5',
        backgroundImage: 'radial-gradient(circle, #e8e0d0 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
        <div className="events-capacity-label">VENUE SPECIFICATIONS</div>
        <h2 className="events-capacity-title">Banquet Hall Capacity</h2>
        <p className="events-capacity-subtext">Our versatile banquet hall can be configured to suit any event format</p>
        <table className="capacity-table">
          <thead>
            <tr>
              <th>Setup</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maximum Capacity</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Theatre Style</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Boardroom</td>
              <td>30</td>
            </tr>
            <tr>
              <td>U-Shaped</td>
              <td>45</td>
            </tr>
            <tr>
              <td>Classroom</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Cluster</td>
              <td>35</td>
            </tr>
            <tr>
              <td>Reception</td>
              <td>120</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SECTION 5 - EVENTS WE HOST */}
      <section className="events-host">
        <h2 className="events-host-title">Events We Specialise In</h2>
        <div className="events-grid">
          <div
            style={{
              padding: '40px 32px',
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #f0f0f0',
              transition: 'all 0.35s ease',
              cursor: 'default'
            }}
            onMouseOver={e => {
              e.currentTarget.style.border = '1.5px solid #B8965A';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(184,150,90,0.15)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.border = '1.5px solid #f0f0f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '44px', marginBottom: '20px' }}>🎊</div>
            <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '18px', fontWeight: '400', color: '#1a1a1a', marginBottom: '14px', letterSpacing: '0.02em' }}>Weddings &amp; Celebrations</h3>
            <p style={{ fontFamily: 'Lato', fontSize: '14px', color: '#666666', lineHeight: '1.8' }}>From intimate ceremonies to grand receptions, we craft weddings that reflect your unique love story with elegance and attention to every detail.</p>
          </div>

          <div
            style={{
              padding: '40px 32px',
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #f0f0f0',
              transition: 'all 0.35s ease',
              cursor: 'default'
            }}
            onMouseOver={e => {
              e.currentTarget.style.border = '1.5px solid #B8965A';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(184,150,90,0.15)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.border = '1.5px solid #f0f0f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '44px', marginBottom: '20px' }}>💼</div>
            <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '18px', fontWeight: '400', color: '#1a1a1a', marginBottom: '14px', letterSpacing: '0.02em' }}>Corporate Events</h3>
            <p style={{ fontFamily: 'Lato', fontSize: '14px', color: '#666666', lineHeight: '1.8' }}>Conferences, seminars, product launches and board meetings &mdash; our dedicated team ensures seamless execution for every professional gathering.</p>
          </div>

          <div
            style={{
              padding: '40px 32px',
              textAlign: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #f0f0f0',
              transition: 'all 0.35s ease',
              cursor: 'default'
            }}
            onMouseOver={e => {
              e.currentTarget.style.border = '1.5px solid #B8965A';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(184,150,90,0.15)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.border = '1.5px solid #f0f0f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '44px', marginBottom: '20px' }}>🎂</div>
            <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '18px', fontWeight: '400', color: '#1a1a1a', marginBottom: '14px', letterSpacing: '0.02em' }}>Social Gatherings</h3>
            <p style={{ fontFamily: 'Lato', fontSize: '14px', color: '#666666', lineHeight: '1.8' }}>Birthdays, anniversaries, family reunions and festive celebrations &mdash; create lasting memories in our beautifully appointed event spaces.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - ENQUIRY CTA */}
      <section className="events-cta">
        <h2 className="events-cta-title">Plan Your Event With Us</h2>
        <p className="events-cta-subtext">Our events team is ready to help you create an unforgettable experience. Get in touch today.</p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn-primary">
            ENQUIRE NOW &rarr;
          </Link>
          <a href="tel:07316611111" className="btn-secondary">
            CALL US: 0731-661-1111
          </a>
        </div>
      </section>
    </main>
  );
}
