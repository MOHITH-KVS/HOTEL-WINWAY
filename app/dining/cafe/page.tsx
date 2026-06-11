import type { Metadata } from 'next';
import DiningHero from '@/components/sections/DiningHero';
import DiningAbout from '@/components/sections/DiningAbout';
import DiningHighlights from '@/components/sections/DiningHighlights';
import DiningOfferings from '@/components/sections/DiningOfferings';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import ContactCTA from '@/components/sections/ContactCTA';
import ExploreDiningCarousel from '@/components/sections/ExploreDiningCarousel';

export const metadata: Metadata = {
  title: 'Cafe | Hotel Winway Indore',
  description: 'A cosy retreat for coffee lovers and casual diners at Hotel Winway Indore.',
};

export default function CafePage() {
  const highlights = [
    { label: 'Freshly Brewed Coffee' },
    { label: 'Artisan Pastries' },
    { label: 'Casual Ambiance' },
    { label: 'Quick Bites' },
  ];

  const offerings = [
    {
      title: 'Barista Specials',
      description: 'Expertly crafted coffee beverages made from ethically sourced, premium roasted beans.',
      imageSrc: '/images/dining/cafe/cafe-2.jpeg'
    },
    {
      title: 'Fresh Bakes',
      description: 'A daily rotation of freshly baked goods, artisanal sandwiches, and decadent desserts.',
      imageSrc: '/images/dining/cafe/cafe-3.jpeg'
    }
  ];

  const galleryItems = [
    { src: '/images/dining/cafe/cafe-4.jpeg', label: 'COSY SEATING' },
    { src: '/images/dining/cafe/cafe-5.jpeg', label: 'FRESH BREWS' },
    { src: '/images/dining/cafe/cafe-6.jpeg', label: 'CASUAL MEETINGS' },
  ];

  return (
    <>
      <DiningHero 
        title="Cafe"
        description="A cosy retreat for coffee lovers and casual diners alike. Enjoy freshly brewed coffees, light bites and snacks in a warm, welcoming atmosphere."
        imageSrc="/images/dining/cafe/cafe-1.jpeg"
        imageAlt="Cafe at Hotel Winway"
        cuisine="Cafe & Snacks"
        timing="08:00 am – 10:00 pm"
        location="Lobby Level"
        reservationNum="+91 97524-11003"
      />

      <DiningAbout 
        title="Casual & Inviting"
        description="Whether you're catching up with friends, having an informal business meeting, or simply unwinding with a book, our Cafe provides the perfect backdrop. Enjoy our curated selection of artisanal beverages and gourmet snacks, designed to delight at any time of day."
        imageSrc="/images/dining/cafe/cafe-2.jpeg"
        imageAlt="Cafe Dining Experience"
      />

      <DiningHighlights highlights={highlights} />

      <DiningOfferings 
        title="Perfect Pairings"
        subtitle="SIGNATURE OFFERINGS"
        offerings={offerings}
      />

      <GalleryCarousel 
        title="CAFE GALLERY"
        items={galleryItems}
        darkBackground={true}
      />

      <ExploreDiningCarousel currentOutletId="cafe" />

      <ContactCTA />
    </>
  );
}
