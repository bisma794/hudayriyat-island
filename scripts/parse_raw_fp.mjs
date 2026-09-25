import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const fpStart = html.indexOf('id="floor"');
if (fpStart !== -1) {
  console.log(html.substring(fpStart, fpStart + 4000));
}

// Also check payment plan items
const ppStart = html.indexOf('id="payment_plan"');
if (ppStart !== -1) {
  console.log('--- Payment Plan ---');
  console.log(html.substring(ppStart, ppStart + 3000));
}
