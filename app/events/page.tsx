import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Events & Banquet | Hotel Winway Indore',
  description: 'Host your wedding, conference or celebration at Hotel Winway\'s premium banquet hall in Indore. Capacity up to 120 guests.',
};

export default function EventsPage() {
  return (
    <>
    <main className="events-page">
      <style>{`
        .events-page {
          width: 100%;
        }
        
        /* Section 1: Hero */
        .events-hero-content {
          padding: 0 20px;
          z-index: 1;
        }
        .events-hero-label {
          color: #B8965A;
          letter-spacing: 0.3em;
          font-size: 12px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .events-hero-title {
          font-family: 'Libre Baskerville', serif, var(--font-serif, serif);
          font-size: 64px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .events-hero-subtext {
          font-family: 'Lato', sans-serif, var(--font-sans, sans-serif);
          font-size: 18px;
          font-weight: 300;
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

        /* Section 3: Gallery Grid */
        .events-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          padding: 0;
          margin: 0;
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
        .event-card {
          background: #FFFFFF;
          border: 1px solid #f0f0f0;
          padding: 40px 32px;
          text-align: center;
        }
        .event-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .event-card-title {
          font-family: 'Libre Baskerville', serif, var(--font-serif, serif);
          font-size: 18px;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        .event-card-desc {
          font-family: 'Lato', sans-serif, var(--font-sans, sans-serif);
          font-size: 14px;
          color: #666;
          line-height: 1.8;
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
          .events-hero-title {
            font-size: 48px;
          }
          .events-gallery {
            grid-template-columns: repeat(2, 1fr);
          }
          .events-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .events-hero-title {
            font-size: 36px;
          }
          .events-gallery {
            grid-template-columns: 1fr;
          }
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
      <section style={{
        backgroundImage: 'url(/images/events/bh1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '85vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%)' }} />
        <div className="events-hero-content">
          <div className="events-hero-label">HOTEL WINWAY</div>
          <h1 className="events-hero-title">EVENTS &amp; BANQUET</h1>
          <div className="events-hero-subtext">Create Unforgettable Celebrations</div>
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
      <section className="events-gallery">
        {[2, 3, 4, 5, 6, 7].map((num) => (
          <div key={`bh${num}`} style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
            <Image src={`/images/events/bh${num}.jpeg`} alt="Banquet Hall" fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
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
          <div className="event-card">
            <div className="event-icon">🎊</div>
            <h3 className="event-card-title">Weddings &amp; Celebrations</h3>
            <p className="event-card-desc">
              From intimate ceremonies to grand receptions, we craft weddings that reflect your unique love story with elegance and attention to every detail.
            </p>
          </div>
          <div className="event-card">
            <div className="event-icon">💼</div>
            <h3 className="event-card-title">Corporate Events</h3>
            <p className="event-card-desc">
              Conferences, seminars, product launches and board meetings &mdash; our dedicated team ensures seamless execution for every professional gathering.
            </p>
          </div>
          <div className="event-card">
            <div className="event-icon">🎂</div>
            <h3 className="event-card-title">Social Gatherings</h3>
            <p className="event-card-desc">
              Birthdays, anniversaries, family reunions and festive celebrations &mdash; create lasting memories in our beautifully appointed event spaces.
            </p>
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
    <Footer />
    </>
  );
}
