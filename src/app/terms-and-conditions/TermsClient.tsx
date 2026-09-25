"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import styles from "./Terms.module.css";

const termsData = [
  {
    num: 1,
    title: "Agreement to Terms",
    content:
      "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please stop using the website.",
  },
  {
    num: 2,
    title: "Website Use",
    content:
      "This website provides general property information and real estate-related services, including information about properties and projects on Hudayriyat Island and across Abu Dhabi. You must use this website lawfully and responsibly. Unauthorized, fraudulent, harmful, or abusive use of the website is strictly prohibited.",
  },
  {
    num: 3,
    title: "Property Information",
    content:
      "Property listings, prices, layouts, specifications, payment plans, availability, and handover dates are provided for general reference only. Property information may change without notice and does not constitute a binding offer, agreement, or contract. Users should verify all property details before making any commitment.",
  },
  {
    num: 4,
    title: "No Professional Advice",
    content:
      "The information provided on this website does not constitute legal, financial, tax, investment, or immigration advice. You should conduct your own research and consult qualified professionals before making any property or investment decision.",
  },
  {
    num: 5,
    title: "No Guarantee of Returns",
    content:
      "No guarantee is provided regarding future property values, rental income, capital appreciation, or investment returns. Past performance of a property, project, community, or developer does not guarantee future results.",
  },
  {
    num: 6,
    title: "User Responsibilities",
    content:
      "You are responsible for providing accurate and complete information when submitting enquiries through this website. You must not provide false information, impersonate another person, or misuse the website or its services.",
  },
  {
    num: 7,
    title: "Intellectual Property",
    content:
      "All text, logos, graphics, images, videos, designs, and other content available on this website are owned by the website owner or its respective licensors, unless otherwise stated. You may not copy, reproduce, distribute, modify, or use website content for commercial purposes without prior written permission.",
  },
  {
    num: 8,
    title: "Third-Party Links",
    content:
      "This website may contain links to third-party websites, including property developers and other service providers. These links are provided for convenience only. We do not control, endorse, or take responsibility for the content, availability, security, or privacy practices of third-party websites.",
  },
  {
    num: 9,
    title: "Limitation of Liability",
    content:
      "We take reasonable steps to provide accurate and up-to-date information, but we do not guarantee that all information on the website is complete, accurate, or current. We are not responsible for losses or damages arising from reliance on information provided on this website. Users should independently verify property prices, availability, specifications, payment plans, and other relevant details before making a decision.",
  },
  {
    num: 10,
    title: "Governing Law",
    content:
      "These Terms & Conditions shall be governed by the applicable laws and regulations of the United Arab Emirates and the Emirate of Abu Dhabi. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts of Abu Dhabi, UAE.",
  },
];

export default function TermsClient() {
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <main className={styles.mainWrapper}>
      {/* Navigation Header */}
      <Header onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>LEGAL &amp; COMPLIANCE</span>
            <h1 className={styles.heroTitle}>Terms &amp; Conditions</h1>
            <p className={styles.heroSubtitle}>
              Please read our Terms &amp; Conditions carefully to understand the rules, responsibilities, and guidelines for using our website.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.termsSection}>
        <div className="container">
          <div className={styles.termsContainer}>
            {termsData.map((item) => (
              <div
                key={item.num}
                className={
                  item.num === 10 ? styles.highlightBlock : styles.termBlock
                }
              >
                <div className={styles.blockHeader}>
                  <div className={styles.blockNumber}>{item.num}</div>
                  <h2 className={styles.blockTitle}>{item.title}</h2>
                </div>
                <p className={styles.blockText}>{item.content}</p>
                {item.num === 10 && (
                  <div className={styles.actionRow}>
                    <Link href="/contact-us" className={styles.contactBtn}>
                      <span>Contact Our Advisors</span>
                      <ChevronRight size={18} />
                    </Link>
                    <Link href="/privacy-policy" className={styles.secondaryLink}>
                      Read our Privacy Policy &rarr;
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll-To-Top Button */}
      <ScrollToTop />

      {/* List Property Modal */}
      <ListPropertyModal
        isOpen={listModalOpen}
        onClose={() => setListModalOpen(false)}
      />
    </main>
  );
}
