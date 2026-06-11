'use client';

import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactCTA() {
  const ref = useRef(null);

  return (
    <section
      id="contact"
      className="relative z-0 overflow-hidden bg-[#45443f] scroll-mt-32"
      style={{ paddingTop: '60px', paddingBottom: '80px' }}
      ref={ref}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <h2 style={{ color: '#FFFFFF', fontSize: '42px', fontFamily: '"Libre Baskerville", serif', fontWeight: '400', marginBottom: '20px', marginTop: '0' }}>
              HOTEL WINWAY
            </h2>
            <p style={{ color: '#CCCCCC', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', maxWidth: '400px' }}>
              Whether visiting for work, celebration or relaxation — our team is here to ensure your experience is seamless and rewarding.
            </p>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div className="w-11 h-11 border border-[#8d6346]/40 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#a67c5b]" />
                </div>
                <div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#888888', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase' }}>Reception 24/7</p>
                  <a href="tel:+910731-661-1111" style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '400', textDecoration: 'none' }}>0731-661-1111</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div className="w-11 h-11 border border-[#8d6346]/40 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#a67c5b]" />
                </div>
                <div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#888888', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:fom1@hotelwinway.com" style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '400', textDecoration: 'none' }}>fom1@hotelwinway.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <div className="w-11 h-11 border border-[#8d6346]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#a67c5b]" />
                </div>
                <div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#888888', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase' }}>Address</p>
                  <a href="https://maps.google.com/?q=Hotel+Winway+164+RNT+Marg+Indore" target="_blank" rel="noopener noreferrer" style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '400', textDecoration: 'none', display: 'block', lineHeight: '1.6' }}>
                    164/1 RNT Marg, Near Madhumilan Square,<br />South Tukoganj, Indore — 452001
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
