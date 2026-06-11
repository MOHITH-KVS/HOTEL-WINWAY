import type { Metadata } from 'next';
import DiningHero from '@/components/sections/DiningHero';
import DiningAbout from '@/components/sections/DiningAbout';
import DiningHighlights from '@/components/sections/DiningHighlights';
import DiningOfferings from '@/components/sections/DiningOfferings';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import ContactCTA from '@/components/sections/ContactCTA';
import ExploreDiningCarousel from '@/components/sections/ExploreDiningCarousel';

export const metadata: Metadata = {
  title: 'The Deck | Hotel Winway Indore',
  description: 'Elevated 24/7 dining at The Deck, Hotel Winway Indore.',
};

export default function TheDeckPage() {
  const highlights = [
    { label: '24/7 Service' },
    { label: 'Elevated Ambience' },
    { label: 'Event Hosting' },
    { label: 'Gourmet Cuisine' },
  ];

  const offerings = [
    {
      title: 'Late Night Classics',
      description: 'Satisfy your midnight cravings with our carefully curated 24/7 menu, offering premium dishes at any hour.',
      imageSrc: '/images/dining/the-deck/deck-2.jpeg'
    },
    {
      title: 'Celebration Feasts',
      description: 'Specially crafted multi-course menus designed to elevate your birthdays, anniversaries, and corporate events.',
      imageSrc: '/images/dining/the-deck/deck-3.jpeg'
    }
  ];

  const galleryItems = [
    { src: '/images/dining/the-deck/deck-2.jpeg', label: 'ELEVATED DINING' },
    { src: '/images/dining/the-deck/deck-3.jpeg', label: 'MODERN INTERIORS' },
    { src: '/images/dining/the-deck/deck-4.jpeg', label: 'CELEBRATORY SPACES' },
  ];

  return (
    <>
      <DiningHero 
        title="The Deck"
        description="Escape to an elevated dining experience at The Deck — where delightful cuisine sets the stage for memorable moments, 24 hours a day."
        imageSrc="/images/dining/the-deck/deck-1.jpeg"
        imageAlt="The Deck at Hotel Winway"
        cuisine="Multi Cuisine"
        timing="24 / 7"
        location="Upper Floor"
        reservationNum="+91 97524-11003"
      />

      <DiningAbout 
        title="Elevated Dining"
        description="Whether gathering with loved ones or enjoying a quiet evening, every visit is complemented by warm hospitality, flavourful dishes and a setting designed for connection and celebration. Perfect for birthdays, anniversaries, and corporate parties, The Deck provides a sophisticated backdrop to your most cherished memories."
        imageSrc="/images/dining/the-deck/deck-2.jpeg"
        imageAlt="The Deck Dining Experience"
      />

      <DiningHighlights highlights={highlights} />

      <DiningOfferings 
        title="Unforgettable Experiences"
        subtitle="SIGNATURE OFFERINGS"
        offerings={offerings}
      />

      <GalleryCarousel 
        title="RESTAURANT GALLERY"
        items={galleryItems}
        darkBackground={true}
      />

      <ExploreDiningCarousel currentOutletId="the-deck" />

      <ContactCTA />
    </>
  );
}
