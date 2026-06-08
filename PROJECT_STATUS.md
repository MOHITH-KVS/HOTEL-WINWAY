# Hotel Winway — Project Status

> **Recovery File** — Update this document after every major milestone.  
> Last Updated: 2026-06-08  
> Stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Lucide Icons · Framer Motion · GSAP · Embla Carousel · React Hook Form · Zod

---

## Tech Stack & Configuration

| Item | Detail |
|---|---|
| Framework | Next.js 16.2.7 (App Router) |
| Styling | Tailwind CSS v4 + custom CSS in `globals.css` |
| Fonts | Cormorant Garamond (serif) + DM Sans (sans) via Google Fonts |
| Icons | Lucide React v1.17 |
| Carousel | Embla Carousel React v8.6 |
| Animation | Framer Motion v12 + GSAP v3 |
| Forms | React Hook Form v7 + Zod v4 |
| Base URL | `https://www.hotelwinway.com` |
| Color Palette | Gold `#C9A96E`, Dark `#1A1A1A`, Cream `#F9F6F0`, Warm `#E8DDD0` |

---

## ✅ Completed Pages

### 1. Homepage (`/`)
- **File:** `app/page.tsx`
- **Status:** ✅ Complete
- **Sections:** Hero → Welcome → Rooms Preview → Dining Preview → Attractions → Experiences → Gallery Preview → Contact CTA
- **SEO:** Title, description, canonical URL, BreadcrumbList JSON-LD schema
- **Notes:** Full homepage assembly using all section components

---

### 2. Rooms Listing (`/rooms`)
- **File:** `app/rooms/page.tsx`
- **Status:** ✅ Complete
- **Content:** 4 room types listed (Standard, Deluxe, Junior Suite, Presidential Suite) with alternating image-text layout, price badge, feature tags, "View Room Details" CTA
- **SEO:** Title, description, canonical URL

---

### 3. Room Detail Pages (`/rooms/[slug]`)
- **File:** `app/rooms/[slug]/page.tsx`
- **Status:** ✅ Complete
- **Rooms:** `standard-room`, `deluxe-room`, `junior-suite`, `presidential-suite`
- **Content:** Hero image, breadcrumb nav, quick specs (size/guests/bed), description, highlights, amenities grid, gallery (with lightbox via `RoomGalleryClient`), sticky booking sidebar (price + enquiry + WhatsApp + phone), policies card
- **SEO:** `generateStaticParams`, `generateMetadata` per room, BreadcrumbList JSON-LD

---

### 4. Dining Listing (`/dining`)
- **File:** `app/dining/page.tsx`
- **Status:** ✅ Complete
- **Venues:** Tiffin, The Deck, Alfresco, Banquets & Events — alternating layout with timings, avg cost, "View Details" + "Reserve Table" CTAs
- **SEO:** Title, description, canonical URL

---

### 5. Dining Detail Pages (`/dining/[slug]`)
- **File:** `app/dining/[slug]/page.tsx`
- **Status:** ✅ Complete
- **Venues:** `tiffin`, `the-deck`, `alfresco`, `banquets-events`
- **Content:** Hero, breadcrumb, about section, gallery grid, capacity table (banquets only), sticky sidebar with timings + cost + reserve/WhatsApp CTAs
- **SEO:** `generateStaticParams`, `generateMetadata` per venue

---

### 6. Gallery (`/gallery`)
- **File:** `app/gallery/page.tsx`
- **Status:** ✅ Complete
- **Content:** Hero section + `GalleryPageClient` (filterable masonry gallery)
- **SEO:** Title, description, canonical URL

---

### 7. About (`/about`)
- **File:** `app/about/page.tsx`
- **Status:** ✅ Complete
- **Sections:** Hero, Our Story (with facade image), Philosophy (dark section with 3 pillars), Facilities grid (12 items), Location (map iframe + quick stats), Contact CTA
- **SEO:** Title, description, canonical URL

---

### 8. Contact (`/contact`)
- **File:** `app/contact/page.tsx`
- **Status:** ✅ Complete
- **Content:** Hero, contact info cards (address, phone, email, check-in/out), Google Maps iframe, quick enquiry panel with `EnquireButton`, WhatsApp link
- **SEO:** Title, description, canonical URL

