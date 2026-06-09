'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

const venues = [
  {
    id: 'tiffin',
    name: 'Tiffin',
    tagline: 'Home Style Hospitality',
    description: 'Inspired by Mumbai\'s iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals.',
    timing: '10:00 am – 10:00 pm',
    image: '/images/dining/tiffin/tiffin-3.jpeg',
    href: '/dining/tiffin',
    cuisine: 'Multi Cuisine',
  },
  {
    id: 'the-deck',
    name: 'The Deck',
    tagline: 'Elevated Dining',
    description: 'Escape to an elevated dining experience at The Deck — the perfect setting for birthdays, anniversaries and corporate gatherings.',
    timing: '24/7',
    image: '/images/dining/the-deck/deck-2.jpeg',
    href: '/dining/the-deck',
    cuisine: 'Multi Cuisine',
  },
  {
    id: 'alfresco',
    name: 'Alfresco',
    tagline: 'Open Sky Dining',
    description: 'Set amidst a refreshing outdoor setting, Alfresco offers a relaxed dining experience where nature, flavour and hospitality come together.',
    timing: 'Evening onwards',
    image: '/images/dining/alfresco/alfresco-card.jpeg',
    href: '/dining/alfresco',
    cuisine: 'Multi Cuisine',
  },
];

export default function DiningPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="relative section-padding overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(to bottom, #1A1A1A 0%, #2a2219 100%)' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)',
        backgroundSize: '20px 20px',
      }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Culinary Experiences</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white mt-3 mb-4 leading-tight">
              Indulge in Gourmet Dining
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#C9A96E]/40" />
              <div className="w-2 h-2 bg-[#C9A96E] rotate-45 flex-shrink-0" />
              <div className="w-16 h-px bg-[#C9A96E]/40" />
            </div>
            <p className="text-[#8B8A84] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              From authentic Indian favourites to carefully curated cuisine — every dish
              prepared with passion and served with warmth.
            </p>
          </motion.div>
        </div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link href={venue.href} className="group block">
                <div className="relative overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/5] card-image-zoom">
                    <Image
                      src={venue.image}
                      alt={`${venue.name} restaurant at Hotel Winway Indore`}
                      fill
                      className="object-cover brightness-75 group-hover:brightness-85 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-1">{venue.tagline}</p>
                    <h3 className="font-serif text-2xl font-light mb-2">{venue.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {venue.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#C9A96E] text-xs">
                        <Clock size={11} />
                        {venue.timing}
                      </div>
                      <div className="flex items-center gap-1.5 text-white text-xs font-medium group-hover:text-[#C9A96E] transition-colors">
                        Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/dining"
            className="inline-flex items-center gap-3 border border-[#C9A96E] text-[#C9A96E] px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
          >
            Explore All Dining
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
