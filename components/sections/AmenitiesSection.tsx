'use client';
import { useState, useRef, useEffect } from 'react';

const ExpandableList = ({ items, showCount = 4 }: { items: string[], showCount?: number }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setScrollHeight(contentRef.current.scrollHeight);
    }
  }, [expanded]);
  
  const visibleItems = items.slice(0, showCount);
  const hiddenItems = items.slice(showCount);
  const hasHidden = hiddenItems.length > 0;

  return (
    <div className="amenities-list-wrapper">
      <ul className="amenities-list">
        {visibleItems.map((item, i) => (
          <li key={i}><span className="bullet">•</span> {item}</li>
        ))}
      </ul>
      
      {hasHidden && (
        <div 
          className="amenities-hidden-wrapper" 
          style={{ 
            maxHeight: expanded ? `${scrollHeight || 500}px` : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease'
          }}
        >
          <ul className="amenities-list" ref={contentRef}>
            {hiddenItems.map((item, i) => (
              <li key={i}><span className="bullet">•</span> {item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {hasHidden && (
        <div 
          className="toggle-more" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '...less' : '...more'}
        </div>
      )}
    </div>
  );
};

export default function AmenitiesSection() {
  const hotelItems = [
    '24-Hour Front Desk', 'In-Room Dining', 'Concierge Services', 'Multilingual Staff',
    'Parking (on-site)', 'High-speed WiFi', 'Meeting Rooms', 'Laundry', 'EV Charging Stations', 'Airport Transfers (Charges Applied)'
  ];
  
  const wellnessItems = [
    'Fitness Centre', 'Yoga on Request', 'Doctor on Call'
  ];

  const diningItems = [
    'Tiffin (Multi Cuisine)', 'The Deck (24/7)', 'Al Fresco (Open Air)', 'Cafe', 'Room Service'
  ];

  const roomItems = [
    'Iron and Ironing Board', 'Non-smoking Rooms', 'Hair Dryer', 'Electronic Safe',
    'Flat-screen TV', 'Tea-Coffee Maker', 'Mini Refrigerator', 'Premium Toiletries', 'Minibar', 'Shower Cubicle', 'Free Wi-Fi'
  ];

  return (
    <>
      <style>{`
        .amenities-section {
          background: #fff;
          padding: 40px 0 100px 0;
          font-family: 'Lato', sans-serif;
        }

        .amenities-heading {
          text-align: center;
          font-family: 'Lato', sans-serif;
          font-size: 22px;
          letter-spacing: 5px;
          margin-bottom: 70px;
          text-transform: uppercase;
        }

        .amenities-heading .light-gold {
          color: #c9a05b;
          font-weight: 400;
        }

        .amenities-heading .dark-gold {
          color: #8b6014;
          font-weight: 700;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        /* Center vertical divider */
        .amenities-grid::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: #b0b0b0;
          transform: translateX(-50%);
        }

        .left-column {
          padding: 50px 60px 50px 120px;
        }

        .right-column {
          padding: 50px 120px 50px 60px;
        }

        .category-divider {
          border: none;
          border-top: 1px solid #b0b0b0;
          margin: 40px 0;
        }

        .category-block {
          /* padding-top is not added here to avoid doubling up with the divider margin */
        }

        .category-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .category-icon {
          width: 24px;
          height: 24px;
          color: #b8935a;
        }

        .category-title {
          font-size: 20px;
          font-weight: 600;
          color: #222;
          margin: 0;
        }

        .amenities-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .amenities-list li {
          font-size: 15px;
          color: #555;
          line-height: 2.2;
          display: flex;
          align-items: flex-start;
        }

        .bullet {
          color: #b8935a;
          margin-right: 8px;
        }

        .toggle-more {
          color: #888;
          font-size: 14px;
          font-style: italic;
          cursor: pointer;
          margin-top: 12px;
          display: inline-block;
          transition: color 0.2s;
        }

        .toggle-more:hover {
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .left-column {
            padding: 24px 32px;
          }
          .right-column {
            padding: 24px 32px;
          }
        }

        @media (max-width: 768px) {
          .amenities-grid {
            grid-template-columns: 1fr;
          }
          
          /* Remove vertical divider */
          .amenities-grid::after {
            display: none;
          }

          .left-column {
            padding: 20px 24px;
            border-bottom: 1px solid #b0b0b0;
          }
          
          .right-column {
            padding: 20px 24px;
          }
        }
      `}</style>

      <section className="amenities-section" id="amenities">
        <h2 className="amenities-heading">
          <span className="light-gold">AMENITIES & </span>
          <span className="dark-gold">FACILITIES</span>
        </h2>

        <div className="amenities-grid">
          
          {/* LEFT COLUMN */}
          <div className="left-column">
            <div className="category-block">
              <div className="category-heading">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M13 21V3l6 4v14"/><path d="M9 11h2"/><path d="M9 15h2"/>
                </svg>
                <h3 className="category-title">Hotel</h3>
              </div>
              <ExpandableList items={hotelItems} showCount={4} />
            </div>

            <hr className="category-divider" />

            <div className="category-block">
              <div className="category-heading">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h3 className="category-title">Wellness</h3>
              </div>
              <ExpandableList items={wellnessItems} showCount={3} />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">
            <div className="category-block">
              <div className="category-heading">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
                <h3 className="category-title">Dining</h3>
              </div>
              <ExpandableList items={diningItems} showCount={4} />
            </div>

            <hr className="category-divider" />

            <div className="category-block">
              <div className="category-heading">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
                </svg>
                <h3 className="category-title">Room</h3>
              </div>
              <ExpandableList items={roomItems} showCount={4} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
