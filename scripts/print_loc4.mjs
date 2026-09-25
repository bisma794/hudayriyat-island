import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const locIdx = html.indexOf('Location & Attractions');
console.log(html.substring(locIdx + 4500, locIdx + 8000));
