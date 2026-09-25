import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

// Floor plans
const fpItems = [...html.matchAll(/<div class="carousel-item[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/gi)];
console.log('--- Floor Plans ---');
for (let i = 0; i < fpItems.length; i++) {
  const item = fpItems[i][0];
  const title = item.match(/<h[24][^>]*>(.*?)<\/h[24]>/i)?.[1]?.trim() || '';
  const desc = item.match(/<p>(.*?)<\/p>/i)?.[1]?.trim() || '';
  const img = item.match(/<img[^>]*src="([^"]+)"/i)?.[1] || '';
  console.log(`Plan #${i + 1}: ${title}`);
  console.log(`Desc: ${desc}`);
  console.log(`Img: ${img}`);
}

// Payment plan milestones
console.log('\n--- Payment Plan Milestones ---');
const ppBlock = html.substring(html.indexOf('id="payment_plan"'), html.indexOf('id="payment"'));
const ppMatches = [...ppBlock.matchAll(/<h1>(.*?)<\/h1>[\s\S]*?<h4>(.*?)<\/h4>[\s\S]*?<h6>(.*?)<\/h6>/gi)];
for (const p of ppMatches) {
  console.log(`Percent: ${p[1].trim()} | Milestone: ${p[2].trim()} | Date: ${p[3].trim()}`);
}
