import fs from 'fs';

const html = fs.readFileSync('scripts/bashayer_villas_page.html', 'utf8');

// Amenities
const amenBlock = html.substring(html.indexOf('Bashayer Villas Amenities'), html.indexOf('Bashayer Villas Gallery'));
console.log('--- Amenities HTML ---');
console.log(amenBlock);

// Payment Plan
const ppBlock = html.substring(html.indexOf('Bashayer Villas Payment Plans'), html.indexOf('Bashayer Villas Payment Methods'));
console.log('\n--- Payment Plan HTML ---');
console.log(ppBlock);

// Article
const artBlock = html.substring(html.indexOf('Bashayer Villas – Premium Waterfront Villas'), html.indexOf('Bashayer Villas Payment Plans'));
console.log('\n--- Article HTML (length) ---', artBlock.length);
fs.writeFileSync('scripts/villas_article.html', artBlock);
