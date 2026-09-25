"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check } from "lucide-react";
import styles from "./ParkViewsBrochureModal.module.css";

interface ParkViewsBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  pdfUrl?: string;
}

export default function ParkViewsBrochureModal({
  isOpen,
  onClose,
  title = "FREE BROCHURE",
  pdfUrl = "/images/nawayef-park-views/asset_58.pdf",
}: ParkViewsBrochureModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      alert("Please confirm you are not a robot.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      // Trigger PDF download after a brief delay
      if (pdfUrl) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Nawayef-Park-Views.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 800);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
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

        {/* Left Image */}
        <div className={styles.imageCol}>
          <Image
            src="/images/nawayef-park-views/asset_2.jpg"
            alt="Nawayef Park Views"
            fill
            className={styles.modalImg}
          />
        </div>

        {/* Right Form */}
        <div className={styles.formCol}>
          <div className={styles.titleSmall}>DOWNLOAD</div>
          <h3 className={styles.titleLarge}>{title}</h3>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <Check size={20} />
              <span>Thank you! Your download will start shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
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

              <div className={styles.recaptchaBox}>
                <div className={styles.recaptchaLeft}>
                  <input
                    type="checkbox"
                    id="modal-recaptcha"
                    checked={isCaptchaChecked}
                    onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                    required
                  />
                  <label htmlFor="modal-recaptcha">I&apos;m not a robot</label>
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
                {loading ? "PREPARING..." : "DOWNLOAD NOW"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
