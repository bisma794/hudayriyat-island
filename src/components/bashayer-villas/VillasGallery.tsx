'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/bashayer-villas/gallery-1.jpg', category: 'Exterior', alt: 'Bashayer Villas Waterfront Facade' },
  { id: 2, src: '/images/bashayer-villas/gallery-2.jpg', category: 'Exterior', alt: 'Bashayer Villas Private Garden & Pool' },
  { id: 3, src: '/images/bashayer-villas/gallery-3.jpg', category: 'Interior', alt: 'Bashayer Villas Grand Living Space' },
  { id: 4, src: '/images/bashayer-villas/gallery-4.jpg', category: 'Interior', alt: 'Bashayer Villas Dining & Entertaining' },
  { id: 5, src: '/images/bashayer-villas/gallery-5.jpg', category: 'Exterior', alt: 'Bashayer Villas Architectural View' },
  { id: 6, src: '/images/bashayer-villas/gallery-6.jpg', category: 'Interior', alt: 'Bashayer Villas Master Bedroom Suite' },
  { id: 7, src: '/images/bashayer-villas/gallery-7.jpg', category: 'Interior', alt: 'Bashayer Villas Gourmet Kitchen' },
  { id: 8, src: '/images/bashayer-villas/gallery-8.jpg', category: 'Exterior', alt: 'Bashayer Villas Coastal Sunset View' },
];

export default function VillasGallery() {
  return (
    <StandardProjectGallery
      title="Bashayer Villas Gallery"
      items={galleryData}
    />
  );
}
