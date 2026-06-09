import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Calendar, AlertCircle, ChevronRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Local Attractions | Hotel Winway Indore',
  description: 'Discover Indore\'s top attractions near Hotel Winway — Lal Bagh Palace, Rajwada, Sarafa Bazaar, Chappan Dukan. Expert concierge guidance available.',
  alternates: { canonical: 'https://www.hotelwinway.com/local-attractions' },
};

const attractions = [
  {
    id: 'lal-bagh-palace',
    name: 'Lal Bagh Palace',
    tagline: 'Neoclassical Grandeur',
    distance: '4.7 km from hotel',
    duration: '1 hour visit',
    bestTime: 'Throughout the year',
    description: 'Indore\'s most impressive neo-classical building, Lal Bagh was the residence of the Holkars till 1978, later converted into a museum displaying artifacts and a rare coin collection. The Palace\'s main gates are famous for being replicas of the gates of London\'s Buckingham Palace. The interiors feature Italian marble columns, grand chandeliers, Persian carpets, flying nymph frescoes on the ceiling and Belgium stained glass windows.',
    images: ['/images/attractions/attraction-7.avif', '/images/attractions/attraction-8.avif'],
    closed: 'Mondays',
  },
  {
    id: 'rajwada-palace',
    name: 'Rajwada Palace',
    tagline: 'Holkar Dynasty Heritage',
    distance: '2.5 km from hotel',
    duration: '45–60 mins',
    bestTime: 'Throughout the year',
    description: 'Located in the heart of the city, this architectural gem is an impressive repository of the Holkar dynasty\'s history. The seven-storey landmark built by Malhar Rao Holkar showcases a unique blend of Maratha, Mughal and French architecture. Travellers enjoy exploring its museum, home to paintings, weapons, sculptures and Holkar memorabilia, as well as the central garden.',
    images: ['/images/attractions/attraction-1.avif', '/images/attractions/attraction-2.avif'],
    closed: 'Mondays',
  },
  {
    id: 'sarafa-bazaar',
    name: 'Sarafa Bazaar',
    tagline: 'The Night Food Street',
    distance: '2.6 km from hotel',
    duration: '1–2 hours',
    bestTime: 'Throughout the year (9pm–2am)',
    description: 'An iconic night street-food market, Sarafa Bazaar transforms from a busy jewellery lane by day into a bustling vegetarian food haven between 9:00 pm and 2:00 am. Foodies love the dahi bada, bhutte ka kees, rabdi-malpua and malai kulfi, amongst Indore\'s best street foods, served here.',
    images: ['/images/attractions/attraction-3.avif', '/images/attractions/attraction-4.avif'],
    closed: null,
  },
  {
    id: 'chappan-dukan',
    name: 'Chappan Dukan',
    tagline: '56 Legendary Stalls',
    distance: '2.8 km from hotel',
    duration: '1 hour',
    bestTime: 'Throughout the year (Evening)',
    description: 'Located in the upscale New Palasia area, Chappan Dukan (\'56 Shops\') is an open-air food hub. The stalls here are known for authentic, hygienic fast food that contributes to Indore\'s consistent status as India\'s cleanest city. Beloved snacks include Johnny\'s hot dogs, khopra patties (coconut-stuffed potato balls), sabudana khichdi and shikanji.',
    images: ['/images/attractions/attraction-5.avif', '/images/attractions/attraction-6.avif'],
    closed: null,
  },
];

const termsAndConditions = [
  'The tour is available on all days of the week, except Mondays, when both palaces are closed for visitors',
  'Prior booking is required — reservations must be made at least 24 hours in advance',
  'All sightseeing tickets will be borne by guests',
  'All costs are subject to Goods and Services Tax (GST)',
  'Timings are subject to change, based on seasonal sunrise and sunset',
  'Carry comfortable walking shoes, sunscreen, sunglasses and a hat',
  'A valid photo ID or passport for verification is required at all monuments',
  'Transportation charges: Contact concierge for pricing',
];

export default function LocalAttractionsPage() {
  const attractionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Attractions Near Hotel Winway Indore',
    itemListElement: attractions.map((a, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: a.name,
        description: a.description,
        image: `https://www.hotelwinway.com${a.images[0]}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Indore',
          addressRegion: 'Madhya Pradesh',
          addressCountry: 'IN',
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionsSchema) }} />
      <HeroSection
        title="Local Attractions"
        subtitle="Discover the Soul of Indore"
        imageSrc="/images/attractions/attraction-7.avif"
        imageAlt="Lal Bagh Palace Indore — Heritage attraction near Hotel Winway"
        showScrollHint={false}
      />

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-mixed mb-4">
              Attractions &amp; Places <strong>to Visit in Indore</strong>
            </h1>
            <p
              className="text-[#57585B]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85 }}
            >
              Indore blends historical significance with a thriving contemporary culture. From Rajwada
              Palace and Lal Bagh Palace to bustling food streets like Sarafa Bazaar — the city offers
              diverse experiences. Our concierge team is always available to assist with transportation
              and guided tours.
            </p>
          </div>

          {/* Attractions */}
          <div className="space-y-12">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.id}
                id={attraction.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-sm scroll-mt-24`}
              >
                {/* Images */}
                <div className={`grid grid-cols-2 gap-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {attraction.images.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] card-image-zoom overflow-hidden">
                      <Image
                        src={img}
                        alt={`${attraction.name} — ${i === 0 ? 'Exterior' : 'Interior'} view`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="section-label">{attraction.tagline}</span>
                  <h2 className="font-serif text-3xl text-[#1A1A1A] font-light mt-2 mb-4">{attraction.name}</h2>
                  <div className="w-8 h-px bg-[#C9A96E] mb-5" />
                  <p className="prose-luxury text-[#57585B] text-sm mb-6">{attraction.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-[#F9F6F0] p-3 text-center">
                      <MapPin size={14} className="text-[#C9A96E] mx-auto mb-1" />
                      <p className="text-xs text-[#57585B] font-medium">{attraction.distance}</p>
                    </div>
                    <div className="bg-[#F9F6F0] p-3 text-center">
                      <Clock size={14} className="text-[#C9A96E] mx-auto mb-1" />
                      <p className="text-xs text-[#57585B] font-medium">{attraction.duration}</p>
                    </div>
                    <div className="bg-[#F9F6F0] p-3 text-center">
                      <Calendar size={14} className="text-[#C9A96E] mx-auto mb-1" />
                      <p className="text-xs text-[#57585B] font-medium">Year-round</p>
                    </div>
                  </div>

                  {attraction.closed && (
                    <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 mb-4">
                      <AlertCircle size={12} />
                      Closed on {attraction.closed}
                    </div>
                  )}

                  <p className="text-xs text-[#8B8A84]">
                    For transportation & guided tours, contact our concierge at{' '}
                    <a href="tel:0731-661-1111" className="text-[#C9A96E] hover:underline">0731-661-1111</a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Terms */}
          <div className="mt-16 bg-white p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4">Terms &amp; Conditions</h3>
            <div className="w-8 h-px bg-[#C9A96E] mb-5" />
            <ul className="space-y-2">
              {termsAndConditions.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-[#57585B]">
                  <ChevronRight size={14} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
