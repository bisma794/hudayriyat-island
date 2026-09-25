import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  // Hero sliders
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/zimPhNxlPsQGncZaRjJC66k9RH3xJZfk9h0OFQNC.jpg", name: "hero-slider-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/vvtLd06vB5GSRxl8MXuwvUuk5oK1xgZm6K2d7zgT.jpg", name: "hero-slider-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/47MSqNCaZhqJSHkc48jNLkuHjNHPUf0LuKxIazmL.jpg", name: "hero-slider-3.jpg" },
  
  // Highlights
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/32mqtzxQwHR0POqKPoW4e4ok4OkNHzsl21JEvGXI.png", name: "hl-dev.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/hggHCs7BuBE39J0ORnR2HA4xvY7u4qh1qeHHwF7T.png", name: "hl-price.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/BzIPpgLA2ylJk506m4cHInVcb2TRebPbTZw8FVYm.png", name: "hl-handover.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/lfUd1tZYMZstXl52EVjPPpkZQVHoanlNI5PGj6ow.png", name: "hl-prop.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/ZanpYPHbUkD1xd7iQCE0ekzF4fnplPaT8WYykiia.png", name: "hl-bed.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/0EfSD9kX3tRrQJGuC7q90EJnKIQ6G2WCj15LXmBW.png", name: "hl-area.png" },

  // Video & Poster
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/FapoODE3zNqAcpQtVlrjeHc3V9QRfm1iqUaECnmD.jpg", name: "video-poster.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/vlmliaTuH15arllk0UiIJSPqU0Xr0FdvwurborrX.mp4", name: "video.mp4" },

  // Amenities
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/zfyhRK1I9KKqmqyLIFBQlX0K13qs083X2aS7lsyh.png", name: "amenity-1.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/gWb5NRU0jVAbvbtBigRXDWXExaL1PoL8G3mMUQVB.png", name: "amenity-2.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/x7Ago1CokgzvsE7sW9BQV8y7i7dsRdtlG19Un4qD.png", name: "amenity-3.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/atwGolgeCR9lVQnpXG9cEPtmH2KuTyhHes94tSsq.png", name: "amenity-4.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/M0spAAHuYnmvTugMD6BZCGuqNNa3ND4ck0mSNNsZ.png", name: "amenity-5.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/xxUDdcFjTiNMixPOERu21oW3fILUfel8juGeYHrV.png", name: "amenity-6.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/r9ipDmpJ6ukezCM8njOzgIOMbPSoPjH1PEIPZFok.png", name: "amenity-7.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/IQlfyjbiV7Y3OWU44LeHqbwUYPt9bYcZlhlj9zVL.png", name: "amenity-8.png" },

  // Gallery
  { url: "https://www.hudayriyat-island.com/storage/gallaries/Gxflvzs3d6RK8wmguG7ZfpM7BWRe7GVDogarXsMV.jpg", name: "gallery-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/tQi5EBuPXCrq9GZTAghjXoZBJzdARne9QYOwZwca.jpg", name: "gallery-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/iEgvqDvUHr48AjtDsrofRyAGcL2Ga7q8Cb14jCR6.jpg", name: "gallery-3.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/ROYqGd7l08GSRUHddWYWoGt4086gsUuTzDOwiq8x.jpg", name: "gallery-4.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/OSuJTP0uGLlc2VsYSAKIbFJwb4GM0YWajniMWi6X.jpg", name: "gallery-5.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/nNiBotQmU4z79TLpOaZ29aHausnGqUJ4ecG5ceQm.jpg", name: "gallery-6.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/hMEp6fKYTNgR540FjwqtIpVzkS5S4yvQ7ZL9kpzL.jpg", name: "gallery-7.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/1aqUb2truzU7wUkcivR5IUumrFUBA2Swc22JwXk6.jpg", name: "gallery-8.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/o7RytYNAgZ4sKg28ynvnRRiJRGUwSP7RlxEYr4DN.jpg", name: "gallery-9.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/Tvbc8ErodlOTybxK09W1t2o0b16KSnR2gNaDsoXi.jpg", name: "gallery-10.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/A9Ky3gjN1ptAzAXp95u2oVa2U08Gs6WfOdmbT0eR.jpg", name: "gallery-11.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/VD5KEZvpSO5R3239LjYrpxnS5vIUFsHwDm92w0pI.jpg", name: "gallery-12.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/SIwkn3OW1WX9NVdIbhNhCARS0tZRqK3p820Od0J9.jpg", name: "gallery-13.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/uhKsK0G6HgTzstjFiW0WQ3Os62n1l1HgackGWHvr.jpg", name: "gallery-14.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/JNLYd7UOm995M6ZwmxgQCI0A1oovaWxGw9N3W889.jpg", name: "gallery-15.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/dETAqyQSpNJ9Jc9taR0GBxaQJeYUJgUYQCNJdlnr.jpg", name: "gallery-16.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/gFSWPyY26l05Xn7xicYxrABL2YhBCn8YhmA14gwm.jpg", name: "gallery-17.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/iusLH9sMrJZhWREXA3hpHEfqU920rGDuEj3YEQX7.jpg", name: "gallery-18.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/EmXCRMqVUo5nM2lOzXulnzkqjWlTw9YN2Z05glv9.jpg", name: "gallery-19.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/JYMwp854dvgzAZqucQugpbwpAEInsJHfjWeHHNl0.jpg", name: "gallery-20.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/LgK4VxkhP4BxX7k8ENluYjsuTl66FgTi3b4qTfcq.jpg", name: "gallery-21.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/TXz3FCWzH0b3epUAaXxKkfAowqyIYRB0IjCHCaZA.jpg", name: "gallery-22.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/jQYUw3meCu8myrkNfCs6fdMtC9ozuzxJmyzayU0N.jpg", name: "gallery-23.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/xDOx9QTsUFNed0AY4Jl9ZmuyB2kOhBkzgulL56Q5.jpg", name: "gallery-24.jpg" },

  // Floor Plans
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/aBVSphNSp2SMRztYjRIp0XWMcdCkRCxZuwlo2eru.png", name: "floor-8bed.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/7dYBs2jFCZudcTOJu8jNEfu0mQyYpcH1s6bZqxXN.png", name: "floor-7bed.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/slu7M6DxGgIcQsU9FVKH2meW41tR2l8OGnNx1ioA.png", name: "floor-6bed.png" },

  // Master Plan / Location
  { url: "https://www.hudayriyat-island.com/storage/communities/xDhIv8ztp5NzRKb4mtei99QjsdIRy2NkyTuThLQC.png", name: "master-plan.png" },

  // Contact banner
  { url: "https://www.hudayriyat-island.com/storage/communities/email/9sNT0mBkFzDkTDv5akVGtBasub1rDgkQPNbGjrH6.png", name: "contact-banner.png" },
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'nawayef-east-hills');
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
