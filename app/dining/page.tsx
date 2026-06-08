import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Dining | Hotel Winway Indore',
  description:
    'Experience gourmet dining at Hotel Winway Indore. From home-style Tiffin to the elevated Deck and open-air Alfresco — discover our culinary venues.',
  alternates: { canonical: 'https://www.hotelwinway.com/dining' },
};

const venues = [
  {
    id: 'tiffin',
    name: 'Tiffin',
    tagline: 'Home-style Hospitality',
    cuisine: 'Multi Cuisine',
    timing: '10:00 am – 10:00 pm',
    avgCost: '₹1,500 for two',
    reserve: '97524-11003',
    description: 'Inspired by Mumbai\'s iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals. Bringing together authentic original flavours, attentive service and a welcoming ambience, the restaurant offers a dining experience that is both comforting and memorable.',
    image: '/images/dining/tiffin/tiffin-1.jpeg',
    href: '/dining/tiffin',
    images: Array.from({ length: 10 }, (_, i) => `/images/dining/tiffin/tiffin-${i + 1}.jpeg`),
  },
  {
    id: 'the-deck',
    name: 'The Deck',
    tagline: 'Elevated Dining',
    cuisine: 'Multi Cuisine',
    timing: '24/7',
    avgCost: '₹1,500 for two',
    reserve: '97524-11003',
    description: 'Escape to an elevated dining experience at The Deck — delightful cuisine sets the stage for birthdays, anniversaries and corporate parties. Whether gathering with loved ones or enjoying a quiet evening, every visit is complemented by warm hospitality, flavourful dishes and a setting designed for connection and celebration.',
    image: '/images/dining/the-deck/deck-1.jpeg',
    href: '/dining/the-deck',
    images: ['/images/dining/the-deck/deck-1.jpeg', '/images/dining/the-deck/deck-2.jpeg', '/images/dining/the-deck/deck-3.jpeg', '/images/dining/the-deck/deck-4.jpeg'],
  },
  {
    id: 'alfresco',
    name: 'Alfresco',
    tagline: 'Open Sky Dining',
    cuisine: 'Multi Cuisine',
    timing: 'Evening onwards',
    avgCost: 'Contact for details',
    reserve: '97524-11003',
    description: 'Set amidst a refreshing outdoor setting, Alfresco offers a relaxed dining experience where nature, flavour and hospitality come together. Perfect for casual gatherings and leisurely meals, it provides a welcoming atmosphere to enjoy great food and memorable moments under the open sky.',
    image: '/images/dining/cafe/cafe-1.jpeg',
    href: '/dining/alfresco',
    images: ['/images/dining/cafe/cafe-1.jpeg', '/images/dining/cafe/cafe-2.jpeg'],
  },
  {
    id: 'banquets-events',
    name: 'Banquets & Events',
    tagline: 'Celebrate in Style',
    cuisine: 'Event Hosting',
    timing: 'As per booking',
    avgCost: 'Contact for packages',
    reserve: '97524-11003',
    description: 'Host your special celebrations, corporate meetings, conferences and social events in our versatile banquet spaces. With a maximum capacity of 120 guests and multiple seating configurations, we provide the perfect backdrop for every occasion.',
    image: '/images/dining/banquet/banquet-1.jpeg',
    href: '/dining/banquets-events',
    images: Array.from({ length: 7 }, (_, i) => `/images/dining/banquet/banquet-${i + 1}.jpeg`),
  },
];

export default function DiningPage() {
  return (
    <>
      <HeroSection
        title="Dining"
        subtitle="Indulge in Gourmet Dining"
        imageSrc="/images/dining/tiffin/tiffin-1.jpeg"
        imageAlt="Hotel Winway Dining — Tiffin Restaurant Indore"
        showScrollHint={false}
      />

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Intro */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Culinary Experiences</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 mb-4">
              Our Dining Venues
            </h1>
            <p className="prose-luxury text-[#57585B] text-sm">
              At Hotel Winway, dining is more than just a meal — it&apos;s an experience crafted
              around flavour, hospitality and memorable moments. Every dish is prepared with
              passion and served with warmth.
            </p>
          </div>

          {/* Venue Cards */}
          <div className="space-y-12">
            {venues.map((venue, index) => (
              <div
                key={venue.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 ${index % 2 === 1 ? '' : ''}`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] card-image-zoom overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={venue.image}
                    alt={`${venue.name} at Hotel Winway Indore`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 left-6 bg-[#C9A96E] px-3 py-1.5">
                    <span className="text-white text-xs font-semibold tracking-[0.15em] uppercase">{venue.tagline}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="section-label">{venue.cuisine}</span>
                  <h2 className="font-serif text-3xl text-[#1A1A1A] font-light mt-2 mb-4">{venue.name}</h2>
                  <div className="w-8 h-px bg-[#C9A96E] mb-5" />

                  <p className="prose-luxury text-[#57585B] text-sm mb-6">{venue.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-[#F9F6F0] p-4">
                      <p className="text-[10px] text-[#8B8A84] tracking-wide uppercase mb-1">Timings</p>
                      <p className="text-sm font-medium text-[#1A1A1A] flex items-center gap-1">
                        <Clock size={12} className="text-[#C9A96E]" />
                        {venue.timing}
                      </p>
                    </div>
                    <div className="bg-[#F9F6F0] p-4">
                      <p className="text-[10px] text-[#8B8A84] tracking-wide uppercase mb-1">Avg. Cost</p>
                      <p className="text-sm font-medium text-[#1A1A1A]">{venue.avgCost}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={venue.href}
                      className="flex-1 py-3 bg-[#C9A96E] text-white text-xs font-semibold tracking-[0.1em] uppercase text-center hover:bg-[#b8955a] transition-colors flex items-center justify-center gap-2"
                    >
                      View Details <ArrowRight size={12} />
                    </Link>
                    <a
                      href={`tel:${venue.reserve}`}
                      className="flex-1 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-semibold tracking-[0.1em] uppercase text-center hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Phone size={12} /> Reserve Table
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
