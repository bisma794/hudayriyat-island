"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./WadeemContact.module.css";

export default function WadeemContact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* Full Background Image */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/form image.jpg"
          alt="Wadeem Gardens Hudayriyat Island"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.containerContent}`}>
        <div className={styles.contactGrid}>
          {/* Left: Text Content */}
          <div className={styles.textCol}>
            <span className={styles.preTitle}>LET&apos;S CONNECT</span>
            <h2 className={styles.mainTitle}>Begin Your Island Journey</h2>
            <p className={styles.mainSubtitle}>
              Experience serene garden living at Wadeem Gardens, where expansive villas and park views meet tranquility, lush green landscapes, and the active lifestyle of Hudayriyat Island.
            </p>
          </div>

          {/* Right: Form Card */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <p className={styles.titleSmall}>REQUEST</p>
              <div className={styles.titleLarge}>A CALL BACK</div>

              {submitted ? (
                <div className={styles.successMsg}>
                  <Check size={20} />
                  <span>Your message has been sent. Thank you!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
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
                      placeholder="E-mail"
                      required
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
                      placeholder="Phone Number"
                      required
                      className={styles.inputField}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitBtn}
                  >
                    {loading ? "SENDING..." : "REQUEST NOW"}
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
