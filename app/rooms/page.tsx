import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Tv, Coffee, Bath, Maximize2, Users, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Hotel Winway Indore',
  description:
    'Explore our range of luxurious rooms and suites at Hotel Winway Indore — from comfortable Standard Rooms to the opulent Presidential Suite. All include WiFi, breakfast and premium amenities.',
  alternates: { canonical: 'https://www.hotelwinway.com/rooms' },
};

const rooms = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    tagline: 'Effortless Comfort',
    size: '24 sq.m / 260 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹4,000',
    description:
      'Experience effortless comfort in our thoughtfully appointed Standard Room. Designed with contemporary elegance and practical convenience in mind, featuring inviting interiors, comfortable bedding and modern amenities.',
    image: '/images/rooms/standard-room/standard-1.jpeg',
    href: '/rooms/standard-room',
    features: ['Double Bed', 'Free WiFi', 'Flat-screen TV', 'Breakfast Included'],
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Elevated Comfort',
    size: '29 sq.m / 316 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹4,200',
    description:
      'Enjoy an elevated stay experience in our Deluxe Room, thoughtfully designed to offer enhanced comfort and contemporary style. Featuring spacious interiors, elegant furnishings and modern amenities.',
    image: '/images/rooms/deluxe-room/deluxe-1.jpeg',
    href: '/rooms/deluxe-room',
    features: ['King-size Bed', 'Work Desk', 'Free WiFi', 'Breakfast Included'],
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    tagline: 'Refined Retreat',
    size: '31 sq.m / 340 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹5,500',
    description:
      'Indulge in elevated comfort and added luxury in our Junior Suite. Thoughtfully designed with spacious interiors, private bathtub, and well-stocked minibar for an indulgent experience.',
    image: '/images/rooms/junior-suite/junior-1.jpeg',
    href: '/rooms/junior-suite',
    features: ['Private Bathtub', 'Minibar', 'Free WiFi', 'Breakfast Included'],
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'Pinnacle of Luxury',
    size: '66 sq.m / 716 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹7,000',
    description:
      'Experience the pinnacle of luxury in our Presidential Suite — expansive living spaces, elegant interiors, premium amenities and impeccable personalized hospitality.',
    image: '/images/rooms/presidential-suite/ps-1.jpeg',
    href: '/rooms/presidential-suite',
    features: ['Separate Living Area', 'Luxury Bathtub', 'Premium Minibar', 'Breakfast Included'],
  },
];

export default function RoomsPage() {
  return (
    <>
      <HeroSection
        title="Rooms & Suites"
        subtitle="An Experience of Comfort, Style and Hospitality"
        imageSrc="/images/rooms/presidential-suite/ps-4.png"
        imageAlt="Hotel Winway Indore — Luxury Rooms and Suites"
        showScrollHint={false}
      />

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Intro */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Accommodations</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 mb-4">
              Our Rooms &amp; Suites
            </h1>
            <p className="prose-luxury text-[#57585B] text-sm">
              Designed to offer a perfect balance of comfort and sophistication, our rooms and
              suites provide a welcoming retreat in the heart of Indore. Thoughtfully appointed
              interiors, contemporary amenities and elegant furnishings create an atmosphere
              that is both relaxing and refined.
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="space-y-12">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] card-image-zoom overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={room.image}
                    alt={`${room.name} at Hotel Winway Indore`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Price badge */}
                  <div className="absolute top-6 left-6 bg-[#C9A96E] px-4 py-2">
                    <p className="font-serif text-xl text-white font-light leading-none">{room.price}</p>
                    <p className="text-[10px] text-white/80 mt-0.5">+ taxes / double occ.</p>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="section-label">{room.tagline}</span>
                  <h2 className="font-serif text-3xl text-[#1A1A1A] font-light mt-2 mb-4">{room.name}</h2>

                  <div className="flex gap-6 mb-5">
                    <div className="flex items-center gap-1.5 text-[#8B8A84] text-sm">
                      <Maximize2 size={14} className="text-[#C9A96E]" />
                      {room.size}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8B8A84] text-sm">
                      <Users size={14} className="text-[#C9A96E]" />
                      {room.guests}
                    </div>
                  </div>

                  <div className="w-8 h-px bg-[#C9A96E] mb-5" />

                  <p className="prose-luxury text-[#57585B] text-sm mb-6">{room.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.features.map((f) => (
                      <span key={f} className="text-xs bg-[#F9F6F0] border border-[#E8DDD0] text-[#57585B] px-3 py-1.5">
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={room.href}
                    className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#C9A96E] text-white px-6 py-3 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300 self-start"
                  >
                    View Room Details
                    <ArrowRight size={14} />
                  </Link>
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
