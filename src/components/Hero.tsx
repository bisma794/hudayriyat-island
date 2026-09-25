"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    image: "/images/hero/slide-1.jpg",
    alt: "Hudayriyat Island's lush forest providing serene outdoor recreation",
  },
  {
    id: 2,
    image: "/images/hero/slide-2.jpg",
    alt: "Stunning beachfront villas with panoramic sea views on Hudayriyat Island",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      alert("Please confirm you are not a robot.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsCaptchaChecked(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 4500);
  };

  return (
    <section
      id="hero"
      aria-label="Hudayriyat Island Hero and Callback Request"
      className={styles.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Carousel Slides with Ken Burns Zoom */}
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.carouselSlide} ${
              index === currentSlide ? styles.carouselSlideActive : ""
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={styles.slideImage}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay & Content */}
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* Left Column: 2-line Heading, 2-line Content, 3rd Line Freehold */}
            <div className={styles.leftCol}>
              <h1 className={styles.heroTitle}>
                Hudayriyat
                <br />
                Island
              </h1>

              <p className={styles.heroSubtitle}>
                Abu Dhabi’s Most Exclusive Coastal
                <br />
                Lifestyle Destination
              </p>

              <div className={styles.freeholdText}>
                Freehold for All Nationalities
              </div>
            </div>

            {/* Right Column: Request A Call Back Form */}
            <div className={styles.rightCol}>
              <div className={styles.requestCard}>
                <p className={styles.cardTitleSmall}>REQUEST</p>
                <div className={styles.cardTitleLarge}>A CALL BACK</div>

                {isSubmitted ? (
                  <div className={styles.successMessage}>
                    ✓ Your request has been received. Our luxury property specialist
                    will call you back shortly!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} aria-label="Request A Call Back">
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        required
                        aria-label="Full Name"
                        placeholder="Full Name"
                        className={styles.inputField}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <input
                        type="email"
                        required
                        aria-label="Email Address"
                        placeholder="E-mail"
                        className={styles.inputField}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <div className={styles.phoneWrapper}>
                        <span className={styles.phonePrefix} title="Select Country Code">
                          🇵🇰 ▾
                        </span>
                        <input
                          type="tel"
                          required
                          aria-label="Phone Number"
                          placeholder="Phone"
                          className={styles.phoneInput}
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* reCAPTCHA Checkbox Box */}
                    <div className={styles.recaptchaBox}>
                      <div
                        className={styles.recaptchaLeft}
                        onClick={() => setIsCaptchaChecked((prev) => !prev)}
                      >
                        <div
                          className={`${styles.recaptchaCheckbox} ${
                            isCaptchaChecked
                              ? styles.recaptchaCheckboxChecked
                              : ""
                          }`}
                        >
                          {isCaptchaChecked && (
                            <Check size={16} color="#856d52" strokeWidth={3} />
                          )}
                        </div>
                        <span className={styles.recaptchaText}>
                          I'm not a robot
                        </span>
                      </div>

                      <div className={styles.recaptchaBrand}>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 48 48"
                          fill="none"
                          className={styles.recaptchaLogo}
                        >
                          <path
                            d="M24 4C12.95 4 4 12.95 4 24C4 28.52 5.51 32.7 8.04 36.03L12.35 31.72C10.89 29.5 10 26.86 10 24C10 16.27 16.27 10 24 10C28.47 10 32.42 12.09 35 15.35L29 21.35H44V6.35L38.7 11.65C34.98 7.02 29.84 4 24 4Z"
                            fill="#1A73E8"
                          />
                          <path
                            d="M24 38C19.53 38 15.58 35.91 13 32.65L19 26.65H4V41.65L9.3 36.35C13.02 40.98 18.16 44 24 44C35.05 44 44 35.05 44 24C44 19.48 42.49 15.3 39.96 11.97L35.65 16.28C37.11 18.5 38 21.14 38 24C38 31.73 31.73 38 24 38Z"
                            fill="#4285F4"
                          />
                        </svg>
                        <span
                          style={{
                            fontSize: "8px",
                            fontWeight: 700,
                            color: "#555",
                          }}
                        >
                          reCAPTCHA
                        </span>
                      </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      REQUEST NOW
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
