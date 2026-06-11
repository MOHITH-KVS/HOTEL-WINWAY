import type { Metadata } from 'next';
import DiningHero from '@/components/sections/DiningHero';
import DiningAbout from '@/components/sections/DiningAbout';
import DiningHighlights from '@/components/sections/DiningHighlights';
import DiningOfferings from '@/components/sections/DiningOfferings';
import GalleryCarousel from '@/components/sections/GalleryCarousel';
import ContactCTA from '@/components/sections/ContactCTA';
import ExploreDiningCarousel from '@/components/sections/ExploreDiningCarousel';

export const metadata: Metadata = {
  title: 'Al Fresco | Hotel Winway Indore',
  description: 'Experience open-sky dining at Al Fresco, Hotel Winway Indore.',
};

export default function AlFrescoPage() {
  const highlights = [
    { label: 'Outdoor Seating' },
    { label: 'Open Sky Ambiance' },
    { label: 'Relaxed Atmosphere' },
    { label: 'Evening Dining' },
  ];

  const offerings = [
    {
      title: 'Under the Stars',
      description: 'An enchanting evening dining experience featuring live grill preparations and a curated selection of refreshing beverages.',
      imageSrc: '/images/dining/alfresco/alfresco-card.jpeg'
    }
  ];

  const galleryItems = [
    { src: '/images/dining/alfresco/alfresco-1.jpeg', label: 'OUTDOOR DINING' },
    { src: '/images/dining/alfresco/alfresco-card.jpeg', label: 'EVENING AMBIENCE' },
  ];

  return (
    <>
      <DiningHero 
        title="Al Fresco"
        description="Set amidst a refreshing outdoor setting, Al Fresco offers a relaxed dining experience where nature, flavour and hospitality come together."
        imageSrc="/images/dining/alfresco/alfresco-1.jpeg"
        imageAlt="Al Fresco at Hotel Winway"
        cuisine="Multi Cuisine"
        timing="Evening onwards"
        location="Rooftop / Terrace"
        reservationNum="+91 97524-11003"
      />

      <DiningAbout 
        title="Open Sky Dining"
        description="Perfect for casual gatherings and leisurely meals, it provides a welcoming atmosphere to enjoy great food and memorable moments under the open sky. Let the gentle evening breeze and ambient lighting set the perfect mood for your dinner."
        imageSrc="/images/dining/alfresco/alfresco-card.jpeg"
        imageAlt="Al Fresco Dining Experience"
      />

      <DiningHighlights highlights={highlights} />

      <DiningOfferings 
        title="An Enchanting Evening"
        subtitle="SIGNATURE OFFERINGS"
        offerings={offerings}
      />

      <GalleryCarousel 
        title="RESTAURANT GALLERY"
        items={galleryItems}
        darkBackground={true}
      />

      <ExploreDiningCarousel currentOutletId="al-fresco" />

      <ContactCTA />
    </>
  );
}
