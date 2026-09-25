"use client";

import React, { useState } from "react";
import { List, LayoutGrid } from "lucide-react";
import styles from "./GolfPaymentPlan.module.css";

const golfPaymentMilestones = [
  { installment: "Down Payment", percentage: "5%", milestone: "On Booking" },
  { installment: "1st Installment", percentage: "5%", milestone: "6 Months from Booking" },
  { installment: "2nd Installment", percentage: "5%", milestone: "12 Months from Booking" },
  { installment: "3rd Installment", percentage: "5%", milestone: "18 Months from Booking" },
  { installment: "4th Installment", percentage: "5%", milestone: "24 Months from Booking" },
  { installment: "5th Installment", percentage: "5%", milestone: "30 Months from Booking" },
  { installment: "6th Installment", percentage: "5%", milestone: "36 Months from Booking" },
  { installment: "7th Installment", percentage: "5%", milestone: "42 Months from Booking" },
  { installment: "On Handover", percentage: "60%", milestone: "100% Completion (Q3 2030)" },
];

export default function GolfPaymentPlan() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <section id="paymentplan" className={styles.paymentSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Golf Estates Payment Plan</h2>
          <p className={styles.subtitle}>
            Hudayriyat Golf Estates offers a 5% / 35% / 60% payment plan based on the available project schedule.
          </p>
        </div>

        {/* View mode toggle button */}
        <div className={styles.viewToggleWrapper}>
          <div className={styles.toggleButtons}>
            <button
              type="button"
              className={`${styles.viewBtn} ${
                viewMode === "list" ? styles.viewBtnActive : ""
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <List size={20} />
            </button>
            <button
              type="button"
              className={`${styles.viewBtn} ${
                viewMode === "grid" ? styles.viewBtnActive : ""
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <LayoutGrid size={20} />
            </button>
          </div>
        </div>

        {/* 3 Key Summary Cards */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <span className={styles.summaryBadge}>Step 01</span>
            <h3 className={styles.summaryPercent}>5%</h3>
            <p className={styles.summaryTitle}>Down Payment</p>
            <p className={styles.summaryText}>On Booking Date</p>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryBadge}>Step 02</span>
            <h3 className={styles.summaryPercent}>35%</h3>
            <p className={styles.summaryTitle}>During Construction</p>
            <p className={styles.summaryText}>Linked to Construction Progress</p>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryBadge}>Step 03</span>
            <h3 className={styles.summaryPercent}>60%</h3>
            <p className={styles.summaryTitle}>On Handover</p>
            <p className={styles.summaryText}>100% Completion (Q3 2030)</p>
          </div>
        </div>

        {/* Table / List View */}
        {viewMode === "list" ? (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thPrimary}>Installment</th>
                  <th>Percentage</th>
                  <th>Milestone</th>
                </tr>
              </thead>
              <tbody>
                {golfPaymentMilestones.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.tdInstallment}>{row.installment}</td>
                    <td className={styles.tdPercentage}>{row.percentage}</td>
                    <td className={styles.tdMilestone}>{row.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Grid View */
          <div className={styles.gridWrapper}>
            {golfPaymentMilestones.map((item, idx) => (
              <div key={idx} className={styles.gridCard}>
                <h3 className={styles.gridPercent}>{item.percentage}</h3>
                <p className={styles.gridInstallment}>{item.installment}</p>
                <p className={styles.gridMilestone}>{item.milestone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
