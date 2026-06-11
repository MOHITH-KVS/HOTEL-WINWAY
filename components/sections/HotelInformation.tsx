'use client';

import { useRef, useState, useEffect } from 'react';
import { ShieldCheck, ConciergeBell, CalendarCheck, PhoneCall, Mail } from 'lucide-react';

export default function HotelInformation() {
  const sectionRef = useRef(null);

  // State to track which card's modal is active (1, 2, or 3)
  const [activeModal, setActiveModal] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEsc);
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  return (
    <>
      <style>{`
        .hotel-info-section {
          background-color: #fcfbf9;
          padding: 60px 0;
          font-family: 'Lato', sans-serif;
          position: relative;
        }

        .info-header-wrapper {
          text-align: center;
          margin-bottom: 70px;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .info-small-label {
          color: #8B5E3C;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .info-main-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 38px;
          font-weight: 700;
          text-transform: uppercase;
          color: #1a1a1a;
          letter-spacing: 2px;
          margin: 0;
        }

        .info-divider {
          width: 60px;
          height: 2px;
          background-color: #8B5E3C;
          margin-top: 24px;
        }

        .info-grid-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .info-card {
          background: #ffffff;
          border: 1px solid #e0ddd8;
          border-radius: 8px;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
        }

        .info-card:hover {
          transform: translateY(-8px);
          border-color: #8B5E3C;
          box-shadow: 0 16px 40px rgba(139, 94, 60, 0.08);
        }

        .info-card-icon {
          color: #8B5E3C;
          margin-bottom: 32px;
        }

        .info-col-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .info-col-summary {
          font-size: 14.5px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 32px;
          font-style: italic;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          flex-grow: 1;
        }

        .info-list li {
          font-size: 14.5px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 16px;
          position: relative;
          padding-left: 20px;
        }

        .info-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #8B5E3C;
        }

        .info-modal-btn {
          background: transparent;
          color: #1a1a1a;
          border: none;
          padding: 0;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          align-self: flex-start;
          transition: color 0.3s ease;
        }

        .info-modal-btn::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(1);
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: currentColor;
          transform-origin: bottom right;
          transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        .info-modal-btn:hover::after {
          transform: scaleX(0);
          transform-origin: bottom left;
        }

        .info-modal-btn:hover {
          color: #8B5E3C;
        }

        /* --- NEED ASSISTANCE MODULE --- */
        .info-assistance-card {
          margin-top: 30px;
          background: #ffffff;
          border: 1px solid #e0ddd8;
          border-radius: 8px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
          transition: border-color 0.3s ease;
        }

        .info-assistance-card:hover {
          border-color: #8B5E3C;
        }

        .info-assistance-text h4 {
          font-family: 'Libre Baskerville', serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .info-assistance-text p {
          color: #666;
          font-size: 14.5px;
          margin-bottom: 0;
        }

        .info-assistance-contacts {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .info-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #444;
          font-size: 15px;
          font-weight: 500;
        }

        .info-contact-item svg {
          color: #8B5E3C;
        }

        .info-enquire-btn {
          background: #8B5E3C;
          color: #ffffff;
          border: none;
          padding: 16px 32px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .info-enquire-btn:hover {
          background: #6a462c;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 94, 60, 0.25);
        }

        /* --- MODAL STYLES --- */
        .info-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .info-modal-content {
          background: #ffffff;
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          border-radius: 8px;
          overflow-y: auto;
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
        }

        .info-modal-close {
          position: absolute;
          top: 32px;
          right: 32px;
          background: #f4f4f4;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          color: #1a1a1a;
          transition: all 0.3s ease;
        }

        .info-modal-close:hover {
          background: #e0e0e0;
          transform: scale(1.1);
        }

        .info-modal-body {
          padding: 60px;
        }

        .info-modal-icon {
          color: #8B5E3C;
          margin-bottom: 24px;
        }

        .info-modal-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 32px;
          font-weight: 700;
          text-transform: uppercase;
          color: #1a1a1a;
          letter-spacing: 1px;
          margin-bottom: 40px;
        }

        .info-modal-h4 {
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          margin-top: 32px;
        }

        .info-modal-h4:first-of-type {
          margin-top: 0;
        }

        .info-modal-text {
          font-size: 15px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .info-modal-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
        }

        .info-modal-list li {
          font-size: 15px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 12px;
          position: relative;
          padding-left: 20px;
        }

        .info-modal-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #8B5E3C;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .info-assistance-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          .info-grid-container {
            padding: 0 20px;
          }
          .info-assistance-contacts {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .info-modal-body {
            padding: 40px 24px;
          }
        }
      `}</style>

      <section id="hotel-info" ref={sectionRef} className="hotel-info-section scroll-mt-32">
        <div className="info-header-wrapper">
          <span className="info-small-label">Hotel Information</span>
          <h2 className="info-main-title">HOTEL TERMS & CONDITIONS</h2>
          <div className="info-divider"></div>
        </div>

        <div className="info-grid-container">
          <div className="info-grid">
            {/* CARD 1: GUEST POLICIES */}
            <div className="info-card">
              <ShieldCheck size={36} className="info-card-icon" strokeWidth={1.5} />
              <h3 className="info-col-title">Guest Policies</h3>
              <p className="info-col-summary">Important guidelines regarding identification, check-in schedules, and family accommodation.</p>
              
              <ul className="info-list">
                <li>Government photo ID requirements strictly enforced.</li>
                <li>Check-in: 12:00 Hrs / Check-out: 11:00 Hrs.</li>
                <li>Early arrivals and late departure terms apply.</li>
              </ul>

              <button className="info-modal-btn" onClick={() => setActiveModal(1)} suppressHydrationWarning>
                VIEW DETAILS &#8594;
              </button>
            </div>

            {/* CARD 2: HOTEL SERVICES & FACILITIES */}
            <div className="info-card">
              <ConciergeBell size={36} className="info-card-icon" strokeWidth={1.5} />
              <h3 className="info-col-title">Services & Facilities</h3>
              <p className="info-col-summary">A comprehensive overview of the amenities and services provided for your comfort.</p>
              
              <ul className="info-list">
                <li>24x7 Reception & Travel Assistance desk.</li>
                <li>Round-the-clock In-Room Dining & Room Service.</li>
                <li>Complimentary high-speed Internet access.</li>
              </ul>

              <button className="info-modal-btn" onClick={() => setActiveModal(2)} suppressHydrationWarning>
                VIEW DETAILS &#8594;
              </button>
            </div>

            {/* CARD 3: RESERVATION & CANCELLATION */}
            <div className="info-card">
              <CalendarCheck size={36} className="info-card-icon" strokeWidth={1.5} />
              <h3 className="info-col-title">Reservation Rules</h3>
              <p className="info-col-summary">Detailed policies regarding booking cancellations, group retentions, and payment settlements.</p>
              
              <ul className="info-list">
                <li>48 hour zero-penalty cancellation rule.</li>
                <li>No-show and 24-hour charge policies.</li>
                <li>Group booking and conference retention rules.</li>
              </ul>

              <button className="info-modal-btn" onClick={() => setActiveModal(3)} suppressHydrationWarning>
                VIEW DETAILS &#8594;
              </button>
            </div>
          </div>

          {/* NEED ASSISTANCE MINI CARD */}
          <div className="help-section">
            <div className="info-assistance-text">
              <h4>Need Assistance?</h4>
              <p>Our concierge team is available round the clock to help clarify any policies or assist with your booking.</p>
            </div>
            
            <div className="info-assistance-contacts">
              <div className="info-contact-item" style={{ whiteSpace: 'nowrap' }}>
                <PhoneCall size={20} />
                <span>+91 7316611111</span>
              </div>
              <div className="info-contact-item">
                <Mail size={20} />
                <span>fom1@hotelwinway.com</span>
              </div>
              <a href="#contact" className="info-enquire-btn" style={{ marginTop: '8px' }}>ENQUIRE NOW</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CENTERED MODALS --- */}
      {activeModal === 1 && (
        <div 
          className="info-modal-overlay" 
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="info-modal-content" 
            onClick={e => e.stopPropagation()}
          >
              <button suppressHydrationWarning className="info-modal-close" onClick={() => setActiveModal(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="info-modal-body">
                <ShieldCheck size={48} className="info-modal-icon" strokeWidth={1} />
                <h3 className="info-modal-title">Guest Policies</h3>
                
                <h4 className="info-modal-h4">YOUR PRIVACY & IDENTIFICATION</h4>
                <ul className="info-modal-list">
                  <li>Government photo ID requirements are strictly enforced for all guests.</li>
                  <li>Foreign nationals must present a valid passport and visa upon arrival.</li>
                  <li>Indian citizens may use Aadhar, Driving License, or Voter ID.</li>
                </ul>
                
                <h4 className="info-modal-h4">CHECK-IN / CHECK-OUT POLICY</h4>
                <ul className="info-modal-list">
                  <li>Standard Check-in time: 12:00 Hrs.</li>
                  <li>Standard Check-out time: 11:00 Hrs.</li>
                </ul>

                <h4 className="info-modal-h4">EARLY ARRIVALS & LATE DEPARTURES</h4>
                <ul className="info-modal-list">
                  <li>Early check-in policy is subject strictly to room availability.</li>
                  <li>Arrivals before 07:00 AM will be billed from the previous night.</li>
                  <li>Early check-ins after 07:00 AM may incur a half-day charge.</li>
                  <li>Late checkout charges apply for departures after 11:00 Hrs.</li>
                </ul>
                
                <h4 className="info-modal-h4">FAMILY & EXTRA BEDS</h4>
                <ul className="info-modal-list">
                  <li>Children up to 8 years stay free when using existing bedding.</li>
                  <li>Extra bed policy: Additional mattresses are provided at standard supplemental charges.</li>
                </ul>
                
                <h4 className="info-modal-h4">HOTEL CONDITIONS</h4>
                <ul className="info-modal-list">
                  <li>The hotel reserves the right of admission and may refuse service at its discretion.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeModal === 2 && (
          <div 
            className="info-modal-overlay" 
            onClick={() => setActiveModal(null)}
          >
            <div 
              className="info-modal-content" 
              onClick={e => e.stopPropagation()}
            >
              <button suppressHydrationWarning className="info-modal-close" onClick={() => setActiveModal(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="info-modal-body">
                <ConciergeBell size={48} className="info-modal-icon" strokeWidth={1} />
                <h3 className="info-modal-title">Hotel Services & Facilities</h3>
                
                <h4 className="info-modal-h4">IN-ROOM AMENITIES</h4>
                <ul className="info-modal-list">
                  <li>Mini Refrigerator provided in all premium room categories.</li>
                  <li>Satellite Television with major national and international channels.</li>
                  <li>Complimentary Mineral Water replenished daily.</li>
                  <li>Tea / Coffee Maker provided with daily complimentary sachets.</li>
                  <li>Complimentary high-speed Internet access throughout the premises.</li>
                </ul>

                <h4 className="info-modal-h4">HOSPITALITY SERVICES</h4>
                <ul className="info-modal-list">
                  <li>24x7 Reception desk available for guest assistance.</li>
                  <li>Daily Housekeeping ensuring impeccable cleanliness.</li>
                  <li>Room Service & In-Room Dining operating round the clock.</li>
                  <li>Travel Assistance desk for local transport and airport transfers.</li>
                  <li>Foreign Currency Exchange services available at the front desk.</li>
                </ul>

                <p className="info-modal-text" style={{ fontStyle: 'italic', marginTop: '32px' }}>
                  Should you have any questions or require any further assistance regarding our facilities, our concierge team is always at your disposal.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeModal === 3 && (
          <div 
            className="info-modal-overlay" 
            onClick={() => setActiveModal(null)}
          >
            <div 
              className="info-modal-content" 
              onClick={e => e.stopPropagation()}
            >
              <button suppressHydrationWarning className="info-modal-close" onClick={() => setActiveModal(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="info-modal-body">
                <CalendarCheck size={48} className="info-modal-icon" strokeWidth={1} />
                <h3 className="info-modal-title">Reservation & Cancellation Policy</h3>
                
                <h4 className="info-modal-h4">CANCELLATION RULES</h4>
                <ul className="info-modal-list">
                  <li>48 hour cancellation rule: Bookings cancelled 48 hours prior to arrival incur no penalties.</li>
                  <li>24 hour cancellation charges: Cancellations within 24 hours of arrival will be billed for one full night.</li>
                  <li>No-show policy: Guests failing to arrive will be charged the total cost of the first night.</li>
                </ul>

                <h4 className="info-modal-h4">GROUP BOOKINGS</h4>
                <ul className="info-modal-list">
                  <li>Group booking rules apply for 5+ room booking requests.</li>
                  <li>Conference booking retention rules require a 50% non-refundable advance deposit.</li>
                </ul>

                <h4 className="info-modal-h4">SETTLEMENT & TAXES</h4>
                <ul className="info-modal-list">
                  <li>Settlement policy requires full payment upon check-in or prior to departure.</li>
                  <li>Retention charges will be strictly enforced as per the confirmed booking agreement.</li>
                  <li>All GST related notes: Taxes are applicable as per government regulations and are subject to change without prior notice.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
