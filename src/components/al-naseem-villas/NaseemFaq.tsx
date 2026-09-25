'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './NaseemFaq.module.css';

interface FaqItem {
  q: string;
  a: string;
}

const faqsList: FaqItem[] = [
  {
    q: 'Can anyone buy a villa at Al Naseem community?',
    a: 'Yes. Al Naseem community offers freehold ownership, available to all nationalities, making it fully accessible to UAE residents and international foreign investors.',
  },
  {
    q: 'What bedroom options are available?',
    a: 'Villas in Al Naseem Community come in 4, 5, and 6 bedroom configurations, thoughtfully designed for families of varying sizes.',
  },
  {
    q: 'What is the villa area range?',
    a: 'Units vary between approximately 7,783 to 11,008 sq ft, offering spacious layouts tailored for every lifestyle and aesthetic preference.',
  },
  {
    q: 'Where is Al Naseem community located?',
    a: 'Situated on Hudayriyat Island, the community offers a peaceful waterfront sanctuary just minutes from the heart of Downtown Abu Dhabi and Al Bateen.',
  },
  {
    q: 'Is Al Naseem community a completed project?',
    a: 'No. This is an off-plan residential development by master developer Modon Properties, with handover scheduled for Q4 2026.',
  },
  {
    q: 'Can foreigners own property in Abu Dhabi?',
    a: 'Yes. Foreigners and non-UAE nationals can purchase 100% Freehold Property in designated investment zones like Hudayriyat Island, Al Reem Island, Saadiyat Island, Yas Island, and Al Maryah Island.',
  },
];

export default function NaseemFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about purchasing a luxury villa at Al Naseem, Hudayriyat Island
          </p>
        </div>

        <div className={styles.faqList}>
          {faqsList.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.faqCard} ${openIndex === idx ? styles.faqOpen : ''}`}
            >
              <button
                type="button"
                className={styles.questionBtn}
                onClick={() => toggleFaq(idx)}
              >
                <span className={styles.questionText}>{item.q}</span>
                <span className={styles.toggleIcon}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {openIndex === idx && (
                <div className={styles.answerBody}>
                  <p className={styles.answerText}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
