import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

// Project highlights
console.log('--- Highlights ---');
const hlMatches = [...html.matchAll(/<div class="highlights-box[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<\/div>/gi)];
for (const m of hlMatches) {
  console.log(m[2].replace(/\s+/g, ' ').trim(), '->', m[1]);
}

// About / Description
console.log('\n--- About Text ---');
const aboutMatch = html.match(/<div class="section-title"[^>]*>[\s\S]*?<h2>Nawayef East Hills by Modon<\/h2>[\s\S]*?<\/div>[\s\S]*?<div class="col-lg-6[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
if (aboutMatch) {
  console.log(aboutMatch[1].replace(/<[^>]+>/g, '').trim());
}

// Amenities list
console.log('\n--- Amenities ---');
const amenMatches = [...html.matchAll(/<div class="amenities-box"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"[\s\S]*?<h6>([\s\S]*?)<\/h6>/gi)];
for (const m of amenMatches) {
  console.log(m[2].trim(), '->', m[1]);
}

// Article text
console.log('\n--- Article Content ---');
const artMatch = html.match(/<div class="project-details-text"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/i) || html.match(/<h2>Nawayef East Hills by Modon &ndash; Luxury Living[\s\S]*?<\/section>/i);
if (artMatch) {
  console.log(artMatch[0].substring(0, 1500));
}

// Payment Plan
console.log('\n--- Payment Plan Items ---');
const ppItems = [...html.matchAll(/<div class="payment-plan-box[^"]*"[^>]*>[\s\S]*?<h1>([\s\S]*?)<\/h1>[\s\S]*?<h4>([\s\S]*?)<\/h4>[\s\S]*?<h6>([\s\S]*?)<\/h6>/gi)];
for (const m of ppItems) {
  console.log(m[1].trim(), '-', m[2].trim(), '-', m[3].trim());
}

// Floor Plans
console.log('\n--- Floor Plan items ---');
const fpList = [...html.matchAll(/<div class="tab-pane[^"]*" id="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
console.log('Floor plans found count:', fpList.length);

// FAQs
console.log('\n--- FAQs List ---');
const faqItems = [...html.matchAll(/<div[^>]*class="[^"]*question[^"]*"[^>]*>([\s\S]*?)<i[\s\S]*?<\/div>\s*<div[^>]*class="collapse"[^>]*>([\s\S]*?)<\/div>/gi)];
for (const f of faqItems) {
  console.log('Q:', f[1].trim());
  console.log('A:', f[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}
