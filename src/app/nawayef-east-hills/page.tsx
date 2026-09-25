import type { Metadata } from 'next';
import NawayefEastHillsClient from './NawayefEastHillsClient';

export const metadata: Metadata = {
  title: 'Nawayef East Hills at Hudayriyat Island | Modon',
  description:
    'Discover Nawayef East Hills at Hudayriyat Island by Modon. Explore luxury residences, waterfront living, amenities, and investment opportunities in Abu Dhabi.',
};

export default function NawayefEastHillsPage() {
  return <NawayefEastHillsClient />;
}
