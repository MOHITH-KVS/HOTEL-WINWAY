'use client';

import { useCallback, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface SectionCarouselProps {
  children: ReactNode[];
  slideWidth?: string;
  minSlideWidth?: number;
  gap?: number;
  loop?: boolean;
}

export default function SectionCarousel({
  children,
  slideWidth = 'calc(33.333% - 14px)',
  minSlideWidth = 300,
  gap = 20,
  loop = false,
}: SectionCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop,
    containScroll: 'trimSnaps',
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="carousel-wrapper">
      <button
        type="button"
        onClick={scrollPrev}
        className="carousel-arrow carousel-arrow-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>

      <div className="carousel-track embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container" style={{ gap }}>
          {children.map((child, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0"
              style={{ width: slideWidth, minWidth: minSlideWidth }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollNext}
        className="carousel-arrow carousel-arrow-next"
        aria-label="Next slide"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}
