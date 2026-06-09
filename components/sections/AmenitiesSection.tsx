import { Utensils, Hotel, Leaf, BedDouble } from 'lucide-react';

const amenityCategories = [
  {
    id: 'hotel',
    icon: Hotel,
    label: 'Hotel',
    items: [
      '24-Hour Front Desk',
      'In-Room Dining',
      'Concierge Services',
      'Multilingual Staff',
      'Parking (on-site)',
      'High-speed WiFi',
      '...more',
    ],
  },
  {
    id: 'dining',
    icon: Utensils,
    label: 'Dining',
    items: [
      'Tiffin (Multi Cuisine)',
      'The Deck (24/7)',
      'Al Fresco (Open Air)',
      'Cafe',
      'Room Service',
    ],
  },
  {
    id: 'wellness',
    icon: Leaf,
    label: 'Wellness',
    items: [
      'Fitness Centre',
      'Yoga on Request',
      'Doctor on Call',
    ],
  },
  {
    id: 'room',
    icon: BedDouble,
    label: 'Room',
    items: [
      'Iron & Ironing Board',
      'Non-smoking Rooms',
      'Hair Dryer',
      'Electronic Safe',
      'Flat-screen TV',
      '...more',
    ],
  },
];

export default function AmenitiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="heading-mixed">
            Amenities &amp; <strong>Facilities</strong>
          </h2>
        </div>

        {/* 2×2 category grid with vertical divider — matches reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-gray-200">
          {amenityCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`p-8 lg:p-12 ${
                  idx % 2 === 0 ? 'lg:border-r border-gray-200' : ''
                } ${idx >= 2 ? 'border-t border-gray-200' : ''}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={20} className="text-[#C9A96E]" />
                  <h3
                    className="text-[#1A1A1A]"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {category.label}
                  </h3>
                </div>

                {/* Bullet list */}
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13,
                        color: item === '...more' ? '#C9A96E' : '#57585B',
                        fontWeight: item === '...more' ? 700 : 400,
                      }}
                    >
                      {item !== '...more' && (
                        <span className="mt-1 text-[#C9A96E]" style={{ fontSize: 8 }}>●</span>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Divider at bottom of each category */}
                <div className="mt-6 h-px bg-gray-200" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
