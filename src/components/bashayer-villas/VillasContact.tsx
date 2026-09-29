'use client';

import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from 'next/image';
import styles from './VillasContact.module.css';
import { sendLeadToWebhook } from '@/lib/sendLead';

export default function VillasContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: 'Bashayer Villas',
      developer: 'Modon Properties',
      community: 'Bashayer Villas',
      property_type: 'Villa',
      activity_description: 'Bashayer Villas Contact Form Call Back Request',
    });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 4000);
  };

  return (
    <section className={styles.contactSection} id="contact" style={{ position: "relative", overflow: "hidden" }}>
      {/* Full Background Image */}
      <div className={styles.bgImageWrapper} style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Image
          src="/images/form image.jpg"
          alt="Bashayer Villas Waterfront Luxury"
          fill
          sizes="100vw"
          className={styles.bgImage}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.overlay} style={{ position: "absolute", inset: 0 }} />
      </div>

      <div className={`container ${styles.containerContent}`} style={{ position: "relative", zIndex: 2 }}>
        <div className={styles.contactGrid}>
          {/* Left: Text Content */}
          <div className={styles.textCol}>
            <span className={styles.preTitle}>LET&apos;S CONNECT</span>
            <h2 className={styles.mainTitle}>Waterfront Island Prestige</h2>
            <p className={styles.mainSubtitle}>
              Experience exquisite coastal villa living at Bashayer Villas, where spacious homes, private swimming pools, elegant gardens, and tranquil shores unite on Hudayriyat Island.
            </p>
          </div>

          {/* Right: Form Card */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h5 className={styles.cardTitleSmall}>REQUEST</h5>
              <h3 className={styles.cardTitleLarge}>A CALL BACK</h3>

              {formSubmitted ? (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent. A property consultant will get in touch with you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      className={styles.inputField}
                      placeholder="Full Name"
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
                      placeholder="E-mail"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <PhoneInput defaultCountry="ae" value={formData.phone} onChange={(phone) => setFormData({ ...formData, phone })} />
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
    </section>
  );
}
