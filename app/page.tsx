import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';

import RoomsPreview from '@/components/sections/RoomsPreview';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import DiningPreview from '@/components/sections/DiningPreview';
import AttractionsSection from '@/components/sections/AttractionsSection';
import GalleryPreview from '@/components/sections/GalleryPreview';
import HotelInformation from '@/components/sections/HotelInformation';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Hotel Winway Indore | Luxury Business Hotel on RNT Marg',
  description:
    'Welcome to Hotel Winway — an elite & exquisite business hotel in the heart of Indore, MP. Experience world-class amenities, delightful dining and personalized hospitality on RNT Marg.',
  alternates: {
    canonical: 'https://www.hotelwinway.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.hotelwinway.com',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero — auto-playing slider with 5 facade images + corner badges */}
      <HeroSection
        title="Hotel Winway"
        subtitle="Where the Warmth of Malwa Meets Modern Luxury"
        locationLabel="INDORE, MADHYA PRADESH"
        showCornerBadges={true}
      />

      <IntroSection />

      <RoomsPreview />
      <AmenitiesSection />
      <DiningPreview />
      <AttractionsSection />
      <GalleryPreview />
      <HotelInformation />
      <ContactCTA />
    </>
  );
}
