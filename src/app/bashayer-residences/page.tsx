import type { Metadata } from "next";
import BashayerResidencesClient from "./BashayerResidencesClient";

export const metadata: Metadata = {
  title: "Bashayer Residences at Hudayriyat Island by Modon Properties",
  description:
    "Bashayer Residences at Hudayriyat Island by Modon Properties offer waterfront living in Abu Dhabi. Explore villas & investment options. Book now.",
  openGraph: {
    title: "Bashayer Residences at Hudayriyat Island by Modon Properties",
    description:
      "Bashayer Residences at Hudayriyat Island by Modon Properties offer waterfront living in Abu Dhabi. Explore villas & investment options. Book now.",
    url: "https://hudayriyat-island.ae/bashayer-residences",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
};

export default function BashayerResidencesPage() {
  return <BashayerResidencesClient />;
}
