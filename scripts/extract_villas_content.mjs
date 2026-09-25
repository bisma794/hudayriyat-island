import fs from 'fs';

const html = fs.readFileSync('scripts/bashayer_villas_page.html', 'utf8');

// About section
console.log('--- About Section ---');
const aboutMatch = html.substring(html.indexOf('Bashayer Villas by Modon'), html.indexOf('Bashayer Villas Amenities'));
console.log(aboutMatch.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

// Amenities
console.log('\n--- Amenities ---');
const amenMatches = [...html.matchAll(/<div class="amenities-box"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"[\s\S]*?<h6>([\s\S]*?)<\/h6>/gi)];
for (const m of amenMatches) {
  console.log(m[2].trim(), '->', m[1]);
}

// Payment plan table
console.log('\n--- Payment Plan Rows ---');
const ppIdx = html.indexOf('Bashayer Villas Payment');
console.log(html.substring(ppIdx, ppIdx + 3000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

// Location
console.log('\n--- Location Accordions ---');
const locIdx = html.indexOf('Location & Attractions');
console.log(html.substring(locIdx, locIdx + 4000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

// FAQs
console.log('\n--- FAQs ---');
const faqItems = [...html.matchAll(/<div[^>]*class="[^"]*question[^"]*"[^>]*>([\s\S]*?)<i[\s\S]*?<\/div>\s*<div[^>]*class="collapse"[^>]*>([\s\S]*?)<\/div>/gi)];
for (const f of faqItems) {
  console.log('Q:', f[1].trim());
  console.log('A:', f[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}
