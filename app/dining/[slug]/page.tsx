import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Phone, ChevronRight } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';

const diningData = {
  tiffin: {
    name: 'Tiffin',
    tagline: 'Home-style Hospitality',
    cuisine: 'Multi Cuisine',
    timing: '10:00 am – 10:00 pm',
    avgCost: '₹1,500 for two',
    reserve: '97524-11003',
    description: `Inspired by Mumbai's iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals. Bringing together authentic original flavours, attentive service and a welcoming ambience, the restaurant offers a dining experience that is both comforting and memorable, where every meal is served with care and every guest is welcomed like family.`,
    heroImage: '/images/dining/tiffin/tiffin-1.jpeg',
    images: Array.from({ length: 10 }, (_, i) => `/images/dining/tiffin/tiffin-${i + 1}.jpeg`),
  },
  'the-deck': {
    name: 'The Deck',
    tagline: 'Elevated Dining',
    cuisine: 'Multi Cuisine',
    timing: '24/7',
    avgCost: '₹1,500 for two',
    reserve: '97524-11003',
    description: `Escape to an elevated dining experience at The Deck — delightful cuisine sets the stage for birthdays, anniversaries and corporate parties for memorable moments. Whether gathering with loved ones or enjoying a quiet evening, every visit is complemented by warm hospitality, flavourful dishes and a setting designed for connection and celebration.`,
    heroImage: '/images/dining/the-deck/deck-1.jpeg',
    images: ['/images/dining/the-deck/deck-1.jpeg', '/images/dining/the-deck/deck-2.jpeg', '/images/dining/the-deck/deck-3.jpeg', '/images/dining/the-deck/deck-4.jpeg'],
  },
  alfresco: {
    name: 'Alfresco',
    tagline: 'Open Sky Dining',
    cuisine: 'Multi Cuisine',
    timing: 'Evening onwards',
    avgCost: 'Contact for details',
    reserve: '97524-11003',
    description: `Set amidst a refreshing outdoor setting, Alfresco offers a relaxed dining experience where nature, flavour and hospitality come together. Perfect for casual gatherings and leisurely meals, it provides a welcoming atmosphere to enjoy great food and memorable moments under the open sky.`,
    heroImage: '/images/dining/cafe/cafe-1.jpeg',
    images: ['/images/dining/cafe/cafe-1.jpeg', '/images/dining/cafe/cafe-2.jpeg', '/images/dining/cafe/cafe-3.jpeg'],
  },
  'banquets-events': {
    name: 'Banquets & Events',
    tagline: 'Celebrate in Style',
    cuisine: 'Event Hosting',
    timing: 'As per booking',
    avgCost: 'Contact for packages',
    reserve: '97524-11003',
    description: `Host your special celebrations, corporate meetings, conferences and social events in our versatile banquet spaces. With professional event management and customized catering, we ensure every occasion is memorable. Our dedicated team handles every detail, from setup to service, creating experiences tailored to your vision.`,
    heroImage: '/images/dining/banquet/banquet-1.jpeg',
    images: Array.from({ length: 7 }, (_, i) => `/images/dining/banquet/banquet-${i + 1}.jpeg`),
    capacityTable: [
      { layout: 'Theater', capacity: 80 },
      { layout: 'Boardroom', capacity: 30 },
      { layout: 'U-Shaped', capacity: 45 },
      { layout: 'Classroom', capacity: 40 },
      { layout: 'Cluster', capacity: 35 },
      { layout: 'Reception', capacity: 120 },
    ],
  },
};

type DiningSlug = keyof typeof diningData;

