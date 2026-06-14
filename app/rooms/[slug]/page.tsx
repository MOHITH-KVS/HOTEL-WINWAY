import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Tv, Coffee, Bath, Maximize2, Users, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';
import RoomGalleryClient from '@/components/rooms/RoomGalleryClient';

const roomData = {
  'standard-room': {
    name: 'Standard Room',
    tagline: 'Effortless Comfort',
    size: '24 sq.m / 260 sq.ft',
    guests: 'Up to 2 guests',
    bed: 'Double Bed',
    description: `Experience effortless comfort in our thoughtfully appointed Standard Room. Designed with contemporary elegance and practical convenience in mind, the room features inviting interiors, comfortable bedding and modern amenities to ensure a pleasant and relaxing stay.

Whether visiting Indore for business or leisure, guests can enjoy a welcoming atmosphere, attentive service and all the essentials required for a comfortable and memorable experience.`,
    highlights: [
      'Stylish interiors with modern flooring',
      'A well-designed work desk for business or leisure',
      'Inviting seating for ultimate relaxation',
      'Breakfast included',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-speed Internet' },
      { icon: 'tv', label: 'Flat-screen TV' },
      { icon: 'bath', label: 'Premium Toiletries' },
      { icon: 'coffee', label: 'Tea/Coffee Maker' },
      { icon: 'ac', label: 'Air Conditioning' },
      { icon: 'room-service', label: '24/7 Room Service' },
      { icon: 'housekeeping', label: 'Daily Housekeeping' },
      { icon: 'water', label: 'Mineral Water' },
    ],
    images: [
      '/images/rooms/standard-room/standard-1.jpeg',
      '/images/rooms/standard-room/standard-2.jpeg',
      '/images/rooms/standard-room/standard-3.jpeg',
    ],
    heroImage: '/images/rooms/standard-room/standard-1.jpeg',
  },
  'deluxe-room': {
    name: 'Deluxe Room',
    tagline: 'Elevated Comfort',
    size: '29 sq.m / 316 sq.ft',
    guests: 'Up to 2 guests',
    bed: 'King-size Bed',
    description: `Enjoy an elevated stay experience in our Deluxe Room, thoughtfully designed to offer enhanced comfort and contemporary style. Featuring spacious interiors, elegant furnishings and modern amenities, the room provides the perfect setting to relax and recharge.

Whether travelling for business or leisure, guests can enjoy a seamless blend of comfort, convenience and warm hospitality in the heart of Indore.`,
    highlights: [
      'Spacious interiors with contemporary design',
      'Comfortable king-size bed for a restful stay',
      'Thoughtfully designed workspace for added convenience',
      'Breakfast included',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-speed Internet' },
      { icon: 'tv', label: 'Flat-screen TV' },
      { icon: 'bath', label: 'Premium Toiletries' },
      { icon: 'coffee', label: 'Tea/Coffee Maker' },
      { icon: 'ac', label: 'Air Conditioning' },
      { icon: 'room-service', label: '24/7 Room Service' },
      { icon: 'housekeeping', label: 'Daily Housekeeping' },
      { icon: 'water', label: 'Mineral Water' },
    ],
    images: [
      '/images/rooms/deluxe-room/deluxe-1.jpeg',
      '/images/rooms/deluxe-room/deluxe-2.jpeg',
      '/images/rooms/deluxe-room/deluxe-3.jpeg',
      '/images/rooms/deluxe-room/deluxe-4.jpeg',
      '/images/rooms/deluxe-room/deluxe-5.jpeg',
    ],
    heroImage: '/images/rooms/deluxe-room/deluxe-1.jpeg',
  },
  'junior-suite': {
    name: 'Junior Suite',
    tagline: 'Refined Retreat',
    size: '31 sq.m / 340 sq.ft',
    guests: 'Up to 2 guests',
    bed: 'King-size Bed',
    description: `Indulge in elevated comfort and added luxury in our Junior Suite. Thoughtfully designed with spacious interiors and elegant furnishings, the suite offers a refined retreat for discerning travellers.

Unwind in the relaxing bathtub, enjoy refreshments from the minibar, and experience modern amenities crafted to make every stay comfortable, convenient and memorable.`,
    highlights: [
      'Spacious suite with elegant interiors',
      'Private bathtub for a relaxing experience',
      'Well-stocked minibar for added convenience (chargeable)',
      'Breakfast included',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-speed Internet' },
      { icon: 'tv', label: 'Flat-screen TV' },
      { icon: 'bath', label: 'Premium Toiletries' },
      { icon: 'bath-tub', label: 'Private Bathtub' },
      { icon: 'minibar', label: 'Minibar (chargeable)' },
      { icon: 'coffee', label: 'Tea/Coffee Maker' },
      { icon: 'ac', label: 'Air Conditioning' },
      { icon: 'room-service', label: '24/7 Room Service' },
    ],
    images: [
      '/images/rooms/junior-suite/junior-1.jpeg',
      '/images/rooms/junior-suite/junior-2.jpeg',
    ],
    heroImage: '/images/rooms/junior-suite/junior-1.jpeg',
  },
  'presidential-suite': {
    name: 'Presidential Suite',
    tagline: 'Pinnacle of Luxury',
    size: '66 sq.m / 716 sq.ft',
    guests: 'Up to 2 guests',
    bed: 'King-size Bed',
    description: `Experience the pinnacle of luxury in our Presidential Suite, thoughtfully designed for guests who appreciate exceptional comfort and sophistication. Featuring expansive living spaces, elegant interiors and premium amenities, the suite offers an elevated stay experience.

Relax in the indulgent bathtub, enjoy refreshments from the minibar and unwind in an atmosphere of refined elegance, complemented by personalized hospitality and impeccable attention to detail.`,
    highlights: [
      'Expansive suite with separate living area',
      'Luxurious bathtub for ultimate relaxation',
      'Premium minibar and in-room amenities (chargeable)',
      'Breakfast included',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-speed Internet' },
      { icon: 'tv', label: 'Flat-screen TV' },
      { icon: 'bath', label: 'Premium Toiletries' },
      { icon: 'bath-tub', label: 'Luxury Bathtub' },
      { icon: 'minibar', label: 'Premium Minibar (chargeable)' },
      { icon: 'living', label: 'Separate Living Area' },
      { icon: 'ac', label: 'Air Conditioning' },
      { icon: 'room-service', label: '24/7 Room Service' },
    ],
    images: Array.from({ length: 26 }, (_, i) => `/images/rooms/presidential-suite/ps-${i + 1}.jpeg`).map(src => src.replace('ps-4.jpeg', 'ps-4.png')),
    heroImage: '/images/rooms/presidential-suite/ps-1.jpeg',
  },
};

