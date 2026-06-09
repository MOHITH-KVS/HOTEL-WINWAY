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
        <div className="text-center mb-14">
          <h2 className="heading-mixed">
            Amenities &amp; <strong>Facilities</strong>
          </h2>
        </div>

        {/* 4-column layout — matches reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {amenityCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  <Icon size={22} className="text-[#C9A96E]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-[#1A1A1A] mb-4"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  {category.label}
                </h3>

                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 justify-center lg:justify-start"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13,
                        color: item === '...more' ? '#C9A96E' : '#57585B',
                        fontWeight: item === '...more' ? 700 : 400,
                      }}
                    >
                      {item !== '...more' && (
                        <span className="mt-1.5 text-[#C9A96E] flex-shrink-0" style={{ fontSize: 6 }}>●</span>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
