"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import styles from "./Disclaimer.module.css";

const disclaimerData = [
  {
    num: 1,
    title: "General Information Only",
    content:
      "The content on this website, including information about Hudayriyat Island, property descriptions, pricing, payment plans, rental yield ranges, project details, and market commentary, is provided for general informational purposes only. It does not constitute an offer, solicitation, or recommendation to buy, sell, or invest in any property.",
  },
  {
    num: 2,
    title: "No Guarantee of Returns, Yield or Appreciation",
    content:
      "Any rental yield percentage, return on investment (ROI), or capital appreciation figure referenced on this Site is an indicative estimate based on general market information available at the time of publication. It is not a forecast, promise, or guarantee of future performance. Actual returns may vary depending on market conditions, rental demand, tenancy, service charges, property management, and the specific property purchased. Past performance of any property, community, or developer is not a reliable indicator of future results.",
  },
  {
    num: 3,
    title: "Not Financial, Legal, Tax or Immigration Advice",
    content:
      "Nothing on this website constitutes financial, legal, tax, or immigration advice, including advice relating to UAE residency or Golden Visa eligibility, mortgage suitability, or investment structuring. You should obtain independent professional advice based on your individual circumstances before making any property or investment decision.",
  },
  {
    num: 4,
    title: "Developer & Property Information",
    content:
      "Prices, availability, floor plans, payment plans, specifications, and handover dates for properties and projects on Hudayriyat Island are subject to change. Such information may be supplied or derived from developer materials and other available sources. We recommend confirming the latest property details, prices, availability, and payment terms before making any commitment.",
  },
  {
    num: 5,
    title: "Regulatory Status",
    content:
      "Information provided on this website is for general property and real estate purposes. This website is not a government website and is not affiliated with or operated by any UAE government authority. Nothing on this Site should be interpreted as official government communication or regulatory advice.",
  },
  {
    num: 6,
    title: "Testimonials",
    content:
      "Client testimonials published on this Site reflect the individual experiences of the clients who provided them at the time they were given. Testimonials are not necessarily representative of the experience of every client, and previous client outcomes do not guarantee similar results for others.",
  },
  {
    num: 7,
    title: "Third-Party Links",
    content:
      "This Site may contain links to third-party websites for your convenience, including developer and property-related resources. We do not endorse and are not responsible for the content, accuracy, availability, or practices of any third-party website.",
  },
  {
    num: 8,
    title: "Accuracy of Information",
    content:
      "While we take reasonable care to keep the information on this Site accurate and up to date, property prices, availability, project details, payment plans, and market conditions can change without notice. We make no warranty regarding the completeness or accuracy of the information provided and accept no liability for any error or omission.",
    notice: true,
  },
];

export default function DisclaimerClient() {
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <main className={styles.mainWrapper}>
      {/* Navigation Header */}
      <Header onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>LEGAL &amp; DISCLOSURE</span>
            <h1 className={styles.heroTitle}>Disclaimer</h1>
            <p className={styles.heroSubtitle}>
              Please read our disclaimer carefully to understand the terms, limitations, and accuracy of property information and details shared on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.disclaimerSection}>
        <div className="container">
          <div className={styles.disclaimerContainer}>
            {disclaimerData.map((item) => (
              <div key={item.num} className={styles.disclaimerBlock}>
                <div className={styles.blockHeader}>
                  <div className={styles.blockNumber}>{item.num}</div>
                  <h2 className={styles.blockTitle}>{item.title}</h2>
                </div>
                <p className={styles.blockText}>{item.content}</p>

                {item.notice && (
                  <div className={styles.subNotice}>
                    See also our{" "}
                    <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>{" "}
                    for further information regarding the use of this website and limitations of liability.
                  </div>
                )}

                {item.num === 8 && (
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
