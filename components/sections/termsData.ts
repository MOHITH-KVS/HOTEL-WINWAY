import { 
  Calendar, CheckCircle, Clock, Fingerprint, CreditCard, 
  XCircle, Home, Utensils, Users, Globe, Shield, 
  AlertTriangle, UserCheck, Settings, Phone
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface TermSection {
  id: string;
  title: string;
  icon: LucideIcon;
  intro: string;
  items: string[];
}

export const TERMS_SECTIONS: TermSection[] = [
  {
    id: 'reservations',
    title: 'Reservations & Enquiries',
    icon: Calendar,
    intro: 'Guidelines for making room and venue reservations at Hotel Winway.',
    items: [
      'All reservations are subject to availability at the time of booking.',
      'Reservations can be made directly through our official website, by phone, or via email.',
      'A valid credit card or advance deposit may be required to guarantee your reservation.',
      'Special requests (such as early check-in, specific room views, or dietary requirements) are subject to availability and cannot be guaranteed unless explicitly confirmed in writing.'
    ]
  },
  {
    id: 'booking-confirmation',
    title: 'Booking Confirmation Policies',
    icon: CheckCircle,
    intro: 'Information regarding the formalization and guarantee of your stay.',
    items: [
      'A booking is considered confirmed only upon receipt of a valid confirmation number sent by the hotel.',
      'For advance purchase rates, full payment must be received at the time of booking, and these are strictly non-refundable.',
      'The hotel reserves the right to pre-authorize the provided credit card prior to arrival.',
      'Any discrepancies in the confirmation details must be brought to the management\'s attention within 24 hours of receipt.'
    ]
  },
  {
    id: 'check-in-out',
    title: 'Check-In & Check-Out Rules',
    icon: Clock,
    intro: 'Standard timings and procedures for guest arrivals and departures.',
    items: [
      'Standard Check-In time is 14:00 hours (2:00 PM).',
      'Standard Check-Out time is 12:00 hours (12:00 PM) noon.',
      'Early check-in and late check-out requests are subject to room availability and may incur additional charges.',
      'Guests extending their stay beyond the confirmed check-out time without prior approval will be charged for an additional night.'
    ]
  },
  {
    id: 'identification',
    title: 'Guest Identification',
    icon: Fingerprint,
    intro: 'Mandatory documentation required by local authorities and hotel policy.',
    items: [
      'As per government regulations, all guests (including accompanying members) must present a valid original photo ID upon check-in.',
      'Indian nationals must provide an Aadhar Card, Driving License, Voter ID, or Passport. PAN cards are not accepted as valid proof of address/identity for check-in.',
      'Foreign nationals must present a valid Passport with a valid Visa.',
      'Failure to provide valid identification will result in the immediate cancellation of the booking without a refund.'
    ]
  },
  {
    id: 'payment',
    title: 'Payment & Billing Policies',
    icon: CreditCard,
    intro: 'Accepted methods of settlement and billing procedures.',
    items: [
      'We accept all major credit/debit cards, UPI, net banking, and cash payments (within regulatory limits).',
      'All outstanding balances must be cleared in full at the time of check-out.',
      'Corporate billings to company accounts must be pre-approved in writing via a formal letter of authorization.',
      'Applicable government taxes and service charges will be added to the final bill as per prevailing local laws.'
    ]
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Modification',
    icon: XCircle,
    intro: 'Terms regarding the modification or cancellation of guaranteed bookings.',
    items: [
      'Standard bookings must be cancelled at least 48 hours prior to the arrival date to avoid a one-night retention charge.',
      'No-shows will incur a 100% penalty charge equivalent to the first night of the stay.',
      'Non-refundable rates, promotional bookings, and group bookings are subject to their specific, stricter cancellation policies stated at the time of booking.',
      'Modifications to stay dates are treated as new bookings and are subject to current availability and rates.'
    ]
  },
  {
    id: 'room-usage',
    title: 'Room Usage Guidelines',
    icon: Home,
    intro: 'Rules to ensure a safe and comfortable environment for all guests.',
    items: [
      'Rooms are intended strictly for accommodation purposes. Organizing parties, commercial activities, or photo shoots without prior permission is strictly prohibited.',
      'The maximum occupancy per room cannot be exceeded. Additional guests must be registered at the front desk and may be subject to extra bed charges.',
      'Hotel Winway is a non-smoking property. Smoking in rooms will result in a deep-cleaning penalty fee.',
      'Outside food and beverages are heavily restricted in guest rooms for hygiene and safety reasons.'
    ]
  },
  {
    id: 'dining',
    title: 'Dining & Facility Usage',
    icon: Utensils,
    intro: 'Policies regarding the use of our restaurants, cafe, and amenities.',
    items: [
      'Table reservations at our dining outlets (Tiffin, The Deck, Al Fresco, Cafe) are recommended, especially during weekends and public holidays.',
      'A smart-casual dress code is expected in all public dining areas.',
      'Management reserves the right to refuse service to any guest causing a disturbance to other patrons.',
      'Outside food and alcohol are strictly not permitted in any public or dining areas of the hotel.'
    ]
  },
  {
    id: 'banquet',
    title: 'Conference & Banquet',
    icon: Users,
    intro: 'Conditions applicable to event hosting and venue bookings.',
    items: [
      'Venue bookings are confirmed only upon the receipt of a signed contract and the stipulated advance deposit.',
      'The client is responsible for any damage caused to the venue or hotel property by their guests or contracted vendors.',
      'Use of loud music, DJs, or external sound systems must comply with local municipal noise regulations and hotel time limits.',
      'Final guest counts must be provided 48 hours prior to the event for catering preparations.'
    ]
  },
  {
    id: 'website',
    title: 'Website Usage Conditions',
    icon: Globe,
    intro: 'Terms governing your interaction with the Hotel Winway digital platforms.',
    items: [
      'The content, images, and branding on this website are the exclusive property of Hotel Winway and may not be reproduced without written consent.',
      'We strive to ensure all information is accurate; however, the hotel is not liable for typographical errors or pricing discrepancies.',
      'The booking engine is provided for legitimate reservations only. Speculative, false, or fraudulent bookings are strictly prohibited.',
      'Links to third-party websites are provided for convenience, and the hotel holds no responsibility for their content.'
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Data Usage',
    icon: Shield,
    intro: 'How we collect, protect, and utilize your personal information.',
    items: [
      'Personal data collected during the booking process is used exclusively for fulfilling your reservation and providing hotel services.',
      'We do not sell, rent, or distribute your personal information to third parties without your explicit consent, except where required by law.',
      'Our digital platforms employ industry-standard encryption to protect your payment and personal details.',
      'By staying at the hotel, you consent to the use of CCTV surveillance in public areas for security purposes.'
    ]
  },
  {
    id: 'liability',
    title: 'Liability Disclaimer',
    icon: AlertTriangle,
    intro: 'Limitations of the hotel\'s legal liabilities and responsibilities.',
    items: [
      'The hotel is not liable for the loss, damage, or theft of valuables left unattended in guest rooms or public areas. Electronic safes are provided in all rooms.',
      'Guests park their vehicles at the hotel premises entirely at their own risk.',
      'The hotel shall not be held liable for any failure to fulfill its services due to circumstances beyond its control (Force Majeure), including natural disasters, government actions, or utility failures.',
      'Any liability of the hotel is strictly limited to the total cost of the guest\'s booking.'
    ]
  },
  {
    id: 'responsibilities',
    title: 'Guest Responsibilities',
    icon: UserCheck,
    intro: 'Expected conduct to ensure a harmonious environment for everyone.',
    items: [
      'Guests are expected to conduct themselves in a respectable manner and not cause nuisance or annoyance within the hotel premises.',
      'Any damage caused to hotel property, fixtures, or fittings by the guest or their visitors will be charged to the guest\'s account.',
      'Hazardous goods, illegal drugs, and weapons are strictly prohibited on the property.',
      'Pets are not allowed on the hotel premises.'
    ]
  },
  {
    id: 'management',
    title: 'Management Rights',
    icon: Settings,
    intro: 'The operational rights retained by the Hotel Winway management.',
    items: [
      'Management reserves the right of admission and may refuse accommodation to any person without providing a reason.',
      'The hotel reserves the right to amend, modify, or change these terms and conditions at any time without prior notice.',
      'In case of any dispute, the decision of the Hotel Winway management shall be deemed final and binding.',
      'All disputes are subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.'
    ]
  },
  {
    id: 'contact',
    title: 'Contact Information',
    icon: Phone,
    intro: 'How to reach us for clarifications or policy inquiries.',
    items: [
      'For any questions regarding these terms, please contact our Front Desk or Management team.',
      'Phone: +91 731 6611111 | +91 97524 11003',
      'Email: fom1@hotelwinway.com',
      'Address: 164/1, RNT Marg, Near Madhumilan Square, Indore, Madhya Pradesh 452001, India.'
    ]
  }
];
