'use client';

import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const attractions = [
  {
    id: 'lal-bagh-palace',
    name: 'Lal Bagh Palace',
    description:
      "Indore's most impressive neo-classical building, Lal Bagh was the residence of the Holkars till 1978, later converted into a museum.",
    image: '/images/attractions/attraction-8.avif',
    distance: '4.7 km',
  },
  {
    id: 'chappan-dukan',
    name: 'Chappan Dukan',
    description:
      "Located in the upscale New Palasia area, Chappan Dukan ('56 Shops') is an open-air food hub beloved for authentic Indori snacks and street food.",
    image: '/images/attractions/attraction-5.avif',
    distance: '2.8 km',
  },
  {
    id: 'rajwada-palace',
    name: 'Rajwada Palace',
    description:
      "Located in the heart of the city, this architectural gem is an impressive repository of the Holkar dynasty's history and Indore's royal past.",
    image: '/images/attractions/attraction-1.avif',
    distance: '2.5 km',
  },
  {
    id: 'sarafa-bazaar',
    name: 'Sarafa Bazaar',
    description:
      'An iconic night street-food market, Sarafa Bazaar transforms after dark into a bustling vegetarian food haven between 9 pm and 2 am.',
    image: '/images/attractions/attraction-3.avif',
    distance: '2.6 km',
  },
];

export default function AttractionsCarousel() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#F3F4F6' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="heading-mixed mb-4">
            Attractions &amp; Places <strong>to Visit in Indore</strong>
          </h2>
          <p
            className="text-[#57585B] max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85 }}
          >
            Indore blends historical significance with a thriving contemporary culture. From Rajwada
            Palace and Lal Bagh Palace to bustling food streets like Sarafa Bazaar, the city offers
            diverse experiences. Its vibrant culinary scene and growing urban character make it one
            of central India&apos;s most engaging destinations.
          </p>
        </motion.div>

        {/* Carousel with prev/next arrows — matches reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Prev button */}
          <button
            onClick={scrollPrev}
            aria-label="Previous attraction"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
            style={{ border: '1px solid #e5e7eb' }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-4">
              {attractions.map((attraction) => (
                <div
                  key={attraction.id}
                  className="embla__slide flex-shrink-0 bg-white"
                  style={{
                    width: 'calc(33.333% - 12px)',
                    minWidth: 260,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden card-image-zoom" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      className="text-[#1A1A1A] font-bold mb-2 uppercase"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 900, letterSpacing: '0.05em' }}
                    >
                      {attraction.name}
                    </h3>
                    <p
                      className="text-[#57585B] mb-4 line-clamp-3"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7 }}
                    >
                      {attraction.description}
                    </p>
                    <Link
                      href="/local-attractions"
                      className="text-[#C9A96E] hover:text-[#1A1A1A] transition-colors flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    >
                      View Details <span>›</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={scrollNext}
            aria-label="Next attraction"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
            style={{ border: '1px solid #e5e7eb' }}
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            href="/local-attractions"
            className="inline-block border border-[#57585B] text-[#57585B] hover:bg-[#57585B] hover:text-white text-[12px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            View All Attractions
          </Link>
        </div>
      </div>
    </section>
  );
}
