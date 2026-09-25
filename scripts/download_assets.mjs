import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const assets = [
  // Hero sliders
  {
    url: 'https://www.hudayriyat-island.com/storage/sliders/July2025/KWSy4Op2869uAiihQCMO.jpg',
    dest: 'public/images/hero/slide-1.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/sliders/July2025/cwBKm421XyQewJDHGvlY.jpg',
    dest: 'public/images/hero/slide-2.jpg'
  },
  // Logos
  {
    url: 'https://www.hudayriyat-island.com/storage/general-settings/July2025/gamwqOJT9NxYq8RmgHhe.png',
    dest: 'public/images/logo.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/general-settings/July2025/onnqk8meRt93FNXoO2rl.png',
    dest: 'public/images/footer-logo.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/email-settings/July2025/gl8fKu30IwuUogZos6vW.png',
    dest: 'public/images/contact-image.png'
  },
  // Communities main images
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/xDhIv8ztp5NzRKb4mtei99QjsdIRy2NkyTuThLQC.png',
    dest: 'public/images/communities/wadeem-gardens.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/VyeMow7iH0KJvcpz8Cy4S3lRdGAdYPu6iLYt0ucC.jpg',
    dest: 'public/images/communities/golf-estates.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/2OeSyVyiv39UgGo3iFUdEynJk3zHhGgd1X6QqV6u.jpg',
    dest: 'public/images/communities/bashayer-residences.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/qq2RxFsL1AbUlIeWKOOjEYfGRSO3LeSRrNlvyUxe.jpg',
    dest: 'public/images/communities/nawayef-east.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/VB9b3Vj2Ki7pFKfLEN5Yu7UOqsfI4eWXMfGAQ2M9.jpg',
    dest: 'public/images/communities/bashayer-villas.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/0WeOPiXYgAeMnBaCEaNLdA7KLc0X5JxPnsexnS3Q.jpg',
    dest: 'public/images/communities/al-naseem.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/p3VKrJ3MZyMV2SdFoXDhCQYVpgNI6CiL25zI6SuU.jpg',
    dest: 'public/images/communities/masyaf-plots.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/Qf2F4PHYgygAtYAExuG2l7OwFLSQhTsaENPFkYAo.jpg',
    dest: 'public/images/communities/nawayef-village.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/Hm2mBGWhS0oRJbKYjjSiddrooG48tfNGYI1FxRUR.jpg',
    dest: 'public/images/communities/wadeem-plots.jpg'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/EaD42NGmY8oOUTX1BNv4gMmpRVo4OdXND0s7k8j4.jpg',
    dest: 'public/images/communities/nawayef-park-views.jpg'
  },
  // Community Logos
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/Pg2Dg0H7oVBPZFUs98ud8AUxZjIQ5lwESdPO15gn.png',
    dest: 'public/images/communities/logo-wadeem.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/T3haElE0mMbE2DIiL1BHEn28rWmtFTkIFO8vfcfq.png',
    dest: 'public/images/communities/logo-golf.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/QneCbPwnlXfB31dK6Fs0RuP5oAFf26aVAxA4BVOx.png',
    dest: 'public/images/communities/logo-bashayer-res.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/eyEQgUgApNftowbVeuu4f04Wg3n9B61raaLArkyN.png',
    dest: 'public/images/communities/logo-nawayef-east.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/txrdMyaUxGIsmGRzQnHonlBQ5CsRoST6WaVeKWJw.png',
    dest: 'public/images/communities/logo-bashayer-villas.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/lIJ4MYwV61OtcmeKmTuozRlIg12kmy0Xyn1StlWk.png',
    dest: 'public/images/communities/logo-al-naseem.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/4vV6E53zOyRiLAuGBor6vSyLcqKRDpYEn8fg1Gaf.png',
    dest: 'public/images/communities/logo-masyaf.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/YGJB5L6OcZ9HRYtjYWhQrHwwoqewkEPiZSvgg5eg.png',
    dest: 'public/images/communities/logo-nawayef-village.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/PYuatuPPFQstSyKnlLo8DhSYQMA7YKPdXUhkWPvT.png',
    dest: 'public/images/communities/logo-wadeem-plots.png'
  },
  {
    url: 'https://www.hudayriyat-island.com/storage/communities/logo/7miBd6049aTdXQiRIgEKp3FFlqW1fLlm4mtvxGW0.png',
    dest: 'public/images/communities/logo-nawayef-park.png'
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
  console.log(`Downloading ${assets.length} assets...`);
  for (const item of assets) {
    await download(item.url, item.dest);
  }
  console.log('All downloads completed!');
}

run();
