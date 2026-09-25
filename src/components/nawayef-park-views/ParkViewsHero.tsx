"use client";

import React, { useState, useEffect } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import styles from "./ParkViewsHero.module.css";
import { sendLeadToWebhook } from "@/lib/sendLead";

interface ParkViewsHeroProps {
  onOpenBrochureModal?: () => void;
}

const slides = [
  {
    src: "/images/nawayef-park-views/asset_2.jpg",
    alt: "Aerial view of Nawayef Park Views on Hudayriyat Island, showcasing Mediterranean-style architecture and lush green surroundings",
  },
  {
    src: "/images/nawayef-park-views/asset_4.jpg",
    alt: "Elegant residential buildings at Nawayef Park Views with landscaped walkways and adjacent park views",
  },
  {
    src: "/images/nawayef-park-views/asset_5.jpg",
    alt: "Tranquil swimming pool area with sun loungers, reflecting the serene island lifestyle at Nawayef Park Views",
  },
  {
    src: "/images/nawayef-park-views/asset_6.jpg",
    alt: "Sunset over Nawayef Park Views community plaza near Nawayef Souq, highlighting vibrant social spaces and outdoor dining",
  },
];

export default function ParkViewsHero({ onOpenBrochureModal }: ParkViewsHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: "Nawayef Park Views",
      developer: "Modon Properties",
      community: "Nawayef Park Views",
      property_type: "Villa",
      activity_description: "Nawayef Park Views Hero Call Back Request",
    });
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background Slides with smooth zoom transitions */}
      <div className={styles.sliderWrapper}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`${styles.slideItem} ${
              idx === currentSlide ? styles.slideActive : ""
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className={styles.slideImage}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Slider Controls */}
      <button
        type="button"
        className={styles.prevBtn}
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        type="button"
        className={styles.nextBtn}
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Hero Content Container */}
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Heading, Subtitle, Brochure CTA */}
          <div className={styles.leftCol}>
            <h1 className={styles.title}>Nawayef Park Views</h1>
            <p className={styles.subtitle}>
              Parkside Serenity Meets Mediterranean Elegance on Hudayriyat Island.
            </p>

            <div className={styles.btnRow}>
              <button
                type="button"
                className={styles.brochureBtn}
                onClick={onOpenBrochureModal}
              >
                Download Brochure
              </button>
            </div>

            <div className={styles.badgeRow}>
              <div className={styles.freeholdTag}>
                Freehold For All Nationalities
              </div>
            </div>
          </div>

          {/* Right Column: Request A Call Back Form */}
          <div className={styles.rightCol}>
            <div className={styles.requestCard}>
              <h2 className={styles.formTitleSmall}>REQUEST</h2>
              <h3 className={styles.formTitleLarge}>A CALL BACK</h3>

              {submitted ? (
                <div className={styles.successMessage}>
                  <Check size={20} />
                  <span>Your message has been sent. Thank you!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.callForm}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className={styles.inputField}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      placeholder="E-mail"
                      required
                      className={styles.inputField}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <PhoneInput defaultCountry="ae" value={formData.phone} onChange={(phone) => setFormData({ ...formData, phone })} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitBtn}
                  >
                    {loading ? "SENDING..." : "REQUEST NOW"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
