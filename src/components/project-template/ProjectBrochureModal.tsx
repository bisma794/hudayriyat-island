'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Download } from 'lucide-react';
import styles from './ProjectBrochureModal.module.css';

interface ProjectBrochureModalProps {
  name: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectBrochureModal({
  name,
  isOpen,
  onClose,
}: ProjectBrochureModalProps) {
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
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
      onClose();
    }, 3000);
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

        {/* Left: Image Placeholder */}
        <div className={styles.imageCol}>
          <Image
            src="/images/placeholder.svg"
            alt={`${name} Brochure`}
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
              Thank you! The {name} brochure details have been sent to your email address.
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
