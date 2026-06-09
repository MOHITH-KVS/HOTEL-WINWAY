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
  showEnquiryStrip?: boolean;
}

const DEFAULT_IMAGES: HeroImage[] = [
  { src: '/images/facade/facade-1.png', alt: 'Hotel Winway Indore — Front Facade' },
  { src: '/images/facade/facade-2.png', alt: 'Hotel Winway Indore — Side View' },
  { src: '/images/facade/facade-3.jpeg', alt: 'Hotel Winway Indore — Facade View' },
  { src: '/images/facade/facade-4.jpeg', alt: 'Hotel Winway Indore — Evening View' },
  { src: '/images/facade/facade-5.jpeg', alt: 'Hotel Winway Indore — Exterior' },
];

const SLIDE_DURATION = 6000;

export default function HeroSection({
  title = 'Hotel Winway',
  subtitle = 'Where Warmth Meets Elegance',
  locationLabel = 'Indore, Madhya Pradesh',
  images,
  imageSrc,
  imageAlt,
  showScrollHint = false,
  showCornerBadges = false,
  showEnquiryStrip = false,
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

  const stripHeight = showEnquiryStrip ? 'var(--hero-strip-height)' : '0px';
  const indicatorBottom = showEnquiryStrip ? 'var(--hero-strip-height)' : '0px';

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
      style={{ height: 'var(--hero-height)', minHeight: 520 }}
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={idx === 0}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-10 hero-overlay" />

      {/* Title block — centered, above strip */}
      <div
        className="absolute inset-x-0 z-20 flex flex-col items-center justify-end text-center text-white px-6 pointer-events-none"
        style={{ bottom: `calc(${stripHeight} + 48px)` }}
      >
        {locationLabel && (
          <p
            className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-white/90 mb-4"
            style={{ fontFamily: 'var(--font-display)', animation: 'fadeInUp 0.8s ease 0.05s both' }}
          >
            {locationLabel}
          </p>
        )}
        <h1
          className="heading-hero text-white mb-3 max-w-5xl"
          style={{ animation: 'fadeInUp 0.8s ease 0.15s both' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-white/85 max-w-2xl body-md"
            style={{ color: 'rgba(255,255,255,0.85)', animation: 'fadeInUp 0.8s ease 0.3s both' }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Location / Gallery — bottom corners above strip */}
      {showCornerBadges && (
        <>
          <Link
            href="/contact#map"
            className="absolute z-20 flex items-center gap-2 bg-black/45 hover:bg-black/60 text-white text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 transition-colors duration-300"
            style={{ bottom: `calc(${stripHeight} + 16px)`, left: 24, fontFamily: 'var(--font-display)' }}
          >
            <MapPin size={12} />
            Location
          </Link>
          <Link
            href="/gallery"
            className="absolute z-20 flex items-center gap-2 bg-black/45 hover:bg-black/60 text-white text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 transition-colors duration-300"
            style={{ bottom: `calc(${stripHeight} + 16px)`, right: 24, fontFamily: 'var(--font-display)' }}
          >
            <Images size={12} />
            Gallery
          </Link>
        </>
      )}

      {/* Enquiry strip — visual match to reference booking bar */}
      {showEnquiryStrip && (
        <div className="hero-enquiry-strip" style={{ height: 'var(--hero-strip-height)' }}>
          <div className="container-main h-full p-0">
            <div className="hero-enquiry-strip-inner h-full">
              <button type="button" className="hero-enquiry-field text-left hidden md:flex md:flex-col md:justify-center" onClick={() => openModal()}>
                <p className="hero-enquiry-field-label">Check-In Date</p>
                <p className="hero-enquiry-field-value">Select date</p>
              </button>
              <button type="button" className="hero-enquiry-field text-left hidden md:flex md:flex-col md:justify-center" onClick={() => openModal()}>
                <p className="hero-enquiry-field-label">Check-Out Date</p>
                <p className="hero-enquiry-field-value">Select date</p>
              </button>
              <button type="button" className="hero-enquiry-field text-left hidden md:flex md:flex-col md:justify-center" onClick={() => openModal()}>
                <p className="hero-enquiry-field-label">Guests</p>
                <p className="hero-enquiry-field-value">1 Guest</p>
              </button>
              <button type="button" onClick={() => openModal()} className="btn btn-accent h-full min-h-[var(--hero-strip-height)] w-full md:w-auto md:min-w-[200px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

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
            >
              {idx === current && (
                <span className="absolute inset-y-0 left-0 bg-white" style={{ width: `${progress}%` }} />
              )}
              {idx < current && <span className="absolute inset-0 bg-white/80" />}
            </button>
          ))}
        </div>
      )}

      {showScrollHint && !showEnquiryStrip && (
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
