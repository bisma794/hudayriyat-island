'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryItems: GalleryItem[] = [
  // Exterior (10)
  {
    id: 1,
    src: '/images/nawayef-park-views/asset_24.jpg',
    category: 'Exterior',
    alt: 'Exterior view of Nawayef Park Views residential buildings with Mediterranean-inspired architecture on Hudayriyat Island',
  },
  {
    id: 2,
    src: '/images/nawayef-park-views/asset_25.jpg',
    category: 'Exterior',
    alt: 'Façade detail showcasing natural materials and coastal design elements at Nawayef Park Views, Abu Dhabi',
  },
  {
    id: 3,
    src: '/images/nawayef-park-views/asset_26.jpg',
    category: 'Exterior',
    alt: 'Community entrance to Nawayef Park Views with landscaped surroundings on Hudayriyat Island',
  },
  {
    id: 4,
    src: '/images/nawayef-park-views/asset_27.jpg',
    category: 'Exterior',
    alt: 'Sunset view over the rooftops and terraces of Nawayef Park Views, highlighting island serenity in Abu Dhabi',
  },
  {
    id: 5,
    src: '/images/nawayef-park-views/asset_28.jpg',
    category: 'Exterior',
    alt: 'Walkways lined with greenery and modern lighting in the Nawayef Park Views neighborhood, Hudayriyat Island',
  },
  {
    id: 6,
    src: '/images/nawayef-park-views/asset_29.jpg',
    category: 'Exterior',
    alt: 'Street-level perspective of Nawayef Park Views showcasing clean design and inviting community spaces',
  },
  {
    id: 7,
    src: '/images/nawayef-park-views/asset_30.jpg',
    category: 'Exterior',
    alt: 'Low-rise residential blocks with traditional-meets-modern design at Nawayef Park Views, Abu Dhabi',
  },
  {
    id: 8,
    src: '/images/nawayef-park-views/asset_31.jpg',
    category: 'Exterior',
    alt: 'Balconies and terraces offering park and canal views from Nawayef Park Views homes on Hudayriyat Island',
  },
  {
    id: 9,
    src: '/images/nawayef-park-views/asset_32.jpg',
    category: 'Exterior',
    alt: 'Architectural harmony of light tones and textures across Nawayef Park Views’ building exteriors',
  },
  {
    id: 10,
    src: '/images/nawayef-park-views/asset_33.jpg',
    category: 'Exterior',
    alt: 'Evening exterior lighting and ambient atmosphere at Nawayef Park Views community on Hudayriyat Island',
  },
  // Interior (10)
  {
    id: 11,
    src: '/images/nawayef-park-views/asset_34.jpg',
    category: 'Interior',
    alt: 'Elegant living room with natural finishes and Mediterranean-inspired design at Nawayef Park Views, Hudayriyat Island',
  },
  {
    id: 12,
    src: '/images/nawayef-park-views/asset_35.jpg',
    category: 'Interior',
    alt: 'Modern open-plan kitchen with high-end appliances in a residence at Nawayef Park Views, Abu Dhabi',
  },
  {
    id: 13,
    src: '/images/nawayef-park-views/asset_36.jpg',
    category: 'Interior',
    alt: 'Spacious master bedroom with large windows and serene island views at Nawayef Park Views',
  },
  {
    id: 14,
    src: '/images/nawayef-park-views/asset_37.jpg',
    category: 'Interior',
    alt: 'Stylish dining area with textured wall finishes and coastal-themed interiors in Hudayriyat Island apartments',
  },
  {
    id: 15,
    src: '/images/nawayef-park-views/asset_38.jpg',
    category: 'Interior',
    alt: 'Luxury bathroom with premium fixtures and minimalist design at Nawayef Park Views, Abu Dhabi',
  },
  {
    id: 16,
    src: '/images/nawayef-park-views/asset_39.jpg',
    category: 'Interior',
    alt: 'Cozy bedroom with natural light and neutral tones reflecting Mediterranean elegance in Nawayef Park Views',
  },
  {
    id: 17,
    src: '/images/nawayef-park-views/asset_40.jpg',
    category: 'Interior',
    alt: 'Artisanal interior detailing and high-quality materials used in Nawayef Park Views homes, Hudayriyat Island',
  },
  {
    id: 18,
    src: '/images/nawayef-park-views/asset_41.jpg',
    category: 'Interior',
    alt: 'Contemporary interior layout with seamless flow between living and dining areas at Nawayef Park Views',
  },
  {
    id: 19,
    src: '/images/nawayef-park-views/asset_42.jpg',
    category: 'Interior',
    alt: 'Sunlit interior spaces designed for comfort and relaxation in Nawayef Park Views, Abu Dhabi',
  },
  {
    id: 20,
    src: '/images/nawayef-park-views/asset_43.jpg',
    category: 'Interior',
    alt: 'Interior lounge with coastal-inspired color palette and refined finishes at Nawayef Park Views on Hudayriyat Island',
  },
];

export default function ParkViewsGallery() {
  return (
    <StandardProjectGallery
      title="Nawayef Park Views Gallery"
      items={galleryItems}
    />
  );
}
