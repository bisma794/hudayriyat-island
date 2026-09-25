"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ParkViewsContact.module.css";

export default function ParkViewsContact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 4500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Us and Request Callback"
      className={styles.contactSection}
    >
      {/* Full Background Image */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/form image.jpg"
          alt="Hudayriyat Island Waterfront Destination"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.containerContent}`}>
        <div className={styles.contactGrid}>
          {/* Left: Text Info */}
          <div className={styles.textCol}>
            <span className={styles.preTitle}>LET&apos;S CONNECT</span>
            <h2 className={styles.mainTitle}>Invest in Your Future</h2>
            <p className={styles.mainSubtitle}>
              Discover exceptional residential villas, waterfront mansions, and prime plots across Hudayriyat Island. Connect with our dedicated property advisory team for personalized guidance and private viewings.
            </p>
          </div>

          {/* Right: Form Card */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <p className={styles.titleSmall}>REQUEST</p>
              <div className={styles.titleLarge}>A CALL BACK</div>

              {submitted ? (
                <div className={styles.successMsg}>
                  ✓ Thank you! Your request has been received. Our advisory team
                  will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} aria-label="Contact Form">
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
                    <input
                      type="tel"
                      required
                      aria-label="Phone Number"
                      placeholder="Phone Number"
                      className={styles.inputField}
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
