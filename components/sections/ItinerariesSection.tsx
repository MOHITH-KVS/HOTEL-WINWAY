'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface Tour {
  title: string;
  image: string;
  timings: string;
  description: string;
  contact: string;
  suitableFor: string;
  bestTime: string;
  plan: string[];
}

const halfDayTours: Tour[] = [
  {
    title: 'THE HOLKAR LEGACY TRAIL',
    image: '/images/attractions/local/rajwada-palace.avif',
    timings: '10:00 am to 4:30 pm',
    description: "This thoughtfully-curated journey traces the legacy of the Holkar dynasty, whose patronage shaped the city's architectural and cultural identity.",
    contact: '0731-661-1111 | fom1@hotelwinway.com',
    suitableFor: 'Families with children, Corporate groups',
    bestTime: 'Throughout the year',
    plan: [
      '10:00 AM - Start at Rajwada Palace',
      '12:00 PM - Visit Lal Bagh Palace',
      '02:30 PM - Stop for local lunch',
      '03:30 PM - Central Museum tour'
    ]
  },
  {
    title: 'INDORE TEMPLE CIRCUIT',
    image: '/images/attractions/local/local-8.jpeg',
    timings: '6:00 am to 12:00 pm or 2:00 pm to 8:00 pm',
    description: "Reflecting the city's spiritual heritage, the itinerary traverses Indore's prominent temples, offering an insight into local culture, traditions and mythological tales.",
    contact: '0731-661-1111 | fom1@hotelwinway.com',
    suitableFor: 'Families with children, Senior citizens',
    bestTime: 'Throughout the year',
    plan: [
      '06:00 AM - Khajrana Ganesh Temple',
      '08:30 AM - Annapurna Temple',
      '10:00 AM - Bada Ganpati',
      '11:00 AM - Kanch Mandir'
    ]
  }
];

const fullDayTours: Tour[] = [
  {
    title: 'THREADS OF TIME — MAHESHWAR',
    image: '/images/attractions/local/local-6.jpeg',
    timings: '9:00 am to 7:00 pm',
    description: 'Experience the weaving heritage of Maheshwar, set along the banks of the sacred Narmada river with breathtaking ghats and fort architecture.',
    contact: '0731-661-1111 | fom1@hotelwinway.com',
    suitableFor: 'Couples, Solo travelers, Photographers',
    bestTime: 'October to March',
    plan: ['09:00 AM - Departure from Indore', '11:30 AM - Ahilya Fort & Museum', '01:00 PM - Narmada Ghats Boat Ride', '03:00 PM - Local Weaving Centers']
  },
  {
    title: 'JOURNEY OF FAITH — UJJAIN',
    image: '/images/attractions/local/local-7.jpeg',
    timings: '6:00 am to 9:00 pm',
    description: 'Visit the ancient city of Ujjain, home to the Mahakaleshwar Jyotirlinga and rich mythological history along the Shipra river.',
    contact: '0731-661-1111 | fom1@hotelwinway.com',
    suitableFor: 'Families, Senior citizens',
    bestTime: 'Throughout the year',
    plan: ['06:00 AM - Departure', '08:00 AM - Mahakaleshwar Darshan', '11:00 AM - Kal Bhairav Temple', '02:00 PM - Ram Ghat', '04:00 PM - Harsiddhi Mata Temple']
  },
  {
    title: 'SPIRITUAL SOJOURN — OMKARESHWAR',
    image: '/images/attractions/local/local-9.jpeg',
    timings: '7:00 am to 8:00 pm',
    description: 'Journey to the Om shape island on the Narmada river, hosting one of the 12 revered Jyotirlingas, offering deep spiritual peace.',
    contact: '0731-661-1111 | fom1@hotelwinway.com',
    suitableFor: 'Families, Senior citizens',
    bestTime: 'Throughout the year',
    plan: ['07:00 AM - Departure', '10:00 AM - Omkareshwar Darshan', '01:00 PM - Narmada Boat Ride', '03:00 PM - Parikrama around the island']
  }
];

