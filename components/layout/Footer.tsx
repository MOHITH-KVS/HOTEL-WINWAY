'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <style>{`
        .site-footer {
          background: #1a1a1a;
          color: #ccc;
          padding: 60px 0 0 0;
          box-sizing: border-box;
          width: 100%;
          overflow-x: hidden;
          font-family: var(--font-sans);
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          padding-bottom: 60px;
        }

        .footer-brand .footer-logo {
          font-size: 22px;
          letter-spacing: 0.2em;
          color: #fff;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .footer-brand-desc {
          font-size: 14px;
          line-height: 1.8;
          color: #aaa;
          margin-bottom: 24px;
          max-width: 300px;
        }

        .footer-contact {
          font-size: 14px;
          line-height: 1.8;
          color: #aaa;
          margin-bottom: 24px;
        }

        .footer-contact a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-contact a:hover {
          color: #C9A030;
        }

        .footer-socials {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .social-icon:hover {
          background: #C9A030;
          border-color: #C9A030;
          color: #fff;
          transform: translateY(-2px);
        }

        .footer-column h4 {
          font-size: 13px;
          letter-spacing: 0.2em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 16px;
        }

        .footer-links a {
          font-size: 14px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #C9A030;
        }

        .footer-book-text {
          font-size: 14px;
          color: #aaa;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .footer-btn {
          display: inline-block;
          background: #C9A030;
          color: #fff;
          padding: 14px 32px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s;
        }

        .footer-btn:hover {
          background: #a88526;
        }

        .footer-bottom {
          background: #111;
          padding: 24px 0;
          border-top: 1px solid #222;
        }

        .footer-bottom-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copyright,
        .footer-bottom-links {
          font-size: 13px;
          color: #888;
        }

        .footer-bottom-links a {
          color: #888;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-bottom-links a:hover {
          color: #C9A030;
        }

        .footer-bottom-links span {
          margin: 0 12px;
          color: #444;
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 60px 40px;
          }
          .footer-container, .footer-bottom-container {
            padding: 0 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .footer-container, .footer-bottom-container {
            padding: 0 24px;
          }
          .site-footer {
            padding-top: 60px;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
      <footer className="site-footer">
        <div className="footer-container">
          
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">HOTEL WINWAY</h3>
              <p className="footer-brand-desc">
                Experience the perfect blend of modern luxury and traditional Malwa hospitality in the heart of Indore.
              </p>
              <div className="footer-contact">
                <p>R.N.T. Marg, Indore, Madhya Pradesh<br/>India — 452 001</p>
                <p style={{ marginTop: '12px' }}>
                  <a href="tel:+917316611111">&#9990; 0731-661-1111</a><br/>
                  <a href="mailto:fom1@hotelwinway.com">&#9993; fom1@hotelwinway.com</a>
                </p>
              </div>
              <div className="footer-socials">
                <a href="#" className="social-icon" aria-label="Instagram">IG</a>
                <a href="#" className="social-icon" aria-label="Facebook">FB</a>
                <a href="#" className="social-icon" aria-label="LinkedIn">IN</a>
                <a href="#" className="social-icon" aria-label="YouTube">YT</a>
              </div>
            </div>

            <div className="footer-column">
              <h4>ROOMS &amp; SUITES</h4>
              <ul className="footer-links">
                <li><Link href="/rooms/standard-room">Standard Room</Link></li>
                <li><Link href="/rooms/deluxe-room">Deluxe Room</Link></li>
                <li><Link href="/rooms/junior-suite">Junior Suite</Link></li>
                <li><Link href="/rooms/presidential-suite">Presidential Suite</Link></li>
                <li><Link href="/rooms">View All Rooms</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>DINING</h4>
              <ul className="footer-links">
                <li><Link href="/dining/tiffin">Tiffin (Fine Dining)</Link></li>
                <li><Link href="/dining/the-deck">The Deck (Rooftop)</Link></li>
                <li><Link href="/dining/al-fresco">Al Fresco (Poolside)</Link></li>
                <li><Link href="/dining/cafe">Winway Cafe</Link></li>
                <li><Link href="/dining">View All Dining</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/events">Events &amp; Banquet</Link></li>
                <li><Link href="/local-attractions">Local Attractions</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-copyright">
              © 2026 Hotel Winway. All Rights Reserved.
            </div>
            <div className="footer-bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
