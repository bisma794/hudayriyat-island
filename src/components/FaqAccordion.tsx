"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./FaqAccordion.module.css";

const faqs = [
  {
    q: "What is Hudayriyat Island?",
    a: "It's a large-scale waterfront island development off Abu Dhabi's coast, run by Modon Properties, combining residential communities with sports, leisure, and entertainment destinations.",
  },
  {
    q: "Where is Hudayriyat Island located?",
    a: "It sits just off Al Bateen, connected to the mainland by a dedicated bridge from Sheikh Shakhbout bin Sultan Street, roughly 10–20 minutes from central Abu Dhabi landmarks.",
  },
  {
    q: "Who is developing Hudayriyat Island?",
    a: "Modon Properties, one of Abu Dhabi's major community developers, is behind the island's masterplan and its residential launches, including Al Naseem, Nawayef, and Bashayer.",
  },
  {
    q: "Is Hudayriyat Island freehold?",
    a: "Most of the residential communities on the island, including Al Naseem, Nawayef, and Wadeem, are freehold and open to buyers of all nationalities.",
  },
  {
    q: "What residential projects are available on Hudayriyat Island?",
    a: "Current and recent launches include Al Naseem, Nawayef (Mansions, Homes, Heights, East Hills, Village, Park Views), Bashayer, Wadeem Plots, Masyaf Plots, Sunset Cliff, Hudayriyat Quays, Hudayriyat Sahl, and Hudayriyat Hills.",
  },
  {
    q: "What amenities does Hudayriyat Island offer?",
    a: "The island includes beaches, a velodrome, a surf park, an urban park with a mangrove walk, over 200 kilometres of cycling tracks, adventure parks, dining outlets, and community-level clubs and courts.",
  },
  {
    q: "How far is Hudayriyat Island from Abu Dhabi city centre?",
    a: "Roughly 10 minutes to the Corniche and World Trade Centre, 12 minutes to Al Bateen, and 15 minutes to Yas Island.",
  },
  {
    q: "Is Hudayriyat Island a good investment?",
    a: "Strong demand signals (such as the rapid Bashayer sellout), government-backed infrastructure, and limited waterfront land supply make it an appealing option, though buyers should still review individual payment plans and handover timelines.",
  },
  {
    q: "What villa sizes are available on Hudayriyat Island?",
    a: "Sizes vary widely by community, from roughly 724 sqm villas in Al Naseem to sprawling 29,000+ sq ft mansions in Nawayef Mansions.",
  },
  {
    q: "When will Hudayriyat Island projects be completed?",
    a: "Handover dates vary by community. Some, like Al Naseem, are targeting late 2026, while others, such as Nawayef Village, are scheduled for early 2029.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        id="faq"
        aria-label="Frequently Asked Questions about Hudayriyat Island"
        className={styles.faqSection}
      >
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about Hudayriyat Island master development, communities, and real estate investments.</p>
        </div>

        <div className={styles.faqContainer}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqIcon}>
                      <Plus size={18} />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`${styles.faqAnswer} ${
                      isOpen ? styles.faqAnswerOpen : ""
                    }`}
                  >
                    <p className={styles.faqAnswerText}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
