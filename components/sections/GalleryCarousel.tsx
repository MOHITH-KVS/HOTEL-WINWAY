'use client';

import { useRef } from 'react';
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
  const carouselRef = useRef<HTMLDivElement>(null);

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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
        }
        .gallery-card {
          display: flex;
          flex-direction: column;
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
        .carousel-arrow {
          display: none !important;
        }
        .gallery-arrow-left {
          left: 20px;
        }
        .gallery-arrow-right {
          right: 20px;
        }

        /* Mobile specific styles */
        @media (max-width: 900px) {
          .gallery-image-wrapper {
            height: 360px;
          }
        }

        @media (max-width: 768px) {
          .gallery-carousel-container {
            padding: 0 16px;
          }
          .gallery-track {
            display: flex;
            flex-direction: row;
            gap: 16px;
          }
          .gallery-card {
            flex: 0 0 100%;
          }
          .gallery-image-wrapper {
            height: 300px;
          }
          .carousel-arrow {
            display: flex !important;
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
          {/* PREV ARROW */}
          <button
            className="carousel-arrow gallery-arrow-left"
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
              }
            }}
            style={{
              position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 10, background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
              width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.15)', transition: 'all 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.background = '#B8965A'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

        <div 
          className="gallery-track"
          ref={carouselRef}
          style={{ 
            overflowX: 'hidden', scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth', WebkitOverflowScrolling: 'auto',
            msOverflowStyle: 'none', scrollbarWidth: 'none', userSelect: 'none'
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="gallery-card" style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
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

          {/* NEXT ARROW */}
          <button
            className="carousel-arrow gallery-arrow-right"
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
              }
            }}
            style={{
              position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
              zIndex: 10, background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
              width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.15)', transition: 'all 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.background = '#B8965A'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
      </div>
    </section>
  );
}
