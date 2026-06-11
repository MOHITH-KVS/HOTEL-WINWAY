'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const OFFERS = [
  {
    id: 1,
    title: 'Weekend Getaway',
    description: 'Enjoy a relaxing weekend with a 20% discount on all room types. Includes complimentary breakfast and late check-out.',
    image: '/images/facade/facade-3.jpeg',
    tag: 'STAY',
  },
  {
    id: 2,
    title: 'Business Executive Package',
    description: 'Designed for the modern traveller. Includes high-speed Wi-Fi, laundry service, and access to the executive lounge.',
    image: '/images/facade/facade-4.jpeg',
    tag: 'BUSINESS',
  },
];

export default function OffersCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => setCurrentIdx((prev) => (prev + 1) % OFFERS.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + OFFERS.length) % OFFERS.length);

  return (
    <section className="offers-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
      <style>{`
        .offers-header {
          text-align: center;
          margin-bottom: 50px;
          padding: 0 20px;
        }
        .offers-label {
          color: #b8935a;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 16px;
          font-weight: 700;
        }
        .offers-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 32px;
          color: #c4a47c;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .offers-title strong {
          color: #4a3320;
          font-weight: 700;
        }
        .offers-carousel-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          overflow: hidden;
          padding: 0 60px;
        }
        .offers-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        .offer-card {
          min-width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f8f7f5;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .offer-image {
          position: relative;
          height: 100%;
          min-height: 350px;
        }
        .offer-content {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .offer-tag {
          font-size: 11px;
          color: #b8935a;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .offer-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 24px;
          color: #1a1a1a;
          margin-bottom: 16px;
        }
        .offer-desc {
          font-size: 15px;
          color: #57585B;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .offer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1a1a1a;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s;
        }
        .offer-btn:hover {
          color: #b8935a;
        }
        .offer-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1a1a1a;
          z-index: 10;
          transition: all 0.3s;
        }
        .offer-arrow:hover {
          background: #b8935a;
          color: #fff;
          border-color: #b8935a;
        }
        .offer-arrow-left { left: 0; }
        .offer-arrow-right { right: 0; }

        @media (max-width: 768px) {
          .offer-card {
            grid-template-columns: 1fr;
          }
          .offer-image {
            min-height: 250px;
          }
          .offer-content {
            padding: 32px 24px;
          }
          .offers-carousel-wrapper {
            padding: 0 20px;
          }
          .offer-arrow {
            display: none;
          }
        }
      `}</style>

      <div className="offers-header">
        <span className="offers-label">SPECIAL OFFERS</span>
        <h2 className="offers-title">
          HANDPICKED OFFERS FOR <strong>YOUR DREAM STAY</strong>
        </h2>
      </div>

      <div className="offers-carousel-wrapper">
        <button className="offer-arrow offer-arrow-left" onClick={prev}>&#8592;</button>
        
        <div className="offers-track" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
          {OFFERS.map((offer) => (
            <div className="offer-card" key={offer.id}>
              <div className="offer-image">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="offer-content">
                <span className="offer-tag">{offer.tag}</span>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-desc">{offer.description}</p>
                <Link href="/contact" className="offer-btn">
                  RESERVE NOW <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className="offer-arrow offer-arrow-right" onClick={next}>&#8594;</button>
      </div>
    </section>
  );
}
