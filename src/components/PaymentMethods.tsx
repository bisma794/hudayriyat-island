import React from "react";
import Image from "next/image";
import styles from "./PaymentMethods.module.css";

const paymentList = [
  { name: "Card", icon: "/images/payments/card.png" },
  { name: "Cheque", icon: "/images/payments/cheque.png" },
  { name: "Cash", icon: "/images/payments/cash.png" },
  { name: "Bitcoin", icon: "/images/payments/bitcoin.png" },
];

export default function PaymentMethods() {
  return (
    <section
      id="payment"
      aria-label="Accepted Payment Methods for Real Estate"
      className={styles.paymentSection}
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hudayriyat Island Payment Methods</h2>
          <p className={styles.subtitle}>We accept all the following payment methods</p>
        </div>

        <div className={styles.paymentGrid}>
          {paymentList.map((item, idx) => (
            <div key={idx} className={styles.paymentCard}>
              <div className={styles.iconWrapper}>
                <Image
                  src={item.icon}
                  alt={`${item.name} payment method for Hudayriyat Island properties`}
                  width={50}
                  height={50}
                  className={styles.paymentIcon}
                />
              </div>
              <h3 className={styles.paymentName}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
