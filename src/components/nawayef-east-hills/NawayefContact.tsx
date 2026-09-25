'use client';

import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from 'next/image';
import styles from './NawayefContact.module.css';
import { sendLeadToWebhook } from '@/lib/sendLead';

export default function NawayefContact() {
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
      project: 'Nawayef East Hills',
      developer: 'Modon Properties',
      community: 'Nawayef East Hills',
      property_type: 'Villa / Mansion',
      activity_description: 'Nawayef East Hills Contact Form Call Back Request',
    });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 4000);
  };

  return (
    <section className={styles.contactSection} id="contact">
      {/* Full Section Background Image with Overlay */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/form image.jpg"
          alt="Nawayef East Hills Luxury Living"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.containerContent}`}>
        <div className={styles.contactGrid}>
          {/* Left Column: Heading & Tagline */}
          <div className={styles.textCol}>
            <span className={styles.preTitle}>Let&apos;s</span>
            <h2 className={styles.mainTitle}>Rise Above the Ordinary</h2>
            <p className={styles.mainSubtitle}>
              Experience elevated island living at Nawayef East Hills, where spacious villas and mansions meet landscaped surroundings, private outdoor spaces, panoramic views, and the active lifestyle of Hudayriyat Island.
            </p>
          </div>

          {/* Right Column: Overlay Form Card */}
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
