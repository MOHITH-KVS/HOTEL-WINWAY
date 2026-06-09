'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Users, Maximize2 } from 'lucide-react';
import SectionCarousel from '@/components/ui/SectionCarousel';

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

function RoomCard({ room }: { room: (typeof rooms)[0] }) {
  return (
    <article className="card-base h-full flex flex-col group">
      <div className="relative overflow-hidden card-image-zoom aspect-[4/3]">
        <Image
          src={room.image}
          alt={`${room.name} at Hotel Winway Indore`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="heading-card mb-3">{room.name}</h3>
        <p className="body-md mb-5 line-clamp-3 flex-1">{room.description}</p>
        <div className="flex items-center gap-5 mb-5 pb-5 border-b border-[#e6e6e6]">
          <span className="flex items-center gap-1.5 text-[#8b8a84] text-sm">
            <Maximize2 size={13} className="text-[#8d6346]" /> {room.size}
          </span>
          <span className="flex items-center gap-1.5 text-[#8b8a84] text-sm">
            <Users size={13} className="text-[#8d6346]" /> {room.guests}
          </span>
          <span className="flex items-center gap-1.5 text-[#8b8a84] text-sm">
            <Wifi size={13} className="text-[#8d6346]" /> WiFi
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn btn-primary btn-sm flex-1 text-center">
            Contact Us
          </Link>
          <Link href={room.href} className="btn-ghost text-[11px] whitespace-nowrap">
            Room Details ›
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function RoomsPreview() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="rooms" className="section-padding bg-[#f3f4f6] scroll-mt-32" ref={sectionRef}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="section-header"
        >
          <h2 className="heading-mixed mb-5">
            Rooms &amp; <strong>Suites</strong>
          </h2>
          <p className="body-lg">
            Designed to offer a perfect balance of comfort and sophistication, the rooms and suites at Hotel Winway provide a welcoming retreat in the heart of Indore city.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeInOut' }}
        >
          <SectionCarousel
            slideWidth="calc(33.333% - 14px)"
            minSlideWidth={320}
            gap={20}
          >
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </SectionCarousel>
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/rooms" className="btn btn-outline">
            View All Rooms & Suites
          </Link>
        </div>
      </div>
    </section>
  );
}
