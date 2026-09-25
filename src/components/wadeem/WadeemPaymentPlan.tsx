"use client";

import React, { useState } from "react";
import { List, LayoutGrid } from "lucide-react";
import styles from "./WadeemPaymentPlan.module.css";

const planWithoutFinance = [
  { installment: "Down Payment", percentage: "5%", milestone: "October 2026" },
  { installment: "Month 8", percentage: "5%", milestone: "June 2027" },
  { installment: "Month 14", percentage: "5%", milestone: "December 2027" },
  { installment: "Month 20", percentage: "5%", milestone: "June 2028" },
  { installment: "Month 36", percentage: "10%", milestone: "October 2029" },
  { installment: "Month 48", percentage: "10%", milestone: "October 2030" },
  { installment: "Month 54", percentage: "5%", milestone: "April 2031" },
  { installment: "Month 56", percentage: "55%", milestone: "June 2031" },
];

const planWithFinance = [
  { installment: "Down Payment", percentage: "5%", milestone: "October 2026" },
  { installment: "Month 8", percentage: "5%", milestone: "June 2027" },
  { installment: "Month 14", percentage: "5%", milestone: "December 2027" },
  { installment: "Month 20", percentage: "5%", milestone: "June 2028" },
  { installment: "Month 24", percentage: "20%", milestone: "October 2028" },
  { installment: "Month 48", percentage: "5%", milestone: "October 2030" },
  { installment: "Month 56", percentage: "55%", milestone: "June 2031" },
];

export default function WadeemPaymentPlan() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedPlan, setSelectedPlan] = useState<"without" | "with">("without");

  const activeMilestones =
    selectedPlan === "without" ? planWithoutFinance : planWithFinance;

  return (
    <section id="paymentplan" className={styles.paymentSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Wadeem Gardens Payment Plan</h2>
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

        {/* Plan Select Tabs */}
        <div className={styles.planTabsWrapper}>
          <div className={styles.planTabs}>
            <button
              type="button"
              className={`${styles.planTabBtn} ${
                selectedPlan === "without" ? styles.planTabActive : ""
              }`}
              onClick={() => setSelectedPlan("without")}
            >
              Without Finance - 45/55
            </button>
            <button
              type="button"
              className={`${styles.planTabBtn} ${
                selectedPlan === "with" ? styles.planTabActive : ""
              }`}
              onClick={() => setSelectedPlan("with")}
            >
              With Finance - 25/75
            </button>
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
                {activeMilestones.map((row, idx) => (
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
            {activeMilestones.map((item, idx) => (
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
