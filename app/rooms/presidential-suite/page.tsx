import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import RoomHighlights from '@/components/sections/RoomHighlights';
import RoomExperience from '@/components/sections/RoomExperience';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import ExploreRoomsCarousel from '@/components/sections/ExploreRoomsCarousel';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Presidential Suite | Hotel Winway Indore',
  description: 'The pinnacle of luxury in Indore. Discover the expansive Presidential Suite at Hotel Winway, offering bespoke service and opulent interiors.',
};

export default function PresidentialSuitePage() {
  const galleryItems = [
    { src: '/images/rooms/presidential-suite/ps-1.jpeg', label: 'THE MASTER BEDROOM' },
    { src: '/images/rooms/presidential-suite/ps-2.jpeg', label: 'GRAND LIVING AREA' },
    { src: '/images/rooms/presidential-suite/ps-3.jpeg', label: 'PRIVATE DINING' },
    { src: '/images/rooms/presidential-suite/ps-5.jpeg', label: 'LUXURY BATH & JACUZZI' },
    { src: '/images/rooms/presidential-suite/ps-6.jpeg', label: 'EXECUTIVE WORKSPACE' },
  ];

  return (
    <div style={{ backgroundColor: '#111' }}>
      <HeroSection
        title="PRESIDENTIAL SUITE"
        subtitle="The Pinnacle of Luxury in Indore"
        imageSrc="/images/rooms/presidential-suite/ps-1.jpeg"
        imageAlt="Presidential Suite at Hotel Winway"
      />

      <section style={{ padding: '120px 5%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', marginBottom: '24px', fontWeight: 300, color: '#C9A030' }}>
          A Class Apart
        </h2>
        <p style={{ fontSize: '16px', color: '#ccc', lineHeight: 2 }}>
          Welcome to the most prestigious address in Indore. The Presidential Suite at Hotel Winway is a masterpiece 
          of design and opulence. Reserved for visiting dignitaries, celebrities, and those who demand nothing but the absolute best, 
          this sweeping suite offers an unmatched level of privacy, dedicated service, and breathtaking city views.
        </p>
      </section>

      <RoomHighlights 
        size="850 sq. ft."
        view="Uninterrupted City Panorama"
        bed="Bespoke Super King Bed"
        occupancy="Up to 4 Adults"
        isDarkTheme={true}
      />

      <RoomExperience 
        title="Bespoke Living at its Finest"
        description={
          <>
            <p>Every inch of the Presidential Suite is appointed with ultra-premium materials, featuring imported marble, fine woods, and custom artistry. The suite includes an expansive living room, a private dining area, and an executive workspace.</p>
            <p>Experience rejuvenation in the sprawling en-suite master bathroom, complete with a deep-soaking Jacuzzi, a rain shower, and exclusive luxury bath amenities. For your ultimate convenience, enjoy dedicated butler service available around the clock to cater to your every desire.</p>
          </>
        }
        imageSrc="/images/rooms/presidential-suite/ps-2.jpeg"
        imageAlt="Presidential Suite Living Area"
        reverse={true}
        isDarkTheme={true}
      />

      {/* The Gallery component has a darkBackground prop which gives it an off-white cream texture.
          But to make it truly ultra-premium dark, we'll wrap it in a div that overrides the background if needed, 
          or just pass darkBackground=false and use CSS. But actually darkBackground=true means cream in GalleryCarousel. 
          We'll keep the cream break as a nice contrast, or let's use the cream texture. */}
      <div style={{ filter: 'brightness(0.9) contrast(1.1)' }}>
        <GalleryCarousel 
          title="SUITE GALLERY"
          items={galleryItems}
          darkBackground={true} 
        />
      </div>

      {/* Amenities Section is currently light. We will wrap it to blend in or let it be light for contrast. */}
      <div className="presidential-amenities-wrapper" style={{ backgroundColor: '#111', padding: '40px 0' }}>
        <AmenitiesSection />
      </div>

      <ExploreRoomsCarousel currentRoomId="presidential-suite" isDarkTheme={true} />

      <ContactCTA />
    </div>
  );
}
