'use client';
import { useState } from 'react';

export default function WelcomeSection() {
  const [expanded, setExpanded] = useState(false);

  const shortText = "At Hotel Winway, hospitality is more than a service — it is a tradition rooted in the warmth and culture of Malwa. Located in the heart of Indore, the hotel offers a harmonious blend of comfort, convenience and personalized attention.";

  const fullText = "At Hotel Winway, hospitality is more than a service — it is a tradition rooted in the warmth and culture of Malwa. Located in the heart of Indore, the hotel offers a harmonious blend of comfort, convenience and personalized attention, creating experiences that are both memorable and meaningful. Strategically situated on R.N.T. Marg, one of the city's most prominent commercial districts, Hotel Winway provides effortless access to business centres, educational institutions, shopping destinations and key transport hubs. Its central location, coupled with thoughtfully designed spaces and attentive service, makes it an ideal choice for both business and leisure travellers. Whether you are visiting for work, celebration or relaxation, Hotel Winway welcomes you with comfortable accommodations, delightful dining experiences and a commitment to making every stay seamless and rewarding.";

  return (
    <section style={{ padding: '80px 40px', background: '#FFFFFF', textAlign: 'center' }}>
      <p style={{ fontFamily: 'Lato', fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', color: '#B8965A', textTransform: 'uppercase', marginBottom: '16px' }}>
        WELCOME TO HOTEL WINWAY
      </p>
      <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '32px', fontWeight: '400', color: '#1a1a1a', marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px' }}>
        Where Warmth Meets Elegance
      </h2>
      <p style={{ fontFamily: 'Lato', fontSize: '15px', color: '#555555', lineHeight: '1.9', maxWidth: '680px', margin: '0 auto 20px', transition: 'all 0.3s ease' }}>
        {expanded ? fullText : shortText}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          fontFamily: 'Lato',
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#B8965A',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textDecoration: 'underline',
          padding: '8px 0',
        }}>
        {expanded ? 'READ LESS ↑' : 'READ MORE ↓'}
      </button>
    </section>
  );
}
