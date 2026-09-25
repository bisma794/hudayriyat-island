'use client';

import React, { useState } from 'react';
import { PaymentItem } from './ProjectTypes';
import styles from './ProjectPaymentPlan.module.css';

interface ProjectPaymentPlanProps {
  name: string;
  subtitle?: string;
  schedule: PaymentItem[];
  onOpenBrochure?: () => void;
}

export default function ProjectPaymentPlan({
  name,
  subtitle = 'Flexible milestone-linked payment plan by master developer Modon Properties.',
  schedule,
  onOpenBrochure,
}: ProjectPaymentPlanProps) {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const defaultSchedule: PaymentItem[] = schedule.length > 0 ? schedule : [
    { installment: 'Down Payment', percentage: '10%', milestone: 'On Booking' },
    { installment: 'During Construction', percentage: '40%', milestone: 'Construction Milestones' },
    { installment: 'On Handover', percentage: '50%', milestone: '100% Completion' },
  ];

  return (
    <section className={styles.paymentSection} id="payment_plan">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{name} Payment Plan</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.viewToggleRow}>
          <div className={styles.toggleBtnGroup}>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.toggleActive : ''}`}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
            <button
              className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.toggleActive : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
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
                {defaultSchedule.map((item, idx) => (
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
            {defaultSchedule.map((item, idx) => (
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
