"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./BashayerContact.module.css";

export default function BashayerContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 4000);
  };

  return (
    <section className={styles.contactSection} id="contact">
      {/* Full Section Background Image with Overlay */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/form image.jpg"
          alt="Bashayer Residences Waterfront Living"
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
            <h2 className={styles.mainTitle}>Reimagine Life at the Water&apos;s Edge</h2>
            <p className={styles.mainSubtitle}>
              Experience a modern waterfront lifestyle on Hudayriyat Island, surrounded by open spaces, coastal views, outdoor activities, and thoughtfully planned community amenities.
            </p>
          </div>

          {/* Right Column: Overlay Form Card */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h5 className={styles.cardTitleSmall}>REQUEST</h5>
              <h3 className={styles.cardTitleLarge}>A CALL BACK</h3>

              {formSubmitted ? (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent. A property consultant will
                  get in touch with you shortly.
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
                    <input
                      type="tel"
                      className={styles.inputField}
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
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
    </section>
  );
}
