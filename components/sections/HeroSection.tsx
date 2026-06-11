'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Images } from 'lucide-react';
import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';

interface HeroImage {
  src: string;
  alt: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  locationLabel?: string;
  images?: HeroImage[];
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

const SLIDE_DURATION = 5000;

export default function HeroSection({
  title = 'Hotel Winway',
  subtitle = 'Where the Warmth of Malwa Meets Modern Luxury',
  locationLabel = 'Indore, Madhya Pradesh',
  images,
  imageSrc,
  imageAlt,
  showScrollHint = false,
  showCornerBadges = false,
}: Props) {
  const slides: HeroImage[] = imageSrc
    ? [{ src: imageSrc, alt: imageAlt || title }]
    : (images ?? DEFAULT_IMAGES);

  const isSlider = slides.length > 1;
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { openModal } = useEnquiryModal();

  const indicatorBottom = '0px';

  const goToSlide = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    if (!isSlider) return;
    progressRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 100 / (SLIDE_DURATION / 50)));
    }, 50);
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isSlider, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1a1a1a]"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out parallax-bg"
          style={{ 
            opacity: idx === current ? 1 : 0, 
            zIndex: idx === current ? 1 : 0,
            backgroundImage: `url('${slide.src}')`
          }}
        />
      ))}

      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.7) 100%)' }} />

      {/* Title block — centered */}
      <div
        className="absolute inset-x-0 inset-y-0 z-20 flex flex-col items-center justify-center text-center text-white px-6 pointer-events-none"
      >
        {locationLabel && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', animation: 'fadeInUp 0.8s ease 0.05s both' }}>
            <div style={{ width: '24px', height: '1px', background: '#FFFFFF' }} />
            <p style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.35em', color: '#FFFFFF', textShadow: '0 2px 8px rgba(0,0,0,0.5)', fontFamily: 'Lato, sans-serif', textTransform: 'uppercase', margin: 0 }}>
              {locationLabel}
            </p>
            <div style={{ width: '24px', height: '1px', background: '#FFFFFF' }} />
          </div>
        )}
        <h1 style={{ textTransform: 'uppercase', fontSize: '72px', fontFamily: '"Libre Baskerville", serif', fontWeight: '700', color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)', letterSpacing: '0.08em', marginBottom: '16px', animation: 'fadeInUp 0.8s ease 0.15s both', lineHeight: '1.2', marginTop: 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 8px rgba(0,0,0,0.4)', fontFamily: 'Lato, sans-serif', letterSpacing: '0.1em', animation: 'fadeInUp 0.8s ease 0.3s both', margin: 0 }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* BOTTOM BAR — LOCATION + GALLERY */}
      <div style={{
        position: 'absolute', bottom: '40px', left: 0, right: 0, zIndex: 30,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 40px', height: 'auto',
        background: 'transparent'
      }}>
        <a href="https://maps.google.com/?q=Hotel+Winway+Indore" target="_blank"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', background: 'rgba(0,0,0,0.55)', padding: '10px 20px', border: '1px solid rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'background 0.3s ease' }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(184,150,90,0.8)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          LOCATION
        </a>
        <a href="/gallery"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', background: 'rgba(0,0,0,0.55)', padding: '10px 20px', border: '1px solid rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'background 0.3s ease' }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(184,150,90,0.8)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          GALLERY
        </a>
      </div>



      {/* Slider progress indicators */}
      {isSlider && (
        <div
          className="absolute left-0 right-0 z-30 flex"
          style={{ height: 3, bottom: indicatorBottom }}
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="flex-1 bg-white/30 relative overflow-hidden cursor-pointer border-none p-0"
              style={{ height: 3 }}
              suppressHydrationWarning
            >
              {idx === current && (
                <span className="absolute inset-y-0 left-0 bg-white" style={{ width: `${progress}%` }} />
              )}
              {idx < current && <span className="absolute inset-0 bg-white/80" />}
            </button>
          ))}
        </div>
      )}

      {showScrollHint && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40">
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      )}
    </section>
  );
}
