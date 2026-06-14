'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Users, Maximize2, BedDouble } from 'lucide-react';

const roomsData = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    description: 'Experience effortless comfort in our thoughtfully appointed Room. Designed with contemporary elegance and practical convenience in mind, the room features inviting interiors, comfortable bedding and modern amenities.',
    size: '24 Sq. Mt / 260 Sq. Ft',
    guests: 'Up to 2 guests',
    wifi: 'Inclusive of WiFi',
    bed: 'Double bed',
    image: '/images/rooms/standard-room/standard-1.jpeg',
    href: '/rooms/standard-room'
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    description: 'Enjoy an elevated stay experience in our Deluxe Room, thoughtfully designed to offer enhanced comfort and contemporary style. Featuring spacious interiors, elegant furnishings and modern amenities.',
    size: '29 Sq. Mt / 316 Sq. Ft',
    guests: 'Up to 2 guests',
    wifi: 'Inclusive of WiFi',
    bed: 'Double bed',
    image: '/images/rooms/deluxe-room/deluxe-1.jpeg',
    href: '/rooms/deluxe-room'
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    description: 'Indulge in elevated comfort and added luxury in our Junior Suite. Thoughtfully designed with spacious interiors and elegant furnishings, the suite offers a refined retreat. Unwind in the relaxing bathtub and enjoy refreshments from the minibar.',
    size: '31 Sq. Mt / 340 Sq. Ft',
    guests: 'Up to 2 guests',
    wifi: 'Inclusive of WiFi',
    bed: 'King bed',
    image: '/images/rooms/junior-suite/junior-1.jpeg',
    href: '/rooms/junior-suite'
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'Experience the pinnacle of luxury in our Presidential Suite, designed for guests who appreciate exceptional comfort and sophistication. Featuring expansive living spaces, elegant interiors and premium amenities.',
    size: '66 Sq. Mt / 716 Sq. Ft',
    guests: 'Up to 2 guests',
    wifi: 'Inclusive of WiFi',
    bed: 'King bed',
    image: '/images/rooms/presidential-suite/ps-1.jpeg',
    href: '/rooms/presidential-suite'
  }
];

export default function RoomsGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleRooms = showAll ? roomsData : roomsData.slice(0, 3);

  return (
    <>
      <div id="rooms-grid-top" className="rooms-grid">
        {visibleRooms.map((room) => (
          <div key={room.id} className="room-card-page">
            <div className="room-img-wrapper">
              <img src={room.image} alt={room.name} />
              <button className="gallery-icon-btn" aria-label="View Gallery">
                <Maximize2 size={16} />
              </button>
            </div>

            <div className="room-content">
              <h2 className="room-name-page">{room.name}</h2>
              <p className="room-desc-page">
                {room.description} <Link href={room.href} className="read-more">››</Link>
              </p>
              
              <div className="highlights-label">HIGHLIGHTS</div>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <Maximize2 className="highlight-icon" size={16} />
                  {room.size}
                </div>
                <div className="highlight-item">
                  <Users className="highlight-icon" size={16} />
                  {room.guests}
                </div>
                <div className="highlight-item">
                  <Wifi className="highlight-icon" size={16} />
                  {room.wifi}
                </div>
                <div className="highlight-item">
                  <BedDouble className="highlight-icon" size={16} />
                  {room.bed}
                </div>
              </div>



              <div className="room-card-buttons">
                <a href="/contact" className="btn-enquire">ENQUIRE NOW</a>
                <Link href={room.href} className="btn-room-details">ROOM DETAILS ›</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            style={{
              background: 'transparent',
              border: '1.5px solid #1a1a1a',
              color: '#1a1a1a',
              padding: '14px 48px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#1a1a1a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            LOAD MORE
          </button>
        ) : (
          <button
            onClick={() => {
              setShowAll(false);
              document.getElementById('rooms-grid-top')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'transparent',
              border: '1.5px solid #1a1a1a',
              color: '#1a1a1a',
              padding: '14px 48px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#1a1a1a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            SHOW LESS
          </button>
        )}
      </div>
    </>
  );
}
