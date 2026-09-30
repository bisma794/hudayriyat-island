import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nawayef Village Abu Dhabi - Hudayriyat Island by Modon',
  description:
    'Explore Nawayef Village on Hudayriyat Island, Abu Dhabi. Master-planned luxury residences with elevated coastal living by Modon Properties.',
  keywords: [
    'Nawayef Village',
    'Nawayef Village Hudayriyat Island',
    'Modon Properties',
    'luxury villas Abu Dhabi',
    'Hudayriyat Island real estate',
  ],
  openGraph: {
    title: 'Nawayef Village Abu Dhabi - Hudayriyat Island by Modon',
    description:
      'Explore Nawayef Village on Hudayriyat Island, Abu Dhabi. Master-planned luxury residences with elevated coastal living by Modon Properties.',
    url: 'https://hudayriyat-island.ae/nawayef-village',
    siteName: 'Hudayriyat Island',
    images: [
      {
        url: '/images/communities/nawayef-village.jpg',
        width: 1200,
        height: 630,
        alt: 'Nawayef Village Hudayriyat Island',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function NawayefVillageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