---

### 9. Local Attractions (`/local-attractions`)
- **File:** `app/local-attractions/page.tsx`
- **Status:** ✅ Complete
- **Attractions:** Lal Bagh Palace, Rajwada Palace, Sarafa Bazaar, Chappan Dukan — each with dual images, distance/duration stats, closed-day warning, concierge link
- **Content:** Also includes Terms & Conditions for guided tours at bottom
- **SEO:** Title, description, canonical URL

---

### 10. Experiences & Itineraries (`/experiences`)
- **File:** `app/experiences/page.tsx`
- **Status:** ✅ Complete
- **Tours:** Holkar Legacy Trail (half-day, 8 stops) + Indore Temple Circuit (morning/evening, 8 stops)
- **Content:** Tour overview, timeline itinerary, contact/booking info, Terms & Conditions notes
- **SEO:** Title, description, canonical URL

---

### 11. Terms & Conditions (`/terms-and-conditions`)
- **File:** `app/terms-and-conditions/page.tsx`
- **Status:** ✅ Complete
- **Sections:** Privacy, Conditions, Cancellation Policy, Check-in/Check-out Policy, Hotel Services, GST & Billing
- **SEO:** Title, description, canonical URL, FAQPage JSON-LD schema

---

## ⏳ Pending Pages

> None currently identified. All planned pages appear to be built.

| Page | Route | Priority | Notes |
|---|---|---|---|
| — | — | — | Review with client if additional pages are needed (e.g., `/spa`, `/offers`, `/blog`) |

---

## ✅ Completed Components

### Layout Components (`components/layout/`)

| Component | File | Status | Notes |
|---|---|---|---|
| Header | `Header.tsx` | ✅ Complete | Transparent-to-solid scroll, mobile hamburger menu, full nav with dropdowns |
| Footer | `Footer.tsx` | ✅ Complete | Logo, nav links, social icons, contact info, copyright |

### Section Components (`components/sections/`)

| Component | File | Status | Used On |
|---|---|---|---|
| HeroSection | `HeroSection.tsx` | ✅ Complete | All major pages |
| WelcomeSection | `WelcomeSection.tsx` | ✅ Complete | Homepage |
| RoomsPreview | `RoomsPreview.tsx` | ✅ Complete | Homepage |
| DiningPreview | `DiningPreview.tsx` | ✅ Complete | Homepage |
| AttractionsSection | `AttractionsSection.tsx` | ✅ Complete | Homepage |
| ExperiencesSection | `ExperiencesSection.tsx` | ✅ Complete | Homepage |
| GalleryPreview | `GalleryPreview.tsx` | ✅ Complete | Homepage |
| ContactCTA | `ContactCTA.tsx` | ✅ Complete | Most pages (footer CTA) |

### UI Components (`components/ui/`)

| Component | File | Status | Notes |
|---|---|---|---|
| EnquiryModalProvider | `EnquiryModalProvider.tsx` | ✅ Complete | Global modal with React Hook Form + Zod validation |
| EnquireButton | `EnquireButton.tsx` | ✅ Complete | Trigger button for enquiry modal |
| WhatsAppButton | `WhatsAppButton.tsx` | ✅ Complete | Floating WhatsApp CTA with pulse animation |

### Room & Gallery Components

| Component | File | Status | Notes |
|---|---|---|---|
| RoomGalleryClient | `components/rooms/RoomGalleryClient.tsx` | ✅ Complete | Embla carousel + lightbox for room detail pages |
| GalleryPageClient | `components/gallery/GalleryPageClient.tsx` | ✅ Complete | Filterable masonry gallery for `/gallery` page |

### Global Configuration

| File | Status | Notes |
|---|---|---|
| `app/layout.tsx` | ✅ Complete | Root layout: Header, Footer, EnquiryModalProvider, WhatsApp, Hotel + LocalBusiness JSON-LD |
| `app/globals.css` | ✅ Complete | Full design system: CSS variables, typography, animations, utility classes |
| `app/robots.ts` | ✅ Complete | Robots.txt for SEO |
| `app/sitemap.ts` | ✅ Complete | Dynamic sitemap with all routes |
| `next.config.ts` | ✅ Complete | Next.js configuration |

