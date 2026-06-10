'use client';
import { useState } from 'react';
import Image from 'next/image';

const IMAGES = [
  { id: 1, src: '/images/facade/facade-1.png', caption: 'Stylish rooms with cultural motifs' },
  { id: 2, src: '/images/facade/facade-2.png', caption: 'Elegant dining experiences' },
  { id: 3, src: '/images/facade/facade-3.jpeg', caption: 'Luxurious wellness spaces' },
  { id: 4, src: '/images/facade/facade-4.jpeg', caption: 'Breathtaking evening views' },
  { id: 5, src: '/images/facade/facade-5.jpeg', caption: 'Grand entrance and facade' },
];

export default function HighlightsCarousel() {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    { ...IMAGES[IMAGES.length - 1], id: 'first-partial' },
    ...IMAGES,
    { ...IMAGES[0], id: 'last-partial' },
    { ...IMAGES[1], id: 'extra-partial' }
  ];

  const total = slides.length;

  const slideRight = () => {
    if (isAnimating || current >= total - 2) return;
    setIsAnimating(true);
    setCurrent(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const slideLeft = () => {
    if (isAnimating || current <= 1) return;
    setIsAnimating(true);
    setCurrent(prev => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const translateX = `calc(27vw - ${current} * (24vw + 12px))`;

  return (
    <section style={{
      background: '#fff',
      paddingBottom: '0',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 800,
        letterSpacing: '0.35em',
        color: '#8B6914',
        textTransform: 'uppercase',
        marginBottom: '20px',
        marginTop: '40px',
        fontFamily: 'Lato, sans-serif'
      }}>
        HIGHLIGHTS
      </h2>

      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#fff',
        height: '480px',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '0'
      }}>
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: '12px',
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
          height: '100%',
          transform: `translateX(${translateX})`
        }}>
          {slides.map((slide, i) => {
            const isActive = i === current;
            return (
              <div 
                key={`${slide.id}-${i}`}
                style={{
                  position: 'relative',
                  flex: isActive ? '0 0 46vw' : '0 0 24vw',
                  height: isActive ? '460px' : '320px',
                  overflow: 'hidden',
                  transition: 'flex 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                <Image src={slide.src} alt="slide" fill style={{ objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                
                <div style={{
                  display: isActive ? 'block' : 'none',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.65))',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                  padding: '50px 20px 20px 20px',
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                  fontFamily: 'Lato, sans-serif'
                }}>
                  {slide.caption}
                </div>
              </div>
            );
          })}
        </div>

        <button 
          suppressHydrationWarning
          onClick={slideLeft}
          onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.3)'}
          onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)'}
          style={{
            position: 'absolute',
            bottom: '136px',
            top: 'auto',
            transform: 'none',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#333',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'box-shadow 0.2s',
            left: 'calc(12vw - 24px)'
          }}
        >
          &#8592;
        </button>

        <button 
          suppressHydrationWarning
          onClick={slideRight}
          onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.3)'}
          onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)'}
          style={{
            position: 'absolute',
            bottom: '136px',
            top: 'auto',
            transform: 'none',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#333',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'box-shadow 0.2s',
            right: 'calc(12vw - 24px)'
          }}
        >
          &#8594;
        </button>

      </div>
    </section>
  );
}
