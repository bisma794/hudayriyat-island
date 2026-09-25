"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./BashayerGallery.module.css";

interface GalleryItem {
  id: number;
  src: string;
  category: "Exterior" | "Interior";
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/bashayer-residences/gallery-1.jpg",
    category: "Exterior",
    alt: "Sunset view over Bashayer Residences waterfront showcasing luxury apartments, penthouses, and elegant coastal lifestyle",
  },
  {
    id: 2,
    src: "/images/bashayer-residences/gallery-2.jpg",
    category: "Exterior",
    alt: "Modern architectural design of Bashayer Residences apartments with landscaped parks and waterfront pathways in Abu Dhabi",
  },
  {
    id: 3,
    src: "/images/bashayer-residences/gallery-3.jpg",
    category: "Exterior",
    alt: "Aerial view of Bashayer Residences with premium coastal apartments and penthouses in serene Hudayriyat Island location",
  },
  {
    id: 4,
    src: "/images/bashayer-residences/gallery-4.jpg",
    category: "Exterior",
    alt: "Bashayer Residences Hudayriyat Island luxury apartments with stunning waterfront views, modern architecture, and landscaped green parks in Abu Dhabi",
  },
  {
    id: 5,
    src: "/images/bashayer-residences/gallery-5.jpg",
    category: "Exterior",
    alt: "Sunset view over Bashayer Residences waterfront showcasing luxury apartments, penthouses, and elegant coastal lifestyle",
  },
  {
    id: 6,
    src: "/images/bashayer-residences/gallery-6.jpg",
    category: "Exterior",
    alt: "Vibrant community spaces with walking trails and greenery at Bashayer Residences, Abu Dhabi waterfront development",
  },
  {
    id: 7,
    src: "/images/bashayer-residences/gallery-7.jpg",
    category: "Interior",
    alt: "Contemporary living and lounge space featuring smart home functionality and premium finishes",
  },
  {
    id: 8,
    src: "/images/bashayer-residences/gallery-8.jpg",
    category: "Interior",
    alt: "Bright dining area interior of Bashayer Residences 3-bedroom apartment showcasing luxury waterfront lifestyle",
  },
  {
    id: 9,
    src: "/images/bashayer-residences/gallery-9.jpg",
    category: "Interior",
    alt: "Spacious bathroom with luxury fixtures in Bashayer Residences apartments reflecting modern coastal living",
  },
  {
    id: 10,
    src: "/images/bashayer-residences/gallery-10.jpg",
    category: "Interior",
    alt: "Elegant bedroom interior of Bashayer Residences penthouse with panoramic skyline views and high-end fittings",
  },
  {
    id: 11,
    src: "/images/bashayer-residences/gallery-11.jpg",
    category: "Interior",
    alt: "Open-plan kitchen with premium white goods in Bashayer Residences 2-bedroom apartment, Abu Dhabi luxury real estate",
  },
];

export default function BashayerGallery() {
  const [activeTab, setActiveTab] = useState<"ALL" | "Exterior" | "Interior">("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "ALL") return true;
    return item.category === activeTab;
  });

  const maxIndex = Math.max(0, filteredItems.length - 1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null || prev >= filteredItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null || prev <= 0 ? filteredItems.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Residences Gallery</h2>
          <p className={styles.subtitle}>
            The Bashayer Residences gallery highlights the project&apos;s waterfront setting, contemporary architecture, landscaped surroundings, residential interiors, and community facilities. The development combines modern homes with open spaces and views of the surrounding coastline.
          </p>

          <div className={styles.tabNav}>
            <button
              type="button"
              className={`${styles.tabBtn} ${
                activeTab === "ALL" ? styles.tabActive : ""
              }`}
              onClick={() => setActiveTab("ALL")}
            >
              ALL
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${
                activeTab === "Exterior" ? styles.tabActive : ""
              }`}
              onClick={() => setActiveTab("Exterior")}
            >
              Exterior
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${
                activeTab === "Interior" ? styles.tabActive : ""
              }`}
              onClick={() => setActiveTab("Interior")}
            >
              Interior
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className={styles.carouselContainer}>
          <button
            type="button"
            className={styles.navArrowPrev}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.carouselTrackWrapper}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentIndex * 624}px)`,
              }}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={styles.carouselSlide}
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.imgWrapper}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className={styles.galleryImg}
                      sizes="(max-width: 768px) 88vw, 600px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.navArrowNext}
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsWrapper}>
          {filteredItems.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className={`${styles.dot} ${
                dotIdx === currentIndex ? styles.dotActive : ""
              }`}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            type="button"
            className={styles.lightboxPrev}
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              width={1000}
              height={650}
              className={styles.lightboxImg}
            />
          </div>

          <button
            type="button"
            className={styles.lightboxNext}
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
