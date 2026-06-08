'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/facade/facade-1.png', alt: 'Hotel Winway Facade', span: 'col-span-2 row-span-2' },
  { src: '/images/rooms/presidential-suite/ps-1.jpeg', alt: 'Presidential Suite' },
  { src: '/images/dining/tiffin/tiffin-1.jpeg', alt: 'Tiffin Restaurant' },
  { src: '/images/rooms/deluxe-room/deluxe-1.jpeg', alt: 'Deluxe Room' },
  { src: '/images/dining/the-deck/deck-1.jpeg', alt: 'The Deck' },
  { src: '/images/dining/banquet/banquet-1.jpeg', alt: 'Banquet Hall' },
  { src: '/images/rooms/junior-suite/junior-1.jpeg', alt: 'Junior Suite' },
  { src: '/images/attractions/attraction-7.avif', alt: 'Lal Bagh Palace' },
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prevImage = () => setLightbox((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : 0));
  const nextImage = () => setLightbox((p) => (p !== null ? (p + 1) % galleryImages.length : 0));

  return (
    <section className="section-padding bg-[#F9F6F0]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Visual Stories</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3">Gallery</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#57585B] hover:text-[#C9A96E] transition-colors group"
            >
              View Full Gallery <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setLightbox(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] lightbox-backdrop flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-4xl max-h-[85vh] mx-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                width={1200}
                height={800}
                className="object-contain w-full h-full max-h-[80vh]"
              />
              <p className="text-center text-white/70 text-sm mt-3">
                {galleryImages[lightbox].alt} — {lightbox + 1}/{galleryImages.length}
              </p>
            </motion.div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
