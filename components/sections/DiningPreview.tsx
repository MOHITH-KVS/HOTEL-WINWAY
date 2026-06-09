'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import SectionCarousel from '@/components/ui/SectionCarousel';

const venues = [
  {
    id: 'tiffin',
    name: 'Tiffin',
    tagline: 'Home Style Hospitality',
    description: 'Inspired by Mumbai\'s iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals.',
    timing: '10:00 am – 10:00 pm',
    image: '/images/dining/tiffin/tiffin-3.jpeg',
    href: '/dining/tiffin',
  },
  {
    id: 'the-deck',
    name: 'The Deck',
    tagline: 'Elevated Dining',
    description: 'Escape to an elevated dining experience at The Deck — the perfect setting for birthdays, anniversaries and corporate gatherings.',
    timing: '24/7',
    image: '/images/dining/the-deck/deck-2.jpeg',
    href: '/dining/the-deck',
  },
  {
    id: 'alfresco',
    name: 'Alfresco',
    tagline: 'Open Sky Dining',
    description: 'Set amidst a refreshing outdoor setting, Alfresco offers a relaxed dining experience where nature, flavour and hospitality come together.',
    timing: 'Evening onwards',
    image: '/images/dining/alfresco/alfresco-card.jpeg',
    href: '/dining/alfresco',
  },
];

function DiningCard({ venue }: { venue: (typeof venues)[0] }) {
  return (
    <Link href={venue.href} className="group block h-full">
      <article className="relative overflow-hidden h-full min-h-[420px]">
        <div className="absolute inset-0 card-image-zoom">
          <Image
            src={venue.image}
            alt={`${venue.name} restaurant at Hotel Winway Indore`}
            fill
            className="object-cover brightness-[0.85] group-hover:brightness-95 transition-all duration-500"
            sizes="(max-width: 768px) 90vw, 40vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <p className="section-label text-[#a67c5b] mb-2">{venue.tagline}</p>
          <h3 className="heading-section text-white mb-3">{venue.name}</h3>
          <p className="body-md text-white/75 line-clamp-2 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {venue.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[#a67c5b] text-sm">
              <Clock size={13} /> {venue.timing}
            </span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase group-hover:text-[#a67c5b] transition-colors">
              Explore ›
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function DiningPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dining" className="section-padding bg-[#45443f] scroll-mt-32" ref={ref}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="section-header"
        >
          <span className="section-label text-[#a67c5b]">Culinary Experiences</span>
          <h2 className="heading-mixed text-white mt-4 mb-5">
            Indulge in <strong className="text-[#a67c5b]">Gourmet Dining</strong>
          </h2>
          <p className="body-lg text-white/70">
            From authentic Indian favourites to carefully curated cuisine — every dish prepared with passion and served with warmth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeInOut' }}
        >
          <SectionCarousel slideWidth="calc(33.333% - 14px)" minSlideWidth={300} gap={20}>
            {venues.map((venue) => (
              <DiningCard key={venue.id} venue={venue} />
            ))}
          </SectionCarousel>
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/dining" className="btn btn-outline-light">
            Explore All Dining
          </Link>
        </div>
      </div>
    </section>
  );
}
