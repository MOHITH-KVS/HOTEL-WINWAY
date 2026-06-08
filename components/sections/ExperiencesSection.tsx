'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ArrowRight, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 'holkar-legacy-trail',
    name: 'Holkar Legacy Trail',
    category: 'Heritage & Culture',
    tagline: 'Half-Day Tour',
    timing: '10:00 am – 4:30 pm',
    suitable: 'Families, Corporate Groups',
    description: 'Trace the legacy of the Holkar dynasty across opulent palace architecture and serene cenotaph gardens — a glimpse into a lineage that shaped Indore\'s character.',
    stops: ['Lal Bagh Palace', 'Chhatri Bagh', 'Rajwada Museum'],
    image: '/images/attractions/attraction-7.avif',
    href: '/experiences#holkar-legacy-trail',
  },
  {
    id: 'temple-circuit',
    name: 'Indore Temple Circuit',
    category: 'Spiritual Heritage',
    tagline: 'Morning or Evening',
    timing: '6:00 am – 12:00 pm | 2:00 pm – 8:00 pm',
    suitable: 'Families, Senior Citizens',
    description: "Traverse Indore's prominent temples — from the Annapurna Temple's South Indian gopuram to Khajrana Ganesh with diamond-embedded eyes and Bada Ganpati home.",
    stops: ['Annapurna Temple', 'Kaanch Mandir', 'Khajrana Ganesh', 'Bada Ganpati'],
    image: '/images/attractions/attraction-14.avif',
    href: '/experiences#temple-circuit',
  },
];

export default function ExperiencesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Curated Journeys</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 mb-4 leading-tight">
              Experiences &amp; Itineraries
            </h2>
            <p className="text-[#8B8A84] text-sm max-w-lg mx-auto leading-relaxed">
              Thoughtfully curated tours that reveal the soul of Indore — from heritage trails
              to spiritual circuits
            </p>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={exp.href} className="group block">
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[320px] card-image-zoom overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={`${exp.name} tour from Hotel Winway Indore`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/10 transition-all duration-300" />
                    <div className="absolute top-4 left-4 bg-[#C9A96E] px-3 py-1.5">
                      <span className="text-[10px] text-white font-semibold tracking-[0.15em] uppercase">{exp.tagline}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col">
                    <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-2">{exp.category}</p>
                    <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium mb-3 leading-tight">
                      {exp.name}
                    </h3>
                    <p className="text-[#8B8A84] text-sm leading-relaxed mb-5">{exp.description}</p>

                    {/* Stops */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-[#57585B] tracking-wide uppercase mb-2">Highlights</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.stops.map((stop) => (
                          <span key={stop} className="text-[10px] bg-[#F9F6F0] text-[#57585B] px-2.5 py-1 border border-[#E8DDD0]">
                            {stop}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-5 mt-auto">
                      <div className="flex items-center gap-2 text-xs text-[#8B8A84]">
                        <Clock size={11} className="text-[#C9A96E]" />
                        {exp.timing}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#8B8A84]">
                        <Users size={11} className="text-[#C9A96E]" />
                        {exp.suitable}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Concierge Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 p-6 bg-[#F9F6F0] border border-[#E8DDD0] flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-10 h-10 bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
            <Calendar size={18} className="text-[#C9A96E]" />
          </div>
          <div>
            <p className="font-medium text-[#1A1A1A] text-sm mb-0.5">Prior Booking Required</p>
            <p className="text-xs text-[#8B8A84]">
              Reservations must be made at least 24 hours in advance. Contact our concierge at{' '}
              <a href="tel:0731-661-1111" className="text-[#C9A96E] hover:underline">0731-661-1111</a>
              {' '}or{' '}
              <a href="mailto:fom1@hotelwinway.com" className="text-[#C9A96E] hover:underline">fom1@hotelwinway.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
