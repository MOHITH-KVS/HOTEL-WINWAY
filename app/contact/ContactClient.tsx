'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';

export default function ContactClient() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-up-element').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* Core Layout & Spacing */
        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }
        
        .section-padding {
          padding: 100px 0;
        }

        /* Typography */
        .luxury-serif {
          font-family: var(--font-serif, "Playfair Display", serif);
          font-weight: 300;
        }
        
        .luxury-sans {
          font-family: var(--font-sans, "Inter", sans-serif);
        }

        /* Textures & Backgrounds */
        .bg-texture-light {
          background-color: #FAF9F6;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(201,169,110,0.03) 10px,
            rgba(201,169,110,0.03) 20px
          );
        }

        .bg-texture-dark {
          background-color: #1a1a1a;
          background-image: radial-gradient(rgba(201,169,110,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Animations */
        .fade-up-element {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .fade-up-element.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Section 2: Contact Info + Map */
        .contact-grid {
          display: grid;
          grid-template-columns: 40% 60%;
          gap: 0;
          background: #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          border-radius: 8px;
          overflow: hidden;
        }

        .contact-info-panel {
          padding: 60px 50px;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-info-panel h2 {
          font-size: 36px;
          color: #111;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .contact-info-panel .subtitle {
          font-size: 13px;
          letter-spacing: 3px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 40px;
          font-weight: 600;
        }

        .info-block {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid #eee;
        }

        .info-block:last-child {
          border-bottom: none;
        }

        .info-icon {
          color: #C9A030;
          margin-top: 2px;
        }

        .info-content h4 {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .info-content p, .info-content a {
          font-size: 15px;
          color: #333;
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .info-content a:hover {
          color: #C9A030;
        }

        .contact-map-panel {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 500px;
        }

        .contact-map-panel iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }

        /* Section 3: Information Strip */
        .info-strip {
          background: #111;
          padding: 40px 0;
        }

        .info-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .info-strip-item {
          text-align: center;
          position: relative;
        }

        .info-strip-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -15px;
          top: 20%;
          height: 60%;
          width: 1px;
          background: rgba(255,255,255,0.1);
        }

        .info-strip-item h5 {
          font-size: 11px;
          letter-spacing: 2px;
          color: #888;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .info-strip-item p {
          font-size: 16px;
          color: #fff;
          font-family: var(--font-serif);
          transition: color 0.3s;
        }

        .info-strip-item:hover p {
          color: #C9A030;
        }

        /* Section 4: Send Enquiry */
        .enquiry-section {
          padding: 100px 0;
          color: #fff;
        }

        .enquiry-grid {
          display: grid;
          grid-template-columns: 35% 65%;
          gap: 60px;
        }

        .enquiry-text-panel h2 {
          font-size: 42px;
          color: #fff;
          margin-bottom: 24px;
        }

        .enquiry-text-panel p {
          font-size: 15px;
          color: #aaa;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .enquiry-mini-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .enquiry-mini-contact a, .enquiry-mini-contact span {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }

        .enquiry-mini-contact a:hover {
          color: #C9A030;
        }

        .enquiry-form-panel {
          background: rgba(255,255,255,0.03);
          padding: 50px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .form-full {
          grid-column: 1 / -1;
        }

        .form-group {
          position: relative;
        }

        .form-control {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 12px 0;
          font-size: 15px;
          color: #fff;
          outline: none;
          transition: border-color 0.3s;
        }

        .form-control:focus {
          border-bottom-color: #C9A030;
        }

        .form-control::placeholder {
          color: #666;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
        }

        .btn-luxury-gold {
          background: linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%);
          color: #fff;
          border: none;
          padding: 18px 40px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          width: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(201, 160, 48, 0.2);
        }

        .btn-luxury-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(201, 160, 48, 0.4);
          background: linear-gradient(135deg, #E6C24F 0%, #C08D16 100%);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-grid, .enquiry-grid {
            grid-template-columns: 1fr;
          }
          .contact-map-panel {
            min-height: 400px;
          }
        }

        @media (max-width: 768px) {
          .info-strip-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px 20px;
          }
          .info-strip-item:not(:last-child)::after {
            display: none;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .contact-info-panel, .enquiry-form-panel {
            padding: 40px 24px;
          }
          .enquiry-text-panel h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <HeroSection
        title="CONTACT US"
        subtitle="We'd Love to Hear From You"
        locationLabel="INDORE, MADHYA PRADESH"
        imageSrc="/images/facade/facade-1.png"
        imageAlt="Hotel Winway — Contact and Location"
      />

      {/* Section 2: Contact Info + Map */}
      <section className="section-padding bg-texture-light">
        <div className="contact-container">
          <div className="contact-grid fade-up-element">
            <div className="contact-info-panel">
              <span className="subtitle">GET IN TOUCH</span>
              <h2 className="luxury-serif">Hotel Winway<br/>Indore</h2>
              
              <div className="info-block mt-6">
                <MapPin className="info-icon" size={20} />
                <div className="info-content">
                  <h4>Address</h4>
                  <p>164/1 R.N.T. Marg, Near Madhumilan Square,<br/>South Tukoganj, Indore (M.P.) — 452 001</p>
                </div>
              </div>
              
              <div className="info-block">
                <Phone className="info-icon" size={20} />
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+9107316611111">0731-661-1111</a><br/>
                    <a href="tel:+919752411015">+91 97524 11015</a>
                  </p>
                </div>
              </div>

              <div className="info-block">
                <Mail className="info-icon" size={20} />
                <div className="info-content">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:fom1@hotelwinway.com">fom1@hotelwinway.com</a><br/>
                    <a href="mailto:rdm@hotelwinway.com">rdm@hotelwinway.com</a>
                  </p>
                </div>
              </div>

              <div className="info-block" style={{ borderBottom: 'none' }}>
                <Clock className="info-icon" size={20} />
                <div className="info-content">
                  <h4>Check-In / Check-Out</h4>
                  <p>Check-in: 12:00 Noon<br/>Check-out: 11:00 AM</p>
                </div>
              </div>

            </div>
            
            <div className="contact-map-panel">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6!2d75.8696!3d22.7179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHotel+Winway!5e0!3m2!1sen!2sin!4v1"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Winway Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Information Strip */}
      <section className="info-strip fade-up-element">
        <div className="contact-container">
          <div className="info-strip-grid">
            <div className="info-strip-item">
              <h5>CHECK-IN</h5>
              <p>12:00 PM</p>
            </div>
            <div className="info-strip-item">
              <h5>CHECK-OUT</h5>
              <p>11:00 AM</p>
            </div>
            <div className="info-strip-item">
              <h5>RECEPTION</h5>
              <p>24 / 7</p>
            </div>
            <div className="info-strip-item">
              <h5>LOCATION</h5>
              <p>R.N.T. Marg, Indore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Send Enquiry */}
      <section className="enquiry-section bg-texture-dark fade-up-element">
        <div className="contact-container">
          <div className="enquiry-grid">
            
            <div className="enquiry-text-panel">
              <span className="info-content" style={{fontSize: '11px', letterSpacing: '2px', color: '#C9A030', display: 'block', marginBottom: '16px', fontWeight: 600}}>CONTACT OUR TEAM</span>
              <h2 className="luxury-serif">We await your<br/>arrival.</h2>
              <p>
                Whether you are planning a grand event, a corporate stay, or a peaceful weekend getaway, our dedicated team is here to assist you with personalized recommendations and bookings.
              </p>
              
              <div className="enquiry-mini-contact">
                <a href="tel:+9107316611111"><Phone size={16} color="#C9A030"/> 0731-661-1111</a>
                <a href="mailto:fom1@hotelwinway.com"><Mail size={16} color="#C9A030"/> fom1@hotelwinway.com</a>
                <span><MapPin size={16} color="#C9A030"/> R.N.T. Marg, Indore, M.P.</span>
              </div>
            </div>

            <div className="enquiry-form-panel">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Full Name *" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Phone Number *" required />
                  </div>
                  <div className="form-group form-full">
                    <input type="email" className="form-control" placeholder="Email Address *" required />
                  </div>
                  <div className="form-group form-full">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="form-group form-full">
                    <textarea className="form-control" placeholder="Your Message *" required></textarea>
                  </div>
                </div>
                <button type="submit" className="btn-luxury-gold">SEND ENQUIRY</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
