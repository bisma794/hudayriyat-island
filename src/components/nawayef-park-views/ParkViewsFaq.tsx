"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./ParkViewsFaq.module.css";

const faqs = [
  {
    q: "Where is Nawayef Park Views located?",
    a: (
      <>
        Nawayef Park Views is situated in <strong>the heart of Hudayriyat Island</strong>, Abu Dhabi, resting between the scenic Nawayef hills.
      </>
    ),
  },
  {
    q: "Who is the developer?",
    a: (
      <>
        Developed by <strong>Modon Properties</strong>, a renowned Abu Dhabi–based developer known for crafting premium, sustainable communities.
      </>
    ),
  },
  {
    q: "What types of residences are available?",
    a: (
      <>
        The community offers freehold <strong>apartments with 1 to 4 bedrooms</strong>, featuring private balconies or terraces. Larger units, ranging from 2 to 4 bedrooms, may include staff quarters and dedicated home office space.
      </>
    ),
  },
  {
    q: "What is the size range of the residences?",
    a: (
      <>
        Residential units span from approximately <strong>1,044 sq ft</strong> up to <strong>5,328 sq ft.</strong>
      </>
    ),
  },
  {
    q: "When is the expected completion/ handover?",
    a: (
      <>
        The project is scheduled for completion in <strong>Q1 2028.</strong>
      </>
    ),
  },
  {
    q: "What payment plan options are available?",
    a: (
      <>
        A flexible <strong>60/40 payment plan</strong>, requiring a 10% booking fee, followed by structured installments during construction, with the final 40% due at handover.
      </>
    ),
  },
  {
    q: "What amenities are included onsite?",
    a: (
      <>
        Residents enjoy a wellness-focused lifestyle featuring a <strong>fully equipped gym</strong>, <strong>yoga zone</strong>, <strong>co-working space</strong>, <strong>barbecue</strong> and <strong>shaded green areas</strong>, <strong>clubhouse</strong>, <strong>children’s splash pool</strong> and play area, <strong>plus concierge</strong>, catering, and <strong>laundry services</strong>.
      </>
    ),
  },
  {
    q: "Who can buy and what are the investment benefits?",
    a: (
      <>
        Available as <strong>freehold for all nationalities</strong>, the apartments are ideal for both residents and investors.
      </>
    ),
  },
];

export default function ParkViewsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>FAQs</h2>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`${styles.iconWrapper} ${
                      isOpen ? styles.iconOpen : ""
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && <div className={styles.answerBox}>{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
