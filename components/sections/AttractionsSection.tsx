'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionCarousel from '@/components/ui/SectionCarousel';

const attractions = [
  {
    id: 'lal-bagh-palace',
    name: 'Lal Bagh Palace',
    description:
      "Indore's most impressive neo-classical building, Lal Bagh was the residence of the Holkars till 1978, later converted into a museum.",
    image: '/images/attractions/attraction-8.avif',
  },
  {
    id: 'chappan-dukan',
    name: 'Chappan Dukan',
    description:
      "Located in the upscale New Palasia area, Chappan Dukan ('56 Shops') is an open-air food hub beloved for authentic Indori snacks and street food.",
    image: '/images/attractions/attraction-5.avif',
  },
  {
    id: 'rajwada-palace',
    name: 'Rajwada Palace',
    description:
      "Located in the heart of the city, this architectural gem is an impressive repository of the Holkar dynasty's history and Indore's royal past.",
    image: '/images/attractions/attraction-1.avif',
  },
  {
    id: 'sarafa-bazaar',
    name: 'Sarafa Bazaar',
    description:
      'An iconic night street-food market, Sarafa Bazaar transforms after dark into a bustling vegetarian food haven between 9 pm and 2 am.',
    image: '/images/attractions/attraction-3.avif',
  },
];

function AttractionCard({ attraction }: { attraction: (typeof attractions)[0] }) {
  return (
    <article className="card-base h-full flex flex-col">
      <div className="relative overflow-hidden card-image-zoom aspect-[4/3]">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="heading-card mb-3">{attraction.name}</h3>
        <p className="body-md mb-5 line-clamp-3 flex-1">{attraction.description}</p>
        <Link href="/local-attractions" className="btn-ghost text-[11px]">
          View Details ›
        </Link>
      </div>
    </article>
  );
}

export default function AttractionsCarousel() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="attractions" ref={sectionRef} className="section-padding bg-[#f3f4f6] scroll-mt-32">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="section-header"
        >
          <h2 className="heading-mixed mb-5">
            Attractions &amp; Places <strong>to Visit in Indore</strong>
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Indore blends historical significance with a thriving contemporary culture. From Rajwada Palace and Lal Bagh Palace to bustling food streets like Sarafa Bazaar, the city offers diverse experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeInOut' }}
        >
          <SectionCarousel slideWidth="calc(33.333% - 14px)" minSlideWidth={300} gap={20}>
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </SectionCarousel>
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/local-attractions" className="btn btn-outline">
            View All Attractions
          </Link>
        </div>
      </div>
    </section>
  );
}
