import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

// Payment Plan items
const ppBlock = html.substring(html.indexOf('id="payment_plan"'), html.indexOf('id="payment"'));
const ppItems = [...ppBlock.matchAll(/<div class="payment-plan-box[^"]*"[^>]*>[\s\S]*?<h1>([\s\S]*?)<\/h1>[\s\S]*?<h4>([\s\S]*?)<\/h4>[\s\S]*?<h6>([\s\S]*?)<\/h6>/gi)];
console.log('Payment Plan Items:');
for (const p of ppItems) {
  console.log(`- ${p[1].trim()} | ${p[2].trim()} | ${p[3].trim()}`);
}

// Floor Plans
const fpBlock = html.substring(html.indexOf('id="floor"'), html.indexOf('id="location"'));
const tabLinks = [...fpBlock.matchAll(/<a[^>]*class="[^"]*nav-link[^"]*"[^>]*href="#([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
console.log('\nFloor Plan Tabs:');
for (const t of tabLinks) {
  console.log(`Tab id: ${t[1]} -> ${t[2].replace(/<[^>]+>/g, '').trim()}`);
}

const tabPanes = [...fpBlock.matchAll(/<div class="tab-pane[^"]*" id="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
console.log('\nFloor Plan Panes:');
for (const p of tabPanes) {
  const title = p[2].match(/<h2>([\s\S]*?)<\/h2>/i)?.[1]?.trim() || '';
  const img = p[2].match(/<img[^>]*src="([^"]+)"/i)?.[1] || '';
  const rows = [...p[2].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`ID: ${p[1]} | Title: ${title} | Img: ${img} | Info: ${rows.join(' | ')}`);
}
