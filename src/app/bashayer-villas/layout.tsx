import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bashayer Villas at Hudayriyat Island, Abu Dhabi',
  description:
    'Explore Bashayer Villas at Hudayriyat Island, Abu Dhabi, offering spacious villas in a premium waterfront community. Discover the project and book now.',
  openGraph: {
    title: 'Bashayer Villas at Hudayriyat Island, Abu Dhabi',
    description:
      'Explore Bashayer Villas at Hudayriyat Island, Abu Dhabi, offering spacious villas in a premium waterfront community. Discover the project and book now.',
    url: 'https://hudayriyat-island.ae/bashayer-villas',
    siteName: 'Hudayriyat Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BashayerVillasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
