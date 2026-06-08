import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Phone, Mail, ChevronRight, MapPin } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Experiences & Itineraries | Hotel Winway Indore',
  description: 'Curated heritage tours from Hotel Winway Indore — explore the Holkar Legacy Trail and Indore Temple Circuit with expert guided experiences.',
  alternates: { canonical: 'https://www.hotelwinway.com/experiences' },
};

const holkarStops = [
  { time: '10:00 am', place: 'Hotel pickup', detail: 'Depart from Hotel Winway' },
  { time: '10:30 am', place: 'Lal Bagh Palace Exterior', detail: '19th-century palatial residence with neoclassical architecture' },
  { time: '10:45 am', place: 'Lal Bagh Palace Sitting Room', detail: 'Opulent interiors with Italian marble and Belgian glass' },
  { time: '11:15 am', place: 'Lal Bagh Palace Banquet Hall', detail: 'Grand ballroom with spring-bounced floor for dancing' },
  { time: '12:30 pm', place: 'Chhatri Bagh', detail: 'Serene cenotaph gardens along the Khan River' },
  { time: '02:30 pm', place: 'Rajwada Exterior', detail: '200-year-old seven-storey Holkar palace' },
  { time: '03:00 pm', place: 'Rajwada Interior Museum', detail: 'Paintings, weapons, sculptures and Holkar memorabilia' },
  { time: '04:30 pm', place: 'Hotel drop-off', detail: 'Return to Hotel Winway' },
];

const templeStops = [
  { time: '6:00 am / 2:00 pm', place: 'Hotel pickup', detail: 'Depart from Hotel Winway' },
  { time: '6:30 am / 2:30 pm', place: 'Annapurna Temple Exterior', detail: 'South Indian gopuram-inspired entrance' },
  { time: '6:45 am / 2:45 pm', place: 'Annapurna Temple Deities', detail: 'Blessings from the Hindu goddess of nourishment' },
  { time: '8:00 am / 4:00 pm', place: 'Kaanch Mandir Exterior', detail: 'Jain temple adorned with intricate mirror work' },
  { time: '8:15 am / 4:15 pm', place: 'Kaanch Mandir Interior', detail: 'Breathtaking mirror mosaic craftsmanship' },
  { time: '9:30 am / 5:30 pm', place: 'Khajrana Ganesh Temple', detail: 'Idol with natural diamond-embedded eyes' },
  { time: '10:30 am / 6:30 pm', place: 'Bada Ganpati Temple', detail: 'One of the world\'s largest Lord Ganesha idols' },
  { time: '12:00 pm / 8:00 pm', place: 'Hotel drop-off', detail: 'Return to Hotel Winway' },
];

const templeTerms = [
  'Prior booking required — reservations at least 24 hours in advance',
  'All sightseeing tickets borne by guest',
  'Temple visit timings may vary depending on aarti schedules',
  'Guests are advised to dress modestly (shoulders and knees covered)',
  'Footwear must be removed before entering temple premises',
  'Photography may be restricted inside certain temples',
];

