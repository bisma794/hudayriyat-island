'use client';

import React from 'react';
import StandardProjectGallery, { GalleryItem } from '@/components/common/StandardProjectGallery';
import { ProjectGalleryItem } from './ProjectTypes';

interface ProjectGalleryProps {
  name: string;
  subtitle?: string;
  items?: ProjectGalleryItem[];
}

export default function ProjectGallery({
  name,
  items = [],
}: ProjectGalleryProps) {
  const galleryList: GalleryItem[] = items && items.length > 0 ? items.map((item, idx) => ({
    id: item.id || idx + 1,
    src: item.src || '/images/placeholder.svg',
    category: item.category && item.category !== 'all' ? item.category : 'Exterior',
    alt: item.alt || `${name} Photo ${idx + 1}`,
  })) : [
    { id: 1, src: '/images/placeholder.svg', category: 'Exterior', alt: `${name} Community Vista` },
  ];

  return (
    <StandardProjectGallery
      title={`${name} Gallery`}
      items={galleryList}
    />
  );
}
