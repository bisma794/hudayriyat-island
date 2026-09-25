'use client';

import React, { useState } from 'react';
import styles from './NawayefPaymentPlan.module.css';

interface PaymentItem {
  installment: string;
  percentage: string;
  milestone: string;
}

const paymentSchedule: PaymentItem[] = [
  {
    installment: 'Down Payment',
    percentage: '10%',
    milestone: 'Payable on the reservation date',
  },
  {
    installment: 'Commencement of enabling works',
    percentage: '5%',
    milestone: '30th November 2025',
  },
  {
    installment: 'Commencement of construction',
    percentage: '5%',
    milestone: '30th May 2026',
  },
  {
    installment: 'Sub-structure 100% completion',
    percentage: '10%',
    milestone: '30th December 2026',
  },
  {
    installment: 'Superstructure 100% completion',
    percentage: '5%',
    milestone: '30th June 2027',
  },
  {
    installment: 'Façade substantial completion for the project',
    percentage: '5%',
    milestone: '30th December 2027',
  },
  {
    installment: 'Completion/BCC',
    percentage: '10%',
    milestone: '30th September 2028',
  },
  {
    installment: 'Upon handover',
    percentage: '50%',
    milestone: 'Upon completion (January 2029)',
  },
];

interface NawayefPaymentPlanProps {
  onOpenBrochure?: () => void;
}

export default function NawayefPaymentPlan({ onOpenBrochure }: NawayefPaymentPlanProps) {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <section className={styles.paymentSection} id="payment_plan">
      <div className="container">
        <div className={styles.planContainer}>
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>Nawayef Village Payment Plan</h2>
            <p className={styles.subtitle}>
              Enjoy a flexible 50/50 payment plan at <strong>Nawayef Village by Modon</strong>, with just 50% during construction and the remaining 50% on handover in Q1 2029 making luxury living on Hudayriyat Island more accessible than ever.
            </p>
          </div>

          {/* Top Right Toggle View Icons */}
          <div className={styles.viewToggleRow}>
            <div className={styles.toggleIconsGroup}>
              <button
                type="button"
                className={`${styles.iconBtn} ${viewMode === 'list' ? styles.iconActive : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List View"
                title="List View"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              <button
                type="button"
                className={`${styles.iconBtn} ${viewMode === 'grid' ? styles.iconActive : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid View"
                title="Grid View"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
            </div>
          </div>

          {/* Centered Plan Badge */}
          <div className={styles.badgeWrapper}>
            <div className={styles.badgeBtn}>
              Nawayef Village Payment Plan (50 / 50)
            </div>
          </div>

          {/* List or Grid View */}
          {viewMode === 'list' ? (
            <div className={styles.tableWrapper}>
              <table className={styles.planTable}>
                <thead>
                  <tr>
                    <th className={styles.installmentHeader}>Installment</th>
                    <th className={styles.percentageHeader}>Percentage</th>
                    <th className={styles.milestoneHeader}>Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentSchedule.map((item, idx) => (
                    <tr key={idx}>
                      <td className={styles.installmentCol}>{item.installment}</td>
                      <td className={styles.percentageCol}>{item.percentage}</td>
                      <td className={styles.milestoneCol}>{item.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.gridContainer}>
              {paymentSchedule.map((item, idx) => (
                <div key={idx} className={styles.gridCard}>
                  <div className={styles.gridPercent}>{item.percentage}</div>
                  <div className={styles.gridTitle}>{item.installment}</div>
                  {item.milestone && (
                    <div className={styles.gridMilestone}>{item.milestone}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Download Button */}
          {onOpenBrochure && (
            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.brochureBtn}
                onClick={onOpenBrochure}
              >
                Download Payment Plan
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
