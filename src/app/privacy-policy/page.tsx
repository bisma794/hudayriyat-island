import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Hudayriyat Island",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore Hudayriyat Island properties on our website.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
