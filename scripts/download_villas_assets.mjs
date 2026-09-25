import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  // Hero slider
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/Syc2A7KvVERPicTeXKON8HUuyDvJZhQfxdKzwuBk.jpg", name: "hero-slider-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/PtjFugYv6fHpCecyxxCdHdd6TSxj2l315zaIP5fQ.jpg", name: "hero-slider-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/OtyLj5SAkWRVvznEHdqh6W8jqz2ukf0yavLhd8Zz.jpg", name: "hero-slider-3.jpg" },

  // Video & Poster
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/ujCVmrQOthNN6qHi9gBtLaeIzuW3PmtwaMazht21.jpg", name: "video-poster.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/f8HKk3X7z3xFj1p063L2qPlIeTwpKEpCByqSlS1f.mp4", name: "video.mp4" },

  // Amenities
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/gYLGSjW5RdgPRe71en8Fb0ILF0KbPsypyQWYn3wX.png", name: "amenity-1.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/IExsbgqNEpJ5e9ZtGUwOE8LFsfVkHkeFkaWlahbS.png", name: "amenity-2.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/IxQcFu1OAmyrNFaDmY15OuKoYdL5VwqGmwgWMZcY.png", name: "amenity-3.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/2Bp84xwQnfdPr4wg4IwxIuWjIFbuwb0oK1t0x3vd.png", name: "amenity-4.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/2t7YJ55EMotShISjZvEwRBVOWj8WVOfk8nZzPV0X.png", name: "amenity-5.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/CPvD9trxWIez2n0G6OiP82T9lPd26qb6i1LzG2ky.png", name: "amenity-6.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/aSA2ZfLOhVv5ynKOUEnf7xGGICmx5yEuilLiF0rT.png", name: "amenity-7.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/kNELUhwti6t14mamE1Dxly3YVRz9OVb4JHjC20oB.png", name: "amenity-8.png" },

  // Gallery
  { url: "https://www.hudayriyat-island.com/storage/gallaries/qGo2XmsLExjs8TCKlnL17OitOPxUbw3R10STV5DU.jpg", name: "gallery-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/PtjFugYv6fHpCecyxxCdHdd6TSxj2l315zaIP5fQ.jpg", name: "gallery-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/OtyLj5SAkWRVvznEHdqh6W8jqz2ukf0yavLhd8Zz.jpg", name: "gallery-3.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/r3cx6GGfOS9hrfBKlRaf9pNJL6DGKe5XhU62Q9jz.jpg", name: "gallery-4.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/rgZTgsuVVvuARV0Exr54HvEr1Zgaiq3VkBvCm4wg.jpg", name: "gallery-5.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/ucmxQ5dCYnJu2DfSiBHgVPyIzaoA3hy6zGEvOTls.jpg", name: "gallery-6.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/OMU0bvU1IBXy9knhR51xTj3Jp4tdgxxWDzpxLNCQ.jpg", name: "gallery-7.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/gy7fUfQZivqRFO9UvXH7Qnft2wWBlbVtL82MxmOp.jpg", name: "gallery-8.jpg" },

  // Master Plan
  { url: "https://www.hudayriyat-island.com/storage/communities/master_plan/oAH4E4cOLKOeoya149XeIqBFdHQRTjaKzSTyfyyT.jpg", name: "master-plan.jpg" },

  // Contact banner
  { url: "https://www.hudayriyat-island.com/storage/communities/email/kzEhCRwXbCFvhkYgyXeo2x0MlxbxzxdyJiSuf82g.png", name: "contact-banner.png" },
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'bashayer-villas');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Server responded with ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets to ${targetDir}...`);
  for (const asset of assets) {
    const dest = path.join(targetDir, asset.name);
    try {
      console.log(`Downloading: ${asset.name}...`);
      await downloadFile(asset.url, dest);
      console.log(`Saved: ${asset.name}`);
    } catch (err) {
      console.error(`Failed to download ${asset.name}:`, err.message);
    }
  }
  console.log('Finished all downloads!');
}

run();
