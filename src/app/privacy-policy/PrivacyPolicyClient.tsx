"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Lock,
  Eye,
  UserCheck,
  Cookie,
  Users,
  RefreshCw,
  Mail,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicyClient() {
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <main className={styles.mainWrapper}>
      {/* Navigation Header */}
      <Header onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>LEGAL &amp; TRANSPARENCY</span>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroSubtitle}>
              Understand how we collect, use, and protect your personal information when you explore Hudayriyat Island properties.
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Content Section */}
      <section className={styles.policySection}>
        <div className="container">
          <div className={styles.policyContainer}>
            {/* 1. Information Collection */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>1</div>
                <h2 className={styles.blockTitle}>Information Collection</h2>
              </div>
              <p className={styles.blockText}>
                We collect information when you interact with our website or contact us regarding properties and real estate opportunities on Hudayriyat Island and in Abu Dhabi.
              </p>
              <div className={styles.bulletListWrapper}>
                <h4 className={styles.subHeading}>You may provide information when you:</h4>
                <ul className={styles.bulletList}>
                  <li>Submit an enquiry through our website.</li>
                  <li>Request information about properties, projects, or real estate services.</li>
                  <li>Contact us through phone, email, WhatsApp, social media, or other digital channels.</li>
                  <li>Subscribe to property updates, newsletters, or other communications.</li>
                </ul>
              </div>

              <div className={styles.gridBoxes}>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Contact Details</h4>
                  <p className={styles.boxDesc}>
                    Name, email address, phone number, and other contact details you choose to provide.
                  </p>
                </div>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Property Preferences</h4>
                  <p className={styles.boxDesc}>
                    Your property requirements, preferred locations, property type, budget, and other information related to your property search.
                  </p>
                </div>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Transaction Information</h4>
                  <p className={styles.boxDesc}>
                    Information required to assist with property enquiries, purchases, or related real estate services where applicable.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. How We Use Information */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>2</div>
                <h2 className={styles.blockTitle}>How We Use Information</h2>
              </div>
              <p className={styles.blockText}>
                We use the information we collect for the following purposes:
              </p>
              <div className={styles.cardsList}>
                <div className={styles.useCard}>
                  <span className={styles.useLabel}>Service Delivery</span>
                  <p className={styles.useText}>
                    To understand your requirements and provide relevant property information and real estate assistance.
                  </p>
                </div>
                <div className={styles.useCard}>
                  <span className={styles.useLabel}>Communication</span>
                  <p className={styles.useText}>
                    To contact you regarding property enquiries, available projects, market updates, and other information you have requested.
                  </p>
                </div>
                <div className={styles.useCard}>
                  <span className={styles.useLabel}>Property Enquiries</span>
                  <p className={styles.useText}>
                    To help facilitate communication regarding properties, developers, projects, viewings, and related services.
                  </p>
                </div>
                <div className={styles.useCard}>
                  <span className={styles.useLabel}>Improvement</span>
                  <p className={styles.useText}>
                    To improve our website, services, content, and overall user experience.
                  </p>
                </div>
                <div className={styles.useCard}>
                  <span className={styles.useLabel}>Compliance</span>
                  <p className={styles.useText}>
                    To meet applicable legal, regulatory, and administrative requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Information Sharing & Disclosure */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>3</div>
                <h2 className={styles.blockTitle}>Information Sharing &amp; Disclosure</h2>
              </div>
              <p className={styles.blockText}>
                We respect your privacy and take reasonable steps to protect your personal information.
              </p>
              <div className={styles.gridBoxes}>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Service Providers</h4>
                  <p className={styles.boxDesc}>
                    Information may be shared with trusted service providers where necessary to operate our website, manage enquiries, provide communication services, or deliver related services.
                  </p>
                </div>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Property Developers and Partners</h4>
                  <p className={styles.boxDesc}>
                    Where appropriate and necessary to respond to your enquiry, relevant information may be shared with property developers, agents, or service partners involved in the property you have requested information about.
                  </p>
                </div>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Legal Authorities</h4>
                  <p className={styles.boxDesc}>
                    Information may be disclosed to government authorities, regulatory bodies, law enforcement agencies, or other parties when required by applicable law.
                  </p>
                </div>
              </div>
              <div className={styles.highlightBadge}>
                <ShieldCheck size={20} color="#856d52" />
                <span><strong>No Sale of Personal Information:</strong> We do not sell, rent, or trade your personal information to third parties for marketing purposes.</span>
              </div>
            </div>

            {/* 4. Data Security & Integrity */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>4</div>
                <h2 className={styles.blockTitle}>Data Security &amp; Integrity</h2>
              </div>
              <div className={styles.twoColRow}>
                <div className={styles.cleanCard}>
                  <h4 className={styles.cardHeader}>Protection</h4>
                  <p className={styles.cardBody}>
                    We use reasonable technical and organizational measures to help protect your personal information from unauthorized access, use, alteration, or disclosure.
                  </p>
                </div>
                <div className={styles.cleanCard}>
                  <h4 className={styles.cardHeader}>Prevention</h4>
                  <p className={styles.cardBody}>
                    We take appropriate steps to monitor and maintain our systems to reduce the risk of data loss, unauthorized access, and security breaches.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Your Rights & Choices */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>5</div>
                <h2 className={styles.blockTitle}>Your Rights &amp; Choices</h2>
              </div>
              <p className={styles.blockText}>
                You may have the right to request:
              </p>
              <div className={styles.gridBoxes}>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Access &amp; Update</h4>
                  <p className={styles.boxDesc}>
                    Access, review, update, or correct the personal information we hold about you.
                  </p>
                </div>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Opt-Out</h4>
                  <p className={styles.boxDesc}>
                    Stop receiving marketing, promotional, or property-related communications from us at any time.
                  </p>
                </div>
                <div className={styles.infoBox}>
                  <h4 className={styles.boxTitle}>Delete Data</h4>
                  <p className={styles.boxDesc}>
                    Request deletion of your personal information, subject to applicable legal, regulatory, and record-keeping requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Cookies, Tracking & Third-Party Links */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>6</div>
                <h2 className={styles.blockTitle}>Cookies, Tracking &amp; Third-Party Links</h2>
              </div>
              <div className={styles.twoColRow}>
                <div className={styles.cleanCard}>
                  <h4 className={styles.cardHeader}>Cookies</h4>
                  <p className={styles.cardBody}>
                    We may use cookies and similar tracking technologies to improve website functionality, understand website usage, and enhance your browsing experience.
                  </p>
                </div>
                <div className={styles.cleanCard}>
                  <h4 className={styles.cardHeader}>External Links</h4>
                  <p className={styles.cardBody}>
                    Our website may contain links to third-party websites, including property developers and other service providers. We do not control or take responsibility for their content, security, or privacy practices. We recommend reviewing their privacy policies before providing personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Children's Privacy */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>7</div>
                <h2 className={styles.blockTitle}>Children&apos;s Privacy</h2>
              </div>
              <p className={styles.blockText}>
                Our website and services are intended for individuals who are 18 years of age or older. We do not knowingly collect personal information from children. If you believe that a minor has provided personal information through our website, please contact us so we can take appropriate steps to remove the information.
              </p>
            </div>

            {/* 8. Policy Updates */}
            <div className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>8</div>
                <h2 className={styles.blockTitle}>Policy Updates</h2>
              </div>
              <p className={styles.blockText}>
                We may update this Privacy Policy from time to time to reflect changes in our services, website, or applicable requirements. Any updates will be published on this page, and material changes may be communicated through appropriate channels where required.
              </p>
            </div>

            {/* 9. Contact Us */}
            <div className={styles.contactBlock}>
              <div className={styles.blockHeader}>
                <div className={styles.blockNumber}>9</div>
                <h2 className={styles.blockTitle}>Contact Us</h2>
              </div>
              <p className={styles.blockText}>
                If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact us through the contact details provided on our website.
              </p>
              <div className={styles.contactActionRow}>
                <Link href="/contact-us" className={styles.contactBtn}>
                  <span>Go to Contact Page</span>
                  <ChevronRight size={18} />
                </Link>
                <a href="mailto:info@hudayriyat-island.com" className={styles.emailLink}>
                  <Mail size={18} />
                  <span>info@hudayriyat-island.com</span>
                </a>
              </div>
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
