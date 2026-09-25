import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us | Real Estate Experts You Can Trust",
  description:
    "Reach out to our Real estate experts for property inquiries, personalized guidance, or assistance in buying, selling, or renting your dream home.",
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
