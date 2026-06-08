import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import RoomsPreview from '@/components/sections/RoomsPreview';
import DiningPreview from '@/components/sections/DiningPreview';
import AttractionsSection from '@/components/sections/AttractionsSection';
import ExperiencesSection from '@/components/sections/ExperiencesSection';
import GalleryPreview from '@/components/sections/GalleryPreview';
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
      <HeroSection
        title="Hotel Winway"
        subtitle="Where the Warmth of Malwa Meets Modern Luxury"
        imageSrc="/images/facade/facade-1.png"
        imageAlt="Hotel Winway Indore — Luxury Business Hotel on RNT Marg"
        showScrollHint={true}
      />
      <WelcomeSection />
      <RoomsPreview />
      <DiningPreview />
      <AttractionsSection />
      <ExperiencesSection />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
}
