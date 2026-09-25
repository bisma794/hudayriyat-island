'use client';

import React, { useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import styles from './ProjectHero.module.css';
import { sendLeadToWebhook } from '@/lib/sendLead';

interface ProjectHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  freeholdTag?: string;
  heroImage?: string;
  heroSlides?: string[];
  onOpenBrochure?: () => void;
}

export default function ProjectHero({
  badge,
  title,
  subtitle,
  freeholdTag = 'Freehold for All Nationalities',
  heroImage = '/images/placeholder.svg',
  heroSlides,
  onOpenBrochure,
}: ProjectHeroProps) {
  const slides = heroSlides && heroSlides.length > 0 ? heroSlides : [heroImage];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
      project: title || 'Hudayriyat Island Project',
      developer: 'Modon Properties',
      community: title || 'Hudayriyat Island',
      activity_description: `${title} Hero Call Back Request`,
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
        {slides.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.slideItem} ${
              idx === currentSlide ? styles.slideActive : ''
            }`}
          >
            <Image
              src={img}
              alt={`${title} slide ${idx + 1}`}
              fill
              priority={idx === 0}
              className={styles.slideImage}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Slider Controls (if multiple slides) */}
      {slides.length > 1 && (
        <>
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
        </>
      )}

      {/* Hero Content Container */}
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Heading, Subtitle, Brochure CTA */}
          <div className={styles.leftCol}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>

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
                {freeholdTag.replace(/^[✦•\s]+/, '').split('•')[0].trim()}
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
