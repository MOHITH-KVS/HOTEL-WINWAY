'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Users, Maximize2 } from 'lucide-react';

const rooms = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    size: '24 Sq. Mt',
    guests: 'Up to 2',
    description:
      'Designed with contemporary elegance and practical convenience in mind, the room features inviting interiors, comfortable bedding and modern amenities for a pleasant stay.',
    image: '/images/rooms/standard-room/standard-1.jpeg',
    href: '/rooms/standard-room',
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    size: '29 Sq. Mt',
    guests: 'Up to 2',
    description:
      'Featuring spacious interiors, elegant furnishings and modern amenities, the Deluxe Room provides the perfect setting to relax and recharge in the heart of Indore.',
    image: '/images/rooms/deluxe-room/deluxe-1.jpeg',
    href: '/rooms/deluxe-room',
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    size: '31 Sq. Mt',
    guests: 'Up to 2',
    description:
      'Thoughtfully designed with spacious interiors and elegant furnishings, the Junior Suite offers a refined retreat with private bathtub and well-stocked minibar.',
    image: '/images/rooms/junior-suite/junior-1.jpeg',
    href: '/rooms/junior-suite',
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    size: '66 Sq. Mt',
    guests: 'Up to 2',
    description:
      'Experience the pinnacle of luxury with expansive living spaces, elegant interiors and premium amenities, complemented by personalised hospitality.',
    image: '/images/rooms/presidential-suite/ps-1.jpeg',
    href: '/rooms/presidential-suite',
  },
];

export default function RoomsPreview() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      className="section-padding overflow-hidden"
      ref={sectionRef}
      style={{ background: '#F3F4F6' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header — matches reference mixed-weight heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-mixed mb-4">
            Rooms &amp; <strong>Suites</strong>
          </h2>
          <p
            className="text-[#57585B] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.8 }}
          >
            Designed to offer a perfect balance of comfort and sophistication, the rooms and suites at Hotel Winway provide a welcoming retreat in the heart of Indore city.
          </p>
        </motion.div>

        {/* 3-column grid — matches reference rooms layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rooms.slice(0, 3).map((room, index) => (
            <div
              key={room.id}
              className="bg-white group cursor-pointer"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden card-image-zoom" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={room.image}
                  alt={`${room.name} at Hotel Winway Indore`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gallery icon overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span style={{ fontSize: 16 }}>⊞</span>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3
                  className="text-[#1A1A1A] font-bold mb-2"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 700 }}
                >
                  {room.name}
                </h3>
                <p
                  className="text-[#57585B] mb-4 line-clamp-2"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7 }}
                >
                  {room.description}
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 12 }}>
                    <Maximize2 size={12} className="text-[#C9A96E]" />
                    {room.size}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 12 }}>
                    <Users size={12} className="text-[#C9A96E]" />
                    {room.guests}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 12 }}>
                    <Wifi size={12} className="text-[#C9A96E]" />
                    WiFi
                  </div>
                </div>

                {/* Single CTA — matches reference "ROOM DETAILS >" */}
                <Link
                  href={room.href}
                  className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors flex items-center gap-1"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  Room Details <span className="ml-1">›</span>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Presidential Suite — full-width featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 bg-white grid grid-cols-1 lg:grid-cols-2 group"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
        >
          <div className="relative overflow-hidden card-image-zoom" style={{ minHeight: 280 }}>
            <Image
              src={rooms[3].image}
              alt={`${rooms[3].name} at Hotel Winway Indore`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3
              className="text-[#1A1A1A] font-bold mb-3"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700 }}
            >
              {rooms[3].name}
            </h3>
            <p
              className="text-[#57585B] mb-5"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.8 }}
            >
              {rooms[3].description}
            </p>
            <div className="flex items-center gap-5 mb-5">
              <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 13 }}>
                <Maximize2 size={13} className="text-[#C9A96E]" />
                {rooms[3].size}
              </div>
              <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 13 }}>
                <Users size={13} className="text-[#C9A96E]" />
                {rooms[3].guests}
              </div>
              <div className="flex items-center gap-1.5 text-[#8B8A84]" style={{ fontSize: 13 }}>
                <Wifi size={13} className="text-[#C9A96E]" />
                Inclusive of WiFi
              </div>
            </div>
            <Link
              href={rooms[3].href}
              className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors flex items-center gap-1"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Room Details <span className="ml-1">›</span>
            </Link>
          </div>
        </motion.div>

        {/* View All link */}
        <div className="text-center mt-10">
          <Link
            href="/rooms"
            className="inline-block border border-[#57585B] text-[#57585B] hover:bg-[#57585B] hover:text-white text-[12px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            View All Rooms & Suites
          </Link>
        </div>
      </div>
    </section>
  );
}
