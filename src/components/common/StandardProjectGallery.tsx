'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './StandardProjectGallery.module.css';

export interface GalleryItem {
  id?: number | string;
  src: string;
  category?: string;
  alt?: string;
}

interface StandardProjectGalleryProps {
  title: string;
  items: GalleryItem[];
  id?: string;
}

export default function StandardProjectGallery({
  title,
  items,
  id = 'gallery',
}: StandardProjectGalleryProps) {
  // Extract unique categories (e.g. 'Interior', 'Exterior', 'Community')
  const availableCategories = React.useMemo(() => {
    const cats = new Set<string>();
    items.forEach((item) => {
      if (item.category && item.category.toLowerCase() !== 'all') {
        const formatted =
          item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase();
        cats.add(formatted);
      }
    });
    return Array.from(cats);
  }, [items]);

  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Measure container width for pixel-perfect centering and peeking
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setViewportWidth(containerRef.current.offsetWidth);
      } else if (typeof window !== 'undefined') {
        setViewportWidth(window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Filter items based on active tab
  const filteredItems = React.useMemo(() => {
    if (activeTab === 'ALL') return items;
    return items.filter(
      (item) => item.category?.toLowerCase() === activeTab.toLowerCase()
    );
  }, [items, activeTab]);

  // Geometry calculations:
  // Desktop (>= 992px): 2 cards in center, previous peeks left, next peeks right
  // Mobile/Tablet (< 992px): 1 card in center, peeks on both sides
  const isDesktop = viewportWidth >= 992;
  const gap = isDesktop ? 24 : 16;
  const itemsInCenter = isDesktop ? 2 : 1;

  // Max card width 600px, aspect-ratio 600/400 (height = 400px when width = 600px)
  const cardWidth = isDesktop
    ? Math.min(600, Math.max(300, (viewportWidth - gap - 80) / 2))
    : Math.min(600, viewportWidth - 64);
  const cardHeight = Math.round(cardWidth * (400 / 600));

  const visibleWidth = itemsInCenter * cardWidth + (itemsInCenter - 1) * gap;
  const centerOffset = (viewportWidth - visibleWidth) / 2;
  const slideStep = cardWidth + gap;

  const maxIndex = Math.max(0, filteredItems.length - 1);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Touch Swipe Handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) =>
            prev !== null ? (prev <= 0 ? filteredItems.length - 1 : prev - 1) : null
          );
        } else if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) =>
            prev !== null ? (prev >= filteredItems.length - 1 ? 0 : prev + 1) : null
          );
        } else if (e.key === 'Escape') {
          setLightboxIndex(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const translateX = centerOffset - currentIndex * slideStep;

  return (
    <section className={styles.gallerySection} id={id}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {/* Category Tabs: ALL | Interior | Exterior */}
        {availableCategories.length > 0 && (
          <div className={styles.tabNav}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'ALL' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('ALL')}
            >
              ALL
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.tabBtn} ${activeTab === cat ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sliding Carousel (Peek effect on sides, 600x400 cards) */}
      {filteredItems.length > 0 && (
        <div
          className={styles.carouselContainer}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{
                transform: `translateX(${translateX}px)`,
                gap: `${gap}px`,
              }}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id ?? `${item.src}-${index}`}
                  className={styles.card}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                  }}
                  onClick={() => setLightboxIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo ${index + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setLightboxIndex(index);
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt || `${title} photo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 600px"
                    className={styles.cardImg}
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Pagination Dots */}
      {filteredItems.length > 1 && (
        <div className={styles.dotsWrapper}>
          {filteredItems.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
          >
            <X size={30} />
          </button>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev <= 0 ? filteredItems.length - 1 : prev - 1) : 0
              );
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightboxImageContainer}>
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt || `${title} photo`}
                fill
                className={styles.lightboxImg}
              />
            </div>
            <p className={styles.lightboxCaption}>
              {lightboxIndex + 1} / {filteredItems.length}
              {filteredItems[lightboxIndex].alt && ` — ${filteredItems[lightboxIndex].alt}`}
            </p>
          </div>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev >= filteredItems.length - 1 ? 0 : prev + 1) : 0
              );
            }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
