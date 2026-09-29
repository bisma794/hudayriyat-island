import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wadeem Gardens at Hudayriyat Island, Abu Dhabi - Modon',
  description:
    'Explore Wadeem Gardens at Hudayriyat Island, Abu Dhabi by Modon, featuring premium 4–6 bedroom villas in a waterfront community. Book now.',
  openGraph: {
    title: 'Wadeem Gardens at Hudayriyat Island, Abu Dhabi - Modon',
    description:
      'Explore Wadeem Gardens at Hudayriyat Island, Abu Dhabi by Modon, featuring premium 4–6 bedroom villas in a waterfront community. Book now.',
    url: 'https://hudayriyat-island.com/wadeem-gardens',
    siteName: 'Hudayriyat Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function WadeemGardensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
