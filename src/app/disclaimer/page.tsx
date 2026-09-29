import type { Metadata } from "next";
import DisclaimerClient from "./DisclaimerClient";

export const metadata: Metadata = {
  title: "Disclaimer | Hudayriyat Island Real Estate Information",
  description:
    "Read our disclaimer to understand the terms, limitations, and accuracy of property information, prices, and details shared on our website.",
  openGraph: {
    title: "Disclaimer | Hudayriyat Island Real Estate Information",
    description:
      "Read our disclaimer to understand the terms, limitations, and accuracy of property information, prices, and details shared on our website.",
    url: "https://hudayriyat-island.com/disclaimer",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
