"use client";

import React, { useState } from "react";
import { List, Grid } from "lucide-react";
import styles from "./ParkViewsPaymentPlan.module.css";

interface ParkViewsPaymentPlanProps {
  onOpenModal?: () => void;
}

const paymentInstallments = [
  { name: "Down Payment", percentage: "10%", milestone: "On Booking" },
  { name: "1st Installment", percentage: "5%", milestone: "Construction Milestone" },
  { name: "2nd Installment", percentage: "10%", milestone: "Construction Milestone" },
  { name: "3rd Installment", percentage: "5%", milestone: "Construction Milestone" },
  { name: "4th Installment", percentage: "10%", milestone: "Construction Milestone" },
  { name: "5th Installment", percentage: "5%", milestone: "Construction Milestone" },
  { name: "6th Installment", percentage: "10%", milestone: "Construction Milestone" },
  { name: "7th Installment", percentage: "5%", milestone: "Construction Milestone" },
  { name: "Final Payment", percentage: "40%", milestone: "On Handover" },
];

export default function ParkViewsPaymentPlan({ onOpenModal }: ParkViewsPaymentPlanProps) {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  return (
    <section id="paymentplan" className={styles.paymentSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef Park Views Payment Plan</h2>
          <p className={styles.description}>
            Flexible <strong>60/40 payment plan</strong> with convenient installments, offering you an easy path to owning a <strong>Mediterranean-inspired</strong> home on Hudayriyat Island. Enjoy stress-free ownership with attractive terms tailored for modern island living.
          </p>
        </div>

        {/* View Toggle */}
        <div className={styles.toggleBar}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${
              viewMode === "list" ? styles.toggleActive : ""
            }`}
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <List size={20} />
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${
              viewMode === "grid" ? styles.toggleActive : ""
            }`}
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <Grid size={20} />
          </button>
        </div>

        {/* Content */}
        {viewMode === "list" ? (
          <div className={styles.tableCard}>
            <div style={{ overflowX: "auto" }}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.highlightCol}>Installment</th>
                    <th>Percentage</th>
                    <th>Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentInstallments.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{row.name}</td>
                      <td style={{ fontWeight: 700, color: "#c08364" }}>
                        {row.percentage}
                      </td>
                      <td>{row.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className={styles.grid}>
            {paymentInstallments.map((card, idx) => (
              <div key={idx} className={styles.planCard}>
                <div className={styles.percentage}>{card.percentage}</div>
                <p className={styles.installmentName}>{card.name}</p>
              </div>
            ))}
          </div>
        )}

        <div className={styles.ctaWrapper}>
          <button
            type="button"
            className={styles.downloadBtn}
            onClick={onOpenModal}
          >
            Download Payment Plan
          </button>
        </div>
      </div>
    </section>
  );
}
