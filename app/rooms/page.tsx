import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Users, Maximize2, BedDouble, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';
import SecondaryNav from '@/components/sections/SecondaryNav';
import RoomsGrid from '@/components/sections/RoomsGrid';
import DiningPreview from '@/components/sections/DiningPreview';
import AttractionsSection from '@/components/sections/AttractionsSection';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Hotel Winway Indore',
  description:
    'Standard Room, Deluxe, Junior Suite and Presidential Suite at Hotel Winway Indore. Thoughtfully designed rooms with modern amenities.',
  alternates: { canonical: 'https://www.hotelwinway.com/rooms' },
  openGraph: {
    title: 'Rooms & Suites | Hotel Winway Indore',
    description: 'Standard Room, Deluxe, Junior Suite and Presidential Suite at Hotel Winway Indore.',
    images: [{ url: '/images/rooms/presidential-suite/ps-1.jpeg' }],
  },
};



export default function RoomsPage() {
  return (
    <>
      <style>{`
        .rooms-page-section {
          padding: 80px 0;
          background-color: #F8F7F5;
        }

        .intro-heading-wrapper {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 20px;
        }

        .intro-heading {
          font-family: 'Libre Baskerville', serif;
          font-size: 32px;
          color: #c4a47c;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .intro-heading strong {
          color: #4a3320;
          font-weight: 700;
        }

        .intro-subdesc {
          max-width: 800px;
          margin: 0 auto;
          color: #57585B;
          font-size: 16px;
          line-height: 1.8;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 0 60px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .room-card-page {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          border: 1px solid #eaeaea;
        }

        .room-img-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .room-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .room-card-page:hover .room-img-wrapper img {
          transform: scale(1.05);
        }

        .gallery-icon-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a1a1a;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          border: none;
          cursor: pointer;
        }

        .room-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .room-name-page {
          font-weight: 700;
          font-size: 20px;
          color: #1a1a1a;
          margin-bottom: 12px;
          font-family: 'Lato', sans-serif;
        }

        .room-desc-page {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          color: #b8935a;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
        }

        .highlights-label {
          font-size: 11px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 16px;
          margin: 12px 0 24px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #555;
        }

        .highlight-icon {
          color: #b8935a;
          flex-shrink: 0;
        }

        .price-section {
          margin-top: auto;
          margin-bottom: 16px;
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
        }

        .member-rate-label {
          font-size: 11px;
          color: #888;
          display: block;
          margin-bottom: 4px;
        }

        .price-amount {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          display: inline-block;
          margin-right: 6px;
        }

        .per-night {
          font-size: 11px;
          color: #888;
        }

        .room-card-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-enquire {
          background: #2c2c2c;
          color: #fff;
          padding: 12px 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          border-radius: 0;
          cursor: pointer;
          transition: background 0.3s;
          text-decoration: none;
        }

        .btn-enquire:hover {
          background: #b8935a;
        }

        .btn-room-details {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: underline;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s;
        }

        .btn-room-details:hover {
          color: #b8935a;
        }

        @media (max-width: 1024px) {
          .rooms-grid { grid-template-columns: repeat(2, 1fr); padding: 0 40px; }
        }
        @media (max-width: 640px) {
          .rooms-grid { grid-template-columns: 1fr; padding: 0 20px; }
          .intro-heading { font-size: 24px; }
        }
      `}</style>

      <HeroSection
        title="Rooms & Suites"
        subtitle="An Experience of Comfort, Style and Hospitality"
        imageSrc="/images/rooms/presidential-suite/ps-1.jpeg"
        imageAlt="Hotel Winway Indore — Luxury Rooms and Suites"
      />

      <SecondaryNav />

      <section className="rooms-page-section">
        <div className="intro-heading-wrapper">
          <h1 className="intro-heading">
            AN EXPERIENCE OF <strong>COMFORT, STYLE AND HOSPITALITY</strong>
          </h1>
          <p className="intro-subdesc">
            Designed to offer a perfect balance of comfort and sophistication, the rooms
            and suites at Hotel Winway provide a welcoming retreat in the heart of Indore
            city. Thoughtfully appointed interiors, contemporary amenities and elegant
            furnishings create an atmosphere that is both relaxing and refined.
          </p>
        </div>

          <RoomsGrid />
      </section>

      <DiningPreview />
      <AttractionsSection />

      <ContactCTA />
    </>
  );
}
