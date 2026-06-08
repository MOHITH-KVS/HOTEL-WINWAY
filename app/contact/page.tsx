import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import EnquireButton from '@/components/ui/EnquireButton';

export const metadata: Metadata = {
  title: 'Contact Us | Hotel Winway Indore',
  description: 'Get in touch with Hotel Winway Indore. Call us, WhatsApp, or send an enquiry form. Located on RNT Marg, South Tukoganj, Indore — 452001.',
  alternates: { canonical: 'https://www.hotelwinway.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd Love to Hear From You"
        imageSrc="/images/facade/facade-1.png"
        imageAlt="Hotel Winway — Contact and Location"
        showScrollHint={false}
      />

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div>
              <span className="section-label">Get in Touch</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 mb-6">
                Hotel Winway<br />
                <em className="not-italic text-[#C9A96E]">Indore</em>
              </h1>
              <div className="w-12 h-px bg-[#C9A96E] mb-8" />

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 bg-white p-5 shadow-sm">
                  <div className="w-10 h-10 bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">Address</p>
                    <p className="text-sm text-[#57585B] leading-relaxed">
                      164/1 RNT Marg, Near Madhumilan Square,<br />
                      South Tukoganj, Indore (M.P.) — 452001
                    </p>
                    <a
                      href="https://maps.google.com/?q=Hotel+Winway+RNT+Marg+Indore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#C9A96E] mt-2 inline-block hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 shadow-sm">
                  <div className="w-10 h-10 bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">Phone</p>
                    <a href="tel:+910731-661-1111" className="text-sm text-[#57585B] hover:text-[#C9A96E] transition-colors block">
                      0731-661-1111
                    </a>
                    <a href="tel:+919752411015" className="text-sm text-[#57585B] hover:text-[#C9A96E] transition-colors block">
                      +91-9752411015
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 shadow-sm">
                  <div className="w-10 h-10 bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">Email</p>
                    <a href="mailto:fom1@hotelwinway.com" className="text-sm text-[#57585B] hover:text-[#C9A96E] transition-colors block">
                      fom1@hotelwinway.com
                    </a>
                    <a href="mailto:rdm@hotelwinway.com" className="text-sm text-[#57585B] hover:text-[#C9A96E] transition-colors block">
                      rdm@hotelwinway.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 shadow-sm">
                  <div className="w-10 h-10 bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">Check-in / Check-out</p>
                    <p className="text-sm text-[#57585B]">Check-in: 12:00 Noon</p>
                    <p className="text-sm text-[#57585B]">Check-out: 11:00 AM</p>
                    <p className="text-xs text-[#8B8A84] mt-1">Reception open 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+910731-661-1111"
                  className="flex items-center justify-center gap-2 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919752411015?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Hotel%20Winway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Map + Enquiry */}
            <div className="space-y-6">
              {/* Google Map */}
              <div className="relative h-72 bg-[#E8DDD0] overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6!2d75.8696!3d22.7179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHotel+Winway!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Winway Map"
                />
              </div>

              {/* Enquiry Panel */}
              <div className="bg-[#1A1A1A] p-8 text-white">
                <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-2">Quick Enquiry</p>
                <h2 className="font-serif text-2xl font-light mb-4">Send Us a Message</h2>
                <p className="text-[#8B8A84] text-sm mb-6">
                  Fill out the enquiry form and our team will get back to you promptly via WhatsApp or email.
                </p>
                <EnquireButton />

                <div className="mt-6 pt-6 border-t border-[#333] grid grid-cols-2 gap-4 text-center">
                  {[
                    ['20 min', 'From Airport'],
                    ['Walking', 'To Central Mall'],
                    ['2.5 km', 'To Rajwada'],
                    ['24/7', 'Reception'],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <p className="font-serif text-lg text-[#C9A96E]">{val}</p>
                      <p className="text-[10px] text-[#8B8A84] mt-0.5 uppercase tracking-wide">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
