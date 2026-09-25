import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const ppIdx = html.indexOf('payment_plan');
if (ppIdx !== -1) {
  console.log(html.substring(ppIdx - 50, ppIdx + 3000));
}
