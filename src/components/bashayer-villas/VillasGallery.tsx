'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/bashayer-villas/card-gallery-1.jpg', category: 'Interior', alt: 'Bashayer Villas Open Living Space & Kitchen' },
  { id: 2, src: '/images/bashayer-villas/card-gallery-2.jpg', category: 'Exterior', alt: 'Bashayer Villas Luxury Modern Villa Façade' },
  { id: 3, src: '/images/bashayer-villas/card-gallery-3.jpg', category: 'Interior', alt: 'Bashayer Villas Master Suite Bedroom' },
  { id: 4, src: '/images/bashayer-villas/card-gallery-4.jpg', category: 'Exterior', alt: 'Bashayer Villas Private Outdoor Garden' },
  { id: 5, src: '/images/bashayer-villas/card-gallery-5.jpg', category: 'Interior', alt: 'Bashayer Villas Elegant Dining Area' },
  { id: 6, src: '/images/bashayer-villas/card-gallery-6.jpg', category: 'Exterior', alt: 'Bashayer Villas Architectural Evening View' },
];

export default function VillasGallery() {
  return (
    <StandardProjectGallery
      title="Bashayer Villas Gallery"
      items={galleryData}
    />
  );
}
