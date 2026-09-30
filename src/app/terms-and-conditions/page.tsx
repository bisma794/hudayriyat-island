import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hudayriyat Island Abu Dhabi",
  description:
    "Read our Terms & Conditions to understand the rules, responsibilities, and terms of using our website and accessing property information.",
  openGraph: {
    title: "Terms & Conditions | Hudayriyat Island Abu Dhabi",
    description:
      "Read our Terms & Conditions to understand the rules, responsibilities, and terms of using our website and accessing property information.",
    url: "https://hudayriyat-island.ae/terms-and-conditions",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsClient />;
}
