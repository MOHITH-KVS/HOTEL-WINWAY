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
    <section id="amenities" className="section-padding bg-white scroll-mt-32">
      <div className="container-main">
        <div className="section-header">
          <h2 className="heading-mixed">
            Amenities &amp; <strong>Facilities</strong>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {amenityCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`text-center lg:text-left ${
                  index < amenityCategories.length - 1 ? 'lg:border-r lg:border-[#e6e6e6] lg:pr-8' : ''
                }`}
              >
                <div className="flex justify-center lg:justify-start mb-5">
                  <Icon size={24} className="text-[#8d6346]" strokeWidth={1.5} />
                </div>
                <h3 className="heading-card mb-5">{category.label}</h3>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 justify-center lg:justify-start body-md"
                      style={{
                        fontSize: 14,
                        color: item === '...more' ? '#8d6346' : undefined,
                        fontWeight: item === '...more' ? 700 : 400,
                      }}
                    >
                      {item !== '...more' && (
                        <span className="mt-2 text-[#8d6346] flex-shrink-0" style={{ fontSize: 5 }}>●</span>
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
