'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useEnquiryModal } from '@/components/ui/EnquiryModalProvider';

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { openModal } = useEnquiryModal();

  return (
    <section
      className="relative z-0 section-padding overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2014 50%, #1A1A1A 100%)' }}
    >
      {/* Gold ornament lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <span className="section-label">Get in Touch</span>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light text-white mt-4 mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Plan Your Stay at<br />
              <em className="not-italic text-[#C9A96E]">Hotel Winway</em>
            </h2>

            <div className="w-12 h-px bg-[#C9A96E] mb-6" />

            <p className="text-[#8B8A84] text-sm leading-relaxed mb-8 max-w-md">
              Whether visiting for work, celebration or relaxation — our team is here to
              ensure your experience is seamless and rewarding. Reach us directly:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#C9A96E]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B8A84] mb-0.5">Reception (24/7)</p>
                  <a href="tel:+910731-661-1111" className="text-white font-medium hover:text-[#C9A96E] transition-colors">
                    0731-661-1111
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#C9A96E]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B8A84] mb-0.5">Email</p>
                  <a href="mailto:fom1@hotelwinway.com" className="text-white font-medium hover:text-[#C9A96E] transition-colors">
                    fom1@hotelwinway.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#C9A96E]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B8A84] mb-0.5">Address</p>
                  <a
                    href="https://maps.google.com/?q=Hotel+Winway+164+RNT+Marg+Indore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-[#C9A96E] transition-colors leading-relaxed"
                  >
                    164/1 RNT Marg, Near Madhumilan Square,<br />
                    South Tukoganj, Indore — 452001
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-[#ffffff08] border border-[#ffffff10] p-8">
              <p className="font-serif text-2xl text-white font-light mb-6">Make an Enquiry</p>

              <div className="space-y-4">
                <button
                  onClick={() => openModal()}
                  className="w-full flex items-center justify-center gap-3 bg-[#C9A96E] hover:bg-[#b8955a] text-white py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:shadow-xl"
                >
                  <Mail size={16} />
                  Send Enquiry Form
                </button>

                <a
                  href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway%2C%20Indore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white py-4 text-sm font-semibold tracking-[0.1em] uppercase transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+910731-661-1111"
                  className="w-full flex items-center justify-center gap-3 border border-white/20 hover:border-[#C9A96E] text-white py-4 text-sm font-medium tracking-[0.05em] uppercase transition-all duration-300 hover:text-[#C9A96E]"
                >
                  <Phone size={16} />
                  Call 0731-661-1111
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-[#ffffff10]">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-serif text-2xl text-[#C9A96E]">12:00</p>
                    <p className="text-xs text-[#8B8A84] mt-0.5">Check-in</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-[#C9A96E]">11:00</p>
                    <p className="text-xs text-[#8B8A84] mt-0.5">Check-out</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
