import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const locIdx = html.indexOf('Location & Attractions');
if (locIdx !== -1) {
  console.log(html.substring(locIdx - 100, locIdx + 3500));
}
