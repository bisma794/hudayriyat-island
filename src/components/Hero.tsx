"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { sendLeadToWebhook } from "@/lib/sendLead";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

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
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: "Hudayriyat Island",
      developer: "Modon Properties",
      activity_description: "Homepage Hero Call Back Request",
    });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
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
                      <PhoneInput
                        defaultCountry="ae"
                        value={formData.phone}
                        onChange={(phone) =>
                          setFormData({ ...formData, phone })
                        }
                      />
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
