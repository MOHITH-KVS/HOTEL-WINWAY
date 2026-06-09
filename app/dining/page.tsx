import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

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

      {/* Intro */}
      <section className="section-padding" style={{ background: '#F3F4F6' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-mixed mb-4">
              Where Every <strong>Meal is a Masterpiece</strong>
            </h1>
            <p
              className="text-[#57585B]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85 }}
            >
              At Hotel Winway, Indore, dining transcends mere nourishment; it is a celebration of local
              flavours and international cuisine. Our restaurants and cafes offer distinctive culinary
              experiences crafted with passion and served with genuine warmth.
            </p>
          </div>

          {/* "FIND YOUR DINING CHOICE" heading — matches reference */}
          <div
            className="text-center mb-12 py-10 px-6"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(201,169,110,0.04) 10px,
                rgba(201,169,110,0.04) 20px
              ), #F3F4F6`,
            }}
          >
            <h2 className="heading-mixed">
              Find Your <strong>Dining Choice</strong>
            </h2>
          </div>

          {/* Venue Cards — 3-column grid (top 3) + wide card (last) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {venues.slice(0, 3).map((venue) => (
              <div
                key={venue.id}
                className="bg-white group"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden card-image-zoom" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={venue.image}
                    alt={`${venue.name} at Hotel Winway Indore`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p
                    className="text-[#C9A96E] mb-1"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                  >
                    {venue.cuisine}
                  </p>
                  <h2
                    className="text-[#1A1A1A] font-bold mb-2"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 700 }}
                  >
                    {venue.name}
                  </h2>
                  <p
                    className="text-[#57585B] mb-4 line-clamp-3"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.75 }}
                  >
                    {venue.description}
                  </p>

                  {/* Timing */}
                  <div className="flex items-center gap-1.5 text-[#8B8A84] mb-5" style={{ fontSize: 12 }}>
                    <Clock size={12} className="text-[#C9A96E]" />
                    {venue.timing}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4">
                    <Link
                      href={venue.href}
                      className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    >
                      View Details ›
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[#57585B] hover:text-[#C9A96E] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    >
                      Enquire Now ›
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cafe — wide featured card */}
          <div
            className="bg-white grid grid-cols-1 lg:grid-cols-2"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            <div className="relative overflow-hidden card-image-zoom" style={{ minHeight: 300 }}>
              <Image
                src={venues[3].image}
                alt={`${venues[3].name} at Hotel Winway Indore`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p
                className="text-[#C9A96E] mb-1"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                {venues[3].cuisine}
              </p>
              <h2
                className="text-[#1A1A1A] font-bold mb-3"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700 }}
              >
                {venues[3].name}
              </h2>
              <p
                className="text-[#57585B] mb-5"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85 }}
              >
                {venues[3].description}
              </p>
              <div className="flex items-center gap-1.5 text-[#8B8A84] mb-6" style={{ fontSize: 13 }}>
                <Clock size={13} className="text-[#C9A96E]" />
                {venues[3].timing}
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href={venues[3].href}
                  className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  View Details ›
                </Link>
                <Link
                  href="/contact"
                  className="text-[#57585B] hover:text-[#C9A96E] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  Enquire Now ›
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
