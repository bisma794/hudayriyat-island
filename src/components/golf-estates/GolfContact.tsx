"use client";

import React, { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./GolfContact.module.css";
import { sendLeadToWebhook } from "@/lib/sendLead";

export default function GolfContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: "Hudayriyat Golf Estates",
      developer: "Modon Properties",
      community: "Hudayriyat Golf Estates",
      property_type: "Villa",
      activity_description: "Golf Estates Contact Form Call Back Request",
    });
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
          alt="Hudayriyat Golf Estates"
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
            <span className={styles.preTitle}>LET&apos;S</span>
            <h2 className={styles.mainTitle}>Reimagine Life on Hudayriyat Island</h2>
            <p className={styles.mainSubtitle}>
              Experience a golf-inspired island lifestyle surrounded by green spaces, waterfront attractions, outdoor activities, and modern community amenities.
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
                <form onSubmit={handleSubmit}>
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
                    <PhoneInput defaultCountry="ae" value={formData.phone} onChange={(phone) => setFormData({ ...formData, phone })} />
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
