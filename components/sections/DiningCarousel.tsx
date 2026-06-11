'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Venue {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  timing: string;
  image: string;
  href: string;
}

export default function DiningCarousel({ venues }: { venues: Venue[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const slideRight = () => {
    // Show 3 cards at a time maximum typically, but allow scrolling to the end
    if (currentIndex < venues.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <style>{`
        .dining-carousel-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 20px 0 60px 0;
        }

        .dining-track {
          display: flex;
          flex-direction: row;
          gap: 24px;
          padding: 0 60px;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          box-sizing: border-box;
        }

        .dining-card {
          flex: 0 0 380px;
          background: #fff;
          border: 1px solid #f0f0f0;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }

        .dining-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }

        .dining-card-image {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .dining-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }

        .dining-card:hover .dining-card-image img {
          transform: scale(1.05);
        }

        .dining-card-body {
          padding: 20px 20px 24px 20px;
        }

        .dining-cuisine-tag {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #999;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .dining-card-name {
          font-size: 20px;
          font-weight: 700;
          color: #222;
          margin-bottom: 10px;
        }

        .dining-card-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .dining-card-hours {
          font-size: 13px;
          color: #555;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dining-card-actions {
          display: flex;
          gap: 24px;
          align-items: center;
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
          margin-top: 8px;
        }

        .dining-view-details,
        .dining-contact {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #333;
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }

        .dining-view-details:hover,
        .dining-contact:hover {
          color: #8B6914;
          border-color: #8B6914;
        }

        .dining-arrow {
          position: absolute;
          top: 40%;
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
          transition: box-shadow 0.2s;
        }

        .dining-arrow:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        .dining-arrow-left  { left: 10px; }
        .dining-arrow-right { right: 10px; }
      `}</style>

      <div className="dining-carousel-wrapper">
        <button className="dining-arrow dining-arrow-left" onClick={slideLeft}>&#8592;</button>
        
        <div 
          className="dining-track" 
          style={{ transform: `translateX(-${currentIndex * (380 + 24)}px)` }}
        >
          {venues.map((venue) => (
            <div key={venue.id} className="dining-card">
              <div className="dining-card-image">
                <Image src={venue.image} alt={venue.name} fill />
              </div>
              <div className="dining-card-body">
                <span className="dining-cuisine-tag">{venue.cuisine}</span>
                <h3 className="dining-card-name">{venue.name}</h3>
                <p className="dining-card-desc">{venue.description}</p>
                <div className="dining-card-hours">
                  <span>&#9200;</span> {venue.timing}
                </div>
                <div className="dining-card-actions">
                  <Link href={venue.href} className="dining-view-details">VIEW DETAILS ›</Link>
                  <Link href="/contact" className="dining-contact">CONTACT US ›</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="dining-arrow dining-arrow-right" onClick={slideRight}>&#8594;</button>
      </div>
    </>
  );
}
