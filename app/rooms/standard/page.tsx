import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import RoomHighlights from '@/components/sections/RoomHighlights';
import RoomExperience from '@/components/sections/RoomExperience';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import ExploreRoomsCarousel from '@/components/sections/ExploreRoomsCarousel';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Standard Room | Hotel Winway Indore',
  description: 'Experience comfort and luxury in the Standard Room at Hotel Winway Indore. Ideal for business and leisure travelers.',
};

export default function StandardRoomPage() {
  const galleryItems = [
    { src: '/images/rooms/standard-room/standard-1.jpeg', label: 'ROOM OVERVIEW' },
    { src: '/images/rooms/standard-room/standard-2.jpeg', label: 'COMFORTABLE BEDDING' },
    { src: '/images/rooms/standard-room/standard-3.jpeg', label: 'MODERN BATHROOM' },
  ];

  return (
    <>
      <HeroSection
        title="STANDARD ROOM"
        subtitle="A Perfect Blend of Comfort and Convenience"
        imageSrc="/images/rooms/standard-room/standard-1.jpeg"
        imageAlt="Standard Room at Hotel Winway"
      />

      <section style={{ padding: '80px 5%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', marginBottom: '24px', fontWeight: 300, color: '#111' }}>
          Relaxation Meets Functionality
        </h2>
        <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8 }}>
          Our Standard Rooms are thoughtfully designed to provide a restful retreat after a busy day in Indore. 
          Featuring modern decor, comfortable bedding, and all the essential amenities, it is the ideal choice for 
          both corporate travelers and leisure guests seeking a seamless stay.
        </p>
      </section>

      <RoomHighlights 
        size="250 sq. ft."
        view="City View"
        bed="Queen Bed / Twin Beds"
        occupancy="Up to 2 Adults"
      />

      <RoomExperience 
        title="Your Comfort, Prioritized"
        description={<p>Every detail in the Standard Room is tailored to enhance your comfort. Enjoy high-speed Wi-Fi, a dedicated workspace, and an elegantly appointed en-suite bathroom. Experience the signature Malwa hospitality that Hotel Winway is known for, right from the comfort of your room.</p>}
        imageSrc="/images/rooms/standard-room/standard-2.jpeg"
        imageAlt="Standard Room Experience"
      />

      <GalleryCarousel 
        title="ROOM GALLERY"
        items={galleryItems}
        darkBackground={true}
      />

      <AmenitiesSection />

      <ExploreRoomsCarousel currentRoomId="standard" />

      <ContactCTA />
    </>
  );
}
