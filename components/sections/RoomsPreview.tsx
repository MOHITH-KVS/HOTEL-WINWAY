'use client';
import { useState, useEffect } from 'react';

const roomsData = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    price: '₹ 4,000',
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
    price: '₹ 4,200',
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
    price: '₹ 5,500',
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
    price: '₹ 7,000',
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
  const [roomsCurrent, setRoomsCurrent] = useState(0);
  const [roomsAnimating, setRoomsAnimating] = useState(false);
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

  const roomsSlideRight = () => {
    if (roomsAnimating || roomsCurrent >= roomsData.length - 2) return;
    setRoomsAnimating(true);
    setRoomsCurrent(prev => prev + 1);
    setTimeout(() => setRoomsAnimating(false), 500);
  };

  const roomsSlideLeft = () => {
    if (roomsAnimating || roomsCurrent <= 0) return;
    setRoomsAnimating(true);
    setRoomsCurrent(prev => prev - 1);
    setTimeout(() => setRoomsAnimating(false), 500);
  };

  return (
    <>
      <style>{`
        .rooms-section {
          background: #fdfdfd;
          padding: 60px 0;
        }

        .rooms-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 60px auto;
          padding: 0 24px;
        }

        .rooms-title {
          font-family: 'Lato', sans-serif;
          font-size: 26px;
          letter-spacing: 0.25em;
          color: #1a1a1a;
          font-weight: 300;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .rooms-title strong {
          font-weight: 800;
          color: #B8965A;
        }

        .rooms-subtitle {
          font-family: 'Lato', sans-serif;
          font-size: 15px;
          color: #666;
          line-height: 1.8;
          font-weight: 400;
        }

        .rooms-carousel-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 0;
        }

        .rooms-track {
          display: flex;
          flex-direction: row;
          gap: 40px;
          transition: transform 0.5s ease;
          will-change: transform;
          position: relative;
          z-index: 1;
          padding: 0 calc(12vw - 20px);
        }

        .room-card {
          flex: 0 0 38vw;
          min-width: 0;
          background: #fff;
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .room-image-wrap {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
        }

        .room-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .room-gallery-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.9);
          border: none;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .room-info {
          padding: 24px 28px 36px 28px;
        }

        .room-name {
          font-family: 'Libre Baskerville', serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          text-transform: none;
        }

        .room-desc {
          font-size: 14px;
          color: #555555;
          line-height: 1.65;
          margin-bottom: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .room-price-block {
          margin-bottom: 24px;
        }

        .price-label {
          display: block;
          font-size: 12px;
          color: #777;
          margin-bottom: 4px;
        }

        .price-amount {
          display: block;
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2px;
          font-family: 'Libre Baskerville', serif;
        }

        .price-note {
          display: block;
          font-size: 11px;
          color: #777;
        }

        .room-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-room-details {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #1a1a1a;
          text-decoration: none;
          text-transform: uppercase;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
          transition: border-bottom 0.2s;
          cursor: pointer;
        }
        
        .btn-room-details:hover {
          border-bottom: 1px solid #1a1a1a;
        }

        .rooms-arrow {
          position: absolute;
          top: 130px; /* Centered on the 260px image height */
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        
        .rooms-arrow:hover {
          background: rgba(255,255,255,1);
        }

        .rooms-arrow-left  { left: 16px; }
        .rooms-arrow-right { right: 16px; }
        
        @media (max-width: 768px) {
          .rooms-track {
            padding: 0 5vw;
          }
          .room-card {
            flex: 0 0 90vw;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-content {
          background: #fff;
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
          position: relative;
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 11px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          background: none;
          border: none;
        }

        .modal-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 24px;
          padding-right: 40px; /* Space for close button */
        }

        .modal-desc {
          font-size: 15px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .modal-specs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        .modal-spec-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #444;
        }

        .modal-spec-divider {
          color: #ccc;
        }

        .modal-highlights {
          margin-bottom: 32px;
          padding-left: 20px;
        }

        .modal-highlights li {
          font-size: 14px;
          color: #444;
          line-height: 2;
          list-style-type: disc;
        }

        .modal-divider {
          border: none;
          border-top: 1px solid #eee;
          margin: 32px 0;
        }

        .modal-amenities-title {
          font-size: 12px;
          font-weight: 700;
          color: #888;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .modal-amenities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        .modal-amenities-grid span {
          font-size: 14px;
          color: #444;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-book-now {
          background: #2c2c2c;
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s ease;
          border-radius: 0;
          text-decoration: none;
          display: inline-block;
        }

        .btn-book-now:hover {
          background: #B8965A;
        }

        @media (max-width: 640px) {
          .modal-content {
            padding: 24px;
          }
          .modal-amenities-grid {
            grid-template-columns: 1fr;
          }
          .modal-specs {
            flex-direction: column;
            align-items: flex-start;
          }
          .modal-spec-divider {
            display: none;
          }
        }
      `}</style>

      <section className="rooms-section" id="rooms">
        <div className="rooms-header">
          <h2 className="rooms-title">ROOMS & <strong>SUITES</strong></h2>
          <p className="rooms-subtitle">Designed to offer a perfect balance of comfort and sophistication, the rooms and suites at Hotel Winway provide a welcoming retreat in the heart of Indore city.</p>
        </div>

        <div className="rooms-carousel-wrapper">
          <button 
            suppressHydrationWarning
            className="rooms-arrow rooms-arrow-left" 
            onClick={roomsSlideLeft}
            style={{ display: roomsCurrent === 0 ? 'none' : 'flex' }}
          >&#8249;</button>
          
          <div 
            className="rooms-track" 
            id="roomsTrack"
            style={{ 
              transform: `translateX(calc(-${roomsCurrent} * (38vw + 40px)))` 
            }}
          >
            {roomsData.map((room, index) => (
              <div className="room-card" key={room.id}>
                <div className="room-image-wrap">
                  <img src={room.image} alt={room.name} />
                  <button suppressHydrationWarning className="room-gallery-btn">&#9638;</button>
                </div>
                <div className="room-info">
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-desc">{room.description} <span style={{color: '#B8965A', cursor: 'pointer', fontWeight: 600}} onClick={() => setActiveModal(room)}>&gt;&gt;</span></p>
                  
                  <div className="room-price-block">
                    <span className="price-label">Member rate starting from</span>
                    <span className="price-amount">{room.price}</span>
                    <span className="price-note">per Night (Excluding Taxes)</span>
                  </div>
                  
                  <div className="room-actions">
                    <a href="/contact" className="btn-book-now">ENQUIRE NOW</a>
                    <span className="btn-room-details" onClick={() => setActiveModal(room)}>ROOM DETAILS ›</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            suppressHydrationWarning
            className="rooms-arrow rooms-arrow-right" 
            onClick={roomsSlideRight}
            style={{ display: roomsCurrent >= roomsData.length - 2 ? 'none' : 'flex' }}
          >&#8250;</button>
        </div>
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
