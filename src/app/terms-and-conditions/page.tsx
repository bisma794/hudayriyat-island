import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hudayriyat Island",
  description:
    "Read our Terms & Conditions to understand the rules, responsibilities, and terms of using our website and accessing property information.",
};

export default function TermsAndConditionsPage() {
  return <TermsClient />;
}
