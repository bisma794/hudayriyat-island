"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import styles from "./ContactUs.module.css";

export default function ContactUsClient() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 800);
  };

  return (
    <main className={styles.mainWrapper}>
      {/* Navigation Header */}
      <Header onOpenListModal={() => setListModalOpen(true)} />

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>HUDAYRIYAT ISLAND &bull; ABU DHABI</span>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Invest in Your Future. Discover your ideal property on Hudayriyat Island.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels Cards */}
      <section className={styles.channelsSection}>
        <div className="container">
          <div className={styles.channelsGrid}>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
            >
              <div className={styles.iconCircle}>
                <MessageCircle size={24} />
              </div>
              <h3 className={styles.channelTitle}>WhatsApp Us</h3>
              <p className={styles.channelInfo}>Quick instant response</p>
              <span className={styles.channelAction}>Connect on WhatsApp &rarr;</span>
            </a>

            <a href="tel:+971500000000" className={styles.channelCard}>
              <div className={styles.iconCircle}>
                <Phone size={24} />
              </div>
              <h3 className={styles.channelTitle}>Direct Call</h3>
              <p className={styles.channelInfo}>+971 50 000 0000</p>
              <span className={styles.channelAction}>Call an Advisor &rarr;</span>
            </a>

            <a href="mailto:info@hudayriyat-island.com" className={styles.channelCard}>
              <div className={styles.iconCircle}>
                <Mail size={24} />
              </div>
              <h3 className={styles.channelTitle}>Email Inquiries</h3>
              <p className={styles.channelInfo}>info@hudayriyat-island.com</p>
              <span className={styles.channelAction}>Send an Email &rarr;</span>
            </a>

            <div className={styles.channelCardStatic}>
              <div className={styles.iconCircle}>
                <MapPin size={24} />
              </div>
              <h3 className={styles.channelTitle}>Location</h3>
              <p className={styles.channelInfo}>Hudayriyat Island, Abu Dhabi, UAE</p>
              <span className={styles.channelBadge}>Prime Island Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Form & Island Information Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Left Column: Island Overview & Opportunities */}
            <div className={styles.infoCol}>
              <span className={styles.sectionTag}>PREMIER OPPORTUNITY</span>
              <h2 className={styles.infoHeading}>
                Discover Emerging Properties on Hudayriyat Island
              </h2>

              <div className={styles.infoTextWrapper}>
                <p className={styles.leadPara}>
                  Hudayriyat Island is emerging as a major destination in Abu Dhabi, offering a growing range of residential and investment opportunities. Explore carefully selected properties and discover the latest projects and developments across the island.
                </p>
                <p className={styles.bodyPara}>
                  Whether you are looking for a new home or an investment opportunity, you can explore available projects, locations, property types, and key details to find an option that suits your requirements.
                </p>
                <p className={styles.highlightPara}>
                  Contact us today to learn more about properties and investment opportunities on Hudayriyat Island.
                </p>
              </div>

              {/* Feature Highlights Badges */}
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <Building size={20} className={styles.featureIcon} />
                  <div>
                    <h4 className={styles.featureTitle}>Exclusive Island Living</h4>
                    <p className={styles.featureDesc}>Mansions, villas, townhouses, and waterfront residential plots.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <Sparkles size={20} className={styles.featureIcon} />
                  <div>
                    <h4 className={styles.featureTitle}>100% Freehold Ownership</h4>
                    <p className={styles.featureDesc}>Open to all nationalities with flexible developer payment plans.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <Clock size={20} className={styles.featureIcon} />
                  <div>
                    <h4 className={styles.featureTitle}>Prompt Advisory</h4>
                    <p className={styles.featureDesc}>Personalized guidance without pressure or obligation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Get in Touch Form Card */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Get in Touch</h3>
                <p className={styles.formSubtitle}>
                  Enter your details and our team will contact you shortly to help you explore property opportunities on Hudayriyat Island.
                </p>

                {submitted ? (
                  <div className={styles.successMsg}>
                    <CheckCircle2 size={24} color="#166534" />
                    <div>
                      <h4 className={styles.successHeading}>Inquiry Received</h4>
                      <p className={styles.successText}>
                        Thank you! Our property specialist will contact you shortly with comprehensive project details.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className={styles.inputField}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className={styles.inputField}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className={styles.inputField}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <textarea
                        placeholder="Message or Specific Project Inquiry (Optional)"
                        rows={3}
                        className={styles.textareaField}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={styles.submitBtn}
                    >
                      {loading ? "SENDING..." : "SUBMIT NOW"}
                    </button>

                    <p className={styles.termsNote}>
                      By submitting, you agree to our Terms &amp; Privacy Policy.
                    </p>
                  </form>
                )}
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
