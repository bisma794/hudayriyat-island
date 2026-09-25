"use client";

import React, { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from "next/image";
import { X, Check } from "lucide-react";
import styles from "./WadeemBrochureModal.module.css";
import { sendLeadToWebhook } from "@/lib/sendLead";

interface WadeemBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WadeemBrochureModal({
  isOpen,
  onClose,
}: WadeemBrochureModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: "Wadeem Gardens",
      developer: "Modon Properties",
      community: "Wadeem Gardens",
      property_type: "Villa",
      activity_description: "Wadeem Gardens Brochure Download Request",
    });
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
              src="/images/wadeem-gardens/hero-1.png"
              alt="Wadeem Gardens Brochure"
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
                  Thank you! The Wadeem Gardens brochure download will begin
                  shortly.
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
                  <PhoneInput defaultCountry="ae" value={formData.phone} onChange={(phone) => setFormData({ ...formData, phone })} />
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
