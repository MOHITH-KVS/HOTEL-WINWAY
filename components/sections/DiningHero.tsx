import Image from 'next/image';
import { Clock, MapPin, Phone, Utensils } from 'lucide-react';

interface DiningHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cuisine: string;
  timing: string;
  location: string;
  reservationNum: string;
}

export default function DiningHero({ title, description, imageSrc, imageAlt, cuisine, timing, location, reservationNum }: DiningHeroProps) {
  return (
    <div className="dining-hero">
      <style>{`
        .dining-hero {
          position: relative;
          height: 85vh;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .dining-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .dining-hero-bg img {
          object-fit: cover;
        }

        .dining-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }

        .dining-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 0 5% 40px 5%;
          color: #fff;
        }

        .dining-hero-label {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .dining-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(48px, 8vw, 90px);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #ffffff;
          text-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }

        .dining-hero-desc {
          font-size: 16px;
          line-height: 1.8;
          color: #ffffff;
          max-width: 600px;
          margin-bottom: 40px;
        }

        .dining-quick-strip {
          font-family: var(--font-sans);
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e0e0e0;
          margin-bottom: 40px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .dining-quick-strip span.separator {
          color: #C9A030;
        }

        .dining-hero-btn {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 16px 32px;
          background-color: transparent;
          color: #fff;
          border: 1px solid #C9A030;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .dining-hero-btn:hover {
          background-color: #C9A030;
          color: #fff;
        }

        @media (max-width: 600px) {
          .dining-quick-strip {
            gap: 10px;
            font-size: 11px;
          }
        }
      `}</style>
      
      <div className="dining-hero-bg">
        <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" priority />
      </div>
      <div className="dining-hero-overlay"></div>

      <div className="dining-hero-content">
        <span className="dining-hero-label">DINING EXPERIENCE</span>
        <h1 className="dining-hero-title">{title}</h1>
        <p className="dining-hero-desc">{description}</p>

        <div className="dining-quick-strip">
          <span>{cuisine}</span>
          <span className="separator">|</span>
          <span>{timing}</span>
          <span className="separator">|</span>
          <span>{reservationNum}</span>
        </div>

        <a href="/contact" className="dining-hero-btn">RESERVE TABLE</a>
      </div>
    </div>
  );
}
