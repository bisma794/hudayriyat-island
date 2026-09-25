import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  // Hero sliders
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/rZAnkHNaBrC4XU35z3xgkHm4aVXGNQeQfdAzGjZR.jpg", name: "hero-slider-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/As3DUSNAWnu9dFLDXerkBreXi9RGxItZXkNbYKmo.jpg", name: "hero-slider-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/mwN0Q8juXjY43x8QlaMMqP2OmJHyxrIj1zeIRyuO.jpg", name: "hero-slider-3.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/FN25BF8a2bPH27fGAPt8kCqw7TvImzlTnlScgPna.jpg", name: "hero-slider-4.jpg" },

  // Highlights icons
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/O0BeEJxOzDWAb64tUZBtrYbyYA5BCDhzzoYorp8z.png", name: "hl-dev.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/N11ZAdbYz5UPbQGOfyped6V7CJHGjUeQQqLj0jJt.png", name: "hl-price.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/xlHxDg5OcMuyW1o94Irygsg87p3OHRE1RGRg31RK.png", name: "hl-handover.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/ER29ZaVASL4OwTG80JYiH3R1xvFBAeNR8VGpJzdL.png", name: "hl-prop.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/yCUDvqq8ORvuTez3AwYzSeiKm8BFVvdHMl60IkNr.png", name: "hl-bed.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/kNXfvjfRqDXKFA41gEWP8Jpu7B6GEfFYe0yoyRvW.png", name: "hl-downpayment.png" },

  // Video & Poster
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/Vn6XyjHFn2RlKIr6RcNvfiEWHc5xNH0hmJUQwiG3.jpg", name: "video-poster.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/WXwKiy3Wh835Gd4bOWW1y7ufD2bGU6y106N9UBWx.mp4", name: "video.mp4" },

  // Amenities
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/JdUF1D9Mo312EPynHwWWsRpE6cWcDQuyXJ1HHMby.png", name: "amenity-1.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/46R4vXWHTRfRoTxGMxYzTGWsEH8bOsNqFUB68Xhc.png", name: "amenity-2.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/QN8xcgw0S22evgpgrlx9bP2QlBdjL18KaZd8amiA.png", name: "amenity-3.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/MCYAkWLPRwFrA5dMYjzc0g8yUqb1sQcHMVs2rn8u.png", name: "amenity-4.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/gi06PfJyL7zcPDIKqHJ31RT5Xp19JWirGiW2t6AZ.png", name: "amenity-5.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/9idBxsLD1uVtwJZHeg4btbUgYaNZaMql0xJEt77e.png", name: "amenity-6.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/gVAKE2j3zaHkF2Qw9spxrkStYJAqFDdivs2KfzIY.png", name: "amenity-7.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/6zeqogrj5KKCxAF1PZkm13K5hNuEaJxiaUw8ryrh.png", name: "amenity-8.png" },

  // Gallery
  { url: "https://www.hudayriyat-island.com/storage/gallaries/ysahsdysRupqIY1G08j9PxbTwNazvb3R6yoXIV7q.jpg", name: "gallery-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/xZbLbX220frmHNdehxCaH9f4gJXcEDEkk2fUgZyX.jpg", name: "gallery-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/jCQIIqXzVs1cTchjzldSnJ490PVlgfCeOt5Ffa74.jpg", name: "gallery-3.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/SXyE6uyU4PvrSYex7SsVdQicJ8Udg344RY2PetG5.jpg", name: "gallery-4.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/5XnPq1Hx3kDgyVsINdoRRQu9kjsfc7KJVmwmtBpY.jpg", name: "gallery-5.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/zxv4LCRqqYR5H4FUdG8dfd21iH6kRQH2fUgkX8E4.jpg", name: "gallery-6.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/tJIkoGB6KgJH2JOWyWi2ybNfQEvxeMsDpLZLihbw.jpg", name: "gallery-7.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/cbIVhVkdv16lTcPOswBOTcje90DJErhhGmlawy9F.jpg", name: "gallery-8.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/KQN32ki9upI2JEy8IUgFg9my7gWw22Dp39w4xT3j.jpg", name: "gallery-9.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/lAHiY52gF0WeUXjjWwyHhWOv1hTlRM2t2GuCrVVc.jpg", name: "gallery-10.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/S4Mm2qrjvUWOelGkN3qnIkqWn1fXCpCjbiT3cVN9.jpg", name: "gallery-11.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/46P7KLTiE9jZ2Ia27dqULSFYv7hAixSqNlcADwxX.jpg", name: "gallery-12.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/Opq2L6O19CFSYDkPZ6WP0CdEyeX5PW0aFUdIiJDo.jpg", name: "gallery-13.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/QiVGLX6rlfcRS4g8FjTDcWt7DLNmr1QhwodCbGmc.jpg", name: "gallery-14.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/WGEfNHPnJHOc7o3QNFmTOs400IbFOzKYWuBBsJHX.jpg", name: "gallery-15.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/IZTHvAYetNUpJJgSaqwdun0gDLxBqzvLF0U4IXRc.jpg", name: "gallery-16.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/mUoyyvbVNJGcCjfVFnHWqIETKGSYbAIFv8zvTVfj.jpg", name: "gallery-17.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/PbU0SEeGbjEsEYml6euXgFBUUYAJbA2oOlzbcAGs.jpg", name: "gallery-18.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/RxA4cMkxJmwaAtdQsP5au5YLRQN7pYE5pEL1IaXM.jpg", name: "gallery-19.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/GV1aDkWgtaeVBOjhXp7GPfKaWlt7j1t1MaTZLsX0.jpg", name: "gallery-20.jpg" },

  // Floor Plans
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/vkYJf9HERGKTYNGMiEVITWtxDwS9ZtN5PaO2Ottg.webp", name: "floor-4bed.webp" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/zHL06pvNdVzTmxGO2wh3D3o6Qy66fRb6JelIcUeS.webp", name: "floor-5bed.webp" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/stZrtTNWAvB4GCKUikx4D2Aa4VJytHfMR7eH0d2g.webp", name: "floor-6bed.webp" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/radIzzAAxMCkqOnUSpc49PHTykUo695DdYHWoMe5.pdf", name: "al-naseem-floor-plan.pdf" },

  // Master Plan
  { url: "https://www.hudayriyat-island.com/storage/communities/master_plan/dk4FpaihfLfJkaqEdnTHldGhe7oiOkcVDUx7KVac.webp", name: "master-plan.webp" },

  // Brochure
  { url: "https://www.hudayriyat-island.com/storage/communities/broucher/IZ2Qn2ycvzXt9QnmVLGfjUgCHzdBwc8erd7aDQ9h.pdf", name: "al-naseem-brochure.pdf" },

  // Contact / Lead banners
  { url: "https://www.hudayriyat-island.com/storage/communities/email/ZElGXz9Wry9BDNHmug6bw2kQPdEIqb4O0VsUO8O3.png", name: "contact-banner.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/Ja925Wu2qoP0kb43QmEo2AEMR6n2T6ou0TuEAE44.png", name: "contact-banner-2.png" },
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'al-naseem-villas');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      console.log(`Already exists: ${path.basename(dest)}`);
      return resolve();
    }
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
      await downloadFile(asset.url, dest);
      console.log(`Downloaded: ${asset.name}`);
    } catch (err) {
      console.error(`Failed to download ${asset.name}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

run();