---

## ⏳ Pending Components

| Component | Priority | Description |
|---|---|---|
| — | — | No pending components currently identified |

---

## 🖼️ Public Assets (`public/images/`)

| Folder | Status | Content |
|---|---|---|
| `/images/facade/` | ✅ Present | Exterior facade images |
| `/images/lobby/` | ✅ Present | Lobby/reception images |
| `/images/rooms/standard-room/` | ✅ Present | Standard room photos (3 images) |
| `/images/rooms/deluxe-room/` | ✅ Present | Deluxe room photos (5 images) |
| `/images/rooms/junior-suite/` | ✅ Present | Junior suite photos (2 images) |
| `/images/rooms/presidential-suite/` | ✅ Present | Presidential suite photos (12 images) |
| `/images/dining/tiffin/` | ✅ Present | Tiffin restaurant photos (10 images) |
| `/images/dining/the-deck/` | ✅ Present | The Deck photos (4 images) |
| `/images/dining/cafe/` | ✅ Present | Alfresco/cafe photos |
| `/images/dining/banquet/` | ✅ Present | Banquet hall photos (7 images) |
| `/images/attractions/` | ✅ Present | Local attraction photos (avif format) |

---

## ⚠️ Known Issues

| # | Issue | Severity | Status | Notes |
|---|---|---|---|---|
| 1 | Google Maps iframe embed coordinates may be approximate | Low | Open | The embed URL uses `?q=Hotel+Winway` not a precise Place ID. Update with verified Google Maps embed code. |
| 2 | Google Search Console verification token is placeholder | Medium | Open | `app/layout.tsx` has `verification: { google: "hotel-winway-verification" }` — replace with real token from GSC. |
| 3 | No online booking engine integration | Medium | Open | Currently uses enquiry modal + WhatsApp + phone. No direct booking API (e.g. SynXis, HotelRunner) integrated yet. |
| 4 | `alfresco` venue has 3 images in `[slug]` but only 2 in listing page | Low | Open | `dining/page.tsx` references `cafe-1.jpeg` and `cafe-2.jpeg`; slug page also includes `cafe-3.jpeg`. Verify image exists. |
| 5 | No 404 / error boundary page | Low | Open | No `app/not-found.tsx` or `app/error.tsx` custom error pages created yet. |
| 6 | No Privacy Policy page | Low | Open | Referenced from Terms page but no dedicated `/privacy-policy` route exists. |
| 7 | Social media links use placeholder handles | Medium | Open | Facebook/Instagram/X/Pinterest URLs in Footer use generic handles — verify actual handles with client. |

---

## 📋 Remaining Tasks

### High Priority
- [ ] Replace Google Search Console verification token with actual token
- [ ] Verify and replace Google Maps embed URL with proper Place ID embed
- [ ] Test all image paths (especially `cafe-3.jpeg` for Alfresco) to ensure no broken images

### Medium Priority
- [ ] Create `app/not-found.tsx` — custom 404 page matching hotel branding
- [ ] Create `app/error.tsx` — custom error boundary page
- [ ] Add a `/privacy-policy` page (linked from footer and terms page)
- [ ] Update social media links in Footer with verified actual handles
- [ ] Add real WhatsApp number verification (currently `919752411015`)

### Low Priority / Future Enhancements
- [ ] Integrate online booking engine (SynXis, BookingButton, or similar)
- [ ] Add Google Analytics / Meta Pixel tracking
- [ ] Add `loading.tsx` skeleton pages for better LCP scores
- [ ] Add `opengraph-image.tsx` or static OG image for better social sharing
- [ ] Consider adding a Reviews/Testimonials section to Homepage or About page
- [ ] Consider adding a `/offers` or `/packages` page for promotional content
- [ ] Performance audit: run Lighthouse, optimize LCP images with `priority` prop where missing
- [ ] Verify `robots.ts` and `sitemap.ts` are generating correctly in production build
- [ ] Add structured data (JSON-LD) for individual Room pages (`Product` or `Accommodation` schema)

