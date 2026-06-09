'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Images } from 'lucide-react';

interface HeroImage {
  src: string;
  alt: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  locationLabel?: string;
  images?: HeroImage[];
  // Legacy single-image support for inner pages
  imageSrc?: string;
  imageAlt?: string;
  showScrollHint?: boolean;
  showCornerBadges?: boolean;
}

const DEFAULT_IMAGES: HeroImage[] = [
  { src: '/images/facade/facade-1.png', alt: 'Hotel Winway Indore — Front Facade' },
  { src: '/images/facade/facade-2.png', alt: 'Hotel Winway Indore — Side View' },
  { src: '/images/facade/facade-3.jpeg', alt: 'Hotel Winway Indore — Facade View' },
  { src: '/images/facade/facade-4.jpeg', alt: 'Hotel Winway Indore — Evening View' },
  { src: '/images/facade/facade-5.jpeg', alt: 'Hotel Winway Indore — Exterior' },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function HeroSection({
  title = 'Hotel Winway',
  subtitle = 'Where Warmth Meets Elegance',
  locationLabel = 'Indore, Madhya Pradesh',
  images,
  imageSrc,
  imageAlt,
  showScrollHint = false,
  showCornerBadges = false,
}: Props) {
  // If single imageSrc provided (inner pages), wrap as single-image array
  const slides: HeroImage[] = imageSrc
    ? [{ src: imageSrc, alt: imageAlt || title }]
    : (images ?? DEFAULT_IMAGES);

  const isSlider = slides.length > 1;
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback(
    (idx: number) => {
      setCurrent(idx);
      setProgress(0);
    },
    []
  );

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  // Auto-play + progress animation
  useEffect(() => {
    if (!isSlider) return;

    // Progress bar tick every 50ms
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    // Slide advance
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isSlider, nextSlide]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100dvh', minHeight: 560 }}>
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}

      {/* Dark overlay — matches reference gradient */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Corner badges — LOCATION + GALLERY (matches reference) */}
      {showCornerBadges && (
        <>
          <Link
            href="/contact#map"
            className="absolute bottom-20 left-6 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white text-[11px] tracking-[0.15em] uppercase px-3 py-2 transition-colors duration-200"
          >
            <MapPin size={12} />
            <span>Location</span>
          </Link>
          <Link
            href="/gallery"
            className="absolute bottom-20 right-6 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white text-[11px] tracking-[0.15em] uppercase px-3 py-2 transition-colors duration-200"
          >
            <Images size={12} />
            <span>Gallery</span>
          </Link>
        </>
      )}

      {/* Hero Content — centered */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
        {/* Location label */}
        <div
          className="flex items-center gap-4 mb-6"
          style={{
            animation: 'fadeInUp 0.8s ease 0.2s both',
          }}
        >
          <div className="w-12 h-px bg-white/50" />
          <span
            className="text-white/80 tracking-[0.25em] uppercase"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 400 }}
          >
            {locationLabel}
          </span>
          <div className="w-12 h-px bg-white/50" />
        </div>

        {/* Hotel Name */}
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '0.05em',
            animation: 'fadeInUp 1s ease 0.4s both',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 mb-10 max-w-lg"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            animation: 'fadeInUp 0.8s ease 0.6s both',
          }}
        >
          {subtitle}
        </p>

        {/* Single CTA — ENQUIRE NOW → /contact */}
        <Link
          href="/contact"
          className="inline-block text-white text-[12px] font-bold tracking-[0.2em] uppercase px-10 py-4 border border-white hover:bg-white hover:text-[#57585B] transition-all duration-300"
          style={{
            fontFamily: 'var(--font-sans)',
            animation: 'fadeInUp 0.8s ease 0.8s both',
          }}
        >
          Enquire Now
        </Link>
      </div>

      {/* Slider progress bar — thin white bar at bottom (matches reference) */}
      {isSlider && (
        <div className="absolute bottom-0 left-0 right-0 z-30 flex" style={{ height: 3 }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="flex-1 bg-white/30 relative overflow-hidden cursor-pointer border-none p-0"
              style={{ height: 3 }}
            >
              {idx === current && (
                <span
                  className="absolute inset-y-0 left-0 bg-white transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
              {idx < current && (
                <span className="absolute inset-0 bg-white" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Scroll hint */}
      {showScrollHint && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
          style={{ animation: 'fadeInUp 0.8s ease 1.5s both' }}
        >
          <span
            style={{ fontFamily: 'var(--font-sans)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase' }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      )}
    </section>
  );
}
