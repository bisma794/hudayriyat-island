import fs from 'fs';

async function main() {
  const res = await fetch('https://www.hudayriyat-island.com/bashayer-villas');
  const html = await res.text();
  
  const matches = [...html.matchAll(/https:\/\/www\.hudayriyat-island\.com\/storage\/[^\s"'()><\\]+/g)].map(m => m[0]);
  const uniqueUrls = [...new Set(matches)];
  console.log(`Found ${uniqueUrls.length} unique storage URLs for Bashayer Villas`);
  console.log(JSON.stringify(uniqueUrls, null, 2));

  fs.writeFileSync('scripts/bashayer_villas_page.html', html);
}

main().catch(console.error);
