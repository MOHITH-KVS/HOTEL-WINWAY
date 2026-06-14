'use client';

import { useRef, useEffect, useState } from 'react';

const attractions = [
  {
    id: 'lal-bagh-palace',
    name: 'Lal Bagh Palace',
    distance: '4.7 KM',
    badge: 'HERITAGE',
    bestTime: 'Throughout the year',
    duration: '1 hour',
    teaser: "Indore’s most impressive neo-classical building and former Holkar residence.",
    description: (
      <>
        <p style={{ marginBottom: '16px' }}>Indore’s most impressive neo-classical building, former residence of the Holkars until 1978, now converted into a museum displaying artifacts and a rare coin collection.</p>
        <p style={{ marginBottom: '16px' }}>The palace gates are replicas of Buckingham Palace gates in London.</p>
        <p style={{ marginBottom: '8px' }}>The interiors feature:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Italian marble columns</li>
          <li>Grand chandeliers</li>
          <li>Persian carpets</li>
          <li>Flying nymph frescoes</li>
          <li>Belgium stained glass windows</li>
        </ul>
      </>
    ),
    image: '/images/attractions/attraction-8.avif',
  },
  {
    id: 'chappan-dukan',
    name: 'Chappan Dukan',
    distance: '2.8 KM',
    badge: 'MUST VISIT',
    bestTime: 'Evening',
    duration: '1 hour',
    teaser: "Indore’s famous open-air food hub offering authentic street food specialties.",
    description: (
      <>
        <p style={{ marginBottom: '16px' }}>Located in the upscale New Palasia area, Chappan Dukan (56 Shops) is an open-air food hub known for authentic and hygienic fast food. Popular specialties include Johnny’s hot dogs, khopra patties, sabudana khichdi and shikanji.</p>
      </>
    ),
    image: '/images/attractions/attraction-5.avif',
  },
  {
    id: 'rajwada-palace',
    name: 'Rajwada Palace',
    distance: '2.5 KM',
    badge: 'HERITAGE',
    bestTime: 'Throughout the year',
    duration: '45–60 mins',
    teaser: "Historic seven-storey palace showcasing Maratha, Mughal and French architectural influences.",
    description: (
      <>
        <p style={{ marginBottom: '16px' }}>Located in the heart of the city, Rajwada Palace is a seven-storey landmark built by Malhar Rao Holkar.</p>
        <p style={{ marginBottom: '8px' }}>The architecture combines:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Maratha influences</li>
          <li>Mughal influences</li>
          <li>French influences</li>
        </ul>
        <p style={{ marginBottom: '8px' }}>Visitors can explore:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Museum galleries</li>
          <li>Historic paintings</li>
          <li>Weapons</li>
          <li>Sculptures</li>
          <li>Holkar memorabilia</li>
          <li>Central garden</li>
        </ul>
      </>
    ),
    image: '/images/attractions/attraction-1.avif',
  },
  {
    id: 'sarafa-bazaar',
    name: 'Sarafa Bazaar',
    distance: '2.6 KM',
    badge: 'FOOD',
    bestTime: 'Night',
    duration: '1–2 hours',
    teaser: "Iconic night food market famous for bhutte ka kees, dahi bada, rabdi malpua and Indore street food culture.",
    description: (
      <>
        <p style={{ marginBottom: '16px' }}>Sarafa Bazaar transforms from a jewellery market during the day into one of Indore’s most famous vegetarian food streets between 9 PM and 2 AM.</p>
        <p style={{ marginBottom: '8px' }}>Popular dishes:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Dahi Bada</li>
          <li>Bhutte Ka Kees</li>
          <li>Rabdi Malpua</li>
          <li>Malai Kulfi</li>
        </ul>
      </>
    ),
    image: '/images/attractions/attraction-3.avif',
  },
];

