import type { Metadata } from 'next';
import SecondaryNav from '@/components/sections/SecondaryNav';
import HeroSection from '@/components/sections/HeroSection';
import TermsContent from '@/components/sections/TermsContent';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hotel Winway Indore',
  description: 'Policies, Guest Guidelines, Reservation Information & Service Conditions at Hotel Winway.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <HeroSection
        title="TERMS & CONDITIONS"
        subtitle="Policies, Reservations, Guest Guidelines & Hotel Information"
        locationLabel="HOTEL WINWAY INDORE"
        imageSrc="/images/facade/facade-5.jpeg"
        imageAlt="Hotel Winway Facade"
      />

      <SecondaryNav />

      <TermsContent />

      <ContactCTA />
    </>
  );
}
