'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const venues = [
  {
    id: 'tiffin',
    name: 'Tiffin',
    tagline: 'HOME STYLE HOSPITALITY',
    shortDesc: 'Inspired by Mumbai\'s iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals.',
    image: '/images/dining/tiffin/tiffin-3.jpeg',
    fullContent: {
      cuisine: 'Multi cuisine',
      timings: '10:00am to 10:00pm',
      reserve: '97524-11003',
      total: '₹1,500 for two',
      description: "Inspired by Mumbai's iconic dabbawala culture, Tiffin celebrates the warmth of home-style hospitality and the joy of shared meals. Bringing together authentic original flavours, attentive service and a welcoming ambience, the restaurant offers a dining experience that is both comforting and memorable, where every meal is served with care and every guest is welcomed like family."
    }
  },
  {
    id: 'the-deck',
    name: 'The Deck',
    tagline: 'ELEVATED DINING',
    shortDesc: 'Escape to an elevated dining experience at The Deck — the perfect setting for birthdays, anniversaries and corporate gatherings.',
    image: '/images/dining/the-deck/deck-2.jpeg',
    fullContent: {
      cuisine: 'Multi cuisine',
      timings: '24/7 restaurant',
      reserve: '97524-11003',
      total: '₹1,500 for two',
      description: "Escape to an elevated dining experience at The Deck, delightful cuisine, set the stage for birthdays, anniversaries and corporate parties for memorable moments. Whether gathering with loved ones or enjoying a quiet evening, every visit is complemented by warm hospitality, flavourful dishes and a setting designed for connection and celebration."
    }
  },
  {
    id: 'alfresco',
    name: 'Alfresco',
    tagline: 'OPEN SKY DINING',
    shortDesc: 'Set amidst a refreshing outdoor setting, Alfresco offers a relaxed dining experience where nature, flavour and hospitality come together.',
    image: '/images/dining/alfresco/alfresco-card.jpeg',
    fullContent: {
      cuisine: null,
      timings: null,
      reserve: null,
      total: null,
      description: "Set amidst a refreshing outdoor setting, Alfresco offers a relaxed dining experience where nature, flavour and hospitality come together. Perfect for casual gatherings and leisurely meals, it provides a welcoming atmosphere to enjoy great food and memorable moments under the open sky."
    }
  },
];

