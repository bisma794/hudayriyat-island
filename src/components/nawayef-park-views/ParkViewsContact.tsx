"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./ParkViewsContact.module.css";

export default function ParkViewsContact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    }, 800);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Form Card */}
          <div className={styles.formCard}>
            <div className={styles.subtitle}>REQUEST</div>
            <h3 className={styles.title}>A CALL BACK</h3>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <Check size={20} />
                <span>Your message has been sent. Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
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

                <div className={styles.recaptchaBox}>
                  <div className={styles.recaptchaLeft}>
                    <input
                      type="checkbox"
                      id="contact-recaptcha"
                      checked={isCaptchaChecked}
                      onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                      required
                    />
                    <label htmlFor="contact-recaptcha">I&apos;m not a robot</label>
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
                  {loading ? "SENDING..." : "REQUEST NOW"}
                </button>
              </form>
            )}
          </div>

          {/* Right Image */}
          <div className={styles.imageCol}>
            <Image
              src="/images/nawayef-park-views/asset_56.png"
              alt="Request a call graphic"
              width={380}
              height={380}
              className={styles.contactImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
