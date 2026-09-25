'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/al-naseem-villas/gallery-1.jpg', category: 'Interior', alt: 'Modern open-plan living room at Al Naseem Villas Abu Dhabi' },
  { id: 2, src: '/images/al-naseem-villas/gallery-2.jpg', category: 'Interior', alt: 'Contemporary kitchen design with high-end appliances' },
  { id: 3, src: '/images/al-naseem-villas/gallery-3.jpg', category: 'Interior', alt: 'Spacious luxury villa interior with elegant lighting' },
  { id: 4, src: '/images/al-naseem-villas/gallery-4.jpg', category: 'Interior', alt: 'Master bedroom with large windows and natural light' },
  { id: 5, src: '/images/al-naseem-villas/gallery-5.jpg', category: 'Interior', alt: 'Elegant dining area with modern decor' },
  { id: 6, src: '/images/al-naseem-villas/gallery-6.jpg', category: 'Interior', alt: 'Stylish bathroom with premium fittings' },
  { id: 7, src: '/images/al-naseem-villas/gallery-7.jpg', category: 'Interior', alt: 'Bright and airy interiors featuring large windows' },
  { id: 8, src: '/images/al-naseem-villas/gallery-8.jpg', category: 'Interior', alt: 'Cozy family lounge space with modern furnishings' },
  { id: 9, src: '/images/al-naseem-villas/gallery-9.jpg', category: 'Interior', alt: 'Maid’s room interior with efficient layout' },
  { id: 10, src: '/images/al-naseem-villas/gallery-10.jpg', category: 'Interior', alt: 'Luxurious villa interiors showcasing comfort' },
  { id: 11, src: '/images/al-naseem-villas/gallery-11.jpg', category: 'Exterior', alt: 'South Californian style villa exterior at Al Naseem' },
  { id: 12, src: '/images/al-naseem-villas/gallery-12.jpg', category: 'Exterior', alt: 'Modern Contemporary villa façade with sleek finishes' },
  { id: 13, src: '/images/al-naseem-villas/gallery-13.jpg', category: 'Community', alt: 'Lush landscaped gardens surrounding luxury villas' },
  { id: 14, src: '/images/al-naseem-villas/gallery-14.jpg', category: 'Community', alt: 'Gated community entrance with 24/7 security' },
  { id: 15, src: '/images/al-naseem-villas/gallery-15.jpg', category: 'Exterior', alt: 'Spacious villa driveway and parking area' },
  { id: 16, src: '/images/al-naseem-villas/gallery-16.jpg', category: 'Exterior', alt: 'Private outdoor pool area at luxury villas' },
  { id: 17, src: '/images/al-naseem-villas/gallery-17.jpg', category: 'Community', alt: 'Scenic pedestrian and cycling paths' },
  { id: 18, src: '/images/al-naseem-villas/gallery-18.jpg', category: 'Exterior', alt: 'Villa exterior with large terraces and panoramic views' },
  { id: 19, src: '/images/al-naseem-villas/gallery-19.jpg', category: 'Exterior', alt: 'Night view of illuminated luxury villas' },
  { id: 20, src: '/images/al-naseem-villas/gallery-20.jpg', category: 'Exterior', alt: 'Architectural detail of Modern Contemporary façade' },
];

export default function NaseemGallery() {
  return (
    <StandardProjectGallery
      title="Al Naseem Villas Gallery"
      items={galleryData}
    />
  );
}
