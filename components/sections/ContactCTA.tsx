'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { openModal } = useEnquiryModal();

  return (
    <section
      id="contact"
      className="relative z-0 section-padding overflow-hidden bg-[#45443f] scroll-mt-32"
      ref={ref}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <span className="section-label text-[#a67c5b]">Get in Touch</span>
            <h2 className="heading-mixed text-white mt-4 mb-6">
              Plan Your Stay at <strong className="text-[#a67c5b]">Hotel Winway</strong>
            </h2>
            <div className="w-12 h-px bg-[#8d6346] mb-6" />
            <p className="body-lg text-white/70 mb-8 max-w-md">
              Whether visiting for work, celebration or relaxation — our team is here to ensure your experience is seamless and rewarding.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 border border-[#8d6346]/40 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#a67c5b]" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5 tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>Reception (24/7)</p>
                  <a href="tel:+910731-661-1111" className="text-white font-medium hover:text-[#a67c5b] transition-colors">0731-661-1111</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 border border-[#8d6346]/40 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#a67c5b]" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5 tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>Email</p>
                  <a href="mailto:fom1@hotelwinway.com" className="text-white font-medium hover:text-[#a67c5b] transition-colors">fom1@hotelwinway.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-[#8d6346]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#a67c5b]" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-0.5 tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>Address</p>
                  <a href="https://maps.google.com/?q=Hotel+Winway+164+RNT+Marg+Indore" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-[#a67c5b] transition-colors leading-relaxed">
                    164/1 RNT Marg, Near Madhumilan Square,<br />South Tukoganj, Indore — 452001
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
            className="bg-white/5 border border-white/10 p-8 lg:p-10"
          >
            <h3 className="heading-section text-white mb-6">Make an Enquiry</h3>
            <div className="space-y-3">
              <button type="button" onClick={() => openModal()} className="btn btn-accent w-full">
                <Mail size={16} /> Send Enquiry
              </button>
              <a href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway%2C%20Indore." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="tel:+910731-661-1111" className="btn btn-outline-light w-full">
                <Phone size={16} /> Call Now
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl text-[#a67c5b]" style={{ fontFamily: 'var(--font-display)' }}>12:00</p>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wide">Check-in</p>
              </div>
              <div>
                <p className="text-2xl text-[#a67c5b]" style={{ fontFamily: 'var(--font-display)' }}>11:00</p>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wide">Check-out</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
