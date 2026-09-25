import fs from 'fs';

const html = fs.readFileSync('scripts/bashayer_villas_page.html', 'utf8');

console.log('--- Page Headings ---');
const hTags = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({
  tag: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim()
}));
console.log(JSON.stringify(hTags, null, 2));

// Floor plans
console.log('\n--- Floor plans section ---');
const fpBlock = html.substring(html.indexOf('id="floor"'), html.indexOf('id="location"'));
console.log(fpBlock.substring(0, 3000));

// Payment plan
console.log('\n--- Payment plan section ---');
const ppBlock = html.substring(html.indexOf('id="payment_plan"'), html.indexOf('id="payment"'));
console.log(ppBlock.substring(0, 3000));
