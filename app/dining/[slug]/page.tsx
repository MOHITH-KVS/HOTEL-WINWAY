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
    description: `Inspired by Mumbai's iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals. Bringing together authentic original flavours, attentive service and a welcoming ambience, the restaurant offers a dining experience that is both comforting and memorable, where every meal is served with care and every guest is welcomed like family.`,
    heroImage: '/images/dining/tiffin/tiffin-1.jpeg',
    images: Array.from({ length: 10 }, (_, i) => `/images/dining/tiffin/tiffin-${i + 1}.jpeg`),
  },
  'the-deck': {
    name: 'The Deck',
    tagline: 'Elevated Dining',
    cuisine: 'Multi Cuisine',
    timing: '24/7',
    description: `Escape to an elevated dining experience at The Deck — delightful cuisine sets the stage for birthdays, anniversaries and corporate parties for memorable moments. Whether gathering with loved ones or enjoying a quiet evening, every visit is complemented by warm hospitality, flavourful dishes and a setting designed for connection and celebration.`,
    heroImage: '/images/dining/the-deck/deck-1.jpeg',
    images: ['/images/dining/the-deck/deck-1.jpeg', '/images/dining/the-deck/deck-2.jpeg', '/images/dining/the-deck/deck-3.jpeg', '/images/dining/the-deck/deck-4.jpeg'],
  },
  'al-fresco': {
    name: 'Al Fresco',
    tagline: 'Open Sky Dining',
    cuisine: 'Multi Cuisine',
    timing: 'Evening onwards',
    description: `Set amidst a refreshing outdoor setting, Al Fresco offers a relaxed dining experience where nature, flavour and hospitality come together. Perfect for casual gatherings and leisurely meals, it provides a welcoming atmosphere to enjoy great food and memorable moments under the open sky.`,
    heroImage: '/images/dining/cafe/cafe-1.jpeg',
    images: ['/images/dining/cafe/cafe-1.jpeg', '/images/dining/cafe/cafe-2.jpeg'],
  },
  cafe: {
    name: 'Cafe',
    tagline: 'Casual & Inviting',
    cuisine: 'Cafe & Snacks',
    timing: '08:00 am – 10:00 pm',
    description: `A cosy retreat for coffee lovers and casual diners alike. Our Cafe offers a curated selection of freshly brewed coffees, light bites and snacks in a warm, welcoming atmosphere perfect for a quick break or a relaxed afternoon.`,
    heroImage: '/images/dining/cafe/cafe-1.jpeg',
    images: ['/images/dining/cafe/cafe-1.jpeg', '/images/dining/cafe/cafe-2.jpeg'],
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

  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
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
          <p
            className="text-[#C9A96E] mb-2"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}
          >
            {venue.tagline}
          </p>
          <h1
            className="text-white"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            {venue.name}
          </h1>
        </div>
      </div>

      <section className="section-padding" style={{ background: '#F3F4F6' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <h2
                  className="text-[#1A1A1A] font-bold mb-4"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700 }}
                >
                  About {venue.name}
                </h2>
                <div className="w-8 h-0.5 bg-[#C9A96E] mb-5" />
                <p
                  className="text-[#57585B]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85 }}
                >
                  {venue.description}
                </p>
              </div>

              {/* Gallery */}
              <div className="bg-white p-8" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <h2
                  className="text-[#1A1A1A] font-bold mb-4"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700 }}
                >
                  Gallery
                </h2>
                <div className="w-8 h-0.5 bg-[#C9A96E] mb-5" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {venue.images.slice(0, 6).map((img, i) => (
                    <div key={i} className="relative overflow-hidden card-image-zoom" style={{ aspectRatio: '4/3' }}>
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

            {/* Sidebar — no price */}
            <div>
              <div
                className="bg-[#1A1A1A] text-white p-8 sticky top-24"
              >
                <p
                  className="text-[#C9A96E] mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  {venue.tagline}
                </p>
                <h3
                  className="text-white font-bold mb-4"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700 }}
                >
                  {venue.name}
                </h3>

                <div className="space-y-4 py-4 border-y border-[#333] mb-6">
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-[#C9A96E] flex-shrink-0" />
                    <div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: '#8B8A84', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Timings</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'white' }}>{venue.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[#C9A96E] flex-shrink-0" />
                    <div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: '#8B8A84', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reservations</p>
                      <a
                        href="tel:+919752411003"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'white' }}
                        className="hover:text-[#C9A96E] transition-colors"
                      >
                        97524-11003
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full block text-center bg-[#C9A96E] hover:bg-[#b8955a] text-white py-4 text-[12px] font-bold tracking-[0.15em] uppercase transition-all mb-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Enquire Now
                </Link>
                <a
                  href="https://wa.me/919752411015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 hover:bg-[#1da851] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700 }}
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
