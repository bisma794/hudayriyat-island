import fs from 'fs';

const html = fs.readFileSync('scripts/bashayer_villas_page.html', 'utf8');

const locIdx = html.indexOf('Hospitals');
console.log(html.substring(locIdx, locIdx + 2000));
