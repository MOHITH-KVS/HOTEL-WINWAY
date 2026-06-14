'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeSection() {
  const ref = useRef(null);

  return (
    <section id="overview" className="section-padding bg-[#faf9f7] scroll-mt-32" ref={ref}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] card-image-zoom">
              <Image
                src="/images/lobby/lobby-1.jpeg"
                alt="Hotel Winway Lobby — Warm, welcoming reception"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#8d6346] text-white p-6 hidden lg:block">
              <p className="text-2xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>Est.</p>
              <p className="text-3xl font-semibold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>2010</p>
              <p className="text-xs tracking-[0.2em] uppercase mt-1 text-white/80">Indore</p>
            </div>
          </div>

          <div>
            <span className="section-label">Welcome to Hotel Winway</span>
            <h2 className="heading-mixed mt-4 mb-6">
              Where the Warmth of Malwa <strong>Meets Modern Luxury</strong>
            </h2>
            <div className="w-12 h-px bg-[#8d6346] mb-6" />
            <p className="body-md mb-4">
              At Hotel Winway, hospitality is more than a service — it is a tradition rooted in the warmth and culture of Malwa. Located in the heart of Indore, the hotel offers a harmonious blend of comfort, convenience and personalized attention.
            </p>
            <p className="body-md mb-4">
              Strategically situated on R.N.T. Marg, one of the city&apos;s most prominent commercial districts, Hotel Winway provides effortless access to business centres, educational institutions, shopping destinations and key transport hubs.
            </p>
            <p className="body-md mb-8">
              Whether you are visiting for business or leisure, our dedicated team ensures every stay is marked by thoughtful service, refined comfort and the genuine warmth that defines Malwa hospitality.
            </p>
            <Link href="/about" className="btn-ghost text-[12px]">
              Discover Our Story ›
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
