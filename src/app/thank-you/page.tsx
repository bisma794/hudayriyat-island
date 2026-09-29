import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Hudayriyat Island Abu Dhabi",
  description:
    "Thank you for contacting Hudayriyat Island. Your request has been received and our luxury real estate specialist will reach out to you shortly.",
  openGraph: {
    title: "Thank You | Hudayriyat Island Abu Dhabi",
    description:
      "Thank you for contacting Hudayriyat Island. Your request has been received and our luxury real estate specialist will reach out to you shortly.",
    url: "https://hudayriyat-island.com/thank-you",
    siteName: "Hudayriyat Island",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