type RoomSlug = keyof typeof roomData;

export async function generateStaticParams() {
  return Object.keys(roomData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const room = roomData[slug as RoomSlug];
  if (!room) return {};
  return {
    title: `${room.name} | Hotel Winway Indore`,
    description: `Stay in the ${room.name} at Hotel Winway Indore — ${room.size}, ${room.bed}. ${room.description.split('\n')[0]}`,
    alternates: { canonical: `https://www.hotelwinway.com/rooms/${slug}` },
  };
}

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi size={18} />,
  tv: <Tv size={18} />,
  bath: <Bath size={18} />,
  coffee: <Coffee size={18} />,
  ac: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M12 8v8M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/></svg>,
  'room-service': <Coffee size={18} />,
  housekeeping: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3l18 18M3 3h5l7 7"/></svg>,
  water: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l5.196 9H6.804z M7 11l5 9 5-9"/></svg>,
  'bath-tub': <Bath size={18} />,
  minibar: <Coffee size={18} />,
  living: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="10" rx="1"/><path d="M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>,
};

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = roomData[slug as RoomSlug];

  if (!room) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hotelwinway.com' },
      { '@type': 'ListItem', position: 2, name: 'Rooms & Suites', item: 'https://www.hotelwinway.com/rooms' },
      { '@type': 'ListItem', position: 3, name: room.name, item: `https://www.hotelwinway.com/rooms/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={room.heroImage}
          alt={`${room.name} at Hotel Winway Indore`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-xs mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link>
            <ChevronRight size={12} />
            <span className="text-white">{room.name}</span>
          </nav>
          <span className="text-[#8d6346] text-xs tracking-[0.25em] uppercase mb-2">{room.tagline}</span>
          <h1 className="font-serif text-5xl lg:text-7xl text-white font-light leading-tight">{room.name}</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Room Size', value: room.size, icon: <Maximize2 size={20} className="text-[#8d6346]" /> },
                  { label: 'Guests', value: room.guests, icon: <Users size={20} className="text-[#8d6346]" /> },
                  { label: 'Bed Type', value: room.bed, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d6346" strokeWidth="2"><path d="M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/><path d="M2 20v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="M2 15h20"/></svg> },
                ].map((spec) => (
                  <div key={spec.label} className="bg-white p-5 text-center shadow-sm">
                    <div className="flex justify-center mb-2">{spec.icon}</div>
                    <p className="font-serif text-sm text-[#1A1A1A]">{spec.value}</p>
                    <p className="text-[10px] text-[#8B8A84] mt-0.5 tracking-wide uppercase">{spec.label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">About this Room</h2>
                <div className="w-8 h-px bg-[#8d6346] mb-5" />
                {room.description.split('\n\n').map((para, i) => (
                  <p key={i} className="prose-luxury text-[#57585B] text-sm mb-3 last:mb-0">{para}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Room Highlights</h2>
                <div className="w-8 h-px bg-[#8d6346] mb-5" />
                <ul className="space-y-3">
                  {room.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#8d6346] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#57585B]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Amenities</h2>
                <div className="w-8 h-px bg-[#8d6346] mb-5" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {room.amenities.map((a) => (
                    <div key={a.label} className="flex flex-col items-center text-center p-4 bg-[#F9F6F0] gap-2">
                      <div className="text-[#8d6346]">{amenityIcons[a.icon] || <Coffee size={18} />}</div>
                      <span className="text-xs text-[#57585B] leading-tight">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Gallery</h2>
                <div className="w-8 h-px bg-[#8d6346] mb-5" />
                <RoomGalleryClient images={room.images} roomName={room.name} />
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Enquiry Sidebar — no price */}
              <div className="bg-[#1A1A1A] text-white p-8 sticky top-24">
                <p className="text-[#8d6346] text-xs tracking-[0.2em] uppercase mb-2">{room.tagline}</p>
                <h3 className="font-serif text-2xl font-light mb-4">{room.name}</h3>

                <div className="space-y-3 py-4 border-y border-[#333] mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8A84]">Check-in</span>
                    <span className="text-white">12:00 Noon</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8A84]">Check-out</span>
                    <span className="text-white">11:00 AM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B8A84]">Breakfast</span>
                    <span className="text-[#8d6346]">Included</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full block text-center bg-[#8d6346] hover:bg-[#7a5539] text-white py-4 text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300 mb-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Contact Us
                </Link>

                <a
                  href="https://wa.me/919752411015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 mt-3 bg-[#25D366] text-white py-3.5 text-sm font-medium hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Enquiry
                </a>

                <a
                  href="tel:+910731-661-1111"
                  className="w-full flex items-center justify-center gap-2 mt-3 border border-[#444] text-[#8B8A84] py-3.5 text-sm hover:border-[#8d6346] hover:text-[#8d6346] transition-all"
                >
                  <Phone size={16} />
                  0731-661-1111
                </a>
              </div>

              {/* Policies */}
              <div className="bg-[#F9F6F0] p-6 border border-[#E8DDD0]">
                <h4 className="font-serif text-lg text-[#1A1A1A] mb-3">Policies</h4>
                <ul className="space-y-2 text-xs text-[#57585B]">
                  <li>• Cancellation: 48 hrs prior to check-in</li>
                  <li>• Children under 6: Free (same room)</li>
                  <li>• Government ID required at check-in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />

      {/* Mobile Sticky CTA Bar — no price display */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-2xl">
        <div className="flex items-center gap-0 max-w-full">
          <a
            href={`tel:+910731-661-1111`}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 border-r border-gray-100 text-[#57585B] hover:text-[#8d6346] transition-colors"
          >
            <Phone size={18} />
            <span className="text-[9px] font-semibold tracking-wide uppercase">Call</span>
          </a>
          <a
            href="https://wa.me/919752411015"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 border-r border-gray-100 text-[#25D366] hover:text-[#1da851] transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-[9px] font-semibold tracking-wide uppercase">WhatsApp</span>
          </a>
          <Link
            href="/contact"
            className="flex-1 py-3 bg-[#8d6346] text-center text-white text-[11px] font-bold tracking-wide uppercase"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom padding so sticky bar doesn't overlap content on mobile */}
      <div className="h-14 lg:hidden" />
    </>
  );
}
