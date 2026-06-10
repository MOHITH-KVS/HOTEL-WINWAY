'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const categories = ['All', 'Rooms', 'Dining', 'Facade', 'Attractions'];

const allImages = [
  { src: '/images/facade/facade-1.png', alt: 'Hotel Winway Facade', category: 'Facade' },
  { src: '/images/facade/facade-2.png', alt: 'Hotel Winway Side View', category: 'Facade' },
  { src: '/images/facade/facade-3.jpeg', alt: 'Hotel Winway Exterior', category: 'Facade' },
  { src: '/images/rooms/presidential-suite/ps-1.jpeg', alt: 'Presidential Suite', category: 'Rooms' },
  { src: '/images/rooms/presidential-suite/ps-4.png', alt: 'Presidential Suite Living Area', category: 'Rooms' },
  { src: '/images/rooms/presidential-suite/ps-7.jpeg', alt: 'Presidential Suite Bedroom', category: 'Rooms' },
  { src: '/images/rooms/presidential-suite/ps-10.jpeg', alt: 'Presidential Suite Bathroom', category: 'Rooms' },
  { src: '/images/rooms/deluxe-room/deluxe-1.jpeg', alt: 'Deluxe Room', category: 'Rooms' },
  { src: '/images/rooms/deluxe-room/deluxe-2.jpeg', alt: 'Deluxe Room View', category: 'Rooms' },
  { src: '/images/rooms/standard-room/standard-1.jpeg', alt: 'Standard Room', category: 'Rooms' },
  { src: '/images/rooms/junior-suite/junior-1.jpeg', alt: 'Junior Suite', category: 'Rooms' },
  { src: '/images/dining/tiffin/tiffin-1.jpeg', alt: 'Tiffin Restaurant', category: 'Dining' },
  { src: '/images/dining/tiffin/tiffin-3.jpeg', alt: 'Tiffin Food', category: 'Dining' },
  { src: '/images/dining/tiffin/tiffin-5.jpeg', alt: 'Tiffin Ambience', category: 'Dining' },
  { src: '/images/dining/the-deck/deck-1.jpeg', alt: 'The Deck Restaurant', category: 'Dining' },
  { src: '/images/dining/the-deck/deck-3.jpeg', alt: 'The Deck Dining', category: 'Dining' },
  { src: '/images/dining/banquet/banquet-1.jpeg', alt: 'Banquet Hall', category: 'Dining' },
  { src: '/images/dining/banquet/banquet-3.jpeg', alt: 'Banquet Setup', category: 'Dining' },
  { src: '/images/dining/cafe/cafe-1.jpeg', alt: 'Cafe Area', category: 'Dining' },
  { src: '/images/attractions/attraction-7.avif', alt: 'Lal Bagh Palace', category: 'Attractions' },
  { src: '/images/attractions/attraction-1.avif', alt: 'Rajwada Palace', category: 'Attractions' },
  { src: '/images/attractions/attraction-3.avif', alt: 'Sarafa Bazaar', category: 'Attractions' },
  { src: '/images/attractions/attraction-5.avif', alt: 'Chappan Dukan', category: 'Attractions' },
  { src: '/images/lobby/lobby-1.jpeg', alt: 'Hotel Lobby', category: 'Facade' },
];

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const filtered = activeCategory === 'All' ? allImages : allImages.filter((img) => img.category === activeCategory);

  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + filtered.length) % filtered.length : 0));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % filtered.length : 0));

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex items-center gap-3 flex-wrap justify-center mb-10">
        <Filter size={14} className="text-[#C9A96E]" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setLightbox(null); }}
            className={`px-5 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#1A1A1A] text-white'
                : 'border border-[#D7D5CF] text-[#57585B] hover:border-[#C9A96E] hover:text-[#C9A96E]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div ref={ref} className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, index) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: index * 0.03 }}
              className="masonry-item cursor-pointer group"
              onClick={() => setLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
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
            <button className="absolute top-4 right-4 text-white/80 hover:text-white p-3" onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={40} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[90vh] mx-12 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1400}
                height={900}
                className="object-contain w-full max-h-[85vh]"
              />
              <div className="flex items-center justify-between mt-3 text-white/60 text-xs">
                <span>{filtered[lightbox].alt}</span>
                <span>{lightbox + 1} / {filtered.length}</span>
              </div>
            </motion.div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
