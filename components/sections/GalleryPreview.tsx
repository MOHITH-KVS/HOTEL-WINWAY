'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionCarousel from '@/components/ui/SectionCarousel';

const galleryImages = [
  { src: '/images/facade/facade-1.png', alt: 'Hotel Winway Facade' },
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
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prevImage = () => setLightbox((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : 0));
  const nextImage = () => setLightbox((p) => (p !== null ? (p + 1) % galleryImages.length : 0));

  return (
    <section id="gallery" className="section-padding bg-[#faf9f7] scroll-mt-32" ref={ref}>
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <span className="section-label">Visual Stories</span>
            <h2 className="heading-mixed mt-4">Gallery</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            <Link href="/gallery" className="btn-ghost text-[12px]">
              View Full Gallery ›
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
        >
          <SectionCarousel slideWidth="calc(25% - 15px)" minSlideWidth={260} gap={20}>
            {galleryImages.map((img, index) => (
              <button
                key={img.src}
                type="button"
                className="relative aspect-[4/3] overflow-hidden card-image-zoom w-full text-left"
                onClick={() => setLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-all duration-300" />
              </button>
            ))}
          </SectionCarousel>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] lightbox-backdrop flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightbox(null)} aria-label="Close">
              <X size={24} />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous">
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
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
              <p className="text-center text-white/70 text-sm mt-3">{galleryImages[lightbox].alt}</p>
            </motion.div>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
