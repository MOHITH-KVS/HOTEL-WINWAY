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
      <section style={{ padding: '60px 0', background: '#FFFFFF' }} id="attractions">

        {/* HEADING */}
        <div style={{ textAlign: 'center', padding: '0 20px', marginBottom: '40px' }}>
          <span style={{ color: '#b8935a', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '8px', fontWeight: 500 }}>Explore Indore</span>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '26px', letterSpacing: '0.25em', color: '#1a1a1a', fontWeight: 300, textTransform: 'uppercase', marginBottom: '20px' }}>
            LOCAL <strong style={{ fontWeight: 800, color: '#B8965A' }}>ATTRACTIONS</strong>
          </h2>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div style={{ position: 'relative', width: '100%' }}>

          {/* PREV BUTTON */}
          <button className="carousel-arrow" onClick={() => {
            if (carouselRef.current) {
              carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
            }
          }} style={{
            position: 'absolute',
            left: '12px',
            top: '35%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid #e0e0e0',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* SCROLLABLE TRACK */}
          <div ref={carouselRef} className="attractions-track" style={{
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            gap: '0',
            width: '100%',
          }}>

            {attractions.map((item) => (
              <div key={item.id} className="attraction-item" style={{
                scrollSnapAlign: 'start',
                flexShrink: 0,
                width: '100%',        /* ONE card per view on mobile */
                padding: '0 16px',    /* Side padding so card doesnt touch edges */
                boxSizing: 'border-box',
              }}>
                {/* CARD CONTENT */}
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '0',
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0',
                  width: '100%',
                }}>
                  {/* image */}
                  <img src={item.image} alt={item.name}
                    style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
                  {/* text content */}
                  <div style={{ padding: '20px 16px 24px' }}>
                    <h3 style={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a1a1a', marginBottom: '10px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontFamily: 'Lato', fontSize: '13px', color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>
                      {item.teaser}
                    </p>
                    <p style={{ fontFamily: 'Lato', fontSize: '12px', color: '#888', marginBottom: '16px' }}>
                      <span style={{ color: '#b8935a' }}>•</span> {item.distance}
                    </p>
                    {/* CTAs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                      <button onClick={() => setActiveModal(item)} style={{
                        fontFamily: 'Lato', fontSize: '11px', fontWeight: '700',
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        color: '#FFFFFF', background: '#B8965A',
                        padding: '12px 20px', border: 'none', cursor: 'pointer', display: 'inline-block'
                      }}>VIEW DETAILS</button>
                      <a href="#contact" style={{
                        fontFamily: 'Lato', fontSize: '11px', fontWeight: '600',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: '#B8965A', textDecoration: 'underline'
                      }}>ENQUIRE NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* NEXT BUTTON */}
          <button className="carousel-arrow" onClick={() => {
            if (carouselRef.current) {
              carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
            }
          }} style={{
            position: 'absolute',
            right: '12px',
            top: '35%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid #e0e0e0',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

        </div>

        {/* HIDE SCROLLBAR CSS */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
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
