import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Users, Maximize2 } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Hotel Winway Indore',
  description:
    'Standard Room, Deluxe, Junior Suite and Presidential Suite at Hotel Winway Indore. Thoughtfully designed rooms with modern amenities.',
  alternates: { canonical: 'https://www.hotelwinway.com/rooms' },
  openGraph: {
    title: 'Rooms & Suites | Hotel Winway Indore',
    description: 'Standard Room, Deluxe, Junior Suite and Presidential Suite at Hotel Winway Indore.',
    images: [{ url: '/images/rooms/presidential-suite/ps-1.jpeg' }],
  },
};

const rooms = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    size: '24 Sq. Mt',
    sizeImperial: '260 sq.ft',
    guests: 'Up to 2',
    bed: 'Double Bed',
    description:
      'Experience effortless comfort in our thoughtfully appointed Room. Designed with contemporary elegance and practical convenience in mind, the room features inviting interiors, comfortable bedding and modern amenities to ensure a pleasant and relaxing stay.',
    image: '/images/rooms/standard-room/standard-1.jpeg',
    href: '/rooms/standard-room',
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    size: '29 Sq. Mt',
    sizeImperial: '316 sq.ft',
    guests: 'Up to 2',
    bed: 'Double Bed',
    description:
      'Enjoy an elevated stay experience in our Deluxe Room, thoughtfully designed to offer enhanced comfort and contemporary style. Featuring spacious interiors, elegant furnishings and modern amenities, the room provides the perfect setting to relax and recharge.',
    image: '/images/rooms/deluxe-room/deluxe-1.jpeg',
    href: '/rooms/deluxe-room',
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    size: '31 Sq. Mt',
    sizeImperial: '340 sq.ft',
    guests: 'Up to 2',
    bed: 'King Bed',
    description:
      'Indulge in elevated comfort and added luxury in our Junior Suite. Thoughtfully designed with spacious interiors and elegant furnishings, the suite offers a refined retreat. Unwind in the relaxing bathtub and enjoy refreshments from the minibar.',
    image: '/images/rooms/junior-suite/junior-1.jpeg',
    href: '/rooms/junior-suite',
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    size: '66 Sq. Mt',
    sizeImperial: '716 sq.ft',
    guests: 'Up to 2',
    bed: 'King Bed',
    description:
      'Experience the pinnacle of luxury in our Presidential Suite, thoughtfully designed for guests who appreciate exceptional comfort and sophistication. Featuring expansive living spaces, elegant interiors and premium amenities.',
    image: '/images/rooms/presidential-suite/ps-1.jpeg',
    href: '/rooms/presidential-suite',
  },
];

export default function RoomsPage() {
  return (
    <>
      <HeroSection
        title="Rooms & Suites"
        subtitle="An Experience of Comfort, Style and Hospitality"
        imageSrc="/images/rooms/presidential-suite/ps-1.jpeg"
        imageAlt="Hotel Winway Indore — Luxury Rooms and Suites"
      />

      {/* Intro */}
      <section className="section-padding" style={{ background: '#F3F4F6' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="heading-mixed mb-4">
              A Symphony of <strong>Elegance and Comfort</strong>
            </h1>
            <p
              className="text-[#57585B]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85 }}
            >
              Designed to offer a perfect balance of comfort and sophistication, the rooms and suites at Hotel Winway provide a welcoming retreat in the heart of Indore city. Thoughtfully appointed interiors, contemporary amenities and elegant furnishings create an atmosphere that is both relaxing and refined.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {rooms.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-white group"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              >
                <div className="relative overflow-hidden card-image-zoom" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={room.image}
                    alt={`${room.name} at Hotel Winway Indore`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  {/* Highlights label above name */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 11 }}>
                      <Maximize2 size={11} />
                      {room.size}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 11 }}>
                      <Users size={11} />
                      {room.guests} guests
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 11 }}>
                      <Wifi size={11} />
                      WiFi
                    </div>
                  </div>

                  <h2
                    className="text-[#1A1A1A] font-bold mb-2"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 700 }}
                  >
                    {room.name}
                  </h2>
                  <p
                    className="text-[#57585B] mb-5 line-clamp-3"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.75 }}
                  >
                    {room.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <Link
                      href={room.href}
                      className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    >
                      Room Details ›
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

          {/* Presidential Suite — featured wide card */}
          <div
            className="bg-white grid grid-cols-1 lg:grid-cols-2"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
          >
            <div className="relative overflow-hidden card-image-zoom" style={{ minHeight: 320 }}>
              <Image
                src={rooms[3].image}
                alt={`${rooms[3].name} at Hotel Winway Indore`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 12 }}>
                  <Maximize2 size={12} />
                  {rooms[3].size}
                </div>
                <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 12 }}>
                  <Users size={12} />
                  {rooms[3].guests} guests
                </div>
                <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 12 }}>
                  <Wifi size={12} />
                  Inclusive of WiFi
                </div>
              </div>
              <h2
                className="text-[#1A1A1A] font-bold mb-3"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700 }}
              >
                {rooms[3].name}
              </h2>
              <p
                className="text-[#57585B] mb-6"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85 }}
              >
                {rooms[3].description}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href={rooms[3].href}
                  className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  Room Details ›
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
