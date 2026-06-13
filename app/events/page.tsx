import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactCTA from '@/components/sections/ContactCTA';
import EventsClient from './EventsClient';

export const metadata: Metadata = {
  title: 'Events & Banquet | Hotel Winway Indore',
  description: 'Host your wedding, conference or celebration at Hotel Winway\'s premium banquet hall in Indore. Capacity up to 120 guests.',
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <EventsClient />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
