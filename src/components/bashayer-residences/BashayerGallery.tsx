'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/bashayer-residences/gallery-1.jpg',
    category: 'Exterior',
    alt: 'Sunset view over Bashayer Residences waterfront showcasing luxury apartments and coastal lifestyle',
  },
  {
    id: 2,
    src: '/images/bashayer-residences/gallery-2.jpg',
    category: 'Exterior',
    alt: 'Modern architectural design of Bashayer Residences apartments with landscaped parks in Abu Dhabi',
  },
  {
    id: 3,
    src: '/images/bashayer-residences/gallery-3.jpg',
    category: 'Exterior',
    alt: 'Aerial view of Bashayer Residences with premium coastal apartments and penthouses',
  },
  {
    id: 4,
    src: '/images/bashayer-residences/gallery-4.jpg',
    category: 'Exterior',
    alt: 'Bashayer Residences luxury apartments with stunning waterfront views on Hudayriyat Island',
  },
  {
    id: 5,
    src: '/images/bashayer-residences/gallery-5.jpg',
    category: 'Exterior',
    alt: 'Sunset view over Bashayer Residences waterfront showcasing luxury apartments',
  },
  {
    id: 6,
    src: '/images/bashayer-residences/gallery-6.jpg',
    category: 'Exterior',
    alt: 'Vibrant community spaces with walking trails and greenery at Bashayer Residences',
  },
  {
    id: 7,
    src: '/images/bashayer-residences/gallery-7.jpg',
    category: 'Interior',
    alt: 'Contemporary living and lounge space featuring smart home functionality and premium finishes',
  },
  {
    id: 8,
    src: '/images/bashayer-residences/gallery-8.jpg',
    category: 'Interior',
    alt: 'Bright dining area interior of Bashayer Residences showcasing luxury waterfront lifestyle',
  },
  {
    id: 9,
    src: '/images/bashayer-residences/gallery-9.jpg',
    category: 'Interior',
    alt: 'Spacious bathroom with luxury fixtures in Bashayer Residences apartments',
  },
  {
    id: 10,
    src: '/images/bashayer-residences/gallery-10.jpg',
    category: 'Interior',
    alt: 'Elegant bedroom interior of Bashayer Residences penthouse with panoramic views',
  },
  {
    id: 11,
    src: '/images/bashayer-residences/gallery-11.jpg',
    category: 'Interior',
    alt: 'Open-plan kitchen with premium finishes in Bashayer Residences luxury apartment',
  },
];

export default function BashayerGallery() {
  return (
    <StandardProjectGallery
      title="Bashayer Residences Gallery"
      items={galleryItems}
    />
  );
}
