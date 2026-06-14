import os

# Files to patch
DIR = r"c:\Users\my pc\OneDrive\Desktop\hotel-winway\components\sections"

ARROWS = """
          {/* PREV ARROW */}
          <button
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
              }
            }}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.background = '#B8965A'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* NEXT ARROW */}
          <button
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
              }
            }}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.background = '#B8965A'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
"""

# Let's write a python script to regex replace the containers
