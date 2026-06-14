'use client';
import { useState, useEffect, useRef } from 'react';

const roomsData = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    description: 'Experience effortless comfort in our thoughtfully appointed Room. Designed with contemporary elegance and practical convenience in mind, the room features inviting interiors, comfortable bedding and modern amenities to ensure a pleasant and relaxing stay.',
    image: '/images/rooms/standard-room/standard-1.jpeg',
    href: '/rooms/standard-room',
    specs: [
      { icon: '🔲', text: '24 sq.mt / 260 sq.ft' },
      { icon: '👤', text: 'Up to 2 guests' },
      { icon: '📶', text: 'WiFi' },
      { icon: '🛏', text: 'Double bed' }
    ],
    highlights: [
      'Stylish interiors with modern flooring',
      'Well-designed work desk',
      'Inviting seating',
      'Breakfast included'
    ],
    amenities: [
      'High-speed Internet',
      'Flat-screen TV',
      'Premium Toiletries'
    ]
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    description: 'Enjoy an elevated stay experience in our Deluxe Room, thoughtfully designed to offer enhanced comfort and contemporary style. Featuring spacious interiors, elegant furnishings and modern amenities, the room provides the perfect setting to relax and recharge.',
    image: '/images/rooms/deluxe-room/deluxe-1.jpeg',
    href: '/rooms/deluxe-room',
    specs: [
      { icon: '🔲', text: '29 sq.mt / 316 sq.ft' },
      { icon: '👤', text: 'Up to 2 guests' },
      { icon: '📶', text: 'WiFi' },
      { icon: '🛏', text: 'Double bed' }
    ],
    highlights: [
      'Spacious interiors with contemporary design',
      'Comfortable king-size bed',
      'Thoughtfully designed workspace',
      'Breakfast included'
    ],
    amenities: [
      'High-speed Internet',
      'Flat-screen TV',
      'Premium Toiletries'
    ]
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    description: 'Indulge in elevated comfort and added luxury in our Junior Suite. Thoughtfully designed with spacious interiors and elegant furnishings, the suite offers a refined retreat for discerning travellers. Unwind in the relaxing bathtub and enjoy refreshments from the minibar.',
    image: '/images/rooms/junior-suite/junior-1.jpeg',
    href: '/rooms/junior-suite',
    specs: [
      { icon: '🔲', text: '31 sq.mt / 340 sq.ft' },
      { icon: '👤', text: 'Up to 2 guests' },
      { icon: '📶', text: 'WiFi' }
    ],
    highlights: [
      'Spacious suite with elegant interiors',
      'Private bathtub',
      'Well-stocked minibar (chargeable)',
      'Breakfast included'
    ],
    amenities: [
      'High-speed Internet',
      'Flat-screen TV',
      'Premium Toiletries'
    ]
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Experience the pinnacle of luxury in our Presidential Suite, designed for guests who appreciate exceptional comfort and sophistication. Featuring expansive living spaces, elegant interiors and premium amenities, the suite offers an elevated stay experience.',
    image: '/images/rooms/presidential-suite/ps-1.jpeg',
    href: '/rooms/presidential-suite',
    specs: [
      { icon: '🔲', text: '66 sq.mt / 716 sq.ft' },
      { icon: '👤', text: 'Up to 2 guests' },
      { icon: '📶', text: 'WiFi' }
    ],
    highlights: [
      'Expansive suite with separate living area',
      'Luxurious bathtub',
      'Premium minibar (chargeable)',
      'Breakfast included'
    ],
    amenities: [
      'High-speed Internet',
      'Flat-screen TV',
      'Premium Toiletries'
    ]
  }
];

export default function RoomsPreview() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<typeof roomsData[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModal]);



  return (
    <>
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>

        {/* HEADING */}
        <div style={{ textAlign: 'center', padding: '0 20px', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'Lato, sans-serif', fontSize: '26px', letterSpacing: '0.25em', color: '#1a1a1a', fontWeight: 300, textTransform: 'uppercase', marginBottom: '20px' }}>
            ROOMS & <strong style={{ fontWeight: 800, color: '#B8965A' }}>SUITES</strong>
          </h2>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '15px', color: '#666', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto' }}>
            Designed to offer a perfect balance of comfort and sophistication, the rooms and suites at Hotel Winway provide a welcoming retreat in the heart of Indore city.
          </p>
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
          <div ref={carouselRef} className="rooms-carousel-track" style={{
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

            {roomsData.map((item) => (
              <div key={item.id} className="room-carousel-item" style={{
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
                      {item.description}
                    </p>
                    {/* CTAs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                      <a href={item.href} style={{
                        fontFamily: 'Lato', fontSize: '11px', fontWeight: '700',
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        color: '#FFFFFF', background: '#B8965A',
                        padding: '12px 20px', textDecoration: 'none', display: 'inline-block'
                      }}>ROOM DETAILS</a>
                      <a href="/contact" style={{
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

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button suppressHydrationWarning className="modal-close" onClick={() => setActiveModal(null)}>CLOSE ✕</button>
            
            <h3 className="modal-title">{activeModal.name}</h3>
            <p className="modal-desc">{activeModal.description}</p>
            
            <div className="modal-specs">
              {activeModal.specs.map((spec, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                  <span className="modal-spec-item">{spec.icon} {spec.text}</span>
                  {i < activeModal.specs.length - 1 && <span className="modal-spec-divider">·</span>}
                </div>
              ))}
            </div>

            <ul className="modal-highlights">
              {activeModal.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <hr className="modal-divider" />

            <div className="modal-amenities-title">SERVICES & AMENITIES</div>
            <div className="modal-amenities-grid">
              {activeModal.amenities.map((amenity, i) => (
                <span key={i}>• {amenity}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
