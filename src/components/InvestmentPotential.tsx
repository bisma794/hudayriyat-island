import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import styles from "./InvestmentPotential.module.css";

const investmentHighlights = [
  "Premium villa communities with exclusive residential options",
  "Developed by Modon Properties",
  "Strong appeal among luxury homebuyers and property investors",
  "Coastal location with access to beaches and recreational facilities",
  "Potential for long-term capital appreciation",
  "Attractive lifestyle destination for families and investors",
  "Growing residential and leisure destination in Abu Dhabi",
];

const financingHighlights = [
  "Secure a mortgage during construction to maximize leverage",
  "Combine developer payment plans with tailored bank financing",
  "Get pre-approved in as little as 3 days",
  "Conventional and Sharia-compliant financing available",
  "No hidden fees or added costs",
];

export default function InvestmentPotential() {
  return (
    <section
      id="investment"
      aria-label="Investment Potential and Flexible Financing"
      className={styles.investmentSection}
    >
      <div className="container">
        <div className={styles.investmentGrid}>
          {/* Left Column: Investment Potential */}
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>Investment Potential</h2>
            <div className={styles.locationBadge}>Hudayriyat Island, Abu Dhabi</div>

            <p className={styles.description}>
              Hudayriyat Island offers attractive real estate investment
              opportunities through its premium villa communities, waterfront
              lifestyle, and developments by Modon Properties. With growing
              interest in luxury coastal living in Abu Dhabi, the island presents
              opportunities for investors seeking long-term capital appreciation
              and potential rental income.
            </p>

            <h3 className={styles.highlightsHeading}>
              Key Investment Highlights:
            </h3>

            <ul className={styles.highlightsList}>
              {investmentHighlights.map((item, idx) => (
                <li key={idx} className={styles.highlightItem}>
                  <span className={styles.checkIconGrey}>
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className={styles.itemText}>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.btnWrapper}>
              <Link
                href="#contact"
                className={styles.actionBtn}
                aria-label="Contact a Property Investment Consultant"
              >
                Contact a Property Investment Consultant
              </Link>
            </div>
          </div>

          {/* Right Column: Flexible Financing Options Card */}
          <div className={styles.rightCol}>
            <div className={styles.financingCard}>
              <h3 className={styles.financingTitle}>Flexible Financing Options</h3>

              <p className={styles.financingDesc}>
                Buying an off-plan property or a ready-to-move-in home?
                Maximise your buying power with competitive mortgage options
                tailored to your needs.
              </p>

              <ul className={styles.financingList}>
                {financingHighlights.map((item, idx) => (
                  <li key={idx} className={styles.financingItem}>
                    <span className={styles.checkIconGreen}>
                      <Check size={14} strokeWidth={2.6} />
                    </span>
                    <span className={styles.itemText}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardBtnWrapper}>
                <Link
                  href="#contact"
                  className={styles.actionBtn}
                  aria-label="Contact a Mortgage Specialist"
                >
                  Contact a Mortgage Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
