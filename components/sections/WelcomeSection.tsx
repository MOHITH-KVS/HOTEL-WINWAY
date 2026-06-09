'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  'Strategically located on RNT Marg',
  'World-class amenities & services',
  '20 mins drive from the airport',
  'Complimentary high-speed WiFi',
  'In-room dining & 24/7 service',
  'Flexible check-in & cancellation',
];

export default function WelcomeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-[#F9F6F0]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] card-image-zoom">
              <Image
                src="/images/lobby/lobby-1.jpeg"
                alt="Hotel Winway Lobby — Warm, welcoming reception"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] text-white p-6 shadow-xl hidden lg:block">
              <p className="font-serif text-3xl font-light leading-tight">Est.</p>
              <p className="font-serif text-4xl font-semibold leading-tight">2010</p>
              <p className="text-xs tracking-[0.2em] uppercase mt-1 text-white/80">Indore</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section-label">Welcome to Hotel Winway</span>

            <h2 className="heading-mixed mb-6" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}>
              Where the Warmth of Malwa <strong>Meets Modern Luxury</strong>
            </h2>

            <div className="w-12 h-px bg-[#C9A96E] mb-6" />

            <p
              className="text-[#57585B] mb-4"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85 }}
            >
              At Hotel Winway, hospitality is more than a service — it is a tradition rooted in the warmth and culture of Malwa. Located in the heart of Indore, the hotel offers a harmonious blend of comfort, convenience and personalized attention.
            </p>
            <p
              className="text-[#57585B] mb-8"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85 }}
            >
              Strategically situated on R.N.T. Marg, one of the city&apos;s most prominent commercial districts, Hotel Winway provides effortless access to business centres, educational institutions, shopping destinations and key transport hubs.
            </p>

            {/* Highlights — bullet style matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-1.5 flex-shrink-0" />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#57585B', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#57585B] hover:text-[#C9A96E] transition-colors"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              Discover Our Story <span>›</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
