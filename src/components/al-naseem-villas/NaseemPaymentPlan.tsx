'use client';

import React, { useState } from 'react';
import styles from './NaseemPaymentPlan.module.css';

interface PaymentItem {
  installment: string;
  percentage: string;
  milestone: string;
}

const paymentSchedule: PaymentItem[] = [
  { installment: 'Down Payment', percentage: '10%', milestone: '' },
  { installment: 'On Construction', percentage: '30%', milestone: '' },
  { installment: 'On Handover', percentage: '60%', milestone: '' },
];

interface NaseemPaymentPlanProps {
  onOpenBrochure?: () => void;
}

export default function NaseemPaymentPlan({ onOpenBrochure }: NaseemPaymentPlanProps) {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <section className={styles.paymentSection} id="payment_plan">
      <div className="container">
        <div className={styles.planContainer}>
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

          {/* Centered Community Payment Plan Badge */}
          <div className={styles.badgeWrapper}>
            <div className={styles.badgeBtn}>
              Al Naseem Community Payment Plan
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

          {onOpenBrochure && (
            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.brochureBtn}
                onClick={onOpenBrochure}
              >
                Download Payment Plan Brochure
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
