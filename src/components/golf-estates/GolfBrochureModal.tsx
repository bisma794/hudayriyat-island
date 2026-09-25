"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check } from "lucide-react";
import styles from "./GolfBrochureModal.module.css";

interface GolfBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GolfBrochureModal({
  isOpen,
  onClose,
}: GolfBrochureModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className={styles.modalGrid}>
          {/* Left: Image */}
          <div className={styles.imageCol}>
            <Image
              src="/images/golf-estates/hero-1.jpg"
              alt="Hudayriyat Golf Estates Brochure"
              fill
              className={styles.modalImg}
            />
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <h4 className={styles.titleSmall}>DOWNLOAD</h4>
            <h3 className={styles.titleLarge}>FREE BROCHURE</h3>

            {submitted ? (
              <div className={styles.successBox}>
                <Check size={20} />
                <span>
                  Thank you! The Hudayriyat Golf Estates brochure download will
                  begin shortly.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="NAME"
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
                    placeholder="EMAIL"
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
                    placeholder="PHONE"
                    required
                    className={styles.inputField}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className={styles.recaptchaBox}>
                  <div className={styles.recaptchaLeft}>
                    <input
                      type="checkbox"
                      id="golf-brochure-recaptcha"
                      required
                    />
                    <label htmlFor="golf-brochure-recaptcha">
                      I&apos;m not a robot
                    </label>
                  </div>
                  <div className={styles.recaptchaRight}>
                    <span className={styles.recapBrand}>reCAPTCHA</span>
                    <span className={styles.recapTerms}>Privacy - Terms</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={styles.downloadBtn}
                >
                  {loading ? "PROCESSING..." : "DOWNLOAD NOW"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
