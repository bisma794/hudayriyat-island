"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Home, PhoneCall, Building2, ShieldCheck, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import styles from "./ThankYou.module.css";

export default function ThankYouClient() {
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <main className={styles.mainWrapper}>
      {/* Header Navigation */}
      <Header onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Section */}
      <section className={styles.thankYouHero}>
        <div className={styles.heroContainer}>
          <div className={styles.iconWrapper}>
            <CheckCircle2 size={48} color="#d4af37" />
          </div>

          <span className={styles.badge}>THANK YOU FOR INQUIRING</span>

          <h1 className={styles.heroTitle}>Your Request Has Been Received</h1>

          <p className={styles.heroSubtitle}>
            Thank you for connecting with Hudayriyat Island. Our luxury real estate advisor has received your submission and will get in touch with you shortly to assist with your inquiry.
          </p>

          <div className={styles.actionButtons}>
            <Link href="/" className={styles.primaryBtn}>
              <Home size={18} />
              Return to Homepage
            </Link>
            <Link href="/wadeem-plots" className={styles.secondaryBtn}>
              <Building2 size={18} />
              Explore Wadeem Plots
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Clock size={26} />
              </div>
              <h3 className={styles.cardTitle}>Prompt Advisory Response</h3>
              <p className={styles.cardDesc}>
                Our dedicated island specialists will review your requirements and respond within a few business hours.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Building2 size={26} />
              </div>
              <h3 className={styles.cardTitle}>Tailored Project Portfolio</h3>
              <p className={styles.cardDesc}>
                Receive curated brochures, plot availability diagrams, custom payment plans, and floor plan layouts.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <ShieldCheck size={26} />
              </div>
              <h3 className={styles.cardTitle}>Private VIP Viewings</h3>
              <p className={styles.cardDesc}>
                Book exclusive access to Modon sales centers and on-site master community property viewings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll-To-Top Button */}
      <ScrollToTop />

      {/* List Property Modal */}
      <ListPropertyModal
        isOpen={listModalOpen}
        onClose={() => setListModalOpen(false)}
      />
    </main>
  );
}
