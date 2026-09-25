import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const locIdx = html.indexOf('id="location"');
if (locIdx !== -1) {
  console.log(html.substring(locIdx, locIdx + 4000));
}
