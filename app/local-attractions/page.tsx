import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SecondaryNav from '@/components/sections/SecondaryNav';
import AttractionsCarousel from '@/components/sections/AttractionsSection';
import ItinerariesSection from '@/components/sections/ItinerariesSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Local Attractions & Itineraries | Hotel Winway Indore',
  description: 'Explore the rich heritage, vibrant food scene, and cultural landmarks of Indore. Discover local attractions like Rajwada Palace and Sarafa Bazaar, plus curated full and half-day itineraries.',
  alternates: { canonical: 'https://www.hotelwinway.com/local-attractions' },
};

export default function LocalAttractionsPage() {
  return (
    <>
      <style>{`
        .attractions-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 24px 40px;
        }

        .attractions-intro-sub {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 2px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 12px;
          font-weight: 600;
          display: block;
        }

        .attractions-intro-title {
          margin-bottom: 24px;
          font-size: 28px;
        }

        .attractions-intro-line1 {
          font-family: var(--font-sans);
          font-weight: 300;
          letter-spacing: 0.15em;
          color: #5a4a3a;
          text-transform: uppercase;
          margin-right: 8px;
        }

        .attractions-intro-line2 {
          font-family: var(--font-sans);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #111;
          text-transform: uppercase;
        }

        .attractions-intro-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #666;
        }
      `}</style>

      <HeroSection 
        title="Local Attractions" 
        imageSrc="/images/attractions/local/rajwada-palace.avif" 
        subtitle="Discover the vibrant heritage and culture of Indore"
      />
      
      <SecondaryNav />

      {/* Intro Section */}
      <section className="attractions-intro">
        <span className="attractions-intro-sub">EXPLORE INDORE</span>
        <h1 className="attractions-intro-title">
          <span className="attractions-intro-line1">ATTRACTIONS &amp; PLACES</span>
          <span className="attractions-intro-line2">TO VISIT IN INDORE</span>
        </h1>
        <p className="attractions-intro-desc">
          Indore blends historical significance with a thriving contemporary culture. From Rajwada Palace and Lal Bagh Palace to bustling food streets like Sarafa Bazaar, the city offers diverse experiences. Its vibrant culinary scene and growing urban character make it one of central India&apos;s most engaging destinations.
        </p>
      </section>

      {/* Existing Attractions Carousel */}
      <AttractionsCarousel />

      {/* New Itineraries Section */}
      <ItinerariesSection />

      {/* Send Enquiry Section */}
      <ContactCTA />
    </>
  );
}