export default function ItinerariesSection() {
  const [activeModal, setActiveModal] = useState<Tour | null>(null);
  const [tcExpanded, setTcExpanded] = useState(false);

  const TourCarousel = ({ tours }: { tours: Tour[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth * 0.45, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.45, behavior: 'smooth' });
      }
    };

    return (
      <div className="itinerary-carousel-wrapper">
        <button className="nav-arrow left-arrow" onClick={scrollLeft} aria-label="Scroll left">&#8592;</button>
        <div className="itinerary-carousel-container" ref={scrollRef}>
          <div className="itinerary-track">
            {tours.map((tour, idx) => (
              <div 
                key={idx} 
                className="itinerary-card"
                onClick={() => { setActiveModal(tour); setTcExpanded(false); }}
              >
                <img src={tour.image} alt={tour.title} className="itinerary-card-image" />
                <div className="itinerary-card-content">
                  <h3 className="itinerary-card-title">{tour.title}</h3>
                  <div className="itinerary-card-time">&#9200; {tour.timings}</div>
                  <button className="itinerary-card-btn">
                    KNOW MORE <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="nav-arrow right-arrow" onClick={scrollRight} aria-label="Scroll right">&#8594;</button>
      </div>
    );
  };

  return (
    <section className="itineraries-section">
      <style>{`
        .itineraries-section {
          background: #FAF9F6;
          padding: 80px 0;
          overflow: hidden;
        }

        .itineraries-main-title {
          text-align: center;
          font-family: var(--font-sans);
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #111;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .itineraries-desc {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
          font-size: 15px;
          line-height: 1.8;
          color: #666;
          padding: 0 24px;
        }

        .itinerary-group {
          margin-bottom: 80px;
        }

        .itinerary-group:last-of-type {
          margin-bottom: 0;
        }

        .itinerary-group-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 24px;
        }

        .itinerary-group-line1 {
          font-family: var(--font-sans);
          font-weight: 300;
          letter-spacing: 0.15em;
          color: #5a4a3a;
          text-transform: uppercase;
          margin-right: 8px;
        }

        .itinerary-group-line2 {
          font-family: var(--font-sans);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #111;
          text-transform: uppercase;
        }

        .itinerary-carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .itinerary-carousel-container {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0 5%;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        }
        
        .itinerary-carousel-container::-webkit-scrollbar {
          display: none;
        }

        .itinerary-track {
          display: flex;
          gap: 24px;
          padding-bottom: 20px;
          align-items: stretch;
        }

        /* Card styles from reference */
        .itinerary-card {
          border: 1.5px solid #c9c0b5;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex: 0 0 calc(45% - 12px);
          min-width: 320px;
          scroll-snap-align: start;
          cursor: pointer;
          transition: background-color 0.3s ease;
          height: auto;
        }

        .itinerary-card-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .itinerary-card-content {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .itinerary-card-title {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #111;
          transition: color 0.3s;
        }

        .itinerary-card-time {
          font-size: 13px;
          color: #666;
          transition: color 0.3s;
        }

        .itinerary-card-btn {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.3s;
        }

        .itinerary-card:hover {
          background: #6b3f18;
        }
        
        .itinerary-card:hover .itinerary-card-title,
        .itinerary-card:hover .itinerary-card-time,
        .itinerary-card:hover .itinerary-card-btn {
          color: #ffffff;
        }

        /* Arrows */
        .nav-arrow {
          position: absolute;
          top: calc(50% - 20px);
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #ddd;
          cursor: pointer;
          font-size: 18px;
          color: #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .nav-arrow:hover {
          background: #6b3f18;
          color: #fff;
          border-color: #6b3f18;
        }
        .left-arrow { left: 15px; }
        .right-arrow { right: 15px; }

        @media (max-width: 1024px) {
          .itinerary-card { flex: 0 0 calc(50% - 12px); }
        }
        @media (max-width: 768px) {
          .itinerary-card { flex: 0 0 85vw; }
          .left-arrow { left: 5px; }
          .right-arrow { right: 5px; }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: #fff;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          border-radius: 4px;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
          z-index: 10;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }

        .modal-hero {
          width: 100%;
          height: 300px;
          position: relative;
        }

        .modal-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-body {
          padding: 40px;
        }

        .modal-title {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 700;
          color: #111;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .modal-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 30px;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          background: #FAF9F6;
          padding: 24px;
          border: 1px solid #eee;
          margin-bottom: 40px;
        }

        .modal-grid-item strong {
          display: block;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8B6914;
          margin-bottom: 8px;
        }

        .modal-grid-item span {
          font-size: 14px;
          color: #333;
          line-height: 1.6;
          display: block;
        }

        .modal-plan-title {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 20px;
        }

        .modal-plan-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
        }

        .modal-plan-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 16px;
          font-size: 15px;
          color: #444;
        }

        .modal-plan-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #8B6914;
        }

        .modal-tc-toggle {
          background: none;
          border: none;
          color: #6b3f18;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          padding: 0;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-tc-content {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
          padding: 16px;
          background: #f9f9f9;
          border-left: 3px solid #ddd;
          margin-bottom: 40px;
        }

        .modal-enquire-btn {
          display: inline-block;
          background: #333;
          color: #fff;
          text-decoration: none;
          padding: 16px 40px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: background 0.3s;
        }

        .modal-enquire-btn:hover {
          background: #6b3f18;
        }

        @media (max-width: 768px) {
          .modal-grid { grid-template-columns: 1fr; }
          .modal-body { padding: 24px; }
          .itinerary-card { flex: 0 0 85vw; }
        }
      `}</style>

      <h2 className="itineraries-main-title">ITINERARIES</h2>
      <p className="itineraries-desc">
        Indore blends historical significance with a thriving contemporary culture. From Rajwada Palace and Lal Bagh Palace to bustling food streets like Sarafa Bazaar, the city offers diverse experiences. Its vibrant culinary scene and growing urban character make it one of central India&apos;s most engaging destinations.
      </p>

      <div className="itinerary-group">
        <h3 className="itinerary-group-title">
          <span className="itinerary-group-line1">HALF DAY</span>
          <span className="itinerary-group-line2">TOURS</span>
        </h3>
        <TourCarousel tours={halfDayTours} />
      </div>

      <div className="itinerary-group">
        <h3 className="itinerary-group-title">
          <span className="itinerary-group-line1">FULL DAY</span>
          <span className="itinerary-group-line2">TOURS</span>
        </h3>
        <TourCarousel tours={fullDayTours} />
      </div>

      {activeModal && (
        <div className="modal-overlay" onClick={(e) => {
          if (e.target === e.currentTarget) setActiveModal(null);
        }}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
            <div className="modal-hero">
              <img src={activeModal.image} alt={activeModal.title} />
            </div>
            <div className="modal-body">
              <h2 className="modal-title">{activeModal.title}</h2>
              <p className="modal-desc">{activeModal.description}</p>
              
              <div className="modal-grid">
                <div className="modal-grid-item">
                  <strong>Contact Details</strong>
                  <span>{activeModal.contact}</span>
                </div>
                <div className="modal-grid-item">
                  <strong>Timings</strong>
                  <span>{activeModal.timings}</span>
                </div>
                <div className="modal-grid-item">
                  <strong>Suitable For</strong>
                  <span>{activeModal.suitableFor}</span>
                </div>
              </div>

              <h3 className="modal-plan-title">Tour Plan</h3>
              <ul className="modal-plan-list">
                {activeModal.plan.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>

              <button 
                className="modal-tc-toggle"
                onClick={() => setTcExpanded(!tcExpanded)}
              >
                Terms &amp; Conditions {tcExpanded ? '▲' : '▼'}
              </button>
              
              {tcExpanded && (
                <div className="modal-tc-content">
                  <p>Tour availability is subject to weather conditions and local authority guidelines. Advance booking of at least 24 hours is recommended. Cancellation policies apply. Transportation is arranged via authorized travel partners of Hotel Winway.</p>
                </div>
              )}

              <a href="mailto:fom1@hotelwinway.com" className="modal-enquire-btn">ENQUIRE NOW</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
