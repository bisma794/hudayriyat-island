'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './VillasFaq.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: 'Is Bashayer Villas a freehold development in Abu Dhabi?',
    answer:
      'Yes, Bashayer Villas is a 100% freehold community, offering full property ownership opportunities to all nationalities in Abu Dhabi.',
  },
  {
    question: 'What types of villas are available at Bashayer Villas?',
    answer:
      'Bashayer Villas offers 4-bedroom Select Villas and 5-bedroom Shore Villas, each designed for luxury family living with expansive indoor and outdoor spaces.',
  },
  {
    question: 'What is the starting price of Bashayer Villas in Abu Dhabi?',
    answer:
      'Prices at Bashayer Villas start from AED 7,200,000, offering competitive value for prime waterfront villas in Abu Dhabi.',
  },
  {
    question: 'What is the handover date for Bashayer Villas?',
    answer:
      'Handover for Bashayer Villas is scheduled for March 2029.',
  },
  {
    question: 'What amenities are available at Bashayer Villas?',
    answer:
      'Residents enjoy a private clubhouse with a rooftop infinity pool, fully equipped gymnasium, landscaped parks, multi-sports courts, boutique retail, and waterfront dining destinations.',
  },
  {
    question: 'How is the location and connectivity of Bashayer Villas?',
    answer:
      'Bashayer Villas offers exceptional connectivity to landmarks including Sheikh Zayed Grand Mosque, Saadiyat Island, Yas Island, ADGM, and Zayed International Airport.',
  },
  {
    question: 'Is Bashayer Villas suitable for families in Abu Dhabi?',
    answer:
      'Yes, Bashayer Villas is a family-oriented gated community featuring spacious layouts, dual kitchens, private gardens, and dedicated children’s play areas.',
  },
  {
    question: 'What payment plan is offered for Bashayer Villas?',
    answer:
      'Bashayer Villas offers a flexible 50/50 payment plan, with 10% on booking, staged construction installments, and 50% due at handover (March 2029).',
  },
];

export default function VillasFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqContainer}>
          {faqList.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                type="button"
                className={styles.questionBtn}
                onClick={() => toggleFaq(idx)}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {openIndex === idx && (
                <div className={styles.answerBox}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
