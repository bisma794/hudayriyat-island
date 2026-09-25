import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Our Real Estate Experts | Hudayriyat Island",
  description:
    "Meet our real estate experts for professional guidance, property insights, and personalised support to help you find the right property in Dubai.",
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
