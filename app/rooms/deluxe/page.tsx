import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import RoomHighlights from '@/components/sections/RoomHighlights';
import RoomExperience from '@/components/sections/RoomExperience';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import ExploreRoomsCarousel from '@/components/sections/ExploreRoomsCarousel';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Deluxe Room | Hotel Winway Indore',
  description: 'Elevate your stay with the Deluxe Room at Hotel Winway Indore, offering extra space and premium amenities.',
};

export default function DeluxeRoomPage() {
  const galleryItems = [
    { src: '/images/rooms/deluxe-room/deluxe-1.jpeg', label: 'ELEGANT INTERIORS' },
    { src: '/images/rooms/deluxe-room/deluxe-2.jpeg', label: 'SPACIOUS LIVING' },
    { src: '/images/rooms/deluxe-room/deluxe-3.jpeg', label: 'PREMIUM BEDDING' },
    { src: '/images/rooms/deluxe-room/deluxe-4.jpeg', label: 'LUXURY BATHROOM' },
  ];

  return (
    <>
      <HeroSection
        title="DELUXE ROOM"
        subtitle="Elevated Luxury and Enhanced Space"
        imageSrc="/images/rooms/deluxe-room/deluxe-1.jpeg"
        imageAlt="Deluxe Room at Hotel Winway"
      />

      <section style={{ padding: '80px 5%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', marginBottom: '24px', fontWeight: 300, color: '#111' }}>
          A Haven of Elegance
        </h2>
        <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8 }}>
          Step into our Deluxe Rooms and experience a heightened sense of luxury. Offering more space than our Standard category,
          these rooms feature plush furnishings, elegant warm lighting, and a soothing color palette designed to calm the senses.
          Whether traveling for work or leisure, the Deluxe Room ensures an unforgettable stay in Indore.
        </p>
      </section>

      <RoomHighlights 
        size="320 sq. ft."
        view="Cityscape View"
        bed="King Size Bed"
        occupancy="Up to 3 Adults"
      />

      <RoomExperience 
        title="Designed for the Discerning Traveler"
        description={<p>Every aspect of the Deluxe Room is crafted to provide a premium hospitality experience. From the high-quality linens to the expansive work desk and luxurious bath amenities, you will find everything you need to unwind and recharge in absolute style.</p>}
        imageSrc="/images/rooms/deluxe-room/deluxe-2.jpeg"
        imageAlt="Deluxe Room Experience"
        reverse={true}
      />

      <GalleryCarousel 
        title="ROOM GALLERY"
        items={galleryItems}
        darkBackground={true}
      />

      <AmenitiesSection />

      <ExploreRoomsCarousel currentRoomId="deluxe" />

      <ContactCTA />
    </>
  );
}
