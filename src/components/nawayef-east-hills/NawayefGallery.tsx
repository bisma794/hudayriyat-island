'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/nawayef-east-hills/card-gallery-1.jpg', category: 'Community', alt: 'Nawayef East Hills Elevated Landscape View' },
  { id: 2, src: '/images/nawayef-east-hills/card-gallery-2.jpg', category: 'Community', alt: 'Nawayef East Hills Coastal Vista & Greenery' },
  { id: 3, src: '/images/nawayef-east-hills/card-gallery-3.jpg', category: 'Exterior', alt: 'Nawayef East Hills Luxury Villa Façade' },
  { id: 4, src: '/images/nawayef-east-hills/card-gallery-4.jpg', category: 'Exterior', alt: 'Nawayef East Hills Private Villa & Terrace' },
  { id: 5, src: '/images/nawayef-east-hills/card-gallery-5.jpg', category: 'Interior', alt: 'Nawayef East Hills Grand Open Living Room' },
  { id: 6, src: '/images/nawayef-east-hills/card-gallery-6.jpg', category: 'Interior', alt: 'Nawayef East Hills Master Bedroom Suite' },
  { id: 7, src: '/images/nawayef-east-hills/card-gallery-7.jpg', category: 'Exterior', alt: 'Nawayef East Hills Architectural Estate' },
];

export default function NawayefGallery() {
  return (
    <StandardProjectGallery
      title="Nawayef East Hills Gallery"
      items={galleryData}
    />
  );
}
