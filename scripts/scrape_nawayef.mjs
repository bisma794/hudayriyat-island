import fs from 'fs';
import path from 'path';
import https from 'https';

async function main() {
  const res = await fetch('https://www.hudayriyat-island.com/nawayef-east-hills');
  const html = await res.text();
  
  const matches = [...html.matchAll(/https:\/\/www\.hudayriyat-island\.com\/storage\/[^\s"'()><\\]+/g)].map(m => m[0]);
  const uniqueUrls = [...new Set(matches)];
  console.log(`Found ${uniqueUrls.length} unique storage URLs`);
  console.log(JSON.stringify(uniqueUrls, null, 2));

  // Save html for text extraction
  fs.writeFileSync('scripts/nawayef_page.html', html);
}

main().catch(console.error);
