import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollObserver from "@/components/utils/ScrollObserver";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hotelwinway.com"),
  title: {
    default: "Hotel Winway Indore | Luxury Business Hotel on RNT Marg",
    template: "%s | Hotel Winway Indore",
  },
  description:
    "Experience world-class hospitality at Hotel Winway, Indore. Located on RNT Marg in the heart of the city, we offer luxurious rooms, exquisite dining and personalized service. Book your stay today.",
  keywords: [
    "Hotel Winway",
    "Indore hotel",
    "luxury hotel Indore",
    "business hotel Indore",
    "hotel RNT Marg Indore",
    "best hotel Indore",
    "hotel near Madhumilan Square",
    "Indore accommodation",
    "hotel South Tukoganj",
  ],
  authors: [{ name: "Hotel Winway" }],
  creator: "Hotel Winway",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hotelwinway.com",
    siteName: "Hotel Winway Indore",
    title: "Hotel Winway Indore | Luxury Business Hotel",
    description:
      "Experience world-class hospitality at Hotel Winway, Indore — where the warmth of Malwa meets modern luxury.",
    images: [
      {
        url: "/images/facade/facade-1.png",
        width: 1200,
        height: 630,
        alt: "Hotel Winway Indore - Facade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Winway Indore | Luxury Business Hotel",
    description:
      "Experience world-class hospitality at Hotel Winway, Indore — where the warmth of Malwa meets modern luxury.",
    images: ["/images/facade/facade-1.png"],
    site: "@hotelwinway",
    creator: "@hotelwinway",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.hotelwinway.com",
  },
  verification: {
    google: "hotel-winway-verification",
  },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hotel Winway",
  description:
    "Hotel Winway is an elite & exquisite business hotel that reflects the great hospitality of Malwa & offers world class amenities & services.",
  url: "https://www.hotelwinway.com",
  logo: "https://www.hotelwinway.com/images/logo.png",
  image: "https://www.hotelwinway.com/images/facade/facade-1.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "164/1 RNT Marg, Near Madhumilan Square, South Tukoganj",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.7179",
    longitude: "75.8696",
  },
  telephone: "+91-0731-661-1111",
  email: "fom1@hotelwinway.com",
  starRating: {
    "@type": "Rating",
    ratingValue: "4",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Conference Room", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
    { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk", value: true },
  ],
  hasMap: "https://maps.google.com/?q=Hotel+Winway+Indore",
  sameAs: [
    "https://www.facebook.com/HotelWinway",
    "https://www.instagram.com/hotelwinway",
    "https://x.com/hotelwinway",
    "https://www.pinterest.com/hotelwinway",
  ],
  priceRange: "₹₹",
  checkinTime: "12:00",
  checkoutTime: "11:00",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hotelwinway.com",
  name: "Hotel Winway",
  image: "https://www.hotelwinway.com/images/facade/facade-1.png",
  telephone: "+91-0731-661-1111",
  email: "fom1@hotelwinway.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "164/1 RNT Marg, Near Madhumilan Square, South Tukoganj",
    addressLocality: "Indore",
    addressRegion: "MP",
    postalCode: "452001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.7179",
    longitude: "75.8696",
  },
  url: "https://www.hotelwinway.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        
        <main className="relative z-0">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <ScrollObserver />
      </body>
    </html>
  );
}
