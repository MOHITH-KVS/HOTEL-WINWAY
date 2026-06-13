'use client';
import { useState } from 'react';

const images = ['bh1.jpeg','bh2.jpeg','bh3.jpeg','bh4.jpeg','bh5.jpeg','bh6.jpeg','bh7.jpeg'];

export default function EventsGallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, 3);

  return (
    <section style={{ background: '#000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
        {visible.map((img) => (
          <div key={img} style={{ height: '380px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={`/images/events/${img}`}
              alt="Banquet Hall Hotel Winway"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>
      {!showAll && (
        <div style={{ textAlign: 'center', padding: '40px 0', background: '#FFFFFF' }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1a1a1a',
              background: 'transparent',
              border: '1.5px solid #1a1a1a',
              padding: '14px 40px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#B8965A';
              e.currentTarget.style.borderColor = '#B8965A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#1a1a1a';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            LOAD MORE PHOTOS
          </button>
        </div>
      )}
    </section>
  );
}
