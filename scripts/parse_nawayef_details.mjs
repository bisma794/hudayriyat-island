import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

console.log('--- Page Titles & Sections ---');
const hTags = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({
  tag: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim()
}));
console.log(JSON.stringify(hTags, null, 2));

// Amenities
console.log('\n--- Amenities ---');
const amenityMatches = [...html.matchAll(/<div[^>]*class="[^"]*amenity[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
console.log('Amenities count:', amenityMatches.length);

// Floor plans
console.log('\n--- Floor Plans ---');
const fpBlocks = [...html.matchAll(/<div[^>]*class="[^"]*floor-plan[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
console.log('Floor plans blocks:', fpBlocks.length);

// Payment Plan
console.log('\n--- Payment Plan text ---');
const paymentMatches = [...html.matchAll(/(\d+%\s*[-–]\s*[^<\n]+)/gi)].map(m => m[0]);
console.log('Payment items:', paymentMatches);

// FAQs
console.log('\n--- FAQs ---');
const accordionMatches = [...html.matchAll(/<button[^>]*class="[^"]*accordion[^"]*"[^>]*>([\s\S]*?)<\/button>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('FAQs:', accordionMatches);
