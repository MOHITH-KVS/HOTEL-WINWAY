'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';

interface Props {
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  showScrollHint?: boolean;
}

export default function HeroSection({
  title = "Hotel Winway",
  subtitle = "Where the Warmth of Malwa Meets Modern Luxury",
  imageSrc,
  imageAlt,
  showScrollHint = true,
}: Props) {
  const { openModal } = useEnquiryModal();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover ken-burns"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
      >
        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-16 h-px bg-[#C9A96E]/60" />
          <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-light">
            Indore, Madhya Pradesh
          </span>
          <div className="w-16 h-px bg-[#C9A96E]/60" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-[1.1]"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg sm:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => openModal()}
            className="flex items-center gap-3 bg-[#C9A96E] hover:bg-[#b8955a] text-white px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl min-w-[200px] justify-center"
          >
            Send Enquiry
            <ArrowRight size={16} />
          </button>
          <a
            href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-white/60 hover:border-white text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-white/10 min-w-[200px] justify-center"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-2 text-white/60 text-sm"
        >
          <Phone size={12} />
          <a href="tel:+910731-661-1111" className="hover:text-[#C9A96E] transition-colors">
            0731-661-1111
          </a>
          <span className="mx-2">|</span>
          <a href="mailto:fom1@hotelwinway.com" className="hover:text-[#C9A96E] transition-colors">
            fom1@hotelwinway.com
          </a>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </motion.div>
      )}
    </section>
  );
}
