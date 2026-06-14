'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Home, Search } from 'lucide-react';

export default function NotFound() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [roomText, setRoomText] = useState('ROOM');
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Typewriter sequence: ROOM -> 4 -> 40 -> 404
    const sequence = [
      { text: 'ROOM', delay: 400 },
      { text: '4', delay: 1000 },
      { text: '40', delay: 1200 },
      { text: '404', delay: 1400 }
    ];

    let timeouts: NodeJS.Timeout[] = [];
    
    sequence.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setRoomText(text);
      }, delay);
      timeouts.push(timeout);
    });

    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = '/';
    }
  }, [countdown]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    // Max tilt is 4deg
    setTilt({
      x: -y * 4,
      y: x * 4
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      className={'min-h-screen relative flex flex-col items-center justify-center overflow-x-hidden transition-opacity duration-1000 ' + (mounted ? 'opacity-100' : 'opacity-0')}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ wordBreak: 'break-word', overflowX: 'hidden' }}
    >
      <style>{`
        /* GENERAL FIXES & ANIMATIONS */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes kenburnsMobile {
          0% { transform: scale(1); }
          100% { transform: scale(1.04); }
        }

        .bg-layer {
          position: absolute;
          inset: -20px;
          background-image: url('/images/dining/the-deck/deck-1.jpeg');
          background-size: cover;
          background-position: center center;
          z-index: 0;
          filter: blur(${mounted ? '0px' : '10px'});
          transition: filter 1.5s ease;
          animation: kenburns 20s ease-out forwards;
          height: 100vh;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%);
          z-index: 1;
        }

        .content-layer {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .key-card-wrapper {
          perspective: 1000px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .key-card {
          background: rgba(30, 30, 30, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(201, 160, 48, 0.4);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          animation: float 5s ease-in-out infinite;
          transition: transform 0.1s ease-out, box-shadow 0.3s ease;
        }

        .key-card:hover {
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(201, 160, 48, 0.15), inset 0 1px 0 rgba(255,255,255,0.2);
          border-color: rgba(201, 160, 48, 0.7);
        }

        .key-card::before {
          content: '';
          position: absolute;
          border-radius: 4px;
          background: linear-gradient(135deg, #d4af37, #aa771c, #f3e5ab, #d4af37);
          border: 1px solid rgba(0,0,0,0.2);
          opacity: 0.8;
        }

        .card-brand {
          font-family: var(--font-sans);
          font-weight: 700;
          color: #C9A030;
          text-transform: uppercase;
        }

        .card-number {
          font-family: var(--font-serif);
          font-weight: 300;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .card-message {
          color: #e0e0e0;
        }

        .card-magnetic-strip {
          position: absolute;
          bottom: 30px;
          left: 0;
          width: 100%;
          height: 40px;
          background: #111;
          opacity: 0.8;
        }

        .countdown-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0,0,0,0.3);
        }
        
        .countdown-text {
          color: #C9A030;
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .progress-bar-bg {
          width: 100%;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progress-bar-fill {
          background: #C9A030;
          transition: width 1s linear;
        }

        .buttons-grid {
          display: flex;
          width: 100%;
        }

        .btn-luxury {
          display: flex;
          align-items: center;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          min-height: 44px; /* Minimum touch target */
        }

        .btn-luxury::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }

        .btn-luxury:hover::after {
          left: 200%;
        }

        .btn-gold {
          background: #C9A030;
          color: #ffffff;
          border: 1px solid #C9A030;
        }
        .btn-gold:hover {
          background: #b58d26;
          border-color: #b58d26;
          box-shadow: 0 10px 20px rgba(201, 160, 48, 0.2);
        }

        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .btn-outline:hover {
          border-color: #C9A030;
          color: #C9A030;
          background: rgba(201, 160, 48, 0.05);
        }

        .btn-minimal {
          background: transparent;
          color: #999;
          border: none;
        }
        .btn-minimal:hover {
          color: #fff;
        }

        .destinations-wrapper {
          width: 100%;
          max-width: 1000px;
        }

        .destinations-title {
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
        }

        .dest-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          color: #fff;
          transition: all 0.3s ease;
          position: relative;
        }

        .dest-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #C9A030;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .dest-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .dest-card:hover::after {
          transform: scaleX(1);
        }

        .dest-label {
          text-transform: uppercase;
        }

        /* -----------------------
           RESPONSIVE STYLES
           ----------------------- */

        /* DESKTOP BASE (1025px - 1440px) */
        .content-layer {
          padding: 40px 20px;
        }
        .key-card-wrapper {
          margin-bottom: 40px;
        }
        .key-card {
          width: 100%;
          max-width: 420px;
          height: 260px;
          padding: 32px;
          border-radius: 16px;
        }
        .key-card::before {
          top: 32px;
          right: 32px;
          width: 44px;
          height: 32px;
        }
        .card-brand {
          font-size: 11px;
          letter-spacing: 0.3em;
        }
        .card-number {
          font-size: 56px;
          letter-spacing: 2px;
        }
        .card-message {
          font-size: 13px;
          line-height: 1.6;
          max-width: 85%;
        }
        .countdown-wrap {
          padding: 8px 16px;
        }
        .countdown-text { font-size: 11px; }
        .progress-bar-bg { height: 2px; }

        .buttons-grid {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 60px;
        }
        .btn-luxury {
          padding: 16px 32px;
          font-size: 12px;
          gap: 10px;
        }

        .destinations-title {
          font-size: 11px;
          letter-spacing: 0.2em;
          margin-bottom: 24px;
          text-align: center;
        }
        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .dest-card {
          padding: 24px;
        }
        .dest-label {
          font-size: 13px;
          letter-spacing: 0.1em;
        }
        .dest-card-arrow { width: 16px; height: 16px; }

        /* LARGE SCREENS (>1440px) */
        @media (min-width: 1441px) {
          .key-card {
            max-width: 520px;
            height: 320px;
            padding: 48px 44px;
          }
          .card-number {
            font-size: 96px;
          }
          .btn-luxury {
            padding: 16px 32px;
          }
          .destinations-grid {
            gap: 24px;
          }
        }

        /* TABLET (640px - 1024px) */
        @media (max-width: 1024px) and (min-width: 640px) {
          .key-card {
            max-width: 420px;
            padding: 32px 28px;
          }
          .card-number {
            font-size: clamp(60px, 10vw, 80px);
          }
          .buttons-grid {
            gap: 12px;
          }
          .btn-luxury {
            padding: 12px 20px;
            font-size: 11px;
          }
          .destinations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* MOBILE (<640px) */
        @media (max-width: 639px) {
          .bg-layer {
            animation: kenburnsMobile 20s ease-out forwards;
          }
          
          .content-layer {
            padding: 0 16px 32px 16px;
            justify-content: center;
          }

          .key-card-wrapper {
            margin-bottom: 32px;
          }

          .key-card {
            width: calc(100% - 32px);
            max-width: 100%;
            margin: 0 16px;
            padding: 24px 20px;
            border-radius: 8px;
            height: auto;
            min-height: 240px;
          }

          .key-card::before {
            top: 24px;
            right: 20px;
            width: 38px;
            height: 28px;
          }

          .card-brand {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .card-number {
            font-size: clamp(48px, 15vw, 80px);
            letter-spacing: 2px;
            margin-bottom: 4px;
            margin-top: 24px;
          }

          .card-message {
            font-size: 13px;
            line-height: 1.6;
            max-width: 100%;
            margin-bottom: 48px;
          }

          .countdown-wrap {
            padding: 12px 20px;
          }

          .buttons-grid {
            flex-direction: column;
            gap: 8px;
            margin-bottom: 40px;
          }

          .btn-luxury {
            width: calc(100% - 32px);
            margin: 0 16px;
            padding: 14px 20px;
            font-size: 12px;
            justify-content: center;
            text-align: center;
          }

          .destinations-title {
            font-size: 10px;
            letter-spacing: 2px;
            margin-bottom: 12px;
            text-align: left;
            margin-left: 16px;
          }

          .destinations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            width: calc(100% - 32px);
            margin: 0 16px;
          }

          .dest-card {
            padding: 14px 12px;
          }

          .dest-label {
            font-size: 11px;
            letter-spacing: 1px;
          }

          .dest-card-arrow {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>

      <div className="bg-layer" />
      <div className="bg-overlay" />

      <div className="content-layer" ref={containerRef}>
        
        {/* PARALLAX KEY CARD */}
        <div className="key-card-wrapper">
          <div 
            className="key-card"
            style={{
              transform: 'rotateX(' + tilt.x + 'deg) rotateY(' + tilt.y + 'deg)'
            }}
          >
            <div className="card-brand">Hotel Winway</div>
            
            <div>
              <div className="card-number">{roomText}</div>
              <p className="card-message">
                It seems you&apos;ve been assigned to a room that doesn&apos;t exist. Let&apos;s guide you back to your stay.
              </p>
            </div>

            <div className="card-magnetic-strip"></div>
            
            {/* Countdown Text + Progress Bar */}
            <div className="countdown-wrap">
              <div className="countdown-text">Returning to Lobby in {countdown}s</div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: (countdown / 10) * 100 + '%', height: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="buttons-grid">
          <Link href="/" className="btn-luxury btn-gold">
            <Home size={16} />
            Back to Homepage
          </Link>
          <Link href="/rooms" className="btn-luxury btn-outline">
            <Search size={16} />
            Explore Rooms
          </Link>
          <Link href="/contact" className="btn-luxury btn-minimal">
            <Phone size={16} />
            Contact Us
          </Link>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="destinations-wrapper">
          <h3 className="destinations-title">Popular Destinations</h3>
          <div className="destinations-grid">
            <Link href="/rooms" className="dest-card">
              <span className="dest-label">Rooms & Suites</span>
              <ArrowRight className="dest-card-arrow text-[#C9A030]" />
            </Link>
            <Link href="/dining" className="dest-card">
              <span className="dest-label">Dining</span>
              <ArrowRight className="dest-card-arrow text-[#C9A030]" />
            </Link>
            <Link href="/gallery" className="dest-card">
              <span className="dest-label">Gallery</span>
              <ArrowRight className="dest-card-arrow text-[#C9A030]" />
            </Link>
            <Link href="/local-attractions" className="dest-card">
              <span className="dest-label">Attractions</span>
              <ArrowRight className="dest-card-arrow text-[#C9A030]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
