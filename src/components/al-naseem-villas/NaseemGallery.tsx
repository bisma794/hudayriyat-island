'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './NaseemGallery.module.css';

interface GalleryItem {
  id: number;
  src: string;
  category: 'community' | 'interior' | 'exterior';
  alt: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, src: '/images/al-naseem-villas/gallery-1.jpg', category: 'interior', alt: 'Modern open-plan living room at Al Naseem Villas Abu Dhabi' },
  { id: 2, src: '/images/al-naseem-villas/gallery-2.jpg', category: 'interior', alt: 'Contemporary kitchen design with high-end appliances' },
  { id: 3, src: '/images/al-naseem-villas/gallery-3.jpg', category: 'interior', alt: 'Spacious luxury villa interior with elegant lighting' },
  { id: 4, src: '/images/al-naseem-villas/gallery-4.jpg', category: 'interior', alt: 'Master bedroom with large windows and natural light' },
  { id: 5, src: '/images/al-naseem-villas/gallery-5.jpg', category: 'interior', alt: 'Elegant dining area with modern decor' },
  { id: 6, src: '/images/al-naseem-villas/gallery-6.jpg', category: 'interior', alt: 'Stylish bathroom with premium fittings' },
  { id: 7, src: '/images/al-naseem-villas/gallery-7.jpg', category: 'interior', alt: 'Bright and airy interiors featuring large windows' },
  { id: 8, src: '/images/al-naseem-villas/gallery-8.jpg', category: 'interior', alt: 'Cozy family lounge space with modern furnishings' },
  { id: 9, src: '/images/al-naseem-villas/gallery-9.jpg', category: 'interior', alt: 'Maid’s room interior with efficient layout' },
  { id: 10, src: '/images/al-naseem-villas/gallery-10.jpg', category: 'interior', alt: 'Luxurious villa interiors showcasing comfort' },
  { id: 11, src: '/images/al-naseem-villas/gallery-11.jpg', category: 'exterior', alt: 'South Californian style villa exterior at Al Naseem' },
  { id: 12, src: '/images/al-naseem-villas/gallery-12.jpg', category: 'exterior', alt: 'Modern Contemporary villa façade with sleek finishes' },
  { id: 13, src: '/images/al-naseem-villas/gallery-13.jpg', category: 'community', alt: 'Lush landscaped gardens surrounding luxury villas' },
  { id: 14, src: '/images/al-naseem-villas/gallery-14.jpg', category: 'community', alt: 'Gated community entrance with 24/7 security' },
  { id: 15, src: '/images/al-naseem-villas/gallery-15.jpg', category: 'exterior', alt: 'Spacious villa driveway and parking area' },
  { id: 16, src: '/images/al-naseem-villas/gallery-16.jpg', category: 'exterior', alt: 'Private outdoor pool area at luxury villas' },
  { id: 17, src: '/images/al-naseem-villas/gallery-17.jpg', category: 'community', alt: 'Scenic pedestrian and cycling paths' },
  { id: 18, src: '/images/al-naseem-villas/gallery-18.jpg', category: 'exterior', alt: 'Villa exterior with large terraces and panoramic views' },
  { id: 19, src: '/images/al-naseem-villas/gallery-19.jpg', category: 'exterior', alt: 'Night view of illuminated luxury villas' },
  { id: 20, src: '/images/al-naseem-villas/gallery-20.jpg', category: 'exterior', alt: 'Architectural detail of Modern Contemporary façade' },
];

export default function NaseemGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'community' | 'interior' | 'exterior'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredItems = activeTab === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeTab);

  const maxIndex = Math.max(0, filteredItems.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleLightboxNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Al Naseem Villas Gallery</h2>
          <p className={styles.subtitle}>
            Explore the captivating beauty of Al Naseem Villas through curated imagery capturing its grand architectural design,
            expansive private residences, lush gardens, and world-class waterfront island lifestyle in Abu Dhabi.
          </p>

          <div className={styles.tabNav}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('all')}
            >
              ALL
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'exterior' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('exterior')}
            >
              Exterior
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'interior' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('interior')}
            >
              Interior
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'community' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('community')}
            >
              Community
            </button>
          </div>
        </div>

        {/* Sliding Carousel (600x400 cards, no stacked thumbs below) */}
        {filteredItems.length > 0 && (
          <div className={styles.sliderContainer}>
            <button
              type="button"
              className={`${styles.navArrow} ${styles.prevArrow}`}
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.sliderViewport}>
              <div
                className={styles.sliderTrack}
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={styles.slideItem}
                    style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                    onClick={() => openLightbox(index)}
                  >
                    <div className={styles.imageCard}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.image}
                      />
                      <div className={styles.imageOverlay}>
                        <span className={styles.imageCaption}>{item.alt}</span>
                        <span className={styles.zoomPrompt}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                          Zoom
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`${styles.navArrow} ${styles.nextArrow}`}
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Slider Indicator */}
        <div className={styles.sliderIndicator}>
          <span>
            {Math.min(currentIndex + itemsPerView, filteredItems.length)} of {filteredItems.length} Photos
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={30} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={filteredItems[lightboxIndex]?.src}
                alt={filteredItems[lightboxIndex]?.alt}
                fill
                className={styles.lightboxImg}
              />
            </div>
            <p className={styles.lightboxCaption}>
              {filteredItems[lightboxIndex]?.alt} ({lightboxIndex + 1} / {filteredItems.length})
            </p>
          </div>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
            aria-label="Next Image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