export default function AttractionsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<typeof attractions[0] | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEsc);
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);



  return (
    <>
      <style>{`
        .local-attractions-section {
          background-color: #f2ece4;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23e6dac3' fill-opacity='0.4'%3E%3Cpath d='M50 0l50 50-50 50L0 50z'/%3E%3Cpath d='M50 15l35 35-35 35-35-35z' fill='%23f5f0e8'/%3E%3Ccircle cx='50' cy='50' r='12'/%3E%3C/g%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 300px 300px;
          padding: 60px 0;
          font-family: 'Lato', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .attr-header {
          text-align: center;
          margin-bottom: 24px;
          padding-bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .attr-label {
          color: #b8935a;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .attr-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 42px;
          font-weight: 800;
          text-transform: uppercase;
          color: #1a1a1a;
          letter-spacing: 4px;
          margin: 0 0 24px 0;
        }

        /* CAROUSEL WRAPPER */
        .attractions-carousel-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .attractions-carousel-track {
          display: flex;
          gap: 28px;
          padding: 20px 100px;
        }

        /* EXACT CARD STRUCTURE */
        .attraction-card {
          background: #ffffff;          /* white by default */
          border: 1.5px solid #c9c0b5;
          border-radius: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 16px;                /* this padding is KEY — brown shows around image on hover */
          gap: 14px;
          flex: 0 0 calc(40vw);
          position: relative;
          box-sizing: border-box;
          transition: background-color 0.35s ease, border-color 0.35s ease;
          cursor: pointer;
        }

        /* ========== HOVER STATE ========== */

        /* Entire card background turns brown — image padding area + content area all brown */
        .attraction-card:hover {
          background: #6b3f18;          /* whole card = brown */
          border-color: #6b3f18;
        }

        /* Subtle image zoom — image stays fully clear */
        .attraction-card:hover .card-image-wrapper img {
          transform: scale(1.04);
        }

        /* Text turns white */
        .attraction-card:hover .card-title {
          color: #ffffff;
        }

        .attraction-card:hover .card-description {
          color: #f0dfc8;
        }

        .attraction-card:hover .card-distance {
          color: #ddc9aa;
        }

        .attraction-card:hover .card-distance::before {
          color: #f5c97a;
        }

        /* VIEW DETAILS → white */
        .attraction-card:hover .btn-view-details {
          color: #ffffff;
          text-decoration-color: #ffffff;
        }

        /* ENQUIRE NOW inverts */
        .attraction-card:hover .btn-enquire-now {
          background: #ffffff;
          color: #6b3f18;
        }

        /* IMAGE — FLUSH TO TOP, NO GAP */
        .card-image-wrapper {
          width: 100%;
          height: 280px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }

        /* CATEGORY TAG — INSIDE image wrapper, top-right corner */
        .category-tag {
          position: absolute;
          top: 0;
          right: 0;
          background: #111;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 8px 14px;
          z-index: 2;
        }

        /* CONTENT BOX — tight padding, white, directly below image */
        .card-content {
          background: transparent;      /* TRANSPARENT — inherits card background */
          padding: 0;                   /* no extra padding — card handles it */
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: none;             /* no separate transition needed */
        }

        /* TITLE */
        .card-title {
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #111;
          margin: 0 0 10px 0;
          transition: color 0.35s ease;
        }

        /* DESCRIPTION */
        .card-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 14px 0;
          transition: color 0.35s ease;
        }

        /* DISTANCE */
        .card-distance {
          font-size: 13px;
          color: #888;
          margin: 0 0 18px 0;
          transition: color 0.35s ease;
        }
        .card-distance::before {
          content: "• ";
          color: #b8935a;
          transition: color 0.35s ease;
        }

        /* BUTTONS ROW */
        .card-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .btn-view-details {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.35s ease, text-decoration-color 0.35s ease;
        }

        .btn-enquire-now {
          background: #5c3d1e;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 13px 18px;
          border: none;
          border-radius: 0;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.35s ease, color 0.35s ease;
        }

        /* CAROUSEL CONTROLS */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          border: 1px solid #e0ddd8;
          cursor: pointer;
          font-size: 20px;
          color: #111;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .carousel-arrow:hover:not(:disabled) {
          background: #111;
          color: #ffffff;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }

        .carousel-arrow:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .carousel-arrow-left  { left: 24px; }
        .carousel-arrow-right { right: 24px; }

        /* --- Overlay Base --- */
        .attr-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vw;
        }

        /* --- Centered Modal Content --- */
        .attr-modal-content {
          background: #ffffff;
          position: relative;
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
        }

        .attr-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: #ffffff;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          color: #111;
          transition: transform 0.3s ease;
        }

        .attr-modal-close:hover {
          transform: scale(1.1);
        }

        .attr-modal-hero {
          width: 100%;
          height: 400px;
          position: relative;
        }

        .attr-modal-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .attr-modal-body {
          padding: 48px 60px;
        }

        .attr-modal-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 32px;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .attr-modal-desc {
          font-size: 16px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .attr-modal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
          border-top: 1px solid #e0ddd8;
          border-bottom: 1px solid #e0ddd8;
          padding: 32px 0;
        }

        .attr-modal-badge {
          display: flex;
          flex-direction: column;
        }

        .attr-badge-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #8B5E3C;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .attr-badge-value {
          font-size: 16px;
          font-weight: 500;
          color: #111;
        }

        .attr-modal-footer {
          background: #ffffff;
          padding: 24px 32px;
          border-left: 4px solid #8B5E3C;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }

        .attr-modal-footer p {
          font-size: 14.5px;
          color: #555;
          line-height: 1.6;
          margin: 0;
          font-style: italic;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .attraction-card { flex: 0 0 calc(60vw); }
          .attractions-carousel-track { padding: 20px 40px; }
        }
        
        @media (max-width: 768px) {
          .local-attractions-section { padding-left: 0 !important; padding-right: 0 !important; }
          .attractions-carousel-track { padding: 0 !important; gap: 0 !important; }
          .attraction-card { 
            flex: 0 0 100% !important; 
            width: 100% !important; 
            min-width: 100% !important; 
            margin: 0 !important;
            padding: 0 16px !important;
            box-sizing: border-box !important;
          }
          .carousel-arrow { display: none; }
          .attr-modal-body { padding: 32px 24px; }
          .attr-modal-grid { grid-template-columns: 1fr; gap: 20px; }
          .attr-modal-hero { height: 260px; }
        }
      `}</style>

      <section id="attractions" className="local-attractions-section">
        
        <div className="attr-header">
          <span className="attr-label">Explore Indore</span>
          <h2 className="attr-title">LOCAL ATTRACTIONS</h2>
        </div>

        <div className="attractions-carousel-wrapper">
          {/* PREV ARROW */}
          <button
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
            className="attractions-carousel-track"
            ref={carouselRef}
            style={{ 
              display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none', scrollbarWidth: 'none'
            }}
          >
            {attractions.map((attraction) => (
              <div className="attraction-card" key={attraction.id} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
                <div className="card-image-wrapper">
                  <img src={attraction.image} alt={attraction.name} />
                  {attraction.badge && <span className="category-tag">{attraction.badge}</span>}
                </div>
                
                <div className="card-content">
                  <h3 className="card-title">{attraction.name}</h3>
                  <p className="card-description">{attraction.teaser}</p>
                  
                  <div className="card-distance">{attraction.distance}</div>
                  
                  <div className="card-buttons">
                    <button 
                      className="btn-view-details"
                      onClick={() => setActiveModal(attraction)}
                      suppressHydrationWarning
                    >
                      View Details &#8594;
                    </button>
                    <a href="#contact" className="btn-enquire-now">
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NEXT ARROW */}
          <button
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

      {/* Centered Modal Overlay Implementation */}
      {activeModal && (
        <div 
          className="attr-modal-overlay" 
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="attr-modal-content" 
            onClick={e => e.stopPropagation()}
          >
            <button suppressHydrationWarning className="attr-modal-close" onClick={() => setActiveModal(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            <div className="attr-modal-hero">
              <img src={activeModal.image} alt={activeModal.name} />
            </div>

            <div className="attr-modal-body">
              <h3 className="attr-modal-title">{activeModal.name}</h3>
              <div className="attr-modal-desc">
                {activeModal.description}
              </div>

              <div className="attr-modal-grid">
                <div className="attr-modal-badge">
                  <span className="attr-badge-label">Distance</span>
                  <span className="attr-badge-value">{activeModal.distance}</span>
                </div>
                <div className="attr-modal-badge">
                  <span className="attr-badge-label">Best Time To Visit</span>
                  <span className="attr-badge-value">{activeModal.bestTime}</span>
                </div>
                <div className="attr-modal-badge">
                  <span className="attr-badge-label">Ideal Duration</span>
                  <span className="attr-badge-value">{activeModal.duration}</span>
                </div>
              </div>

              <div className="attr-modal-footer">
                <p>
                  <strong>Additional Information:</strong> For assistance with transportation and tour guide services, please reach out to the hotel concierge.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
