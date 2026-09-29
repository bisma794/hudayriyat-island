import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nawayef Park Views Abu Dhabi - Hudayriyat Island by Modon',
  description:
    'Discover Nawayef Park Views on Hudayriyat Island, Abu Dhabi. Premium residences overlooking verdant central parklands by Modon Properties.',
  keywords: [
    'Nawayef Park Views',
    'Nawayef Park Views Hudayriyat Island',
    'Modon Properties',
    'luxury homes Abu Dhabi',
    'Hudayriyat Island apartments and villas',
  ],
  openGraph: {
    title: 'Nawayef Park Views Abu Dhabi - Hudayriyat Island by Modon',
    description:
      'Discover Nawayef Park Views on Hudayriyat Island, Abu Dhabi. Premium residences overlooking verdant central parklands by Modon Properties.',
    url: 'https://hudayriyat-island.com/nawayef-park-views',
    siteName: 'Hudayriyat Island',
    images: [
      {
        url: '/images/communities/nawayef-park-views.jpg',
        width: 1200,
        height: 630,
        alt: 'Nawayef Park Views Hudayriyat Island',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function NawayefParkViewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
