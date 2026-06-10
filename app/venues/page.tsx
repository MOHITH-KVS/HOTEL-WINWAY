import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Events & Banquet | Hotel Winway Indore',
  description:
    'Host your next event at Hotel Winway Indore. From intimate corporate meetings to grand weddings and celebrations, our versatile banquet halls cater to every occasion.',
  alternates: { canonical: 'https://www.hotelwinway.com/events' },
  openGraph: {
    title: 'Events & Banquet | Hotel Winway Indore',
    description: 'Versatile event spaces in Indore for corporate meetings, weddings and celebrations at Hotel Winway.',
    images: [{ url: '/images/dining/banquet/banquet-1.jpeg' }],
  },
};

const venues = [
  {
    id: 'grand-hall',
    name: 'Grand Hall',
    subtitle: 'The Premier Event Space',
    description:
      'Our flagship event hall offers an expansive setting for grand celebrations, corporate conferences and prestigious social events. Featuring state-of-the-art audio-visual systems, elegant décor and dedicated event management, the Grand Hall delivers a flawless event experience every time.',
    image: '/images/dining/banquet/banquet-1.jpeg',
    capacity: {
      Theatre: 300,
      Classroom: 180,
      'U-Shaped': 60,
      Circular: 200,
      Boardroom: 40,
      Reception: 350,
    },
  },
  {
    id: 'conference-room',
    name: 'Conference Room',
    subtitle: 'Boardroom Excellence',
    description:
      'Designed for high-level boardroom meetings, leadership summits and confidential discussions, our Conference Room blends sophisticated design with cutting-edge technology. Featuring comfortable executive seating, LED displays and high-speed internet connectivity.',
    image: '/images/dining/banquet/banquet-2.jpeg',
    capacity: {
      Theatre: 40,
      Classroom: 25,
      'U-Shaped': 20,
      Circular: 30,
      Boardroom: 18,
      Reception: 50,
    },
  },
  {
    id: 'the-pavilion',
    name: 'The Pavilion',
    subtitle: 'Intimate Gatherings & Celebrations',
    description:
      'The Pavilion is the ideal venue for intimate social gatherings, cocktail evenings, product launches and private dinners. Featuring elegant lighting, flexible seating arrangements and direct access to the hotel gardens.',
    image: '/images/dining/banquet/banquet-3.jpeg',
    capacity: {
      Theatre: 120,
      Classroom: 80,
      'U-Shaped': 40,
      Circular: 100,
      Boardroom: 25,
      Reception: 150,
    },
  },
];

const galleryImages = [
  '/images/dining/banquet/banquet-4.jpeg',
  '/images/dining/banquet/banquet-5.jpeg',
  '/images/dining/banquet/banquet-6.jpeg',
  '/images/dining/banquet/banquet-7.jpeg',
];

export default function EventsPage() {
  return (
    <>
      <HeroSection
        title="Events & Banquet"
        subtitle="Create Unforgettable Celebrations"
        imageSrc="/images/dining/banquet/banquet-1.jpeg"
        imageAlt="Hotel Winway Indore — Banquet and Events"
      />

      {/* Intro Section */}
      <section className="section-padding" style={{ background: '#F3F4F6' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-mixed mb-5">
              Unveil Extraordinary <strong>Moments at Hotel Winway</strong>
            </h1>
            <p
              className="text-[#57585B]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85 }}
            >
              At Hotel Winway, Indore, our versatile event spaces cater to every occasion — whether
              it is an intimate gathering, a grand corporate conference, a wedding celebration or a
              social event. Our dedicated events team ensures every detail is meticulously planned
              for a seamless and memorable experience.
            </p>
          </div>

          {/* Venue cards — matches reference layout: capacity table left + description + image right */}
          <div className="space-y-12">
            {venues.map((venue, index) => (
              <div
                key={venue.id}
                className="bg-white"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              >
                {/* Venue heading */}
                <div className="px-8 pt-8 pb-0 text-center">
                  <h2 className="heading-mixed mb-1">
                    <strong>{venue.name}</strong>
                  </h2>
                  <p
                    className="text-[#C9A96E] mb-2"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    Hotel Winway, Indore
                  </p>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? '' : ''}`}>
                  {/* Capacity Table — left column */}
                  <div className="p-8">
                    <p
                      className="text-[#57585B] mb-8"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85 }}
                    >
                      {venue.description}
                    </p>

                    {/* Capacity grid — matches reference layout */}
                    <div
                      className="border border-gray-200"
                      style={{ background: '#FAFAFA' }}
                    >
                      <div
                        className="px-4 py-3 border-b border-gray-200"
                        style={{ background: '#F3F4F6' }}
                      >
                        <p
                          style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#57585B' }}
                        >
                          Seating Capacity
                        </p>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-y divide-gray-200">
                        {Object.entries(venue.capacity).map(([setup, count]) => (
                          <div key={setup} className="p-4">
                            <p
                              className="text-[#1A1A1A] font-bold mb-0.5"
                              style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                            >
                              {setup}
                            </p>
                            <p
                              className="text-[#8B8A84]"
                              style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                            >
                              {count}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-6">
                      <Link
                        href="/contact"
                        className="inline-block bg-[#57585B] hover:bg-[#C9A96E] text-white text-[12px] font-bold tracking-[0.15em] uppercase px-8 py-3 transition-all duration-300"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        Enquire for Events
                      </Link>
                      <a
                        href="tel:+910731-661-1111"
                        className="flex items-center gap-2 text-[#57585B] hover:text-[#C9A96E] transition-colors"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                      >
                        <Phone size={14} />
                        0731-661-1111
                      </a>
                    </div>
                  </div>

                  {/* Image — right column */}
                  <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden">
                    <Image
                      src={venue.image}
                      alt={`${venue.name} — Hotel Winway Indore Events`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="section-padding bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="heading-mixed text-center mb-10">
            Event <strong>Gallery</strong>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden card-image-zoom">
                <Image
                  src={src}
                  alt={`Hotel Winway events gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: '#F3F4F6' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="heading-mixed text-center mb-12">
            Why Choose <strong>Hotel Winway</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Expert Event Team', desc: 'Our dedicated planners handle every detail from setup to execution' },
              { title: 'Premium AV Equipment', desc: 'State-of-the-art audio, visual and lighting systems for every event' },
              { title: 'Customised Catering', desc: 'Bespoke menus crafted to suit every palate and occasion' },
              { title: 'Central Location', desc: 'Conveniently located on RNT Marg, easily accessible from across Indore' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <div className="w-8 h-1 bg-[#C9A96E] mb-4" />
                <h3
                  className="text-[#1A1A1A] font-bold mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#57585B]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
