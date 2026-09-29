import type { Metadata } from 'next';
import NawayefEastHillsClient from './NawayefEastHillsClient';

export const metadata: Metadata = {
  title: 'Nawayef East Hills at Hudayriyat Island | Modon',
  description:
    'Discover Nawayef East Hills at Hudayriyat Island by Modon. Explore luxury residences, waterfront living, amenities, & investment opportunities in Abu Dhabi.',
  openGraph: {
    title: 'Nawayef East Hills at Hudayriyat Island | Modon',
    description:
      'Discover Nawayef East Hills at Hudayriyat Island by Modon. Explore luxury residences, waterfront living, amenities, & investment opportunities in Abu Dhabi.',
    url: 'https://hudayriyat-island.com/nawayef-east-hills',
    siteName: 'Hudayriyat Island',
    locale: 'en_US',
    type: 'website',
  },
};

export default function NawayefEastHillsPage() {
  return <NawayefEastHillsClient />;
}
