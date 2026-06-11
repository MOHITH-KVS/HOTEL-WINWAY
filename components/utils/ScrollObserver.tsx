'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      {
        threshold: 0.12,   // trigger when 12% of section is visible
        rootMargin: '0px 0px -60px 0px'
      }
    );

    // Apply to all sections
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('section-animate');
      observer.observe(section);
    });

    // Apply to cards
    document.querySelectorAll('.room-card, .attraction-card, .dining-card, .amenity-card').forEach((card) => {
      card.classList.add('card-animate');
      observer.observe(card);
    });

    // Apply to headings
    document.querySelectorAll('h2, .section-label, .attr-label, .attr-title, .rooms-label, .rooms-title, .dining-label, .dining-title').forEach((heading) => {
      heading.classList.add('heading-animate');
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
