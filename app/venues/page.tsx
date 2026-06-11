import type { Metadata } from 'next';
import Image from 'next/image';
import ContactCTA from '@/components/sections/ContactCTA';
import SecondaryNav from '@/components/sections/SecondaryNav';
import HeroSection from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Event Venues | Hotel Winway Indore',
  description: 'Versatile and elegantly appointed banquet space at Hotel Winway, ideal for corporate events, social gatherings and milestone celebrations.',
  alternates: { canonical: 'https://www.hotelwinway.com/venues' },
};

export default function VenuesPage() {
  return (
    <>
      <style>{`
        /* Hero Section */
        .venues-hero {
          background-color: #FAF9F6;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(201,169,110,0.03) 10px,
            rgba(201,169,110,0.03) 20px
          );
          padding: 80px 24px 60px 24px;
          text-align: center;
        }

        .venues-hero-title {
          margin-bottom: 24px;
        }

        .venues-hero-line1 {
          display: block;
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 24px;
          letter-spacing: 0.15em;
          color: #5a4a3a;
          text-transform: uppercase;
        }

        .venues-hero-line2 {
          display: block;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 36px;
          letter-spacing: 0.1em;
          color: #C9A030;
          text-transform: uppercase;
          margin-top: 8px;
        }

        .venues-hero-desc {
          max-width: 700px;
          margin: 0 auto;
          font-size: 15px;
          line-height: 1.8;
          color: #555;
        }

        /* Venue Section */
        .venue-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .venue-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .venue-heading-the {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 28px;
          letter-spacing: 0.15em;
          color: #5a4a3a;
          text-transform: uppercase;
          margin-right: 8px;
        }

        .venue-heading-name {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 28px;
          letter-spacing: 0.1em;
          color: #C9A030;
          text-transform: uppercase;
        }

        .venue-content {
          display: flex;
          gap: 40px;
        }

        /* Left Column (Table) */
        .venue-left {
          flex: 0 0 35%;
        }

        .capacity-table {
          width: 100%;
          border: 1px solid #d0c8be;
          border-collapse: collapse;
          margin-bottom: 30px;
        }

        .capacity-table td {
          padding: 14px 20px;
          border-bottom: 1px solid #e8e4df;
          font-size: 15px;
          color: #333;
        }

        .capacity-table tr:last-child td {
          border-bottom: none;
        }

        .capacity-table td:first-child {
          border-right: 1px solid #e8e4df;
        }

        .capacity-table td:last-child {
          text-align: center;
        }

        .btn-quote {
          display: block;
          width: 100%;
          text-align: center;
          border: 1px solid #555;
          background: transparent;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 11px;
          padding: 16px;
          text-decoration: none;
          transition: all 0.3s;
          font-weight: 600;
        }

        .btn-quote:hover {
          background: #333;
          color: #fff;
        }

        /* Right Column (Info + Image) */
        .venue-right {
          flex: 0 0 calc(65% - 40px);
        }

        .hotel-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 2px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .venue-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 30px;
        }

        .venue-image {
          width: 100%;
          height: 280px;
          position: relative;
        }

        .venue-image img {
          object-fit: cover;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .venue-content {
            flex-direction: column;
          }
          .venue-left, .venue-right {
            flex: 0 0 100%;
          }
          .venue-section {
            padding: 60px 20px;
          }
          .venues-hero {
            padding: 60px 20px 40px 20px;
          }
          .venues-hero-line1 { font-size: 18px; }
          .venues-hero-line2 { font-size: 26px; }
          .venue-heading-the, .venue-heading-name { font-size: 22px; }
        }
      `}</style>

      <HeroSection
        title="VENUES & EVENTS"
        subtitle="Where Every Event Becomes an Unforgettable Experience"
        locationLabel="INDORE, MADHYA PRADESH"
        imageSrc="/images/dining/banquet/banquet-1.jpeg"
        imageAlt="Hotel Winway Indore — Banquet and Event Venues"
      />

      <SecondaryNav />

      {/* SECTION 1 - Hero */}
      <section className="venues-hero">
        <h1 className="venues-hero-title">
          <span className="venues-hero-line1">Unveil Extraordinary</span>
          <span className="venues-hero-line2">Moments at Hotel Winway</span>
        </h1>
        <p className="venues-hero-desc">
          Hotel Winway offers a versatile and elegantly appointed banquet space, ideal for corporate events, social gatherings and milestone celebrations. With modern amenities, attentive service and a warm ambience, our venue is designed to make every occasion truly memorable.
        </p>
      </section>

      {/* SECTION 2 - Single Venue */}
      <section className="venue-section">
        <div className="venue-heading">
          <span className="venue-heading-the">THE</span>
          <span className="venue-heading-name">BANQUET HALL</span>
        </div>

        <div className="venue-content">
          {/* Left Column */}
          <div className="venue-left">
            <table className="capacity-table">
              <tbody>
                <tr>
                  <td>Max Capacity</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>Theatre</td>
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
            
            <a href="mailto:fom1@hotelwinway.com" className="btn-quote">
              REQUEST A QUOTE
            </a>
          </div>

          {/* Right Column */}
          <div className="venue-right">
            <div className="hotel-tag">HOTEL WINWAY, INDORE</div>
            <p className="venue-desc">
              The Banquet Hall at Hotel Winway is a sophisticated and versatile event space, perfectly suited for corporate conferences, social celebrations, weddings and private gatherings. Thoughtfully designed with modern amenities and warm interiors, the hall accommodates a variety of seating arrangements to suit the nature and scale of your event. Our dedicated events team ensures every detail is managed with precision, delivering a seamless and memorable experience for you and your guests.
            </p>
            <div className="venue-image">
              <Image 
                src="/images/dining/banquet/banquet-1.jpeg" 
                alt="The Banquet Hall at Hotel Winway, Indore" 
                fill 
                sizes="(max-width: 900px) 100vw, 65vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Contact CTA */}
      <ContactCTA />
    </>
  );
}
