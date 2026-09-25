import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const ppIdx = html.indexOf('Nawayef East Hills Payment Plan');
if (ppIdx !== -1) {
  console.log(html.substring(ppIdx, ppIdx + 3000));
}
