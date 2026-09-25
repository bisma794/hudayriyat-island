import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Hudayriyat Island Abu Dhabi",
  description:
    "Thank you for contacting Hudayriyat Island. Your request has been received and our luxury real estate specialist will reach out to you shortly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
