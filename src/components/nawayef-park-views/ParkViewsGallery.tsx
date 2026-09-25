"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./ParkViewsGallery.module.css";

interface GalleryItem {
  id: number;
  src: string;
  category: "Exterior" | "Interior";
  alt: string;
}

const galleryItems: GalleryItem[] = [
  // Exterior (10)
  {
    id: 1,
    src: "/images/nawayef-park-views/asset_24.jpg",
    category: "Exterior",
    alt: "Exterior view of Nawayef Park Views residential buildings with Mediterranean-inspired architecture on Hudayriyat Island",
  },
  {
    id: 2,
    src: "/images/nawayef-park-views/asset_25.jpg",
    category: "Exterior",
    alt: "Façade detail showcasing natural materials and coastal design elements at Nawayef Park Views, Abu Dhabi",
  },
  {
    id: 3,
    src: "/images/nawayef-park-views/asset_26.jpg",
    category: "Exterior",
    alt: "Community entrance to Nawayef Park Views with landscaped surroundings on Hudayriyat Island",
  },
  {
    id: 4,
    src: "/images/nawayef-park-views/asset_27.jpg",
    category: "Exterior",
    alt: "Sunset view over the rooftops and terraces of Nawayef Park Views, highlighting island serenity in Abu Dhabi",
  },
  {
    id: 5,
    src: "/images/nawayef-park-views/asset_28.jpg",
    category: "Exterior",
    alt: "Walkways lined with greenery and modern lighting in the Nawayef Park Views neighborhood, Hudayriyat Island",
  },
  {
    id: 6,
    src: "/images/nawayef-park-views/asset_29.jpg",
    category: "Exterior",
    alt: "Street-level perspective of Nawayef Park Views showcasing clean design and inviting community spaces",
  },
  {
    id: 7,
    src: "/images/nawayef-park-views/asset_30.jpg",
    category: "Exterior",
    alt: "Low-rise residential blocks with traditional-meets-modern design at Nawayef Park Views, Abu Dhabi",
  },
  {
    id: 8,
    src: "/images/nawayef-park-views/asset_31.jpg",
    category: "Exterior",
    alt: "Balconies and terraces offering park and canal views from Nawayef Park Views homes on Hudayriyat Island",
  },
  {
    id: 9,
    src: "/images/nawayef-park-views/asset_32.jpg",
    category: "Exterior",
    alt: "Architectural harmony of light tones and textures across Nawayef Park Views’ building exteriors",
  },
  {
    id: 10,
    src: "/images/nawayef-park-views/asset_33.jpg",
    category: "Exterior",
    alt: "Evening exterior lighting and ambient atmosphere at Nawayef Park Views community on Hudayriyat Island",
  },
  // Interior (10)
  {
    id: 11,
    src: "/images/nawayef-park-views/asset_34.jpg",
    category: "Interior",
    alt: "Elegant living room with natural finishes and Mediterranean-inspired design at Nawayef Park Views, Hudayriyat Island",
  },
  {
    id: 12,
    src: "/images/nawayef-park-views/asset_35.jpg",
    category: "Interior",
    alt: "Modern open-plan kitchen with high-end appliances in a residence at Nawayef Park Views, Abu Dhabi",
  },
  {
    id: 13,
    src: "/images/nawayef-park-views/asset_36.jpg",
    category: "Interior",
    alt: "Spacious master bedroom with large windows and serene island views at Nawayef Park Views",
  },
  {
    id: 14,
    src: "/images/nawayef-park-views/asset_37.jpg",
    category: "Interior",
    alt: "Stylish dining area with textured wall finishes and coastal-themed interiors in Hudayriyat Island apartments",
  },
  {
    id: 15,
    src: "/images/nawayef-park-views/asset_38.jpg",
    category: "Interior",
    alt: "Luxury bathroom with premium fixtures and minimalist design at Nawayef Park Views, Abu Dhabi",
  },
  {
    id: 16,
    src: "/images/nawayef-park-views/asset_39.jpg",
    category: "Interior",
    alt: "Cozy bedroom with natural light and neutral tones reflecting Mediterranean elegance in Nawayef Park Views",
  },
  {
    id: 17,
    src: "/images/nawayef-park-views/asset_40.jpg",
    category: "Interior",
    alt: "Artisanal interior detailing and high-quality materials used in Nawayef Park Views homes, Hudayriyat Island",
  },
  {
    id: 18,
    src: "/images/nawayef-park-views/asset_41.jpg",
    category: "Interior",
    alt: "Contemporary interior layout with seamless flow between living and dining areas at Nawayef Park Views",
  },
  {
    id: 19,
    src: "/images/nawayef-park-views/asset_42.jpg",
    category: "Interior",
    alt: "Sunlit interior spaces designed for comfort and relaxation in Nawayef Park Views, Abu Dhabi",
  },
  {
    id: 20,
    src: "/images/nawayef-park-views/asset_43.jpg",
    category: "Interior",
    alt: "Interior lounge with coastal-inspired color palette and refined finishes at Nawayef Park Views on Hudayriyat Island",
  },
];

export default function ParkViewsGallery() {
  const [activeTab, setActiveTab] = useState<"ALL" | "Exterior" | "Interior">("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 991) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "ALL") return true;
    return item.category === activeTab;
  });

  const maxIndex = Math.max(0, filteredItems.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
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

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef Park Views Gallery</h2>
          <p className={styles.subtitle}>
            Design at Nawayef Park Views blends Mediterranean charm with modern elegance, featuring articulated façades, natural materials, and a soft, coastal-inspired palette. Thoughtfully crafted, the architecture reflects timeless sophistication and a seamless connection to the island’s serene surroundings.
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

        {/* Sliding Carousel */}
        <div className={styles.sliderContainer}>
          <button
            type="button"
            className={styles.navArrowPrev}
            onClick={handlePrev}
            aria-label="Previous slide"
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
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 991px) 50vw, 33vw"
                      className={styles.image}
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
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className={styles.dotsWrapper}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${
                  idx === currentIndex ? styles.dotActive : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide group ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
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
              onClick={prevLightbox}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className={styles.lightboxImageWrapper}>
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <button
              type="button"
              className={styles.lightboxNext}
              onClick={nextLightbox}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <p className={styles.lightboxCaption}>
              {filteredItems[lightboxIndex].alt} ({lightboxIndex + 1} / {filteredItems.length})
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
