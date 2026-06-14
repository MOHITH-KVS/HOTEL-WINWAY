import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SecondaryNav from '@/components/sections/SecondaryNav';
import ContactCTA from '@/components/sections/ContactCTA';

import DiningCarousel from '@/components/sections/DiningCarousel';
import AmenitiesSection from '@/components/sections/AmenitiesSection';

export const metadata: Metadata = {
  title: 'Dining | Hotel Winway Indore',
  description:
    'Experience gourmet dining at Hotel Winway Indore. From home-style Tiffin to The Deck and open-air Al Fresco — discover our culinary venues.',
  alternates: { canonical: 'https://www.hotelwinway.com/dining' },
  openGraph: {
    title: 'Dining | Hotel Winway Indore',
    description: 'Experience gourmet dining at Hotel Winway Indore — Tiffin, The Deck, Al Fresco and Cafe.',
    images: [{ url: '/images/dining/tiffin/tiffin-1.jpeg' }],
  },
};

const venues = [
  {
    id: 'tiffin',
    name: 'Tiffin',
    tagline: 'Home-style Hospitality',
    cuisine: 'Multi Cuisine',
    timing: '10:00 am – 10:00 pm',
    description:
      "Inspired by Mumbai's iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals. Bringing together authentic original flavours, attentive service and a welcoming ambience, the restaurant offers a dining experience that is both comforting and memorable.",
    image: '/images/dining/tiffin/tiffin-1.jpeg',
    href: '/dining/tiffin',
  },
  {
    id: 'the-deck',
    name: 'The Deck',
    tagline: 'Elevated Dining',
    cuisine: 'Multi Cuisine',
    timing: '24/7',
    description:
      'Escape to an elevated dining experience at The Deck. Whether gathering with loved ones or enjoying a quiet evening, every visit is complemented by warm hospitality, flavourful dishes and a setting designed for connection and celebration.',
    image: '/images/dining/the-deck/deck-1.jpeg',
    href: '/dining/the-deck',
  },
  {
    id: 'al-fresco',
    name: 'Al Fresco',
    tagline: 'Open Sky Dining',
    cuisine: 'Multi Cuisine',
    timing: 'Evening onwards',
    description:
      'Set amidst a refreshing outdoor setting, Al Fresco offers a relaxed dining experience where nature, flavour and hospitality come together. Perfect for casual gatherings and leisurely meals under the open sky.',
    image: '/images/dining/cafe/cafe-1.jpeg',
    href: '/dining/al-fresco',
  },
  {
    id: 'cafe',
    name: 'Cafe',
    tagline: 'Casual & Inviting',
    cuisine: 'Cafe & Snacks',
    timing: '08:00 am – 10:00 pm',
    description:
      'A cosy retreat for coffee lovers and casual diners alike. Our Cafe offers a curated selection of freshly brewed coffees, light bites and snacks in a warm, welcoming atmosphere perfect for a quick break or a relaxed afternoon.',
    image: '/images/dining/cafe/cafe-1.jpeg',
    href: '/dining/cafe',
  },
];

export default function DiningPage() {
  return (
    <>
      <HeroSection
        title="Dining"
        subtitle="Where Every Meal is a Masterpiece"
        imageSrc="/images/dining/tiffin/tiffin-1.jpeg"
        imageAlt="Hotel Winway Dining — Tiffin Restaurant Indore"
      />

      <SecondaryNav />



      <style>{`
        .dining-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          padding: 70px 24px 40px 24px;
        }

        .dining-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #2c2c2c;
          line-height: 1.2;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .dining-hero-title span {
          color: #8B6914;  /* gold for "MEAL IS A MASTERPIECE" */
        }

        .dining-hero-subtitle {
          font-size: 15px;
          color: #666;
          line-height: 1.8;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .find-dining-title {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2c2c2c;
          margin: 50px 0 40px 0;
          padding: 0 24px;
        }

        .find-dining-title span {
          color: #8B6914;
        }
      `}</style>

      <section style={{ background: '#F3F4F6' }}>
        <div className="dining-header">
          <h1 className="dining-hero-title">Where Every <span>Meal is a Masterpiece</span></h1>
          <p className="dining-hero-subtitle">
            At Hotel Winway, Indore, dining transcends mere nourishment; it is a celebration of local flavours and international cuisine. Our restaurants and cafes offer distinctive culinary experiences crafted with passion and served with genuine warmth.
          </p>
        </div>

        <h2 className="find-dining-title">Find Your <span>Dining Choice</span></h2>

        <DiningCarousel venues={venues} />
      </section>

      <AmenitiesSection />

      <ContactCTA />
    </>
  );
}
