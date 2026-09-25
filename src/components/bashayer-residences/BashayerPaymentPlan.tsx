"use client";

import React, { useState } from "react";
import { List, LayoutGrid } from "lucide-react";
import styles from "./BashayerPaymentPlan.module.css";

const paymentSchedule = [
  {
    installment: "Down Payment",
    percentage: "5%",
    milestone: "On Reservation",
  },
  {
    installment: "1st Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "2nd Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "3rd Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "4th Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "5th Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "6th Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "7th Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "8th Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "9th Installment",
    percentage: "5%",
    milestone: "During Construction",
  },
  {
    installment: "Final Installment",
    percentage: "50%",
    milestone: "On Handover, 30 April 2030",
  },
];

export default function BashayerPaymentPlan() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <section className={styles.paymentSection} id="paymentplan">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Residences Payment Plan</h2>
          <p style={{ color: '#666', fontSize: '15.5px', maxWidth: '820px', margin: '0 auto', lineHeight: '1.6' }}>
            The latest Bashayer Residences 5 &amp; 6 release follows a 50/50 payment plan. Buyers pay 5% on reservation, followed by staged instalments during construction, with the remaining 50% payable at handover on 30 April 2030.
          </p>
        </div>

        {/* View Toggle */}
        <div className={styles.viewToggleRow}>
          <div className={styles.toggleBtnGroup}>
            <button
              type="button"
              className={`${styles.toggleBtn} ${
                viewMode === "list" ? styles.toggleActive : ""
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <List size={18} />
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${
                viewMode === "grid" ? styles.toggleActive : ""
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        {/* List Table View */}
        {viewMode === "list" ? (
          <div className={styles.tableCard}>
            <div style={{ overflowX: "auto" }}>
              <table className={styles.planTable}>
                <thead>
                  <tr>
                    <th>Installment</th>
                    <th>Percentage</th>
                    <th>Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentSchedule.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{item.installment}</td>
                      <td className={styles.percentageCol}>{item.percentage}</td>
                      <td>{item.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Grid Card View */
          <div className={styles.gridContainer}>
            {paymentSchedule.map((item, idx) => (
              <div key={idx} className={styles.gridCard}>
                <h3 className={styles.percentNum}>{item.percentage}</h3>
                <p className={styles.installmentTitle}>{item.installment}</p>
                <p className={styles.milestoneDate}>{item.milestone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
