'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/al-naseem-villas/card-gallery-1.png', category: 'Interior', alt: 'Al Naseem Luxury Villa Dining & Living Room' },
  { id: 2, src: '/images/al-naseem-villas/card-gallery-2.png', category: 'Interior', alt: 'Al Naseem Villa Contemporary Lounge Space' },
  { id: 3, src: '/images/al-naseem-villas/card-gallery-3.png', category: 'Interior', alt: 'Al Naseem Villa Open Kitchen & Dining Area' },
  { id: 4, src: '/images/al-naseem-villas/card-gallery-4.jpg', category: 'Exterior', alt: 'Al Naseem Villa Modern Architectural Façade' },
  { id: 5, src: '/images/al-naseem-villas/card-gallery-5.jpg', category: 'Exterior', alt: 'Al Naseem Luxury Villa Terrace & Pool' },
  { id: 6, src: '/images/al-naseem-villas/card-gallery-6.jpg', category: 'Community', alt: 'Al Naseem Community Landscaping & Gardens' },
  { id: 7, src: '/images/al-naseem-villas/card-gallery-7.jpg', category: 'Exterior', alt: 'Al Naseem Villa Outdoor Living Area' },
];

export default function NaseemGallery() {
  return (
    <StandardProjectGallery
      title="Al Naseem Villas Gallery"
      items={galleryData}
    />
  );
}