---

## 📁 Project Structure Summary

```
hotel-winway/
├── app/
│   ├── layout.tsx              ← Root layout (Header, Footer, Modals, SEO)
│   ├── globals.css             ← Full design system & utility classes
│   ├── page.tsx                ← Homepage
│   ├── robots.ts               ← SEO robots
│   ├── sitemap.ts              ← Dynamic sitemap
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── dining/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     ← tiffin, the-deck, alfresco, banquets-events
│   ├── experiences/page.tsx
│   ├── gallery/page.tsx
│   ├── local-attractions/page.tsx
│   ├── rooms/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     ← standard-room, deluxe-room, junior-suite, presidential-suite
│   └── terms-and-conditions/page.tsx
├── components/
│   ├── gallery/GalleryPageClient.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── rooms/RoomGalleryClient.tsx
│   ├── sections/
│   │   ├── AttractionsSection.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── DiningPreview.tsx
│   │   ├── ExperiencesSection.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── HeroSection.tsx
│   │   ├── RoomsPreview.tsx
│   │   └── WelcomeSection.tsx
│   └── ui/
│       ├── EnquireButton.tsx
│       ├── EnquiryModalProvider.tsx
│       └── WhatsAppButton.tsx
└── public/images/
    ├── attractions/
    ├── dining/ (tiffin, the-deck, cafe, banquet)
    ├── facade/
    ├── lobby/
    └── rooms/ (standard-room, deluxe-room, junior-suite, presidential-suite)
```

---

## 🏁 Milestone Log

| Date | Milestone |
|---|---|
| 2026-06-08 | PROJECT_STATUS.md created — all 11 pages and all components audited and documented |
| 2026-06-08 | **Session 2 — Full audit & completion sprint:** |
| | ✅ Fixed broken ExperiencesSection href links (would have 404'd) |
| | ✅ Presidential Suite now shows all 26 images (was 12) |
| | ✅ Created `app/not-found.tsx` — branded 404 page |
| | ✅ Created `app/privacy-policy/page.tsx` — 8-section Privacy Policy page |
| | ✅ Fixed Footer Privacy Policy link (was /contact, now /privacy-policy) |
| | ✅ Added Privacy Policy to Footer Explore nav section |
| | ✅ Added mobile sticky CTA bar on room detail pages (Call + WhatsApp + price) |
| | ✅ Added Restaurant/EventVenue JSON-LD + Breadcrumb schema to dining detail pages |
| | ✅ Added TouristAttraction ItemList JSON-LD to local attractions page |
| | ✅ Created `components/ui/ScrollToTop.tsx` — animated floating scroll-to-top button |
| | ✅ Wired ScrollToTop into root layout |
| | ✅ Created `app/loading.tsx` — global loading skeleton |
| | ✅ Updated `app/sitemap.ts` to include /privacy-policy |
| | ✅ Fixed Footer social icons (Facebook/Instagram/Twitter not in lucide-react v1.17 — replaced with inline SVGs) |
| | ✅ Fixed 3 TypeScript errors: openModal onClick wrappers in Header, HeroSection, ContactCTA |
| | ✅ **Build PASSED: 23/23 static pages compiled, 0 errors** |
| | *(Update this table after each major milestone)* |

---

## 📊 Final Completion Status (Post Session 2)

| Category | Done | Total | % |
|---|---|---|---|
| Pages | 13 | 13 | **100%** |
| Components | 14 | 14 | **100%** |
| Animations | 13 | 13 | **100%** |
| SEO / Schema | 13 | 13 | **100%** |
| Responsive | 12 | 13 | **92%** |
| Build Errors | 0 | 0 | **✅ Clean** |

**Overall: ~97% complete**

### Remaining (Low Priority / Client-Dependent)
- [ ] Replace Google Search Console verification token with real token
- [ ] Verify and replace Google Maps embed URL with correct Place ID
- [ ] Integrate online booking engine (SynXis, BookingButton, etc.)
- [ ] Add Google Analytics / Meta Pixel tracking
- [ ] Update social media handles (Facebook/Instagram/X) with verified handles

