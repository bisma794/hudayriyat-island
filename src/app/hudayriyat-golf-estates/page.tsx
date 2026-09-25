import type { Metadata } from "next";
import GolfEstatesClient from "./GolfEstatesClient";

export const metadata: Metadata = {
  title: "Hudayriyat Golf Estates Abu Dhabi | Modon Properties",
  description:
    "Discover Hudayriyat Golf Estates by Modon Properties in Abu Dhabi, offering premium villas with golf and waterfront views. Explore details and enquire today.",
};

export default function GolfEstatesPage() {
  return <GolfEstatesClient />;
}
