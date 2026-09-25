import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  // Hero sliders
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/TY5IbB6Ci2wslnE4NqNIWaINmvvd7wmA9GosQeqT.jpg", name: "hero-slider-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/jOkFxPzZrXm96Ux0h3JpLtVn6LAZRMFR05v6xxci.jpg", name: "hero-slider-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/fT6IvTAO97xwBuyIPLeLCzJ5JIbgGDm9fCoL8b3w.jpg", name: "hero-slider-3.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/slider/fnK96TzCc5IQf47ZkznAJgVROPUJcsibK1jvjHBQ.jpg", name: "hero-slider-4.jpg" },
  
  // Highlights
  { url: "https://www.hudayriyat-island.com/storage/project-highlights/2801753001179.png", name: "hl-dev.png" },
  { url: "https://www.hudayriyat-island.com/storage/project-highlights/1931753001196.png", name: "hl-price.png" },
  { url: "https://www.hudayriyat-island.com/storage/project-highlights/7601753001203.png", name: "hl-handover.png" },
  { url: "https://www.hudayriyat-island.com/storage/project-highlights/6771753001216.png", name: "hl-prop.png" },
  { url: "https://www.hudayriyat-island.com/storage/project-highlights/3491753001223.png", name: "hl-bed.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/highlights/FMzupfyCvsF6sv4v4MwsQo5buLeT2kw77ERmXBcl.png", name: "hl-plan.png" },

  // Video & Poster
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/dMIYZmkZVaNxhSfPCZ6QuOejdUD8ToGjIp7NMpfz.jpg", name: "video-poster.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/project_description/7MGYwwWu4goXAkGbc7uoaADv6KUw7JseMNBau8lA.mp4", name: "video.mp4" },

  // Amenities
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/XFMWFcL2lasTv0dv6WkFDpjKCaluqu2MULMS5NXQ.png", name: "amenity-1.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/z5Bk2v18Px7FuKfQK4LFfawF9gUUOFnew769Jp0V.png", name: "amenity-2.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/fVT6Lnm9TQiZQY1ehd2lazh9V3UDGDlCKQcWVDDe.png", name: "amenity-3.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/ixPOKfgsNgpUzpIVzR9YcYYA5XEo4L50y2Zq9byL.png", name: "amenity-4.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/NjgTmtqiAwcHnll83kuNEUT3MhPT5cXkk3NOsPCz.png", name: "amenity-5.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/Kl8Ee4JN4VwQ0moK63NI7GbIkDVUtBZC5M5Ch9n2.png", name: "amenity-6.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/F1XOTOR1EjARU63XQzU491bEvdR228l5VmfZrHNe.png", name: "amenity-7.png" },
  { url: "https://www.hudayriyat-island.com/storage/communities/amenity/xrtNzaxAXt05lyDhuM3MAgSFO962Rx0UORi5i0Ws.png", name: "amenity-8.png" },

  // Gallery
  { url: "https://www.hudayriyat-island.com/storage/gallaries/LNsYIZlWlsVm4uvF12VHWHduUyz1wET64B2gBw8F.jpg", name: "gallery-1.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/JiR4SlkeukbimMM2LpP9t11Yq8NJWGn1htdiIFSj.jpg", name: "gallery-2.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/u3KCYntxWxM6zYFJh2fHPdBVlkoauHCa96wbtq7H.jpg", name: "gallery-3.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/qssVwxzpbEgmq91JDl2TdtEH7carfF3GPQaEBZqk.jpg", name: "gallery-4.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/YhKS9adZv9O8HCqEhMIPmqH9Ct0ujhrs8jTPkevq.jpg", name: "gallery-5.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/sI6jaQTc623GX2drHdKhOMVliF7S8AzdzepPBgF0.jpg", name: "gallery-6.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/u2O5t3PqJULryT1uO7dm4uvwhvKDM1fripWsNNVs.jpg", name: "gallery-7.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/pY37LmOszEnWSQoCJhrYalchcWEW8g9OpDfkfMCV.jpg", name: "gallery-8.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/AE3YYi27mnRQOeuDuxHNbZ4pH6BpUHFYs9sHf8Rr.jpg", name: "gallery-9.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/1SaR1xgAUDTUDbWRj7jNhvqYp0rZVuDRqegjcVoS.jpg", name: "gallery-10.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/gallaries/IkuDna31JMYatrSVZIimrXd9JgsqQI31CGsYSZz6.jpg", name: "gallery-11.jpg" },

  // Floor Plans
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/knuj8WqwPsUvCFxmGpCdnrT5EhzOgb4C4uqxLN0q.jpg", name: "floor-1bed.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/5FM5pfQNPupfgR0c0Ik8bM8U34D2FJvaGHjNlqR3.jpg", name: "floor-2bed.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/ltxm9gLR7oP7svBxLoejnPWtsFCVJUmYewuStKcV.jpg", name: "floor-3bed.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/OnYh0HTPUU0AXZAPoO97jgUuM2YsYC9iu6tHd1Je.jpg", name: "floor-4bed.jpg" },
  { url: "https://www.hudayriyat-island.com/storage/communities/floor_plan/BBj0TsHF5sFTJj0tNpMo8l8NmYL0ioUPkE3qHSj6.jpg", name: "floor-penthouse.jpg" },

  // Master Plan
  { url: "https://www.hudayriyat-island.com/storage/communities/master_plan/3Lm3MzPKGStJaOBZDkyq6KPdI4oPJ3gPIzA0N8AA.jpg", name: "master-plan.jpg" },

  // Contact banner
  { url: "https://www.hudayriyat-island.com/storage/communities/email/qfbSBeDqof7VosmEcHC6rcceXnnm2MZnbTxIgLyS.png", name: "contact-banner.png" },
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'bashayer-residences');
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
