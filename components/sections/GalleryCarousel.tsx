'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  src: string;
  label: string;
}

interface GalleryCarouselProps {
  title: string;
  items: GalleryItem[];
  darkBackground?: boolean;
}

export default function GalleryCarousel({ title, items, darkBackground = false }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const slideRight = () => {
    // Show 3 items at a time, so max index is length - 3 (if length > 3)
    const maxIndex = items.length > 3 ? items.length - 3 : 0;
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= (items.length > 3 ? items.length - 3 : 0);

  return (
    <section className={`gallery-section ${darkBackground ? 'bg-cream' : 'bg-white'}`}>
      <style>{`
        .gallery-section {
          padding: 80px 0;
        }
        .bg-cream {
          background-color: #FAF9F6;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(201,169,110,0.03) 10px,
            rgba(201,169,110,0.03) 20px
          );
        }
        .gallery-section-title {
          text-align: center;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 22px;
          color: #C9A030;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .gallery-carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 0 40px;
        }
        .gallery-track {
          display: flex;
          gap: 20px;
          transition: transform 0.4s ease;
          will-change: transform;
          justify-content: ${items.length <= 3 ? 'center' : 'flex-start'};
        }
        .gallery-card {
          flex: 0 0 calc(33.333% - 14px);
          display: flex;
          flex-direction: column;
          max-width: 450px; /* Prevent overstretching */
        }
        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
        }
        .gallery-image-wrapper img {
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .gallery-card:hover .gallery-image-wrapper img {
          transform: scale(1.03);
        }
        .gallery-label {
          text-align: center;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #555;
          margin-top: 16px;
          text-transform: uppercase;
        }
        .gallery-arrow {
          position: absolute;
          top: calc(240px - 22px);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #ddd;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          z-index: 10;
          transition: background 0.3s, color 0.3s, opacity 0.3s;
        }
        .gallery-arrow:hover:not(:disabled) {
          background: #C9A030;
          color: #fff;
          border-color: #C9A030;
        }
        .gallery-arrow:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .gallery-arrow-left {
          left: 20px;
        }
        .gallery-arrow-right {
          right: 20px;
        }

        /* Mobile specific styles */
        @media (max-width: 900px) {
          .gallery-track {
            justify-content: ${items.length <= 2 ? 'center' : 'flex-start'};
          }
          .gallery-card {
            flex: 0 0 calc(50% - 10px);
          }
          .gallery-image-wrapper {
            height: 360px;
          }
        }

        @media (max-width: 600px) {
          .gallery-carousel-container {
            padding: 0 16px;
          }
          .gallery-card {
            flex: 0 0 100%;
          }
          .gallery-image-wrapper {
            height: 300px;
          }
          .gallery-arrow-left {
            left: 10px;
          }
          .gallery-arrow-right {
            right: 10px;
          }
        }
      `}</style>

      <h2 className="gallery-section-title">{title}</h2>

      <div className="gallery-carousel-container">
        {items.length > 3 && (
          <button 
            className="gallery-arrow gallery-arrow-left" 
            onClick={slideLeft}
            disabled={isAtStart}
            aria-label="Previous image"
          >
            &#8592;
          </button>
        )}

        <div 
          className="gallery-track"
          style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))` }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-image-wrapper">
                <Image 
                  src={item.src} 
                  alt={item.label} 
                  fill 
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="gallery-label">{item.label}</div>
            </div>
          ))}
        </div>

        {items.length > 3 && (
          <button 
            className="gallery-arrow gallery-arrow-right" 
            onClick={slideRight}
            disabled={isAtEnd}
            aria-label="Next image"
          >
            &#8594;
          </button>
        )}
      </div>
    </section>
  );
}
