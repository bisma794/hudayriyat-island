'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryImages: GalleryItem[] = [
  {
    id: 1,
    src: '/images/wadeem-gardens/gallery-1.png',
    alt: 'Wadeem Gardens Modernist villa exterior showcasing contemporary architecture on Hudayriyat Island',
    category: 'Exterior',
  },
  {
    id: 2,
    src: '/images/wadeem-gardens/gallery-2.png',
    alt: 'Wadeem Gardens 6-bedroom villa exterior surrounded by landscaped spaces',
    category: 'Exterior',
  },
  {
    id: 3,
    src: '/images/wadeem-gardens/gallery-3.png',
    alt: 'Wadeem Gardens exterior featuring Contemporary Arabic villa architecture',
    category: 'Exterior',
  },
  {
    id: 4,
    src: '/images/wadeem-gardens/gallery-4.png',
    alt: 'Wadeem Gardens villa community exterior highlighting contemporary residential architecture',
    category: 'Exterior',
  },
  {
    id: 5,
    src: '/images/wadeem-gardens/hero-1.png',
    alt: 'Wadeem Gardens serene coastal villa landscape view',
    category: 'Exterior',
  },
  {
    id: 6,
    src: '/images/wadeem-gardens/hero-3.png',
    alt: 'Wadeem Gardens luxury residences scenic panoramic view',
    category: 'Exterior',
  },
];

export default function WadeemGallery() {
  return (
    <StandardProjectGallery
      title="Wadeem Gardens Gallery"
      items={galleryImages}
    />
  );
}
