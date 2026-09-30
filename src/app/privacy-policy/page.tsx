import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Hudayriyat Island Abu Dhabi",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore Hudayriyat Island properties on our website.",
  openGraph: {
    title: "Privacy Policy | Hudayriyat Island Abu Dhabi",
    description:
      "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore Hudayriyat Island properties on our website.",
    url: "https://hudayriyat-island.ae/privacy-policy",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
