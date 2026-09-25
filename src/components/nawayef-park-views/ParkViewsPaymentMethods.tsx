import React from "react";
import Image from "next/image";
import styles from "./ParkViewsPaymentMethods.module.css";

const methods = [
  { name: "Cash", icon: "/images/nawayef-park-views/asset_44.png" },
  { name: "Card", icon: "/images/nawayef-park-views/asset_45.png" },
  { name: "Cheque", icon: "/images/nawayef-park-views/asset_46.png" },
  { name: "Bitcoin", icon: "/images/nawayef-park-views/asset_47.png" },
];

export default function ParkViewsPaymentMethods() {
  return (
    <section id="payment" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nawayef Park Views Payment Method</h2>
          <span className={styles.subtitle}>
            We accept all the following payment methods.
          </span>
        </div>

        <div className={styles.grid}>
          {methods.map((method, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={50}
                  height={50}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.name}>{method.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
