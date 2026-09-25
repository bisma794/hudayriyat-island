'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import styles from './NaseemHero.module.css';

const sliderImages = [
  {
    src: '/images/al-naseem-villas/hero-slider-1.jpg',
    alt: 'Al Naseem Villas luxury villa architecture on Hudayriyat Island',
  },
  {
    src: '/images/al-naseem-villas/hero-slider-2.jpg',
    alt: 'Al Naseem Villas contemporary living spaces with private gardens',
  },
  {
    src: '/images/al-naseem-villas/hero-slider-3.jpg',
    alt: 'Al Naseem Villas panoramic waterfront lifestyle views',
  },
  {
    src: '/images/al-naseem-villas/hero-slider-4.jpg',
    alt: 'Al Naseem Villas landscaped community park and walkways',
  },
];

interface HeroProps {
  onOpenBrochure?: () => void;
}

export default function NaseemHero({ onOpenBrochure }: HeroProps) {
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
            <h1 className={styles.title}>Al Naseem Villas</h1>
            <p className={styles.subtitle}>
              Spacious Luxury 4 to 6 BR Villas for Modern Living on Hudayriyat Island.
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
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className={styles.inputField}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  {/* Recaptcha Mock */}
                  <div className={styles.recaptchaBox}>
                    <div className={styles.recaptchaLeft}>
                      <input type="checkbox" id="naseem-recaptcha" required />
                      <label htmlFor="naseem-recaptcha">I&apos;m not a robot</label>
                    </div>
                    <div className={styles.recaptchaRight}>
                      <span className={styles.recapBrand}>reCAPTCHA</span>
                      <span className={styles.recapTerms}>Privacy - Terms</span>
                    </div>
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
