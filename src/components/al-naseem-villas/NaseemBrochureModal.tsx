'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Download } from 'lucide-react';
import styles from './NaseemBrochureModal.module.css';

interface NaseemBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NaseemBrochureModal({
  isOpen,
  onClose,
}: NaseemBrochureModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Automatically trigger brochure download
    const link = document.createElement('a');
    link.href = '/images/al-naseem-villas/al-naseem-brochure.pdf';
    link.download = 'Al-Naseem-Villas-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
      onClose();
    }, 3500);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Left: Image */}
        <div className={styles.imageCol}>
          <Image
            src="/images/al-naseem-villas/hero-slider-1.jpg"
            alt="Al Naseem Villas Brochure"
            fill
            className={styles.modalImg}
          />
        </div>

        {/* Right: Form */}
        <div className={styles.formCol}>
          <h5 className={styles.titleSmall}>DOWNLOAD</h5>
          <h3 className={styles.titleLarge}>FREE BROCHURE</h3>

          {submitted ? (
            <div className={styles.successMessage}>
              Thank you! The Al Naseem Villas brochure download has begun and the details have been emailed to you.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="NAME"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder="EMAIL"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  className={styles.inputField}
                  placeholder="PHONE"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Download size={18} />
                <span>DOWNLOAD NOW</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
