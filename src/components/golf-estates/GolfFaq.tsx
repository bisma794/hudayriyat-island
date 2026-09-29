"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./GolfFaq.module.css";

const faqData = [
  {
    q: "What is Hudayriyat Golf Estates?",
    a: "Hudayriyat Golf Estates is a villa community by Modon Properties on Hudayriyat Island, Abu Dhabi. The project offers a golf-focused residential lifestyle with modern villas and landscaped surroundings.",
  },
  {
    q: "Who is the developer of Hudayriyat Golf Estates?",
    a: "Hudayriyat Golf Estates is developed by Modon Properties.",
  },
  {
    q: "What is the starting price of Hudayriyat Golf Estates?",
    a: "The launch price starts from approximately AED 4.3 million, based on the available project information.",
  },
  {
    q: "What is the payment plan for Hudayriyat Golf Estates?",
    a: "The available payment plan is 5% / 35% / 60%, based on the current project payment schedule.",
  },
  {
    q: "When is the handover of Hudayriyat Golf Estates?",
    a: "The handover is planned for Q3 2030.",
  },
  {
    q: "Where is Hudayriyat Golf Estates located?",
    a: "Hudayriyat Golf Estates is located on Hudayriyat Island in Abu Dhabi, close to golf facilities, beaches, waterfront attractions, restaurants, sports facilities, and other leisure destinations.",
  },
  {
    q: "Is Hudayriyat Golf Estates freehold?",
    a: "Yes, the project offers freehold ownership for all nationalities.",
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

export default function GolfFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.subtitle}>
              Find answers to common questions about purchasing a villa in Hudayriyat Golf Estates.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={styles.faqCard}>
                  <button
                    type="button"
                    className={`${styles.faqQuestion} ${
                      isOpen ? styles.questionActive : ""
                    }`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`${styles.chevron} ${
                        isOpen ? styles.chevronOpen : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{item.a}</p>
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
