'use client';

import React, { useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import styles from './NawayefHero.module.css';
import { sendLeadToWebhook } from '@/lib/sendLead';

const sliderImages = [
  {
    src: '/images/nawayef-east-hills/hero-slider-1.jpg',
    alt: 'Nawayef East Hills luxury hilltop mansions on Hudayriyat Island',
  },
  {
    src: '/images/nawayef-east-hills/hero-slider-2.jpg',
    alt: 'Nawayef East Hills private swimming pool and modern architecture',
  },
  {
    src: '/images/nawayef-east-hills/hero-slider-3.jpg',
    alt: 'Nawayef East Hills elevated panoramic vistas and greenery',
  },
];

interface HeroProps {
  onOpenBrochure?: () => void;
}

export default function NawayefHero({ onOpenBrochure }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: 'Nawayef East Hills',
      developer: 'Modon Properties',
      community: 'Nawayef East Hills',
      property_type: 'Villa / Mansion',
      activity_description: 'Nawayef East Hills Hero Call Back Request',
    });
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background Slides */}
      <div className={styles.sliderWrapper}>
        {sliderImages.map((slide, idx) => (
          <div
            key={idx}
            className={`${styles.slideItem} ${
              idx === currentSlide ? styles.slideActive : ''
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className={styles.slideImage}
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
            <h1 className={styles.title}>Nawayef East Hills at Hudayriyat Island</h1>
            <p className={styles.subtitle}>
              Discover an exclusive collection of 4 to 8-bedroom luxury villas and mansions for sale at Nawayef East Hills on Hudayriyat Island, Abu Dhabi. Designed for spacious and private living, these residences offer generous layouts, elegant interiors, private swimming pools, landscaped gardens, terraces, and dedicated majlis areas.
            </p>

            <div className={styles.btnRow}>
              <button
                type="button"
                className={styles.brochureBtn}
                onClick={onOpenBrochure}
              >
                Download Brochure
              </button>
            </div>

            <div className={styles.badgeRow}>
              <div className={styles.freeholdTag}>
                Freehold for All Nationalities
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
                    {loading ? 'SENDING...' : 'REQUEST NOW'}
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
