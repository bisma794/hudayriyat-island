'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './NawayefFaq.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: 'What is Nawayef East Hills?',
    answer:
      'Nawayef East Hills, officially presented by Modon as Nawayef East, is a residential development on Hudayriyat Island, Abu Dhabi. It offers spacious villas and mansions across the Homes, Heights, and Mansions collections.',
  },
  {
    question: 'Who is the developer of Nawayef East Hills?',
    answer:
      'Nawayef East Hills is developed by Modon Properties.',
  },
  {
    question: 'What types of properties are available at Nawayef East Hills?',
    answer:
      'Nawayef East Hills offers 4 and 5-bedroom Homes, 5 to 7-bedroom Heights, and 6 to 8-bedroom Mansions.',
  },
  {
    question: 'What is the starting price of Nawayef East Hills?',
    answer:
      "The starting price for Nawayef East Homes is AED 6.6 million, according to Modon's current project information.",
  },
  {
    question: 'What is the payment plan for Nawayef East Hills?',
    answer:
      'Nawayef East follows a 40/60 payment plan, with 10% payable on booking, 30% during construction, and the remaining 60% due upon handover.',
  },
  {
    question: 'When is the handover of Nawayef East Hills?',
    answer:
      'Nawayef East is scheduled for handover in December 2028.',
  },
  {
    question: 'Where is Nawayef East Hills located?',
    answer:
      'Nawayef East Hills is located on Hudayriyat Island in Abu Dhabi, close to beaches, sports facilities, outdoor attractions, dining destinations, and leisure facilities.',
  },
  {
    question: 'Is Nawayef East Hills freehold?',
    answer:
      'Yes. Nawayef East is a freehold development and properties can be fully owned by buyers of all nationalities.',
  },
  {
    question: 'What amenities are available at Nawayef East Hills?',
    answer:
      'The development includes a swimming pool, clubhouse, gym, tennis facilities, jogging trails, children\'s play areas, landscaped parkland, and a mosque. Residents can also access the wider sports and leisure facilities of Hudayriyat Island.',
  },
  {
    question: 'What makes Nawayef East Hills different?',
    answer:
      'Nawayef East Hills is positioned on elevated terrain reaching up to 60 metres, giving the community a distinctive hillside setting with views towards the Abu Dhabi skyline and Arabian Gulf. The development also combines different architectural styles with spacious villas, private gardens, terraces, swimming pools, and majlis areas.',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqList.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function NawayefFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
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
    </>
  );
}
