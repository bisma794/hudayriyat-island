'use client';

import React, { useState } from 'react';
import styles from './VillasPaymentPlan.module.css';

interface PaymentItem {
  installment: string;
  percentage: string;
  milestone: string;
}

const paymentSchedule: PaymentItem[] = [
  { installment: 'Down Payment', percentage: '10%', milestone: 'On Booking' },
  { installment: '1st Installment', percentage: '5%', milestone: '30 May 2026' },
  { installment: '2nd Installment', percentage: '5%', milestone: '30 November 2026' },
  { installment: '3rd Installment', percentage: '10%', milestone: '30 May 2027' },
  { installment: '4th Installment', percentage: '5%', milestone: '30 November 2027' },
  { installment: '5th Installment', percentage: '10%', milestone: '30 May 2028' },
  { installment: '6th Installment', percentage: '5%', milestone: '30 November 2028' },
  { installment: 'Final Installment', percentage: '50%', milestone: '31 March 2029 (Handover)' },
];

interface PaymentPlanProps {
  onOpenBrochure?: () => void;
}

export default function VillasPaymentPlan({ onOpenBrochure }: PaymentPlanProps) {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <section className={styles.paymentSection} id="payment_plan">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Bashayer Villas Payment Plans</h2>
          <p style={{ color: '#666', fontSize: '15px' }}>
            50/50 Milestone-Linked Flexible Payment Plan by Modon Properties
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

        <div className={styles.btnDownloadRow}>
          <button
            type="button"
            className={styles.btnDownload}
            onClick={onOpenBrochure}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD PAYMENT PLAN
          </button>
        </div>
      </div>
    </section>
  );
}
