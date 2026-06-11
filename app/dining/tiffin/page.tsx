import type { Metadata } from 'next';
import DiningHero from '@/components/sections/DiningHero';
import DiningAbout from '@/components/sections/DiningAbout';
import DiningHighlights from '@/components/sections/DiningHighlights';
import DiningOfferings from '@/components/sections/DiningOfferings';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import ContactCTA from '@/components/sections/ContactCTA';
import ExploreDiningCarousel from '@/components/sections/ExploreDiningCarousel';

export const metadata: Metadata = {
  title: 'Tiffin | Hotel Winway Indore',
  description: 'Experience the warmth of home-style hospitality at Tiffin, Hotel Winway Indore.',
};

export default function TiffinPage() {
  const highlights = [
    { label: 'Multi Cuisine Menu' },
    { label: 'Authentic Flavours' },
    { label: 'Family Friendly' },
    { label: 'Warm Ambience' },
  ];

  const offerings = [
    {
      title: 'Signature Curries',
      description: 'Slow-cooked to perfection using traditional spices, capturing the authentic taste of Indian home cooking.',
      imageSrc: '/images/dining/tiffin/tiffin-2.jpeg'
    },
    {
      title: 'Global Comforts',
      description: 'A curated selection of international favorites prepared with the finest fresh ingredients.',
      imageSrc: '/images/dining/tiffin/tiffin-3.jpeg'
    },
    {
      title: 'Artisan Breads',
      description: 'Freshly baked breads from our tandoor, offering the perfect accompaniment to every meal.',
      imageSrc: '/images/dining/tiffin/tiffin-4.jpeg'
    }
  ];

  const galleryItems = [
    { src: '/images/dining/tiffin/tiffin-5.jpeg', label: 'ELEGANT SEATING' },
    { src: '/images/dining/tiffin/tiffin-6.jpeg', label: 'WARM LIGHTING' },
    { src: '/images/dining/tiffin/tiffin-7.jpeg', label: 'INVITING AMBIENCE' },
    { src: '/images/dining/tiffin/tiffin-8.jpeg', label: 'FINE DINING' },
    { src: '/images/dining/tiffin/tiffin-9.jpeg', label: 'ATTENTIVE SERVICE' },
  ];

  return (
    <>
      <DiningHero 
        title="Tiffin"
        description="Inspired by Mumbai's iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals."
        imageSrc="/images/dining/tiffin/tiffin-1.jpeg"
        imageAlt="Tiffin Restaurant at Hotel Winway"
        cuisine="Multi Cuisine"
        timing="10:00 am – 10:00 pm"
        location="Ground Floor"
        reservationNum="+91 97524-11003"
      />

      <DiningAbout 
        title="Home-style Hospitality"
        description="Bringing together authentic original flavours, attentive service and a welcoming ambience, the restaurant offers a dining experience that is both comforting and memorable, where every meal is served with care and every guest is welcomed like family. Whether you're here for a quick lunch or a relaxed family dinner, Tiffin ensures an unforgettable culinary journey."
        imageSrc="/images/dining/tiffin/tiffin-2.jpeg"
        imageAlt="Tiffin Dining Experience"
      />

      <DiningHighlights highlights={highlights} />

      <DiningOfferings 
        title="Culinary Excellence"
        subtitle="SIGNATURE OFFERINGS"
        offerings={offerings}
      />

      <GalleryCarousel 
        title="RESTAURANT GALLERY"
        items={galleryItems}
        darkBackground={true}
      />

      <ExploreDiningCarousel currentOutletId="tiffin" />

      <ContactCTA />
    </>
  );
}
