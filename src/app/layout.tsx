import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.hudayriyat-island.com";

export const viewport: Viewport = {
  themeColor: "#856d52",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hudayriyat Island – Luxury Villas & Waterfront Living in Abu Dhabi",
  description:
    "Discover Hudayriyat Island, a premier luxury waterfront community in Abu Dhabi offering exclusive villas, mansions, and world-class amenities. Enjoy serene beaches, cultural heritage, and modern living in a secure and vibrant environment. Invest in your dream home today.",
  keywords: [
    "Hudayriyat Island",
    "Luxury villas Abu Dhabi",
    "Waterfront living Abu Dhabi",
    "Villas for sale Abu Dhabi",
    "Hudayriyat Island villas",
    "Modon Properties",
    "Modon Abu Dhabi",
    "Wadeem Gardens",
    "Hudayriyat Golf Estates",
    "Bashayer Residences",
    "Nawayef East Hills",
    "Bashayer Villas",
    "Al Naseem Villas",
    "Masyaf Plots",
    "Nawayef Village",
    "Wadeem Plots",
    "Nawayef Park Views",
    "Abu Dhabi real estate investment",
    "Freehold villas Abu Dhabi",
  ],
  authors: [{ name: "Modon Properties", url: siteUrl }],
  creator: "Modon Properties",
  publisher: "Hudayriyat Island",
  applicationName: "Hudayriyat Island",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-AE": "/?lang=ar",
      "ru-RU": "/?lang=ru",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Hudayriyat Island – Luxury Villas & Waterfront Living in Abu Dhabi",
    description:
      "Discover Hudayriyat Island, a premier luxury waterfront community in Abu Dhabi offering exclusive villas, mansions, and world-class amenities. Freehold for all nationalities.",
    url: siteUrl,
    siteName: "Hudayriyat Island",
    locale: "en_US",
    alternateLocale: ["ar_AE", "ru_RU"],
    type: "website",
    images: [
      {
        url: "/images/hero/slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "Hudayriyat Island Abu Dhabi Luxury Waterfront Living",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudayriyat Island – Luxury Villas & Waterfront Living in Abu Dhabi",
    description:
      "Exclusive waterfront community in Abu Dhabi by Modon Properties with luxury villas, mansions, and world-class leisure amenities.",
    images: ["/images/hero/slide-1.jpg"],
    creator: "@ModonProperties",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Real Estate",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Hudayriyat Island",
      "description":
        "Luxury Villas & Waterfront Living in Abu Dhabi by Modon Properties",
      "inLanguage": "en-US",
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#organization`,
      "name": "Hudayriyat Island - Modon Properties",
      "url": siteUrl,
      "logo": `${siteUrl}/images/logo.png`,
      "image": `${siteUrl}/images/hero/slide-1.jpg`,
      "description":
        "Hudayriyat Island offers a range of sophisticated residential communities in Abu Dhabi, each designed to provide an exclusive and high-end lifestyle.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abu Dhabi",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "AE",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.4539,
        "longitude": 54.3773,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Hudayriyat Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Hudayriyat Island is a premium coastal lifestyle destination in Abu Dhabi developed by Modon Properties. It features luxury villas, apartments, beachfront communities with world-class amenities, and freehold ownership for all nationalities.",
          },
        },
        {
          "@type": "Question",
          "name": "Who is the developer of Hudayriyat Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Hudayriyat Island is developed by Modon Properties, a leading Abu Dhabi master developer known for large-scale lifestyle and residential destinations.",
          },
        },
        {
          "@type": "Question",
          "name": "What types of properties are available on Hudayriyat Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Hudayriyat Island offers villas, mansions, and apartments, giving buyers multiple options depending on their lifestyle and budget.",
          },
        },
        {
          "@type": "Question",
          "name": "Are apartments available on Hudayriyat Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "While the island is primarily villa-focused, The Bashayer Residences include premium low-rise apartments with modern layouts and community amenities.",
          },
        },
        {
          "@type": "Question",
          "name": "What lifestyle does Hudayriyat Island offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The island promotes a wellness-focused, resort-style lifestyle, combining beachfront living with outdoor activities, community spaces, and modern conveniences.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the main communities on Hudayriyat Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Key communities include: Bashayer, Wadeem Villas, Masyaf Villas, Nawayef East & West, Al Naseem Villas, Hudayriyat Sahl, Hudayriyat Hills, Sunset Cliff Villas, Hudayriyat Quays, Nawayef Village & Park Views.",
          },
        },
        {
          "@type": "Question",
          "name": "How close is Hudayriyat Island to major Abu Dhabi landmarks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Hudayriyat Island offers excellent connectivity: 15 minutes to Yas Island, 20 minutes to Abu Dhabi International Airport, 10 minutes to Corniche & WTC, 12 minutes to Al Bateen.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Hudayriyat Island suitable for investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Due to its prime location, luxury positioning, and freehold status, Hudayriyat Island is considered one of Abu Dhabi’s strongest long-term investment destinations.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
