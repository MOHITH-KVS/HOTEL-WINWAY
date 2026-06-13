'use client';
import { useState } from 'react';

const allImages = [
  'bh1.jpeg','bh2.jpeg','bh3.jpeg',
  'bh4.jpeg','bh5.jpeg','bh6.jpeg'
];

export default function EventsGallery() {
  const [count, setCount] = useState(3);
  const visible = allImages.slice(0, count);
  const hasMore = count < allImages.length;

  return (
    <section style={{ background: '#FFFFFF', padding: '0 0 60px 0' }}>

      {/* IMAGE GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        padding: '12px'
      }}>
        {visible.map((img) => (
          <div key={img} style={{
            height: '340px',
            overflow: 'hidden',
            position: 'relative',
            background: '#f5f5f5'
          }}>
            <img
              src={`/images/events/${img}`}
              alt="Hotel Winway Banquet Hall"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.5s ease'
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            onClick={() => setCount(prev => Math.min(prev + 3, allImages.length))}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1a1a1a',
              background: 'transparent',
              border: '1.5px solid #1a1a1a',
              padding: '14px 44px',
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
