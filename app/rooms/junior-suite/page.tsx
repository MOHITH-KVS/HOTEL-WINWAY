import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import RoomHighlights from '@/components/sections/RoomHighlights';
import RoomExperience from '@/components/sections/RoomExperience';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import ExploreRoomsCarousel from '@/components/sections/ExploreRoomsCarousel';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Junior Suite | Hotel Winway Indore',
  description: 'Experience unparalleled luxury and generous living space in the Junior Suite at Hotel Winway Indore.',
};

export default function JuniorSuitePage() {
  const galleryItems = [
    { src: '/images/rooms/junior-suite/junior-1.jpeg', label: 'LUXURY SUITE OVERVIEW' },
    { src: '/images/rooms/junior-suite/junior-2.jpeg', label: 'DEDICATED LIVING AREA' },
  ];

  return (
    <>
      <HeroSection
        title="JUNIOR SUITE"
        subtitle="Unparalleled Luxury and Space"
        imageSrc="/images/rooms/junior-suite/junior-1.jpeg"
        imageAlt="Junior Suite at Hotel Winway"
      />

      <section style={{ padding: '80px 5%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', marginBottom: '24px', fontWeight: 300, color: '#111' }}>
          Your Private Oasis
        </h2>
        <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8 }}>
          The Junior Suite is an expansive sanctuary designed for guests who desire premium comfort and distinct living areas. 
          Featuring an elegantly separated lounge space, magnificent city views, and sophisticated decor, the suite offers 
          an intimate atmosphere perfect for extended stays or special occasions.
        </p>
      </section>

      <RoomHighlights 
        size="450 sq. ft."
        view="Panoramic City View"
        bed="Premium King Bed"
        occupancy="Up to 3 Adults"
      />

      <RoomExperience 
        title="Distinct Living and Sleeping Areas"
        description={<p>Enjoy the luxury of space with a dedicated sitting area ideal for entertaining guests or simply unwinding in privacy. The Junior Suite is equipped with premium entertainment systems, a deeply comfortable king-size bed, and a spacious spa-inspired bathroom for the ultimate relaxation.</p>}
        imageSrc="/images/rooms/junior-suite/junior-2.jpeg"
        imageAlt="Junior Suite Experience"
      />

      <GalleryCarousel 
        title="SUITE GALLERY"
        items={galleryItems}
        darkBackground={true}
      />

      <AmenitiesSection />

      <ExploreRoomsCarousel currentRoomId="junior-suite" />

      <ContactCTA />
    </>
  );
}
