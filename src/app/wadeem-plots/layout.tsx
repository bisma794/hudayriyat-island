import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wadeem Plots Abu Dhabi - Hudayriyat Island by Modon',
  description:
    'Discover Wadeem Plots on Hudayriyat Island, Abu Dhabi. Exclusive freehold residential villa plots for custom architectural homes by Modon Properties.',
  keywords: [
    'Wadeem Plots',
    'Wadeem Plots Hudayriyat Island',
    'Modon Properties',
    'residential plots Abu Dhabi',
    'freehold plots for sale Abu Dhabi',
  ],
  openGraph: {
    title: 'Wadeem Plots Abu Dhabi - Hudayriyat Island by Modon',
    description:
      'Discover Wadeem Plots on Hudayriyat Island, Abu Dhabi. Exclusive freehold residential villa plots for custom architectural homes by Modon Properties.',
    url: 'https://www.hudayriyat-island.com/wadeem-plots',
    siteName: 'Hudayriyat Island',
    images: [
      {
        url: '/images/communities/wadeem-plots.jpg',
        width: 1200,
        height: 630,
        alt: 'Wadeem Plots Hudayriyat Island',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function WadeemPlotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
