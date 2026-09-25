import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masyaf Plots Abu Dhabi - Hudayriyat Island by Modon',
  description:
    'Discover Masyaf exclusive residential plots on Hudayriyat Island, Abu Dhabi. 199 freehold villa plots for custom luxury living.',
  keywords: [
    'Masyaf Plots',
    'Masyaf Hudayriyat Island',
    'Hudayriyat Island Villa Plots',
    'Modon Properties',
    'Freehold plots Abu Dhabi',
    'Residential plots for sale Abu Dhabi',
  ],
  openGraph: {
    title: 'Masyaf Plots Abu Dhabi - Hudayriyat Island by Modon',
    description:
      'Discover Masyaf exclusive residential plots on Hudayriyat Island, Abu Dhabi. 199 freehold villa plots for custom luxury living.',
    url: 'https://www.hudayriyat-island.com/masyaf-plots',
    siteName: 'Hudayriyat Island',
    images: [
      {
        url: '/images/communities/masyaf-plots.jpg',
        width: 1200,
        height: 630,
        alt: 'Masyaf Plots Hudayriyat Island',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function MasyafLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
