import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Hotel Winway Indore',
  description: 'Get in touch with Hotel Winway Indore. Call us, WhatsApp, or send an enquiry form. Located on RNT Marg, South Tukoganj, Indore — 452001.',
  alternates: { canonical: 'https://www.hotelwinway.com/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
