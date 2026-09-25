import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
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
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "ar-AE": `${siteUrl}/?lang=ar`,
      "ru-RU": `${siteUrl}/?lang=ru`,
      "x-default": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/hudayriyat logo-01.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/hudayriyat-logo-01.svg", type: "image/svg+xml" },
    ],
    shortcut: "/hudayriyat logo-01.svg",
    apple: "/hudayriyat logo-01.svg",
  },
  openGraph: {
    title: "Hudayriyat Island – Luxury Villas & Waterfront Living in Abu Dhabi",
    description:
      "Discover Hudayriyat Island, a premier luxury waterfront community in Abu Dhabi offering exclusive villas, mansions, and world-class amenities. Freehold for all nationalities.",
    url: siteUrl,
    siteName: "Hudayriyat Island",
    locale: "en_US",
    alternateLocale: ["ar_AE"],
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
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "kQ31FvlXoJip2fYZ2GusO9zNoyDaUlDpWVFe3rLNF2I",
  },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
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
      "logo": `${siteUrl}/hudayriyat logo-01.svg`,
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
    <html lang="en" className={`${ubuntu.variable} ${ubuntu.className}`} suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="kQ31FvlXoJip2fYZ2GusO9zNoyDaUlDpWVFe3rLNF2I" />
        <meta name="geo.region" content="AE-AZ" />
        <meta name="geo.placename" content="Abu Dhabi, UAE" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/svg+xml" href="/hudayriyat logo-01.svg" />
        <link rel="shortcut icon" href="/hudayriyat logo-01.svg" />
        <link rel="apple-touch-icon" href="/hudayriyat logo-01.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className={`${ubuntu.variable} ${ubuntu.className}`} suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6QRTSSZ5J5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6QRTSSZ5J5');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
