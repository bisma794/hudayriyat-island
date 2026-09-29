'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from './ProjectTypes';
import styles from './ProjectFaq.module.css';

interface ProjectFaqProps {
  name: string;
  faqs: FaqItem[];
}

export default function ProjectFaq({ name, faqs }: ProjectFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFaqs: FaqItem[] = faqs.length > 0 ? faqs : [
    {
      q: `Can foreigners and expats purchase property in ${name}?`,
      a: `Yes, ${name} is located in an investment zone on Hudayriyat Island offering 100% freehold ownership for all nationalities.`,
    },
    {
      q: `What is the handover timeline for ${name}?`,
      a: `Handover dates vary by phase, with completion scheduled according to the official master plan by Modon Properties.`,
    },
    {
      q: `Is ${name} eligible for the UAE Golden Visa?`,
      a: `Yes, investments meeting the minimum UAE property value threshold of AED 2M qualify for the 10-year Golden Visa residency.`,
    },
    {
      q: `What payment plans are available?`,
      a: `Modon Properties provides flexible milestone-linked payment schedules including attractive down payment and construction installments.`,
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": defaultFaqs.map((item) => ({
      "@type": "Question",
      "name": item.q || item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a || item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className={styles.faqSection} id="faq">
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.subtitle}>
              Key inquiries and essential information regarding ownership at {name}
            </p>
          </div>

          <div className={styles.faqList}>
            {defaultFaqs.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.faqCard} ${openIndex === idx ? styles.faqOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggleFaq(idx)}
                >
                  <span className={styles.questionText}>{item.q || item.question}</span>
                  <span className={styles.toggleIcon}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {openIndex === idx && (
                  <div className={styles.answerBody}>
                    <p className={styles.answerText}>{item.a || item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
