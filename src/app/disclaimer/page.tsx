import type { Metadata } from "next";
import DisclaimerClient from "./DisclaimerClient";

export const metadata: Metadata = {
  title: "Disclaimer | Real Estate Information & Terms",
  description:
    "Read our disclaimer to understand the terms, limitations, and accuracy of property information, prices, and details shared on our website.",
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
