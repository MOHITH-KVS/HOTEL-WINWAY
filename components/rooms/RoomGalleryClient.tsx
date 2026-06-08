'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
  roomName: string;
}

export default function RoomGalleryClient({ images, roomName }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : 0));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % images.length : 0));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] cursor-pointer card-image-zoom overflow-hidden group"
            onClick={() => setLightbox(i)}
          >
            <Image
              src={src}
              alt={`${roomName} gallery ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
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
            <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl max-h-[85vh] mx-10 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox]}
                alt={`${roomName} ${lightbox + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full max-h-[80vh]"
              />
              <p className="text-center text-white/60 text-xs mt-3">
                {lightbox + 1} / {images.length}
              </p>
            </motion.div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
