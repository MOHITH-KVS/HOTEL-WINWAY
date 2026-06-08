import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import GalleryPageClient from '@/components/gallery/GalleryPageClient';

export const metadata: Metadata = {
  title: 'Gallery | Hotel Winway Indore',
  description: 'Explore the Hotel Winway photo gallery — rooms, dining, banquets, local attractions and hotel facade in Indore.',
  alternates: { canonical: 'https://www.hotelwinway.com/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Gallery"
        subtitle="Visual Stories from Hotel Winway"
        imageSrc="/images/facade/facade-1.png"
        imageAlt="Hotel Winway Indore Gallery"
        showScrollHint={false}
      />

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="section-label">Visual Stories</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1A1A] mt-3">Photo Gallery</h1>
          </div>
          <GalleryPageClient />
        </div>
      </section>
    </>
  );
}
