'use client';

import { useState } from 'react';

export default function IntroSection() {
  const [expanded, setExpanded] = useState(false);

  const shortText = "Designed to offer a perfect balance of comfort and sophistication, the rooms and suites at Hotel Winway provide a welcoming retreat in the heart of Indore city.";
  
  const fullText = (
    <>
      Designed to offer a perfect balance of comfort and sophistication, the rooms and suites at Hotel Winway provide a welcoming retreat in the heart of Indore city.
      <br /><br />
      Hotel Winway is a well-established 4-star business hotel located in the heart of Indore, Madhya Pradesh — a city that beautifully blends its royal heritage with modern dynamism. Situated on A.B. Road, one of Indore's most prominent commercial corridors, the hotel places you within easy reach of the city's finest landmarks, shopping destinations, and cultural attractions.
      <br /><br />
      Whether you are visiting for business or leisure, Hotel Winway offers a seamless fusion of contemporary comfort and warm hospitality. Our thoughtfully appointed rooms and suites, world-class dining experiences, and attentive service ensure that every stay is memorable. From the moment you arrive, you will experience the warmth of Malwa — the welcoming spirit that defines Indore and its people.
      <br /><br />
      At Hotel Winway, we believe that a great stay goes beyond just a comfortable room. It is about the little details — the freshly brewed morning tea, the perfectly prepared meal, the concierge who anticipates your every need. Come, experience Indore from the heart of the city.
    </>
  );
  return (
    <section style={{
      width: '100%',
      background: '#FFFFFF',
      textAlign: 'center',
      paddingTop: '50px',
      paddingBottom: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{
        margin: 0,
        fontFamily: '"Libre Baskerville", serif',
        fontSize: '32px',
        letterSpacing: '0.2em',
        color: '#8B6914',
        textTransform: 'uppercase',
        lineHeight: '1.4'
      }}>
        <span style={{ fontWeight: 300 }}>WHERE THE WARMTH OF MALWA </span>
        <span style={{ fontWeight: 800 }}>MEETS MODERN LUXURY</span>
      </h2>
      
      <p style={{
        marginTop: '16px',
        marginBottom: '0',
        fontFamily: 'Lato, sans-serif',
        fontWeight: '400',
        color: '#666666',
        fontSize: '16px',
        maxWidth: '800px',
        lineHeight: '1.8',
        textAlign: 'left'
      }} className="intro-description">
        {expanded ? (
          <>
            {fullText}
            <button
              onClick={() => setExpanded(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#b8935a',
                fontWeight: '700',
                fontSize: '14px',
                marginLeft: '4px',
                padding: '0',
              }}
            >
              ««
            </button>
          </>
        ) : (
          <>
            {shortText}
            <button
              onClick={() => setExpanded(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#b8935a',
                fontWeight: '700',
                fontSize: '14px',
                marginLeft: '4px',
                padding: '0',
              }}
            >
              »»
            </button>
          </>
        )}
      </p>
    </section>
  );
}
