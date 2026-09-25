"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./BashayerFaq.module.css";

const faqs = [
  {
    q: "What is Bashayer Residences?",
    a: "Bashayer Residences is a waterfront residential community by Modon Properties on Hudayriyat Island, Abu Dhabi. It includes apartments, townhomes, and penthouses with access to waterfront and lifestyle facilities.",
  },
  {
    q: "Who is the developer of Bashayer Residences?",
    a: "Bashayer Residences is developed by Modon Properties.",
  },
  {
    q: "What types of properties are available at Bashayer Residences?",
    a: "The latest release includes 1, 2, and 3-bedroom apartments, 2 and 4-bedroom townhomes, and penthouses.",
  },
  {
    q: "What is the starting price of Bashayer Residences?",
    a: "The latest release starts from approximately AED 2.5 million, subject to availability and current pricing.",
  },
  {
    q: "What is the payment plan for Bashayer Residences?",
    a: "The latest Residences 5 & 6 release follows a 50/50 payment plan, with 5% payable on reservation and the remaining 50% due on handover.",
  },
  {
    q: "When is the handover of Bashayer Residences?",
    a: "The latest Residences 5 & 6 release is scheduled for handover on 30 April 2030.",
  },
  {
    q: "Where is Bashayer Residences located?",
    a: "Bashayer Residences is located on Hudayriyat Island in Abu Dhabi, close to waterfront attractions, beaches, sports facilities, restaurants, and leisure destinations.",
  },
  {
    q: "Is Bashayer Residences freehold?",
    a: "Yes. Bashayer Residences offers freehold ownership for all nationalities.",
  },
  {
    q: "What amenities are available at Bashayer Residences?",
    a: "The community includes a waterfront promenade, marina, clubhouse, rooftop infinity pool, sports courts, gym, wellness facilities, parks, children's play areas, cycling trails, dining, and retail facilities.",
  },
];

export default function BashayerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                >
                  <span>{faq.q}</span>
                  <span className={styles.icon}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    <p className={styles.answer}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