export default function DiningPreview() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <>
      <style>{`
        .dining-section {
          font-family: 'Lato', sans-serif;
        }

        .dining-header-wrap {
          background: #2a2a2a;
          padding: 80px 24px 60px 24px;
          text-align: center;
        }

        .dining-label {
          color: #a67c5b;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 16px;
        }

        .dining-title {
          font-size: 32px;
          letter-spacing: 0.1em;
          font-weight: 300;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 32px;
        }

        .dining-title strong {
          color: #B8965A;
          font-weight: 700;
        }

        .dining-intro-text {
          max-width: 800px;
          margin: 0 auto;
          color: #dcdcdc;
          font-size: 16px;
          line-height: 1.8;
          text-align: center;
        }

        .dining-intro-text p {
          margin-bottom: 16px;
        }
        .dining-intro-text p:last-child {
          margin-bottom: 0;
        }

        .dining-cards-wrap {
          background: #f5f0e8;
          position: relative;
          padding: 60px 40px;
        }

        .pattern-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23e6dac3' fill-opacity='0.4'%3E%3Cpath d='M50 0l50 50-50 50L0 50z'/%3E%3Cpath d='M50 15l35 35-35 35-35-35z' fill='%23f5f0e8'/%3E%3Ccircle cx='50' cy='50' r='12'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 100px 100px;
          pointer-events: none;
          z-index: 0;
        }

        .dining-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1380px;
          width: calc(100% - 80px);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          align-items: flex-start;
          padding: 0;
        }

        .dining-card {
          background: #ffffff;
          border: none;
          box-shadow: none;
          border-radius: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .dining-card-img-wrap {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .dining-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .dining-card-tag {
          position: absolute;
          top: 14px;
          right: 0px;
          left: auto;
          width: auto;
          background: #222222;
          color: #ffffff;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 7px 14px 7px 14px;
          border-radius: 0;
          line-height: 1;
          white-space: nowrap;
          z-index: 2;
        }

        .dining-card-content {
          background: #ffffff;
          padding: 24px 22px 22px 22px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          transition: background-color 0.3s ease;
        }

        .dining-card-name {
          font-size: 21px;
          font-weight: 700;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 10px 0;
          line-height: 1.2;
          font-family: serif;
          transition: color 0.3s ease;
        }

        .dining-card-desc {
          font-size: 13.5px;
          color: #555555;
          line-height: 1.7;
          margin: 0 0 20px 0;
          flex-grow: 1;
          transition: color 0.3s ease;
        }

        .dining-card-buttons {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: auto;
        }

        .btn-view-more {
          background: #222222;
          color: #ffffff;
          border: none;
          padding: 12px 22px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          border-radius: 0;
          transition: background 0.3s ease, color 0.3s ease;
          white-space: nowrap;
        }

        .btn-read-more {
          background: transparent;
          color: #1a1a1a;
          border: none;
          padding: 0;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        /* Expanded panel */
        .expanded-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
        }

        .expanded-panel.open {
          max-height: 1000px;
        }

        .expanded-panel-inner {
          margin-top: 20px;
          background: #f9f5f0;
          padding: 20px;
          border-top: 2px solid #8B5E3C;
          font-size: 13px;
          line-height: 1.7;
          color: #333;
        }

        .expanded-info-row {
          margin-bottom: 8px;
        }

        .expanded-info-row strong {
          text-transform: uppercase;
          font-weight: 700;
          color: #1a1a1a;
          margin-right: 4px;
        }

        .expanded-full-desc {
          margin-top: 12px;
          margin-bottom: 20px;
          color: #555;
        }

        .btn-enquire-card {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: white;
          background: #2d2d2d;
          border: none;
          padding: 11px 20px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .btn-enquire-card:hover {
          background: #1a1a1a;
        }

        /* Hover Effect */
        .dining-card:hover .dining-card-content {
          background: #8B5E3C;
        }

        .dining-card:hover .dining-card-name {
          color: white;
        }

        .dining-card:hover .dining-card-desc {
          color: rgba(255, 255, 255, 0.85);
        }

        .dining-card:hover .btn-view-more {
          background: white;
          color: #8B5E3C;
        }

        .dining-card:hover .btn-read-more {
          color: white;
          text-decoration-color: white;
        }

        .dining-footer {
          text-align: center;
          margin-top: 60px;
          position: relative;
          z-index: 1;
        }

        .btn-explore {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #fff;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          padding: 14px 32px;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.3s, color 0.3s;
          display: inline-block;
        }

        .btn-explore:hover {
          background: #B8965A;
          border-color: #B8965A;
        }

        @media (max-width: 900px) {
          .dining-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
          }
          .dining-cards-wrap {
            padding: 40px 20px;
          }
        }
      `}</style>

      <section id="dining" className="dining-section">
        
        {/* TOP DARK SECTION */}
        <div className="dining-header-wrap">
          <span className="dining-label">Culinary Experiences</span>
          <h2 className="dining-title">
            Indulge in <strong>Gourmet Dining</strong>
          </h2>
          <div className="dining-intro-text">
            <p>
              At Hotel Winway, dining is more than just a meal — it's an experience crafted around flavour, hospitality and memorable moments. From authentic Indian favourites and regional Indore specialties to carefully curated cuisine, every dish is prepared with passion and served with warmth.
            </p>
            <p>
              Whether you're enjoying a leisurely breakfast at Tiffin, dining at Alfresco, gathering with friends and family at The Deck, or hosting a special celebration, our dining venues offer the perfect setting for every occasion. Thoughtful service, inviting ambience and exceptional culinary experiences come together to create moments worth savouring.
            </p>
          </div>
        </div>

        {/* BOTTOM CARDS SECTION */}
        <div className="dining-cards-wrap">
          <div className="pattern-overlay"></div>
          
          <div className="dining-grid">
            {venues.map((venue) => {
              const isExpanded = expandedId === venue.id;
              
              return (
                <div className="dining-card" key={venue.id}>
                  <div className="dining-card-img-wrap">
                    <img src={venue.image} alt={venue.name} className="dining-card-img" />
                    <span className="dining-card-tag">{venue.tagline}</span>
                  </div>
                  
                  <div className="dining-card-content">
                    <h3 className="dining-card-name">{venue.name}</h3>
                    
                    {!isExpanded && (
                      <p className="dining-card-desc">{venue.shortDesc}</p>
                    )}
                    
                    <div className="dining-card-buttons">
                      <button 
                        suppressHydrationWarning 
                        className="btn-view-more"
                        onClick={(e) => toggleExpand(venue.id, e)}
                      >
                        {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
                      </button>
                      <button 
                        suppressHydrationWarning 
                        className="btn-read-more"
                      >
                        READ MORE &gt;
                      </button>
                    </div>

                    {/* EXPANDED PANEL INLINE */}
                    <div className={`expanded-panel ${isExpanded ? 'open' : ''}`}>
                      <div className="expanded-panel-inner">
                        {venue.fullContent.cuisine && (
                          <div className="expanded-info-row">
                            <strong>Cuisine:</strong> {venue.fullContent.cuisine}
                          </div>
                        )}
                        
                        {venue.fullContent.timings && (
                          <div className="expanded-info-row">
                            <strong>Timings:</strong> {venue.fullContent.timings}
                          </div>
                        )}

                        {venue.fullContent.reserve && (
                          <div className="expanded-info-row">
                            <strong>Reserve a table:</strong> {venue.fullContent.reserve}
                          </div>
                        )}

                        {venue.fullContent.total && (
                          <div className="expanded-info-row">
                            <strong>Cost for two:</strong> {venue.fullContent.total}
                          </div>
                        )}

                        <div className="expanded-full-desc">
                          {venue.fullContent.description}
                        </div>

                        <a suppressHydrationWarning href="tel:9752411003" className="btn-enquire-card">
                          ENQUIRE NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="dining-footer">
            <Link href="/dining" className="btn-explore">
              Explore All Dining
            </Link>
          </div>
        </div>

      </section>
    </>
  );
}
