'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ExploreDiningCarouselProps {
  currentOutletId: 'tiffin' | 'the-deck' | 'al-fresco' | 'cafe';
}

const allOutlets = [
  { id: 'tiffin', name: 'Tiffin', image: '/images/dining/tiffin/tiffin-1.jpeg', link: '/dining/tiffin' },
  { id: 'the-deck', name: 'The Deck', image: '/images/dining/the-deck/deck-1.jpeg', link: '/dining/the-deck' },
  { id: 'al-fresco', name: 'Al Fresco', image: '/images/dining/alfresco/alfresco-1.jpeg', link: '/dining/al-fresco' },
  { id: 'cafe', name: 'Cafe', image: '/images/dining/cafe/cafe-1.jpeg', link: '/dining/cafe' }
];

export default function ExploreDiningCarousel({ currentOutletId }: ExploreDiningCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const outletsToShow = allOutlets.filter(r => r.id !== currentOutletId);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="explore-dining-section">
      <style>{`
        .explore-dining-section {
          background-color: #fff;
          padding: 80px 0;
          overflow: hidden;
        }

        .explore-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .explore-sub {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 3px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
          font-weight: 600;
        }

        .explore-title {
          font-family: var(--font-serif);
          font-size: 32px;
          color: #111;
          font-weight: 300;
        }

        .explore-carousel-wrapper {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
        }

        .explore-carousel-container {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0 5%;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        }
        
        .explore-carousel-container::-webkit-scrollbar {
          display: none;
        }

        .explore-track {
          display: flex;
          gap: 30px;
          padding-bottom: 20px;
          justify-content: ${outletsToShow.length <= 3 ? 'center' : 'flex-start'};
        }

        .explore-card {
          flex: 0 0 calc(33.333% - 20px);
          min-width: 300px;
          max-width: 450px;
          scroll-snap-align: start;
          display: block;
          text-decoration: none;
          background: #FAF9F6;
          transition: transform 0.4s ease;
        }
        
        .explore-card:hover {
          transform: translateY(-5px);
        }

        .explore-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .explore-image-wrapper img {
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        
        .explore-card:hover .explore-image-wrapper img {
          transform: scale(1.05);
        }

        .explore-card-content {
          padding: 24px 0;
          text-align: center;
        }

        .explore-card-title {
          font-family: var(--font-serif);
          font-size: 20px;
          color: #111;
          margin-bottom: 12px;
        }

        .explore-card-btn {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #C9A030;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        /* Arrows */
        .nav-arrow {
          position: absolute;
          top: calc(50% - 20px);
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #ddd;
          cursor: pointer;
          font-size: 18px;
          color: #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .nav-arrow:hover {
          background: #C9A030;
          color: #fff;
          border-color: #C9A030;
        }
        .left-arrow { left: 15px; }
        .right-arrow { right: 15px; }

        @media (max-width: 1024px) {
          .explore-card { flex: 0 0 calc(50% - 15px); }
        }
        @media (max-width: 900px) {
          .explore-track { justify-content: flex-start; }
        }
        @media (max-width: 600px) {
          .explore-card { flex: 0 0 85vw; }
          .left-arrow { left: 5px; }
          .right-arrow { right: 5px; }
        }
      `}</style>
      
      <div className="explore-header">
        <span className="explore-sub">DISCOVER MORE</span>
        <h2 className="explore-title">Other Dining Experiences</h2>
      </div>

      <div className="explore-carousel-wrapper">
        <button className="nav-arrow left-arrow" onClick={scrollLeft} aria-label="Scroll left">&#8592;</button>
        <div className="explore-carousel-container" ref={scrollRef}>
          <div className="explore-track">
            {outletsToShow.map((outlet) => (
              <Link href={outlet.link} key={outlet.id} className="explore-card">
                <div className="explore-image-wrapper">
                  <Image src={outlet.image} alt={outlet.name} fill sizes="(max-width: 600px) 100vw, 33vw" />
                </div>
                <div className="explore-card-content">
                  <h3 className="explore-card-title">{outlet.name}</h3>
                  <span className="explore-card-btn">EXPLORE <span>&rarr;</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button className="nav-arrow right-arrow" onClick={scrollRight} aria-label="Scroll right">&#8594;</button>
      </div>
    </section>
  );
}
