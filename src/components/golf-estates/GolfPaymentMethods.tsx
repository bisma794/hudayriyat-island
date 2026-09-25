import React from "react";
import { CreditCard, Banknote, Coins, Receipt } from "lucide-react";
import styles from "./GolfPaymentMethods.module.css";

const paymentMethods = [
  {
    title: "Card",
    desc: "Credit & Debit Cards",
    icon: <CreditCard size={26} />,
  },
  {
    title: "Cheque",
    desc: "Manager's Cheques & Bank Cheques",
    icon: <Receipt size={26} />,
  },
  {
    title: "Cash",
    desc: "Direct Cash Payments",
    icon: <Banknote size={26} />,
  },
  {
    title: "Bitcoin",
    desc: "Approved Cryptocurrency Payments",
    icon: <Coins size={26} />,
  },
];

export default function GolfPaymentMethods() {
  return (
    <section className={styles.methodsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Golf Estates Payment Methods</h2>
          <p className={styles.subtitle}>
            The available payment methods may include:
          </p>
        </div>

        <div className={styles.methodsGrid}>
          {paymentMethods.map((method, idx) => (
            <div key={idx} className={styles.methodCard}>
              <div className={styles.iconCircle}>{method.icon}</div>
              <h3 className={styles.methodTitle}>{method.title}</h3>
              <p className={styles.methodDesc}>{method.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
