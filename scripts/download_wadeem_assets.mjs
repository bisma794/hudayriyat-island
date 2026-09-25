import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const assets = [
  // Hero sliders
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/slider/O7FHN4frV0NNy7GbdMzelBHRwrFBV9zj7Y0Zyqw9.png',
    dest: 'public/images/wadeem-gardens/hero-1.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/slider/0MI0iaFt2BuVnOnxi73VvB8WoZwiAdSaUrRDkvIh.png',
    dest: 'public/images/wadeem-gardens/hero-2.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/slider/qMxYtbZe8VtgVAIHg1oj8oEm8OmZIp5LQ2pOLox6.png',
    dest: 'public/images/wadeem-gardens/hero-3.png'
  },
  // Highlights
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/2801753001179.png',
    dest: 'public/images/wadeem-gardens/hl-developer.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/1931753001196.png',
    dest: 'public/images/wadeem-gardens/hl-price.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/7601753001203.png',
    dest: 'public/images/wadeem-gardens/hl-handover.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/6771753001216.png',
    dest: 'public/images/wadeem-gardens/hl-type.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/3491753001223.png',
    dest: 'public/images/wadeem-gardens/hl-bedrooms.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/project-highlights/7471753001158.png',
    dest: 'public/images/wadeem-gardens/hl-plan.png'
  },
  // Video Poster
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/project_description/OYGsbbw9Xho0UyWCXlHhAtjVLWGYfgHShqPlJSw0.png',
    dest: 'public/images/wadeem-gardens/video-poster.png'
  },
  // Amenities
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/akdrYPVosAhM5iAnQv8RuLa1AhzJqhnwnA1Fkoih.png',
    dest: 'public/images/wadeem-gardens/amenity-club.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/zUFjd6CVOUr5hpSyvMZcxQ4aQ2f9twYDxsYrk5EM.png',
    dest: 'public/images/wadeem-gardens/amenity-dining.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/tO7xYZEsocOXy0KubFcTEF9QfLUHArrJEqnGrFZO.png',
    dest: 'public/images/wadeem-gardens/amenity-retail.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/RVYecCmFAbugV2neTv4J8kDWWLjh2rm74wX41jOW.png',
    dest: 'public/images/wadeem-gardens/amenity-fitness.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/kx02RCw7SMYombTl3Dzz6JLxAjciMZOkEan86zRK.png',
    dest: 'public/images/wadeem-gardens/amenity-gardens.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/1RgUZTgAfT3BwBNAQCWDvhigb9U5K15BpfusPIgI.png',
    dest: 'public/images/wadeem-gardens/amenity-healthcare.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/5g2bO185Tm8Mcjy63f7GUkan41LlcBz3M7nKK9nb.png',
    dest: 'public/images/wadeem-gardens/amenity-kids.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/amenity/3Ll0UhUEXd8QNnbIQMxDYVvUdS0mL6ZKMqfUnLYJ.png',
    dest: 'public/images/wadeem-gardens/amenity-tracks.png'
  },
  // Gallery
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/uBiCn6h1hXjHjuFPYYTSM6397ftBSPJCWWs7VAP0.png',
    dest: 'public/images/wadeem-gardens/gallery-1.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/relfuztZAIQNy0SVD5bPNWAcij7iawYUTLCJ69WS.png',
    dest: 'public/images/wadeem-gardens/gallery-2.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/apLIAkK6Mlbj4K9q9hFn7XChoBtrvPfB1p92ZpiP.png',
    dest: 'public/images/wadeem-gardens/gallery-3.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/gallaries/WXNQ7i0u0Pdv9bLgBk0MoX0XSJoUuVI5slJOtBdB.png',
    dest: 'public/images/wadeem-gardens/gallery-4.png'
  },
  // Master plan
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/master_plan/tjCT1PCxwBgBRITbGkzPZMVy9jVU31hvRo632j1d.png',
    dest: 'public/images/wadeem-gardens/master-plan.png'
  },
  // Nearby landmarks
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/nearby_location/qXRemi1WJp39lN6iqMVl0JcZulszJRwcPPET71mw.jpg',
    dest: 'public/images/wadeem-gardens/landmark-airport.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/nearby_location/pOCdLbnLXrjsCZo2nsjd3GuaXcKFM0u5JGggIWFx.jpg',
    dest: 'public/images/wadeem-gardens/landmark-mosque.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/nearby_location/7XKDH8fvOddIpxJ16tOxUAlxzyLYpxPPkAwmYDRP.jpg',
    dest: 'public/images/wadeem-gardens/landmark-louvre.jpg'
  },
  // Consultant
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/email/YwWgn5SucUs9aUx4b9mR4tTqVy7y4y56hLugazqP.png',
    dest: 'public/images/wadeem-gardens/consultant.png'
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
  console.log(`Downloading ${assets.length} Wadeem Gardens assets...`);
  for (const item of assets) {
    await download(item.url, item.dest);
  }
  console.log('All Wadeem Gardens downloads completed!');
}

run();
