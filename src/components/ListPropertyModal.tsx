"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import styles from "./ListPropertyModal.module.css";

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ListPropertyModal({
  isOpen,
  onClose,
}: ListPropertyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Villa",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>LIST YOUR PROPERTY</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            ✓ Thank you! Your property listing inquiry has been received. Our
            luxury portfolio manager will reach out shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.formGrid}>
            <div>
              <label className={styles.label}>Name *</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className={styles.inputField}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className={styles.label}>Email *</label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className={styles.inputField}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className={styles.label}>Phone *</label>
              <input
                type="tel"
                required
                placeholder="+971 50 123 4567"
                className={styles.inputField}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className={styles.label}>Property Type *</label>
              <select
                className={styles.selectField}
                value={formData.propertyType}
                onChange={(e) =>
                  setFormData({ ...formData, propertyType: e.target.value })
                }
              >
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Compound">Compound</option>
                <option value="Plot">Plot</option>
                <option value="Showroom">Showroom</option>
              </select>
            </div>

            <div className={styles.fullWidth}>
              <label className={styles.label}>Attachment (Optional)</label>
              <input
                type="file"
                accept="image/*,.pdf"
                className={styles.inputField}
              />
              <p className={styles.fileNote}>
                Upload floor plans, photos, or deed documents (Max 10MB).
              </p>
            </div>

            <div className={styles.fullWidth}>
              <label className={styles.label}>Comments / Specifications</label>
              <textarea
                rows={3}
                placeholder="Tell us about the property (bedrooms, plot size, community, expected price)..."
                className={styles.textareaField}
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
              />
            </div>

            <div className={styles.fullWidth}>
              <button type="submit" className={styles.submitBtn}>
                SUBMIT PROPERTY
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
