'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryImages: GalleryItem[] = [
  {
    id: 1,
    src: '/images/golf-estates/gallery-1.jpg',
    alt: 'Hudayriyat Golf Estates luxury modern mansion architecture with private pool',
    category: 'Exterior',
  },
  {
    id: 2,
    src: '/images/golf-estates/gallery-2.jpg',
    alt: 'Hudayriyat Golf Estates scenic fairway views and bespoke villa outdoor terrace',
    category: 'Exterior',
  },
  {
    id: 3,
    src: '/images/golf-estates/gallery-3.jpg',
    alt: 'Hudayriyat Golf Estates expansive lush green landscape and contemporary villa facade',
    category: 'Exterior',
  },
  {
    id: 4,
    src: '/images/golf-estates/gallery-4.jpg',
    alt: 'Hudayriyat Golf Estates twilight view of luxury villa estate on Hudayriyat Island Abu Dhabi',
    category: 'Exterior',
  },
  {
    id: 5,
    src: '/images/golf-estates/hero-1.jpg',
    alt: 'Hudayriyat Golf Estates championship golf course panorama and villas',
    category: 'Exterior',
  },
  {
    id: 6,
    src: '/images/golf-estates/hero-2.jpg',
    alt: 'Hudayriyat Golf Estates pristine fairway and luxury residence',
    category: 'Exterior',
  },
];

export default function GolfGallery() {
  return (
    <StandardProjectGallery
      title="Hudayriyat Golf Estates Gallery"
      items={galleryImages}
    />
  );
}
