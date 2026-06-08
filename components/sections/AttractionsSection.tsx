'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const attractions = [
  {
    id: 'lal-bagh-palace',
    name: 'Lal Bagh Palace',
    tagline: 'Neoclassical Grandeur',
    description: "Indore's most impressive neo-classical building — the former Holkar residence featuring Italian marble columns, Belgian stained glass windows and a rare coin collection.",
    distance: '4.7 km from hotel',
    duration: '1 hour visit',
    image: '/images/attractions/attraction-7.avif',
    href: '/local-attractions#lal-bagh-palace',
  },
  {
    id: 'rajwada-palace',
    name: 'Rajwada Palace',
    tagline: 'Holkar Dynasty Legacy',
    description: 'A 200-year-old seven-storey landmark showcasing a unique blend of Maratha, Mughal and French architecture — home to paintings, weapons and Holkar memorabilia.',
    distance: '2.5 km from hotel',
    duration: '45–60 mins',
    image: '/images/attractions/attraction-1.avif',
    href: '/local-attractions#rajwada-palace',
  },
  {
    id: 'sarafa-bazaar',
    name: 'Sarafa Bazaar',
    tagline: 'Iconic Night Market',
    description: 'Indore\'s iconic night street-food market transforms from a jewellery lane by day into a bustling vegetarian food haven between 9pm and 2am.',
    distance: '2.6 km from hotel',
    duration: '1–2 hours',
    image: '/images/attractions/attraction-3.avif',
    href: '/local-attractions#sarafa-bazaar',
  },
  {
    id: 'chappan-dukan',
    name: 'Chappan Dukan',
    tagline: '56 Legendary Stalls',
    description: "An open-air food hub in New Palasia — famous for authentic, hygienic fast food including Johnny's hot dogs, khopra patties and shikanji.",
    distance: '2.8 km from hotel',
    duration: '1 hour',
    image: '/images/attractions/attraction-8.avif',
    href: '/local-attractions#chappan-dukan',
  },
];

export default function AttractionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-[#F9F6F0]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Discover Indore</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 mb-4 leading-tight">
              Local Attractions
            </h2>
            <p className="text-[#8B8A84] text-sm max-w-lg mx-auto leading-relaxed">
              Indore blends historical significance with a thriving contemporary culture —
              from grand palaces to legendary food streets.
            </p>
          </motion.div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link href={attraction.href} className="group block h-full">
                <div className="bg-white h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[4/3] card-image-zoom overflow-hidden">
                    <Image
                      src={attraction.image}
                      alt={`${attraction.name} - Indore landmark near Hotel Winway`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1">
                      <span className="text-[10px] font-semibold text-[#C9A96E] tracking-wide uppercase">{attraction.tagline}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-[#1A1A1A] font-medium mb-2 group-hover:text-[#C9A96E] transition-colors">
                      {attraction.name}
                    </h3>
                    <p className="text-[#8B8A84] text-xs leading-relaxed mb-4 line-clamp-3">
                      {attraction.description}
                    </p>
                    <div className="flex items-center justify-between text-[#57585B] text-xs border-t border-gray-100 pt-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={10} className="text-[#C9A96E]" />
                        {attraction.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={10} className="text-[#C9A96E]" />
                        {attraction.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/local-attractions"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#57585B] border-b border-[#C9A96E] hover:text-[#C9A96E] pb-0.5 transition-colors group"
          >
            View All Attractions
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