export default function ExperiencesPage() {
  return (
    <>
      <HeroSection
        title="Experiences & Itineraries"
        subtitle="Curated Journeys Through the Heart of Indore"
        imageSrc="/images/attractions/attraction-7.avif"
        imageAlt="Lal Bagh Palace Indore — Heritage trail from Hotel Winway"
        showScrollHint={false}
      />

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Intro */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Curated Journeys</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3 mb-4">
              Guided Experiences
            </h1>
            <p className="prose-luxury text-[#57585B] text-sm">
              Indore blends historical significance with a thriving contemporary culture. Our concierge
              team has curated immersive tours that reveal the city&apos;s most remarkable stories.
            </p>
          </div>

          {/* Holkar Legacy Trail */}
          <div id="holkar-legacy-trail" className="bg-white shadow-sm mb-12 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src="/images/attractions/attraction-7.avif"
                  alt="Holkar Legacy Trail — Lal Bagh Palace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                <div className="absolute top-6 left-6 bg-[#C9A96E] px-4 py-2">
                  <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase">Half-Day Tour</p>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <span className="section-label">Heritage & Culture</span>
                <h2 className="font-serif text-3xl text-[#1A1A1A] font-light mt-2 mb-4">Holkar Legacy Trail</h2>
                <div className="w-8 h-px bg-[#C9A96E] mb-5" />
                <p className="prose-luxury text-[#57585B] text-sm mb-6">
                  This thoughtfully-curated journey traces the legacy of the Holkar dynasty, whose patronage
                  shaped the city&apos;s architectural and cultural identity. From opulent palace architecture to
                  serene cenotaph gardens, the trail offers a glimpse into a lineage of leadership, compassion
                  and nation-building that continues to define Indore&apos;s character.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#F9F6F0] p-4">
                    <p className="text-[10px] text-[#8B8A84] uppercase tracking-wide mb-1">Duration</p>
                    <p className="text-sm font-medium text-[#1A1A1A]">10:00 am – 4:30 pm</p>
                  </div>
                  <div className="bg-[#F9F6F0] p-4">
                    <p className="text-[10px] text-[#8B8A84] uppercase tracking-wide mb-1">Suitable For</p>
                    <p className="text-sm font-medium text-[#1A1A1A]">Families, Corporate Groups</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#57585B]">
                    <Phone size={13} className="text-[#C9A96E]" />
                    <a href="tel:0731-661-1111" className="hover:text-[#C9A96E] transition-colors">0731-661-1111</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#57585B]">
                    <Mail size={13} className="text-[#C9A96E]" />
                    <a href="mailto:fom1@hotelwinway.com" className="hover:text-[#C9A96E] transition-colors">fom1@hotelwinway.com</a>
                  </div>
                </div>

                <p className="text-xs text-[#8B8A84] bg-amber-50 border border-amber-200 p-3">
                  Transportation charges: Contact concierge. Available all days except Mondays (palaces closed).
                </p>
              </div>
            </div>

            {/* Itinerary Timeline */}
            <div className="border-t border-gray-100 p-8 lg:p-12">
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-6">Tour Itinerary</h3>
              <div className="relative">
                <div className="absolute left-[86px] top-0 bottom-0 w-px bg-[#E8DDD0]" />
                <div className="space-y-5">
                  {holkarStops.map((stop, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-20 text-right flex-shrink-0">
                        <span className="text-xs text-[#C9A96E] font-semibold">{stop.time}</span>
                      </div>
                      <div className="relative flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-[#C9A96E] rounded-full border-2 border-white shadow" />
                      </div>
                      <div className="flex-1 pb-1">
                        <p className="font-medium text-sm text-[#1A1A1A]">{stop.place}</p>
                        <p className="text-xs text-[#8B8A84] mt-0.5">{stop.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Temple Circuit */}
          <div id="temple-circuit" className="bg-white shadow-sm scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                <Image
                  src="/images/attractions/attraction-14.avif"
                  alt="Indore Temple Circuit — Annapurna Temple"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-6 left-6 bg-[#C9A96E] px-4 py-2">
                  <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase">Morning or Evening</p>
                </div>
              </div>

              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <span className="section-label">Spiritual Heritage</span>
                <h2 className="font-serif text-3xl text-[#1A1A1A] font-light mt-2 mb-4">Indore Temple Circuit</h2>
                <div className="w-8 h-px bg-[#C9A96E] mb-5" />
                <p className="prose-luxury text-[#57585B] text-sm mb-6">
                  Reflecting the city&apos;s spiritual heritage, the itinerary traverses Indore&apos;s prominent temples,
                  offering an insight into local culture, traditions and mythological tales. Guests can witness
                  remarkable architecture and unique customs that lie at the heart of the community.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#F9F6F0] p-4">
                    <p className="text-[10px] text-[#8B8A84] uppercase tracking-wide mb-1">Timings</p>
                    <p className="text-sm font-medium text-[#1A1A1A]">6am–12pm or 2pm–8pm</p>
                  </div>
                  <div className="bg-[#F9F6F0] p-4">
                    <p className="text-[10px] text-[#8B8A84] uppercase tracking-wide mb-1">Suitable For</p>
                    <p className="text-sm font-medium text-[#1A1A1A]">Families, Senior Citizens</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#57585B]">
                    <Phone size={13} className="text-[#C9A96E]" />
                    <a href="tel:0731-661-1111" className="hover:text-[#C9A96E] transition-colors">0731-661-1111</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#57585B]">
                    <Mail size={13} className="text-[#C9A96E]" />
                    <a href="mailto:fom1@hotelwinway.com" className="hover:text-[#C9A96E] transition-colors">fom1@hotelwinway.com</a>
                  </div>
                </div>

                <div className="bg-[#F9F6F0] p-4 text-sm text-[#57585B] space-y-1.5">
                  <p className="font-semibold text-[#1A1A1A] text-xs uppercase tracking-wide mb-2">Important Notes</p>
                  {templeTerms.slice(0, 3).map((t) => (
                    <div key={t} className="flex items-start gap-2 text-xs">
                      <ChevronRight size={10} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Temple Timeline */}
            <div className="border-t border-gray-100 p-8 lg:p-12">
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-6">Tour Itinerary</h3>
              <div className="relative">
                <div className="absolute left-[110px] top-0 bottom-0 w-px bg-[#E8DDD0]" />
                <div className="space-y-5">
                  {templeStops.map((stop, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-24 text-right flex-shrink-0">
                        <span className="text-xs text-[#C9A96E] font-semibold leading-tight">{stop.time}</span>
                      </div>
                      <div className="relative flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-[#C9A96E] rounded-full border-2 border-white shadow" />
                      </div>
                      <div className="flex-1 pb-1">
                        <p className="font-medium text-sm text-[#1A1A1A]">{stop.place}</p>
                        <p className="text-xs text-[#8B8A84] mt-0.5">{stop.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
