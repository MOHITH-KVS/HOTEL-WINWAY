'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ExploreRoomsCarouselProps {
  currentRoomId: 'standard' | 'deluxe' | 'junior-suite' | 'presidential-suite';
  isDarkTheme?: boolean;
}

const allRooms = [
  { id: 'standard', name: 'Standard Room', image: '/images/rooms/standard-room/standard-1.jpeg', link: '/rooms/standard' },
  { id: 'deluxe', name: 'Deluxe Room', image: '/images/rooms/deluxe-room/deluxe-1.jpeg', link: '/rooms/deluxe' },
  { id: 'junior-suite', name: 'Junior Suite', image: '/images/rooms/junior-suite/junior-1.jpeg', link: '/rooms/junior-suite' },
  { id: 'presidential-suite', name: 'Presidential Suite', image: '/images/rooms/presidential-suite/ps-1.jpeg', link: '/rooms/presidential-suite' }
];

export default function ExploreRoomsCarousel({ currentRoomId, isDarkTheme = false }: ExploreRoomsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const roomsToShow = allRooms.filter(r => r.id !== currentRoomId);
  
  const bgColor = isDarkTheme ? '#111' : '#fff';
  const headingColor = isDarkTheme ? '#fff' : '#111';
  const cardBg = isDarkTheme ? '#1a1a1a' : '#fff';
  const textColor = isDarkTheme ? '#fff' : '#111';



  return (
    <section className="explore-rooms-section">
      <style>{`
        .explore-rooms-section {
          background-color: ${bgColor};
          padding: 100px 0;
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
          color: ${headingColor};
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
        }

        .explore-card {
          flex: 0 0 calc(33.333% - 20px);
          min-width: 300px;
          scroll-snap-align: start;
          display: block;
          text-decoration: none;
          background: ${cardBg};
          transition: transform 0.4s ease;
        }
        
        .explore-card:hover {
          transform: translateY(-5px);
        }

        .explore-image-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
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
          color: ${textColor};
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
        @media (max-width: 768px) {
          .explore-card { flex: 0 0 calc(100vw - 40px); }
          .left-arrow { left: 5px; }
          .right-arrow { right: 5px; }
        }
      `}</style>
      
      <div className="explore-header">
        <span className="explore-sub">DISCOVER MORE</span>
        <h2 className="explore-title">Other Accommodation</h2>
      </div>

      <div className="explore-carousel-wrapper">
          {/* PREV ARROW */}
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
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
        <div className="explore-carousel-container" ref={scrollRef}>
          <div className="explore-track">
            {roomsToShow.map((room) => (
              <Link href={room.link} key={room.id} className="explore-card">
                <div className="explore-image-wrapper">
                  <Image src={room.image} alt={room.name} fill sizes="(max-width: 600px) 100vw, 33vw" />
                </div>
                <div className="explore-card-content">
                  <h3 className="explore-card-title">{room.name}</h3>
                  <span className="explore-card-btn">EXPLORE <span>&rarr;</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
          {/* NEXT ARROW */}
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
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
