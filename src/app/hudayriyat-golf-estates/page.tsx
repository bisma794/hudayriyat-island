import type { Metadata } from "next";
import GolfEstatesClient from "./GolfEstatesClient";

export const metadata: Metadata = {
  title: "Hudayriyat Golf Estates Abu Dhabi | Modon Properties",
  description:
    "Hudayriyat Golf Estates by Modon Properties in Abu Dhabi, offering villas with golf and waterfront views. Explore details and Book Now",
  openGraph: {
    title: "Hudayriyat Golf Estates Abu Dhabi | Modon Properties",
    description:
      "Hudayriyat Golf Estates by Modon Properties in Abu Dhabi, offering villas with golf and waterfront views. Explore details and Book Now",
    url: "https://hudayriyat-island.com/hudayriyat-golf-estates",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
};

export default function GolfEstatesPage() {
  return <GolfEstatesClient />;
}
