import type { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hotel Winway Indore',
  description: 'Review Hotel Winway\'s terms and conditions including cancellation policy, check-in/out times, hotel services and guest policies.',
  alternates: { canonical: 'https://www.hotelwinway.com/terms-and-conditions' },
};

const sections = [
  {
    title: 'Your Privacy',
    content: [
      'In keeping with the local legislative regulations, we request all guests to carry a government photo identity with address proof to present on check-in.',
      'Foreign nationals are required to present their valid passport and visa.',
      'Indian nationals can present any government issued photo identity card e.g. Driving License, Passport, Voter\'s ID card, Aadhar Card etc.',
    ],
  },
  {
    title: 'Conditions',
    content: [
      'If you have made a request for a specific bed type or smoking preference, we\'ll try our best to accommodate it.',
      'Need an extra bed in your room? No problem, we can set it up at Rs. 1,200 plus applicable tax.',
      'Kids stay free! Two children below the age of 6 years stay for free in the same room.',
    ],
  },
  {
    title: 'Guarantee and Cancellation Policy',
    content: [
      'Please cancel before 48 hours prior to the check-in date, otherwise one night\'s room rate will be charged.',
      'If rooms are not cancelled 15 days before the date of arrival (group booking of more than 5 rooms), full amount will be charged as retention.',
      'If you don\'t show up or choose to check-out early, one night\'s room rate will be charged.',
      'One night\'s room charge will be levied in case of reservation cancelled within 24 hours prior to check-in.',
      'In case of non-arrival or cancellation on the same day, 100% of the stay amount would be levied.',
      'For groups of 5 rooms or more: cancellation/amendment within 30 days — 1 night retention. Within 15 days — 100% of total bill.',
      'All accounts to be settled by the guest at the time of check-out.',
    ],
  },
  {
    title: 'Check-in / Check-out Policy',
    content: [
      'Check-in: 12:00 Hrs | Check-out: 11:00 Hrs',
      'Early check-in and late check-out are subject to availability.',
      'Late check-out up to 13:00 hrs: INR 1,000 per charge.',
      'Late check-out between 13:00 – 17:00 hrs: INR 2,000 per charge. After 17:00 hrs: full day tariff.',
      'All arrivals prior to 07:00 am billed from the previous night.',
      'Early check-ins after 07:00 am will be charged 50% of the room rate if rooms are available.',
    ],
  },
  {
    title: 'Hotel Services & Facilities',
    content: [
      '24×7 reception, housekeeping and room service.',
      'In-room dining, mini refrigerator, satellite television, mineral water and tea/coffee maker.',
      'Complimentary internet in the room.',
      'Travel assistance and currency exchange available.',
    ],
  },
  {
    title: 'GST & Billing',
    content: [
      'Please provide your GST number with full address to update on the invoice. GST number cannot be updated after the guest checks out.',
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the check-in time at Hotel Winway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Check-in is at 12:00 Noon. Early check-in is subject to availability.' },
    },
    {
      '@type': 'Question',
      name: 'What is the check-out time at Hotel Winway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Check-out is at 11:00 AM. Late check-out is subject to availability and additional charges.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cancellation policy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Free cancellation up to 48 hours before check-in. One night charge applies for cancellations within 24 hours or no-shows.' },
    },
    {
      '@type': 'Question',
      name: 'Do children stay free at Hotel Winway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Two children below the age of 6 years stay for free in the same room as parents.' },
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header Banner */}
      <div className="bg-[#1A1A1A] pt-32 pb-16 px-6 text-center">
        <span className="section-label">Legal</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-white mt-3">Terms &amp; Conditions</h1>
        <p className="text-[#8B8A84] text-sm mt-4 max-w-lg mx-auto">
          Please read our policies carefully to ensure a smooth and enjoyable stay at Hotel Winway.
        </p>
      </div>

      <section className="section-padding bg-[#F9F6F0]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">{section.title}</h2>
                <div className="w-8 h-px bg-[#C9A96E] mb-5" />
                <ul className="space-y-3">
                  {section.content.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#57585B] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#C9A96E]/10 border border-[#C9A96E]/30 p-6 text-center">
            <p className="text-sm text-[#57585B]">
              Should you have any questions, please feel free to reach out to us at{' '}
              <a href="tel:0731-661-1111" className="text-[#C9A96E] font-medium hover:underline">0731-661-1111</a>
              {' '}or{' '}
              <a href="mailto:fom1@hotelwinway.com" className="text-[#C9A96E] font-medium hover:underline">fom1@hotelwinway.com</a>
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
