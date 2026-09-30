import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Hudayriyat Island Real Estate Experts Abu Dhabi",
  description:
    "Meet our real estate experts for professional guidance, property insights, and personalized support to help you find your dream property on Hudayriyat Island, Abu Dhabi.",
  openGraph: {
    title: "About Us | Hudayriyat Island Real Estate Experts Abu Dhabi",
    description:
      "Meet our real estate experts for professional guidance, property insights, and personalized support to help you find your dream property on Hudayriyat Island, Abu Dhabi.",
    url: "https://hudayriyat-island.ae/about-us",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
