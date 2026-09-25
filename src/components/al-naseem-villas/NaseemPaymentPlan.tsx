'use client';

import React, { useState } from 'react';
import styles from './NaseemPaymentPlan.module.css';

interface PaymentItem {
  installment: string;
  percentage: string;
  milestone: string;
}

const paymentSchedule: PaymentItem[] = [
  { installment: 'Down Payment', percentage: '10%', milestone: 'On Booking' },
  { installment: 'During Construction', percentage: '30%', milestone: 'Construction Milestones' },
  { installment: 'On Handover', percentage: '60%', milestone: '100% Completion (Q4 2026)' },
];

interface NaseemPaymentPlanProps {
  onOpenBrochure?: () => void;
}

export default function NaseemPaymentPlan({ onOpenBrochure }: NaseemPaymentPlanProps) {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <section className={styles.paymentSection} id="payment_plan">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Al Naseem Community Payment Plan</h2>
          <p className={styles.subtitle}>
            Attractive 10/30/60 Milestone Payment Schedule by Modon Properties
          </p>
        </div>

        <div className={styles.viewToggleRow}>
          <div className={styles.toggleBtnGroup}>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.toggleActive : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              <span>List View</span>
            </button>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.toggleActive : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className={styles.tableCard}>
            <table className={styles.planTable}>
              <thead>
                <tr>
                  <th>Installment</th>
                  <th>Percentage</th>
                  <th>Milestone Schedule</th>
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
        ) : (
          <div className={styles.gridContainer}>
            {paymentSchedule.map((item, idx) => (
              <div key={idx} className={styles.gridCard}>
                <h3 className={styles.percentNum}>{item.percentage}</h3>
                <div className={styles.installmentTitle}>{item.installment}</div>
                <p className={styles.milestoneDate}>{item.milestone}</p>
              </div>
            ))}
          </div>
        )}

        {onOpenBrochure && (
          <div className={styles.actionRow}>
            <button
              type="button"
              className={styles.inquireBtn}
              onClick={onOpenBrochure}
            >
              Request Full Payment Schedule Breakdown
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
