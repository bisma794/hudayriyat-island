"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import styles from "./WadeemFaq.module.css";

const faqData = [
  {
    q: "What is Wadeem Gardens?",
    a: "Wadeem Gardens is an upcoming villa community by Modon on Hudayriyat Island, Abu Dhabi, featuring three gated villa clusters.",
  },
  {
    q: "What types of villas are available at Wadeem Gardens?",
    a: "Wadeem Gardens offers 4-, 5- and 6-bedroom villas with Contemporary Arabic and Modernist façades.",
  },
  {
    q: "What is the starting price of Wadeem Gardens?",
    a: "Wadeem Gardens starts from AED 8,700,000 for a 4-bedroom villa.",
  },
  {
    q: "What are the villa sizes and plot sizes at Wadeem Gardens?",
    a: "Villa sizes range from 4,628 to 6,358 sq. ft., while plot sizes range from 5,727 to 7,750 sq. ft.",
  },
  {
    q: "What payment plans are available at Wadeem Gardens?",
    a: "Wadeem Gardens offers two payment options: a 45/55 plan without finance and a 25/75 plan with finance.",
  },
  {
    q: "What is the difference between the two Wadeem Gardens payment plans?",
    a: "The 45/55 plan is listed without finance, while the 25/75 plan is listed with finance and is subject to off-plan mortgage approval.",
  },
  {
    q: "When is the handover of Wadeem Gardens?",
    a: "Wadeem Gardens is scheduled for handover in Q2 2031 under the 25/75 payment plan.",
  },
  {
    q: "Where is Wadeem Gardens located and what is nearby?",
    a: "Wadeem Gardens is located on Hudayriyat Island, with Zayed International Airport approximately 15 minutes away, ADGM 20 minutes, Louvre Museum 23 minutes, and Disneyland 25 minutes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a,
    },
  })),
};

export default function WadeemFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className={styles.faqSection}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>FAQs</h2>
          </div>

          <div className={styles.faqList}>
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.questionBtn}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span className={styles.questionText}>{item.q}</span>
                    <span className={styles.iconCircle}>
                      {isOpen ? <X size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.answerBox}>
                      <p className={styles.answerText}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
