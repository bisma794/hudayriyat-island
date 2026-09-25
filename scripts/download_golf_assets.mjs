import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const assets = [
  // Hero sliders
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/slider/lEcb3I5i4yFF7P1pI8mtkUCK513Pey7qPK8calUH.jpg',
    dest: 'public/images/golf-estates/hero-1.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/slider/o8bxBK7Bh0s15nE1yRx7STiDa6BIeTGgwyhYj34u.jpg',
    dest: 'public/images/golf-estates/hero-2.jpg'
  },
  // Highlights
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/2801753001179.png',
    dest: 'public/images/golf-estates/hl-developer.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/1931753001196.png',
    dest: 'public/images/golf-estates/hl-price.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/7601753001203.png',
    dest: 'public/images/golf-estates/hl-handover.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/6771753001216.png',
    dest: 'public/images/golf-estates/hl-type.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/3491753001223.png',
    dest: 'public/images/golf-estates/hl-bedrooms.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/7471753001158.png',
    dest: 'public/images/golf-estates/hl-plan.png'
  },
  // Video Poster
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/project_description/qpQsiInfHrc1gY0qD33cHnSkMps5vZfkZD3PiqHq.jpg',
    dest: 'public/images/golf-estates/video-poster.jpg'
  },
  // Amenities
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/1NERFcnRlqxR26AVDIvhARVvNJuZq54y4UYWDNTk.png',
    dest: 'public/images/golf-estates/amenity-golf.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/jZxnF07Hj5rnMA1hdvBpIRXYb1AVkWd1q1AxnW5m.png',
    dest: 'public/images/golf-estates/amenity-clubhouse.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/Dv3UT1Sbku5LnvsMwNdUxbBbwzAGIohBHQ2T7P5K.png',
    dest: 'public/images/golf-estates/amenity-retail.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/fHcbfRS8xwFAqR1M2oCpYyAvqAysqoBaUGnADhTO.png',
    dest: 'public/images/golf-estates/amenity-school.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/jWGNHEpxTjsOHjcqagWtlnUmPbfcOc1UBJLt6PlF.png',
    dest: 'public/images/golf-estates/amenity-cycling.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/Gr4vEojqRuA0KLZWi3VzklMbLmI4FnLSacKeWPSU.png',
    dest: 'public/images/golf-estates/amenity-parks.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/xE558Fv8MzFbruGveajTtV86EB6fHUova78i5MkV.png',
    dest: 'public/images/golf-estates/amenity-coworking.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/sZk8OqOWmxwOVdVDLxyAMwteaIB79WnuAunZKfWx.png',
    dest: 'public/images/golf-estates/amenity-dining.png'
  },
  // Gallery
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/3Ikvw8csmLAOsWULvjqgSlaPdddkLrO9Bz8gYnFf.jpg',
    dest: 'public/images/golf-estates/gallery-1.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/VzwUplMFAStfdgrzXWua00p2meuTnMnyavbTf4TA.jpg',
    dest: 'public/images/golf-estates/gallery-2.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/2QtHqli90UAvOnwd1LuvxtzHU4tykOhRPP3AXSuz.jpg',
    dest: 'public/images/golf-estates/gallery-3.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/0xwpxYSJt2GWXMggFbQxUWgoCY5hjtRYjmENcA7b.jpg',
    dest: 'public/images/golf-estates/gallery-4.jpg'
  },
  // Floor Plans
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/floor_plan/9TBjVyZJymbL5IKm6NYmMKeYa8XTbULKrzcJ8yFO.jpg',
    dest: 'public/images/golf-estates/floor-par-4.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/floor_plan/4Ecy29qHNd2kGwgfFIrgIk5Rv4exKZu6fV9QRVHm.jpg',
    dest: 'public/images/golf-estates/floor-par-3.jpg'
  },
  // Master plan
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/master_plan/qMYU4VfJDciusWsk82lMnUkTNGgPYQMtbmySK1uG.jpg',
    dest: 'public/images/golf-estates/master-plan.jpg'
  },
  // Nearby landmarks
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/nearby_location/c7pNL0lzcmBkMvgoYO3lou9cwqzeULJhfY5rYBNw.jpg',
    dest: 'public/images/golf-estates/landmark-ferrari.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/nearby_location/mS3Blc6u06O5voU2Jd4NhYmSfrOKNadEnZw9tbQk.jpg',
    dest: 'public/images/golf-estates/landmark-airport.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/nearby_location/RNeaiy8DU9WZ9iWUVk1zGHa2yPcO1sttc48Bb83s.jpg',
    dest: 'public/images/golf-estates/landmark-louvre.jpg'
  },
  // Consultant
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/email/OW59cJBKyDmaPh9PLCx58PnxS0mu1jpwhZyRPDJj.png',
    dest: 'public/images/golf-estates/consultant.png'
  }
];

async function download(url, destPath) {
  const fullPath = path.resolve(root, destPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status}`);
      return false;
    }
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(fullPath, Buffer.from(arrayBuffer));
    console.log(`Saved: ${destPath}`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function run() {
  console.log(`Downloading ${assets.length} Hudayriyat Golf Estates assets...`);
  for (const item of assets) {
    await download(item.url, item.dest);
  }
  console.log('All Golf Estates downloads completed!');
}

run();
