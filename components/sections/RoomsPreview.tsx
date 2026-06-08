'use client';

import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Maximize2, Wifi } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';

const rooms = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    tagline: 'Effortless Comfort',
    size: '24 sq.m / 260 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹4,000',
    priceNote: '+ taxes / double occupancy',
    image: '/images/rooms/standard-room/standard-1.jpeg',
    features: ['King/Double Bed', 'Free WiFi', 'Flat-screen TV', 'Breakfast Included'],
    href: '/rooms/standard-room',
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Elevated Comfort',
    size: '29 sq.m / 316 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹4,200',
    priceNote: '+ taxes / double occupancy',
    image: '/images/rooms/deluxe-room/deluxe-1.jpeg',
    features: ['King-size Bed', 'Free WiFi', 'Work Desk', 'Breakfast Included'],
    href: '/rooms/deluxe-room',
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    tagline: 'Refined Retreat',
    size: '31 sq.m / 340 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹5,500',
    priceNote: '+ taxes / double occupancy',
    image: '/images/rooms/junior-suite/junior-1.jpeg',
    features: ['Private Bathtub', 'Minibar', 'Free WiFi', 'Breakfast Included'],
    href: '/rooms/junior-suite',
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'Pinnacle of Luxury',
    size: '66 sq.m / 716 sq.ft',
    guests: 'Up to 2 guests',
    price: '₹7,000',
    priceNote: '+ taxes / double occupancy',
    image: '/images/rooms/presidential-suite/ps-1.jpeg',
    features: ['Separate Living Area', 'Luxury Bathtub', 'Premium Minibar', 'Breakfast Included'],
    href: '/rooms/presidential-suite',
  },
];

export default function RoomsPreview() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });
  const { openModal } = useEnquiryModal();

  return (
    <section className="section-padding bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Accommodations</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 leading-tight">
              Rooms &amp; Suites
            </h2>
            <p className="text-[#8B8A84] text-sm mt-2 max-w-md">
              An Experience of Comfort, Style and Hospitality
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#57585B] hover:text-[#C9A96E] transition-colors group"
            >
              View All Rooms
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-6">
              {rooms.map((room, index) => (
                <div
                  key={room.id}
                  className="embla__slide w-[85vw] sm:w-[60vw] lg:w-[calc(25%-18px)] flex-shrink-0"
                >
                  <div className="group bg-white border border-gray-100 hover:border-[#C9A96E]/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative aspect-[3/4] card-image-zoom overflow-hidden">
                      <Image
                        src={room.image}
                        alt={`${room.name} - Hotel Winway Indore`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 25vw"
                      />
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md">
                        <p className="font-serif text-lg font-semibold text-[#1A1A1A] leading-none">{room.price}</p>
                        <p className="text-[10px] text-[#8B8A84] mt-0.5">{room.priceNote}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-1">{room.tagline}</p>
                      <h3 className="font-serif text-xl text-[#1A1A1A] font-medium mb-3">{room.name}</h3>

                      <div className="flex gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-[#8B8A84] text-xs">
                          <Maximize2 size={12} />
                          {room.size}
                        </div>
                        <div className="flex items-center gap-1.5 text-[#8B8A84] text-xs">
                          <Users size={12} />
                          {room.guests}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {room.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-[10px] bg-[#F9F6F0] text-[#57585B] px-2 py-1">
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <Link
                          href={room.href}
                          className="flex-1 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-semibold tracking-[0.1em] uppercase text-center hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                        >
                          View Room
                        </Link>
                        <button
                          onClick={() => openModal(room.name)}
                          className="flex-1 py-3 bg-[#C9A96E] text-white text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[#b8955a] transition-colors"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
