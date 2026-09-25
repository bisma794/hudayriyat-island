'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/nawayef-east-hills/gallery-1.jpg', category: 'Community', alt: 'Nawayef East Hills Landscape View' },
  { id: 2, src: '/images/nawayef-east-hills/gallery-2.jpg', category: 'Community', alt: 'Nawayef East Hills Elevated Perspective' },
  { id: 3, src: '/images/nawayef-east-hills/gallery-3.jpg', category: 'Exterior', alt: 'Nawayef East Hills Luxury Villa Facade' },
  { id: 4, src: '/images/nawayef-east-hills/gallery-4.jpg', category: 'Exterior', alt: 'Nawayef East Hills Grand Entrance' },
  { id: 5, src: '/images/nawayef-east-hills/gallery-5.jpg', category: 'Interior', alt: 'Nawayef East Hills Majlis & Living Room' },
  { id: 6, src: '/images/nawayef-east-hills/gallery-6.jpg', category: 'Interior', alt: 'Nawayef East Hills Dining Space' },
  { id: 7, src: '/images/nawayef-east-hills/gallery-7.jpg', category: 'Interior', alt: 'Nawayef East Hills Master Bedroom Suite' },
  { id: 8, src: '/images/nawayef-east-hills/gallery-8.jpg', category: 'Interior', alt: 'Nawayef East Hills Designer Bathroom' },
  { id: 9, src: '/images/nawayef-east-hills/gallery-9.jpg', category: 'Community', alt: 'Nawayef East Hills Parkways' },
  { id: 10, src: '/images/nawayef-east-hills/gallery-10.jpg', category: 'Exterior', alt: 'Nawayef East Hills Private Swimming Pool' },
  { id: 11, src: '/images/nawayef-east-hills/gallery-11.jpg', category: 'Exterior', alt: 'Nawayef East Hills Mansion Courtyard' },
  { id: 12, src: '/images/nawayef-east-hills/gallery-12.jpg', category: 'Interior', alt: 'Nawayef East Hills Gourmet Kitchen' },
  { id: 13, src: '/images/nawayef-east-hills/gallery-13.jpg', category: 'Community', alt: 'Nawayef East Hills Sunset Vista' },
  { id: 14, src: '/images/nawayef-east-hills/gallery-14.jpg', category: 'Interior', alt: 'Nawayef East Hills Family Lounge' },
  { id: 15, src: '/images/nawayef-east-hills/gallery-15.jpg', category: 'Exterior', alt: 'Nawayef East Hills Outdoor Terrace' },
  { id: 16, src: '/images/nawayef-east-hills/gallery-16.jpg', category: 'Interior', alt: 'Nawayef East Hills Dressing Area' },
  { id: 17, src: '/images/nawayef-east-hills/gallery-17.jpg', category: 'Exterior', alt: 'Nawayef East Hills Garden Villa' },
  { id: 18, src: '/images/nawayef-east-hills/gallery-18.jpg', category: 'Interior', alt: 'Nawayef East Hills Private Study' },
  { id: 19, src: '/images/nawayef-east-hills/gallery-19.jpg', category: 'Community', alt: 'Nawayef East Hills Walkway' },
  { id: 20, src: '/images/nawayef-east-hills/gallery-20.jpg', category: 'Exterior', alt: 'Nawayef East Hills Hillside View' },
  { id: 21, src: '/images/nawayef-east-hills/gallery-21.jpg', category: 'Interior', alt: 'Nawayef East Hills Spa Bathroom' },
  { id: 22, src: '/images/nawayef-east-hills/gallery-22.jpg', category: 'Exterior', alt: 'Nawayef East Hills Villa Exterior' },
  { id: 23, src: '/images/nawayef-east-hills/gallery-23.jpg', category: 'Community', alt: 'Nawayef East Hills Community Club' },
  { id: 24, src: '/images/nawayef-east-hills/gallery-24.jpg', category: 'Exterior', alt: 'Nawayef East Hills Panoramic Estate' },
];

export default function NawayefGallery() {
  return (
    <StandardProjectGallery
      title="Nawayef East Hills Gallery"
      items={galleryData}
    />
  );
}
