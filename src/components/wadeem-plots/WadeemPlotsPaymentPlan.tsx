import React from 'react';
import styles from './WadeemPlotsPaymentPlan.module.css';

interface WadeemPlotsPaymentPlanProps {
  onOpenBrochure?: () => void;
}

const scheduleData = [
  { installment: 'Down Payment', percentage: '10%', milestone: 'On Reservation' },
  { installment: '1st Instalment', percentage: '12%', milestone: '30 January 2026' },
  { installment: '2nd Instalment', percentage: '5%', milestone: '30 May 2026' },
  { installment: '3rd Instalment', percentage: '5%', milestone: '30 September 2026' },
  { installment: '4th Instalment', percentage: '12%', milestone: '30 January 2027' },
  { installment: '5th Instalment', percentage: '5%', milestone: '30 May 2027' },
  { installment: '6th Instalment', percentage: '5%', milestone: '30 September 2027' },
  { installment: '7th Instalment', percentage: '5%', milestone: '30 January 2028' },
  { installment: '8th Instalment', percentage: '5%', milestone: '30 May 2028' },
  { installment: 'Final Instalment', percentage: '50%', milestone: 'Completion (November 2028)' },
];

export default function WadeemPlotsPaymentPlan({ onOpenBrochure }: WadeemPlotsPaymentPlanProps) {
  return (
    <section className={styles.sectionWrapper} id="payment-plan">
      <div className="container">
        <div className={styles.cardContainer}>
          <h2 className={styles.title}>Wadeem Plots Payment Plan</h2>
          <p className={styles.description}>
            <strong>Wadeem Plots</strong> offers a flexible <strong>50/50</strong> payment plan. Pay 50% during construction and the remaining 50% upon handover, making it easier to invest while your dream villa takes shape.
          </p>

          <div className={styles.toggleContainer}>
            <div className={styles.activeTab}>
              Wadeem Plots Payment Plan 50/50
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.planTable}>
              <thead>
                <tr>
                  <th>Installment</th>
                  <th>Percentage</th>
                  <th>Milestone</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.installment}</td>
                    <td>{item.percentage}</td>
                    <td>{item.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.ctaContainer}>
            <button
              type="button"
              className={styles.downloadBtn}
              onClick={onOpenBrochure}
            >
              Download Payment Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
