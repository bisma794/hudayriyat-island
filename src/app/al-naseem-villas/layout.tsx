import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Al Naseem Luxury Villas Abu Dhabi - Hudayriyat Island',
  description:
    'Discover Al Naseem luxury villas Abu Dhabi with premium design and space. Explore Al Naseem Villas Hudayriyat Island for exclusive living.',
  keywords: [
    'Al Naseem Villas',
    'Al Naseem Community by Modon',
    'Hudayriyat Island Villas',
    'luxury villas Abu Dhabi',
    '4 bedroom villa Abu Dhabi',
    '5 bedroom villa Abu Dhabi',
    '6 bedroom villa Abu Dhabi',
    'Modon Properties',
    'off-plan villas Abu Dhabi',
  ],
  openGraph: {
    title: 'Al Naseem Luxury Villas Abu Dhabi - Hudayriyat Island',
    description:
      'Discover Al Naseem luxury villas Abu Dhabi with premium design and space. Explore Al Naseem Villas Hudayriyat Island for exclusive living.',
    url: 'https://www.hudayriyat-island.com/al-naseem-villas',
    siteName: 'Hudayriyat Island',
    images: [
      {
        url: '/images/al-naseem-villas/hero-slider-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Al Naseem Villas Hudayriyat Island',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AlNaseemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
