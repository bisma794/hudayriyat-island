import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us | Real Estate Experts You Can Trust | Hudayriyat Island",
  description:
    "Reach out to our real estate experts for property inquiries, personalized guidance, or assistance in buying luxury villas on Hudayriyat Island, Abu Dhabi.",
  openGraph: {
    title: "Contact Us | Real Estate Experts You Can Trust | Hudayriyat Island",
    description:
      "Reach out to our real estate experts for property inquiries, personalized guidance, or assistance in buying luxury villas on Hudayriyat Island, Abu Dhabi.",
    url: "https://hudayriyat-island.com/contact-us",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
