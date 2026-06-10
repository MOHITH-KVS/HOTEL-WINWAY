'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

const attractions = [
  {
    id: 'lal-bagh-palace',
    name: 'Lal Bagh Palace',
    distance: '4.7 km',
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
    distance: '2.8 km',
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
    distance: '2.5 km',
    badge: 'POPULAR',
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
    distance: '2.6 km',
    badge: 'LOCAL FAVORITE',
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
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: false,
    containScroll: 'trimSnaps'
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeModal, setActiveModal] = useState<typeof attractions[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
        .attr-section {
          background-color: #fcfbf9;
          padding: 100px 0 120px 0;
          font-family: 'Lato', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .attr-header {
          text-align: center;
          margin-bottom: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .attr-label {
          color: #8B5E3C;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .attr-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 38px;
          font-weight: 700;
          text-transform: uppercase;
          color: #1a1a1a;
          letter-spacing: 2px;
          margin: 0;
        }

        .attr-carousel-wrapper {
          position: relative;
          width: 100%;
        }

        .attr-embla {
          overflow: hidden;
          padding: 0 5vw;
          cursor: grab;
        }
        
        .attr-embla:active {
          cursor: grabbing;
        }

        .attr-embla__container {
          display: flex;
          gap: 40px;
          padding-bottom: 30px; 
          padding-top: 10px;
        }

        .attr-embla__slide {
          flex: 0 0 35vw;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .attr-promo-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #d4cfc5; 
          height: 100%;
          transition: all 300ms ease;
          position: relative;
        }

        .attr-promo-card:hover {
          transform: translateY(-6px);
          border-color: #8B5E3C;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .attr-promo-img-wrap {
          width: 100%;
          height: 380px;
          position: relative;
          overflow: hidden;
        }

        .attr-promo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .attr-promo-card:hover .attr-promo-img {
          transform: scale(1.03);
        }

        .attr-promo-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #1a1a1a;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 16px;
          z-index: 2;
        }

        .attr-promo-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 32px 28px 28px 28px;
        }

        .attr-promo-name {
          font-family: 'Libre Baskerville', serif;
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          color: #1a1a1a;
          letter-spacing: 1px;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .attr-promo-desc {
          font-size: 14.5px;
          color: #555555;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .attr-promo-distance {
          font-size: 11px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .attr-promo-distance::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #8B5E3C;
          border-radius: 50%;
        }

        .attr-cta-row {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .attr-promo-btn {
          background: transparent;
          color: #1a1a1a;
          border: none;
          padding: 0;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .attr-promo-btn::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(1);
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: currentColor;
          transform-origin: bottom right;
          transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        .attr-promo-btn:hover::after {
          transform: scaleX(0);
          transform-origin: bottom left;
        }

        .attr-promo-btn:hover {
          color: #8B5E3C;
        }

        .attr-enquire-btn {
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 12px 24px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .attr-enquire-btn:hover {
          background: #8B5E3C;
          color: #fff;
        }

        /* Arrows */
        .attr-arrow {
          position: absolute;
          top: 190px; 
          transform: translateY(-50%);
          width: 54px;
          height: 54px;
          background: #ffffff;
          border: 1px solid #e0ddd8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1a1a1a;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .attr-arrow:hover:not(:disabled) {
          background: #1a1a1a;
          color: #ffffff;
          border-color: #1a1a1a;
          transform: translateY(-50%) scale(1.05);
        }

        .attr-arrow:disabled {
          opacity: 0;
          pointer-events: none;
        }

        .attr-arrow-prev {
          left: calc(5vw - 27px);
        }

        .attr-arrow-next {
          right: calc(5vw - 27px);
        }

        /* --- Overlay Base --- */
        .attr-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: flex-start; /* Required for Drawer */
          justify-content: flex-end; /* Required for Drawer */
        }

        /* --- Drawer/Sheet Content --- */
        .attr-drawer {
          background: #ffffff;
          position: relative;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0,0,0,0.2);
        }

        .attr-drawer-close {
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
          color: #1a1a1a;
          transition: transform 0.3s ease;
        }

        .attr-drawer-close:hover {
          transform: scale(1.1);
        }

        .attr-drawer-hero {
          width: 100%;
          height: 340px;
          position: relative;
        }

        .attr-drawer-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .attr-drawer-body {
          padding: 48px;
        }

        .attr-drawer-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 32px;
          font-weight: 700;
          text-transform: uppercase;
          color: #1a1a1a;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .attr-drawer-desc {
          font-size: 15.5px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .attr-drawer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 40px;
          border-top: 1px solid #e0ddd8;
          border-bottom: 1px solid #e0ddd8;
          padding: 32px 0;
        }

        .attr-drawer-badge {
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
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
        }

        .attr-drawer-footer {
          background: #f9f9f9;
          padding: 24px;
          border-left: 4px solid #8B5E3C;
        }

        .attr-drawer-footer p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          margin: 0;
          font-style: italic;
        }

        /* Responsive Breakpoints */
        @media (min-width: 769px) {
          .attr-drawer {
            width: 550px;
            height: 100vh;
          }
        }

        @media (max-width: 1100px) {
          .attr-embla__slide { flex: 0 0 45vw; }
          .attr-arrow { top: 190px; }
        }
        
        @media (max-width: 768px) {
          .attr-embla__slide { flex: 0 0 85vw; }
          .attr-promo-img-wrap { height: 300px; }
          .attr-arrow { display: none; }
          .attr-embla__container { gap: 20px; }
          
          /* Bottom Sheet Override */
          .attr-modal-overlay {
            align-items: flex-end; /* Pin to bottom */
          }
          .attr-drawer {
            width: 100%;
            height: 85vh;
            border-radius: 24px 24px 0 0;
          }
          .attr-drawer-body { padding: 32px 24px; }
          .attr-drawer-grid { grid-template-columns: 1fr; gap: 20px; }
          .attr-drawer-hero { height: 260px; }
        }
      `}</style>

      <section id="attractions" ref={sectionRef} className="attr-section">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="attr-header"
        >
          <span className="attr-label">Explore Indore</span>
          <h2 className="attr-title">LOCAL ATTRACTIONS</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="attr-carousel-wrapper"
        >
          <button 
            className="attr-arrow attr-arrow-prev" 
            onClick={scrollPrev} 
            disabled={!canScrollPrev}
            suppressHydrationWarning
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="attr-embla" ref={emblaRef}>
            <div className="attr-embla__container">
              {attractions.map((attraction) => (
                <div className="attr-embla__slide" key={attraction.id}>
                  <div className="attr-promo-card">
                    <div className="attr-promo-img-wrap">
                      <img src={attraction.image} alt={attraction.name} className="attr-promo-img" />
                      <span className="attr-promo-badge">{attraction.badge}</span>
                    </div>
                    
                    <div className="attr-promo-content">
                      <h3 className="attr-promo-name">{attraction.name}</h3>
                      <p className="attr-promo-desc">{attraction.teaser}</p>
                      
                      <span className="attr-promo-distance">{attraction.distance}</span>
                      
                      <div className="attr-cta-row">
                        <button 
                          className="attr-promo-btn"
                          onClick={() => setActiveModal(attraction)}
                          suppressHydrationWarning
                        >
                          View Details &#8594;
                        </button>
                        <a href="#contact" className="attr-enquire-btn">
                          Enquire
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="attr-arrow attr-arrow-next" 
            onClick={scrollNext} 
            disabled={!canScrollNext}
            suppressHydrationWarning
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </motion.div>
      </section>

      {/* Side Drawer / Bottom Sheet Implementation */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="attr-modal-overlay" 
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={isMobile ? { y: '100%' } : { x: '100%' }}
              animate={isMobile ? { y: 0 } : { x: 0 }}
              exit={isMobile ? { y: '100%' } : { x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="attr-drawer" 
              onClick={e => e.stopPropagation()}
            >
              <button suppressHydrationWarning className="attr-drawer-close" onClick={() => setActiveModal(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="attr-drawer-hero">
                <img src={activeModal.image} alt={activeModal.name} />
              </div>

              <div className="attr-drawer-body">
                <h3 className="attr-drawer-title">{activeModal.name}</h3>
                <div className="attr-drawer-desc">
                  {activeModal.description}
                </div>

                <div className="attr-drawer-grid">
                  <div className="attr-drawer-badge">
                    <span className="attr-badge-label">Distance</span>
                    <span className="attr-badge-value">{activeModal.distance}</span>
                  </div>
                  <div className="attr-drawer-badge">
                    <span className="attr-badge-label">Best Time To Visit</span>
                    <span className="attr-badge-value">{activeModal.bestTime}</span>
                  </div>
                  <div className="attr-drawer-badge">
                    <span className="attr-badge-label">Ideal Duration</span>
                    <span className="attr-badge-value">{activeModal.duration}</span>
                  </div>
                </div>

                <div className="attr-drawer-footer">
                  <p>
                    <strong>Additional Information:</strong> For assistance with transportation and tour guide services, please reach out to the hotel concierge.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