export async function generateStaticParams() {
  return Object.keys(diningData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const venue = diningData[slug as DiningSlug];
  if (!venue) return {};
  return {
    title: `${venue.name} | Hotel Winway Indore`,
    description: `${venue.description.slice(0, 155)}...`,
    alternates: { canonical: `https://www.hotelwinway.com/dining/${slug}` },
  };
}

export default async function DiningDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = diningData[slug as DiningSlug];
  if (!venue) notFound();

  const hasCapacity = 'capacityTable' in venue;

  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': hasCapacity ? 'EventVenue' : 'Restaurant',
    name: `${venue.name} — Hotel Winway`,
    description: venue.description,
    image: `https://www.hotelwinway.com${venue.heroImage}`,
    url: `https://www.hotelwinway.com/dining/${slug}`,
    telephone: '+91-97524-11003',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '164/1 RNT Marg, Near Madhumilan Square, South Tukoganj',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452001',
      addressCountry: 'IN',
    },
    servesCuisine: venue.cuisine,
    openingHours: venue.timing,
    priceRange: venue.avgCost,
    parentOrganization: {
      '@type': 'Hotel',
      name: 'Hotel Winway',
      url: 'https://www.hotelwinway.com',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hotelwinway.com' },
      { '@type': 'ListItem', position: 2, name: 'Dining', item: 'https://www.hotelwinway.com/dining' },
      { '@type': 'ListItem', position: 3, name: venue.name, item: `https://www.hotelwinway.com/dining/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={venue.heroImage}
          alt={`${venue.name} at Hotel Winway Indore`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <nav className="flex items-center gap-2 text-white/60 text-xs mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/dining" className="hover:text-white transition-colors">Dining</Link>
            <ChevronRight size={12} />
            <span className="text-white">{venue.name}</span>
          </nav>
          <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-2">{venue.tagline}</span>
          <h1 className="font-serif text-5xl lg:text-7xl text-white font-light">{venue.name}</h1>
        </div>
      </div>

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">About {venue.name}</h2>
                <div className="w-8 h-px bg-[#C9A96E] mb-5" />
                <p className="prose-luxury text-[#57585B] text-sm">{venue.description}</p>
              </div>

              {/* Capacity Table for Banquets */}
              {hasCapacity && (venue as typeof diningData['banquets-events']).capacityTable && (
                <div className="bg-white p-8 shadow-sm">
                  <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Venue Capacity</h2>
                  <div className="w-8 h-px bg-[#C9A96E] mb-5" />
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-[#C9A96E]">
                        <th className="text-left py-3 pr-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#1A1A1A]">Setup / Layout</th>
                        <th className="text-right py-3 text-xs font-semibold tracking-[0.15em] uppercase text-[#1A1A1A]">Capacity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(venue as typeof diningData['banquets-events']).capacityTable!.map((row) => (
                        <tr key={row.layout} className="border-b border-gray-100 hover:bg-[#F9F6F0] transition-colors">
                          <td className="py-3 pr-4 text-sm text-[#57585B] font-medium">{row.layout}</td>
                          <td className="py-3 text-right">
                            <span className="font-serif text-xl text-[#C9A96E] font-light">{row.capacity}</span>
                            <span className="text-xs text-[#8B8A84] ml-1">guests</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Gallery */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Gallery</h2>
                <div className="w-8 h-px bg-[#C9A96E] mb-5" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {venue.images.slice(0, 6).map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] card-image-zoom overflow-hidden">
                      <Image
                        src={img}
                        alt={`${venue.name} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] text-white p-8 sticky top-24">
                <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-2">{venue.tagline}</p>
                <h3 className="font-serif text-2xl font-light mb-4">{venue.name}</h3>

                <div className="space-y-3 py-4 border-y border-[#333] mb-6">
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-[#C9A96E]" />
                    <div>
                      <p className="text-[10px] text-[#8B8A84] uppercase tracking-wide">Timings</p>
                      <p className="text-sm text-white">{venue.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#C9A96E] text-sm font-serif">₹</span>
                    <div>
                      <p className="text-[10px] text-[#8B8A84] uppercase tracking-wide">Average Cost</p>
                      <p className="text-sm text-white">{venue.avgCost}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${venue.reserve}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#b8955a] text-white py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all mb-3"
                >
                  <Phone size={16} />
                  Reserve Table
                </a>
                <a
                  href="https://wa.me/919752411015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-sm font-medium hover:bg-[#1da851] transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
