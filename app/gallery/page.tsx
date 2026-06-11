import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SecondaryNav from '@/components/sections/SecondaryNav';
import ContactCTA from '@/components/sections/ContactCTA';
import GalleryCarousel from '@/components/sections/GalleryCarousel';

export const metadata: Metadata = {
  title: 'Gallery | Hotel Winway Indore',
  description: 'Explore the elegance of Hotel Winway through stunning imagery. View our facade, luxurious rooms, exquisite dining venues and versatile banquet halls.',
  alternates: { canonical: 'https://www.hotelwinway.com/gallery' },
};

const hotelImages = [
  { src: '/images/facade/facade-1.png', label: 'HOTEL FACADE' },
  { src: '/images/facade/facade-2.png', label: 'HOTEL EXTERIOR' },
  { src: '/images/facade/facade-3.jpeg', label: 'HOTEL ENTRANCE' },
  { src: '/images/facade/facade-4.jpeg', label: 'HOTEL BUILDING' },
  { src: '/images/facade/facade-5.jpeg', label: 'HOTEL EXTERIOR' },
  { src: '/images/lobby/lobby-1.jpeg', label: 'RECEPTION LOBBY' }
];

const roomsImages = [
  { src: '/images/rooms/standard-room/standard-1.jpeg', label: 'STANDARD ROOM' },
  { src: '/images/rooms/standard-room/standard-2.jpeg', label: 'STANDARD ROOM' },
  { src: '/images/rooms/standard-room/standard-3.jpeg', label: 'STANDARD ROOM' },
  { src: '/images/rooms/deluxe-room/deluxe-1.jpeg', label: 'DELUXE ROOM' },
  { src: '/images/rooms/deluxe-room/deluxe-2.jpeg', label: 'DELUXE ROOM' },
  { src: '/images/rooms/deluxe-room/deluxe-3.jpeg', label: 'DELUXE ROOM' },
  { src: '/images/rooms/deluxe-room/deluxe-4.jpeg', label: 'DELUXE ROOM' },
  { src: '/images/rooms/deluxe-room/deluxe-5.jpeg', label: 'DELUXE ROOM' },
  { src: '/images/rooms/junior-suite/junior-1.jpeg', label: 'JUNIOR SUITE' },
  { src: '/images/rooms/junior-suite/junior-2.jpeg', label: 'JUNIOR SUITE' },
  { src: '/images/rooms/presidential-suite/ps-1.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-2.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-3.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-4.png', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-5.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-6.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-7.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-8.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-9.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-10.jpeg', label: 'PRESIDENTIAL SUITE' },
  { src: '/images/rooms/presidential-suite/ps-11.jpeg', label: 'PRESIDENTIAL SUITE' }
];

const diningImages = [
  { src: '/images/dining/tiffin/tiffin-1.jpeg', label: 'TIFFIN' },
  { src: '/images/dining/tiffin/tiffin-2.jpeg', label: 'TIFFIN' },
  { src: '/images/dining/tiffin/tiffin-3.jpeg', label: 'TIFFIN' },
  { src: '/images/dining/tiffin/tiffin-4.jpeg', label: 'TIFFIN' },
  { src: '/images/dining/tiffin/tiffin-5.jpeg', label: 'TIFFIN' },
  { src: '/images/dining/tiffin/tiffin-6.jpeg', label: 'TIFFIN' },
  { src: '/images/dining/tiffin/tiffin-7.jpeg', label: 'TIFFIN' },
  { src: '/images/dining/the-deck/deck-1.jpeg', label: 'THE DECK' },
  { src: '/images/dining/the-deck/deck-2.jpeg', label: 'THE DECK' },
  { src: '/images/dining/the-deck/deck-3.jpeg', label: 'THE DECK' },
  { src: '/images/dining/the-deck/deck-4.jpeg', label: 'THE DECK' },
  { src: '/images/dining/alfresco/alfresco-1.jpeg', label: 'ALFRESCO' },
  { src: '/images/dining/alfresco/alfresco-card.jpeg', label: 'ALFRESCO' },
  { src: '/images/dining/food/food-1.jpeg', label: 'FOOD & BEVERAGES' },
  { src: '/images/dining/food/food-2.jpeg', label: 'FOOD & BEVERAGES' },
  { src: '/images/dining/cafe/cafe-1.jpeg', label: 'CAFÉ AREA' },
  { src: '/images/dining/cafe/cafe-2.jpeg', label: 'CAFÉ AREA' }
];

const banquetImages = [
  { src: '/images/dining/banquet/banquet-1.jpeg', label: 'BANQUET HALL' },
  { src: '/images/dining/banquet/banquet-2.jpeg', label: 'BANQUET HALL' },
  { src: '/images/dining/banquet/banquet-3.jpeg', label: 'BANQUET HALL' },
  { src: '/images/dining/banquet/banquet-4.jpeg', label: 'BANQUET HALL' },
  { src: '/images/dining/banquet/banquet-5.jpeg', label: 'BANQUET HALL' },
  { src: '/images/dining/banquet/banquet-6.jpeg', label: 'BANQUET HALL' },
  { src: '/images/dining/banquet/banquet-7.jpeg', label: 'BANQUET HALL' }
];

export default function GalleryPage() {
  return (
    <>
      <style>{`
        .gallery-intro {
          background-color: #FAF9F6;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(201,169,110,0.03) 10px,
            rgba(201,169,110,0.03) 20px
          );
          padding: 80px 24px;
          text-align: center;
        }

        .gallery-intro-heading {
          margin-bottom: 24px;
        }

        .gallery-intro-line1 {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 24px;
          letter-spacing: 0.15em;
          color: #6b5a4e;
          text-transform: uppercase;
          display: block;
        }

        .gallery-intro-line2 {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 28px;
          letter-spacing: 0.1em;
          color: #C9A030;
          text-transform: uppercase;
          display: block;
          margin-top: 8px;
        }

        .gallery-intro-desc {
          max-width: 700px;
          margin: 0 auto;
          font-size: 15px;
          line-height: 1.8;
          color: #666;
        }

        @media (max-width: 768px) {
          .gallery-intro {
            padding: 60px 20px;
          }
          .gallery-intro-line1 {
            font-size: 18px;
          }
          .gallery-intro-line2 {
            font-size: 24px;
          }
        }
      `}</style>

      <HeroSection
        title="GALLERY"
        subtitle="A Visual Journey Through Hotel Winway"
        locationLabel="INDORE, MADHYA PRADESH"
        imageSrc="/images/facade/facade-5.jpeg"
        imageAlt="Hotel Winway Indore Exterior"
      />

      <SecondaryNav />

      {/* Intro Heading Section */}
      <section className="gallery-intro">
        <h1 className="gallery-intro-heading">
          <span className="gallery-intro-line1">A Visual Journey Through</span>
          <span className="gallery-intro-line2">Hotel Winway</span>
        </h1>
        <p className="gallery-intro-desc">
          Explore the elegance of Hotel Winway through stunning imagery, capturing the essence of warm hospitality, thoughtful design, and unforgettable moments.
        </p>
      </section>

      {/* Gallery Sections */}
      <GalleryCarousel title="HOTEL" items={hotelImages} darkBackground={false} />
      <GalleryCarousel title="ROOMS & SUITES" items={roomsImages} darkBackground={true} />
      <GalleryCarousel title="DINING" items={diningImages} darkBackground={false} />
      <GalleryCarousel title="BANQUET & EVENTS" items={banquetImages} darkBackground={true} />

      {/* Footer handles bottom part natively in layout.tsx */}
      <ContactCTA />
    </>
  );
}
