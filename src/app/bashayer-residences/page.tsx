import type { Metadata } from "next";
import BashayerResidencesClient from "./BashayerResidencesClient";

export const metadata: Metadata = {
  title: "Bashayer Residences at Hudayriyat Island, Abu Dhabi | Modon Properties",
  description:
    "Bashayer Villas & Residences at Hudayriyat Island by Modon Properties offer premium waterfront living in Abu Dhabi. Explore apartments, townhomes, penthouses, amenities, and investment options. Book now!",
};

export default function BashayerResidencesPage() {
  return <BashayerResidencesClient />;
}
