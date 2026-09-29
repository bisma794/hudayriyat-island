"use client";

import React, { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from "next/image";
import styles from "./ParkViewsContact.module.css";
import { sendLeadToWebhook } from "@/lib/sendLead";

export default function ParkViewsContact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: "Nawayef Park Views",
      developer: "Modon Properties",
      community: "Nawayef Park Views",
      property_type: "Villa",
      activity_description: "Nawayef Park Views Contact Form Call Back Request",
    });
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
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Full Background Image */}
      <div className={styles.bgImageWrapper} style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Image
          src="/images/form image.jpg"
          alt="Hudayriyat Island Waterfront Destination"
          fill
          sizes="100vw"
          className={styles.bgImage}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.overlay} style={{ position: "absolute", inset: 0 }} />
      </div>

      <div className={`container ${styles.containerContent}`} style={{ position: "relative", zIndex: 2 }}>
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
