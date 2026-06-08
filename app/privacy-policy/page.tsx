import type { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hotel Winway Indore',
  description:
    'Read Hotel Winway\'s Privacy Policy — how we collect, use and protect your personal information when you visit or stay with us.',
  alternates: { canonical: 'https://www.hotelwinway.com/privacy-policy' },
};

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal identification information (name, email address, phone number, date of birth) provided during reservation or enquiry.',
      'Government-issued photo identity and address proof, required by law for all guests at check-in.',
      'Payment information processed securely through our payment partners — we do not store card details.',
      'Usage data collected automatically when you visit our website, including IP address, browser type and pages visited.',
      'Communication records from emails, WhatsApp messages or phone calls made to our team.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To process reservations, manage bookings and communicate confirmation, amendments or cancellations.',
      'To personalize your stay experience and address any special requests or requirements.',
      'To send relevant information about your reservation, hotel facilities and local attractions.',
      'To comply with legal obligations including identity verification and tax documentation requirements.',
      'To improve our website, services and communications based on feedback and usage patterns.',
      'We do not sell, rent or share your personal information with third parties for their marketing purposes.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration or disclosure.',
      'All sensitive information is transmitted using Secure Socket Layer (SSL) technology.',
      'Access to your personal information is restricted to authorized hotel staff who require it to perform their duties.',
      'Physical records containing personal information are stored securely and disposed of appropriately.',
    ],
  },
  {
    title: 'Cookies & Website Analytics',
    content: [
      'Our website may use cookies — small data files stored on your device — to enhance your browsing experience.',
      'We may use analytics tools to understand how visitors interact with our website and to improve its content.',
      'You may configure your browser to reject cookies, though some features of our website may not function correctly as a result.',
      'We do not use cookies to collect personally identifiable information without your knowledge.',
    ],
  },
  {
    title: 'Guest Privacy at the Hotel',
    content: [
      'Guest room information, personal details and stay records are treated as strictly confidential.',
      'We will not disclose your presence at our hotel or any information about your stay to unauthorized persons.',
      'CCTV surveillance is operational in public areas of the hotel for security purposes, in compliance with applicable laws.',
      'Guest records are retained for the period required by law and then securely destroyed.',
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites.',
      'Booking platforms or travel agents that direct guests to our hotel may have their own privacy policies.',
      'Payment processing is handled by certified third-party payment gateways governed by their own privacy and security standards.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You have the right to request access to the personal information we hold about you.',
      'You may request correction of inaccurate information or deletion of your data where legally permissible.',
      'You may withdraw consent for non-essential communications at any time by contacting us.',
      'To exercise any of these rights, please contact us at fom1@hotelwinway.com or 0731-661-1111.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'Hotel Winway reserves the right to update this Privacy Policy at any time.',
      'Changes will be posted on this page with a revised effective date.',
      'We encourage guests to review this policy periodically to stay informed about how we protect your information.',
      'Continued use of our website or services following changes constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="bg-[#1A1A1A] pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
        <span className="section-label">Legal</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-white mt-3">
          Privacy Policy
        </h1>
        <p className="text-[#8B8A84] text-sm mt-4 max-w-lg mx-auto leading-relaxed">
          Your privacy is important to us. This policy explains how Hotel Winway collects,
          uses and protects your personal information.
        </p>
        <p className="text-[#555] text-xs mt-4">
          Effective Date: January 1, 2024
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
              For any privacy-related queries, please contact us at{' '}
              <a href="tel:0731-661-1111" className="text-[#C9A96E] font-medium hover:underline">
                0731-661-1111
              </a>
              {' '}or{' '}
              <a href="mailto:fom1@hotelwinway.com" className="text-[#C9A96E] font-medium hover:underline">
                fom1@hotelwinway.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
