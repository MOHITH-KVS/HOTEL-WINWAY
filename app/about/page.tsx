import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, MapPin, Clock, Users, Star } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'About Us | Hotel Winway Indore',
  description: 'Learn about Hotel Winway — an elite business hotel on RNT Marg, Indore, reflecting the great hospitality of Malwa. Our story, philosophy and commitment to exceptional service.',
  alternates: { canonical: 'https://www.hotelwinway.com/about' },
};

const facilities = [
  '24×7 Reception & Housekeeping',
  'In-room Dining Service',
  'Mini Refrigerator in all rooms',
  'Complimentary WiFi throughout',
  'Travel Assistance & Currency Exchange',
  'Satellite Television (in-room)',
  'Multiple Dining Venues',
  'Banqueting & Conference Facilities',
  'Mineral Water (complimentary)',
  'Tea/Coffee Maker in all rooms',
  '20 mins from Airport',
  'Central City Location',
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Hotel Winway"
        subtitle="Hospitality Rooted in the Warmth of Malwa"
        imageSrc="/images/lobby/lobby-1.jpeg"
        imageAlt="Hotel Winway Reception Lobby Indore"
        showScrollHint={false}
      />

      {/* Hotel Story */}
      <section className="section-padding bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 mb-6 leading-tight">
                Welcome To<br />
                <em className="not-italic text-[#C9A96E]">Hotel Winway</em>
              </h1>
              <div className="w-12 h-px bg-[#C9A96E] mb-6" />
              <div className="space-y-4 prose-luxury text-[#57585B] text-sm">
                <p>
                  At Hotel Winway, hospitality is more than a service — it is a tradition rooted in the warmth and
                  culture of Malwa. Located in the heart of Indore, the hotel offers a harmonious blend of comfort,
                  convenience and personalized attention, creating experiences that are both memorable and meaningful.
                </p>
                <p>
                  Strategically situated on R.N.T. Marg, one of the city&apos;s most prominent commercial districts,
                  Hotel Winway provides effortless access to business centres, educational institutions, shopping
                  destinations and key transport hubs. Its central location, coupled with thoughtfully designed
                  spaces and attentive service, makes it an ideal choice for both business and pilgrimage travellers.
                </p>
                <p>
                  Whether you are visiting for work, celebration or relaxation, Hotel Winway welcomes you with
                  comfortable accommodations, delightful dining experiences and a commitment to making every
                  stay seamless and rewarding.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] card-image-zoom overflow-hidden">
                <Image
                  src="/images/facade/facade-1.png"
                  alt="Hotel Winway — Facade and Exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C9A96E] text-white p-6 hidden lg:block">
                <p className="font-serif text-4xl font-light">164/1</p>
                <p className="text-xs tracking-[0.2em] uppercase mt-1 text-white/80">RNT Marg, Indore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2014 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <span className="section-label">Our Philosophy</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-white mt-3 mb-6 max-w-3xl mx-auto leading-tight">
            Hospitality is a <em className="not-italic text-[#C9A96E]">Tradition</em>, Not Just a Service
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[#C9A96E]/40" />
            <div className="w-2 h-2 bg-[#C9A96E] rotate-45" />
            <div className="w-16 h-px bg-[#C9A96E]/40" />
          </div>
          <p className="text-[#8B8A84] max-w-2xl mx-auto text-sm leading-relaxed">
            We believe every guest deserves personalized attention and care. Our team&apos;s commitment
            to genuine warmth — inspired by Malwa&apos;s legendary hospitality — ensures each stay
            is not just comfortable, but truly memorable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Star size={24} />, title: 'Premium Quality', desc: 'World-class amenities and meticulous attention to detail' },
              { icon: <Users size={24} />, title: 'Personal Attention', desc: 'Every guest treated with warmth and individualized care' },
              { icon: <CheckCircle size={24} />, title: 'Commitment', desc: 'Consistent excellence in service, dining and comfort' },
            ].map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 p-8 text-center">
                <div className="text-[#C9A96E] flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl text-white font-light mb-3">{v.title}</h3>
                <p className="text-[#8B8A84] text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="section-label">Hotel Facilities</span>
            <h2 className="font-serif text-4xl font-light text-[#1A1A1A] mt-3">Services &amp; Amenities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white p-4 shadow-sm">
                <CheckCircle size={16} className="text-[#C9A96E] flex-shrink-0" />
                <span className="text-sm text-[#57585B]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Location</span>
              <h2 className="font-serif text-4xl font-light text-[#1A1A1A] mt-3 mb-6">Find Us</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A] text-sm mb-0.5">Address</p>
                    <p className="text-sm text-[#57585B]">164/1 RNT Marg, Near Madhumilan Square,<br />South Tukoganj, Indore — 452001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-[#C9A96E] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A] text-sm mb-0.5">Phone</p>
                    <a href="tel:+910731-661-1111" className="text-sm text-[#57585B] hover:text-[#C9A96E] transition-colors">0731-661-1111</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#C9A96E] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A] text-sm mb-0.5">Email</p>
                    <a href="mailto:fom1@hotelwinway.com" className="text-sm text-[#57585B] hover:text-[#C9A96E] transition-colors">fom1@hotelwinway.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock size={18} className="text-[#C9A96E] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A] text-sm mb-0.5">Reception</p>
                    <p className="text-sm text-[#57585B]">Open 24 hours, 7 days a week</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[['20 mins', 'Airport'], ['5 mins', 'Central Mall'], ['2.5 km', 'Rajwada Palace']].map(([val, label]) => (
                  <div key={label} className="bg-[#F9F6F0] p-4 border border-[#E8DDD0]">
                    <p className="font-serif text-xl text-[#C9A96E]">{val}</p>
                    <p className="text-xs text-[#8B8A84] mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-[480px] bg-[#F9F6F0] border border-[#E8DDD0] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6!2d75.8696!3d22.7179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHotel+Winway%2C+RNT+Marg%2C+Indore!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Winway Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
