"use client";

import React, { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from "next/image";
import {
  Compass,
  Building2,
  TrendingUp,
  Target,
  Eye,
  ShieldCheck,
  MapPin,
  HeartHandshake,
  Search,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ListPropertyModal from "@/components/ListPropertyModal";
import styles from "./AboutUs.module.css";
import { sendLeadToWebhook } from "@/lib/sendLead";

export default function AboutUsClient() {
  const [listModalOpen, setListModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    sendLeadToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: "Hudayriyat Island",
      developer: "Modon Properties",
      activity_description: "About Us Page Form Request",
    });
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
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
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroSubtitle}>
              Welcome to your trusted source for exploring property opportunities on Hudayriyat Island, Abu Dhabi.
            </p>
          </div>
        </div>
      </section>

      {/* Intro & Single Featured Image Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introText}>
            <p className={styles.leadText}>
              We make property discovery simple by providing clear information, useful market insights, and guidance throughout the buying process.
            </p>
            <p className={styles.bodyText}>
              Whether you are looking for a new home or an investment opportunity, we help you explore suitable properties on Hudayriyat Island and understand the key details before making a decision.
            </p>
          </div>

          {/* Single Container Image */}
          <div className={styles.imageContainer} style={{ position: "relative", width: "100%", minHeight: "380px", overflow: "hidden" }}>
            <Image
              src="/images/form image.jpg"
              alt="Hudayriyat Island Waterfront Luxury Architecture"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className={styles.featuredImage}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>WHAT WE DO</span>
            <h2 className={styles.sectionTitle}>Our Core Services</h2>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Compass size={28} />
              </div>
              <h3 className={styles.cardTitle}>Property Advisory</h3>
              <p className={styles.cardDesc}>
                Practical guidance to help you explore residential and investment opportunities based on your requirements.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Building2 size={28} />
              </div>
              <h3 className={styles.cardTitle}>Property Listings</h3>
              <p className={styles.cardDesc}>
                A selection of residential properties and new developments across Hudayriyat Island and surrounding areas of Abu Dhabi.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <TrendingUp size={28} />
              </div>
              <h3 className={styles.cardTitle}>Market Insights</h3>
              <p className={styles.cardDesc}>
                Clear information about new projects, locations, developments, and market trends to help you make informed property decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <Target size={24} className={styles.pillarIcon} />
                <h2 className={styles.pillarTitle}>Our Mission</h2>
              </div>
              <p className={styles.pillarText}>
                To provide reliable property information, honest guidance, and helpful support to buyers and investors exploring opportunities on Hudayriyat Island and across Abu Dhabi.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <Eye size={24} className={styles.pillarIcon} />
                <h2 className={styles.pillarTitle}>Our Vision</h2>
              </div>
              <p className={styles.pillarText}>
                To become a trusted source for property buyers and investors by providing accurate information, clear guidance, and consistent support throughout their property journey.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <ShieldCheck size={24} className={styles.pillarIcon} />
                <h2 className={styles.pillarTitle}>Our Values</h2>
              </div>
              <p className={styles.pillarText}>
                Accuracy, transparency, and responsible advice guide everything we do. We focus on providing clear property information and helping clients understand their options before making important decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>THE ADVANTAGE</span>
            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          </div>

          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIconBox}>
                <MapPin size={24} />
              </div>
              <h3 className={styles.whyUsTitle}>Local Market Knowledge</h3>
              <p className={styles.whyUsDesc}>
                Useful information about Hudayriyat Island, Abu Dhabi communities, new developments, and property opportunities.
              </p>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIconBox}>
                <HeartHandshake size={24} />
              </div>
              <h3 className={styles.whyUsTitle}>Client-First Approach</h3>
              <p className={styles.whyUsDesc}>
                Clear communication and straightforward guidance without unnecessary pressure.
              </p>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIconBox}>
                <Search size={24} />
              </div>
              <h3 className={styles.whyUsTitle}>Simple Property Search</h3>
              <p className={styles.whyUsDesc}>
                An easier way to explore available properties, compare opportunities, and understand important project details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for Your Dream Property & Form Section */}
      <section id="contact" className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaGrid}>
            {/* Left Column: Heading & Content */}
            <div className={styles.ctaTextCol}>
              <span className={styles.sectionTag}>START YOUR JOURNEY</span>
              <h2 className={styles.ctaHeading}>Looking for Your Dream Property?</h2>
              <p className={styles.ctaBody}>
                Explore property opportunities on Hudayriyat Island with clear information and professional guidance. Whether you are looking to buy a home or explore an investment, we are here to assist you throughout the process.
              </p>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <CheckCircle2 size={18} color="#856d52" />
                  <span>Free, no-obligation property consultation</span>
                </div>
                <div className={styles.benefitItem}>
                  <CheckCircle2 size={18} color="#856d52" />
                  <span>Official brochure &amp; floor plan access</span>
                </div>
                <div className={styles.benefitItem}>
                  <CheckCircle2 size={18} color="#856d52" />
                  <span>Transparent payment plan advisory</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h5 className={styles.formTitle}>Get in Touch</h5>
                <p className={styles.formSubtitle}>
                  Enter your details and our team will contact you shortly.
                </p>

                {submitted ? (
                  <div className={styles.successMsg}>
                    <CheckCircle2 size={22} color="#166534" />
                    <span>Thank you! Our advisory team will get in touch with you shortly.</span>
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
                      <PhoneInput defaultCountry="ae" value={formData.phone} onChange={(phone) => setFormData({ ...formData, phone })} />
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
