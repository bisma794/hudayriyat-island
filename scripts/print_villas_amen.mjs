import fs from 'fs';

const html = fs.readFileSync('scripts/bashayer_villas_page.html', 'utf8');

const amenBlock = html.substring(html.indexOf('Bashayer Villas Amenities'), html.indexOf('Bashayer Villas Gallery'));
console.log(amenBlock);
