import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const ppIdx = html.indexOf('Nawayef East Hills Payment Plan');
console.log(html.substring(ppIdx + 1500, ppIdx + 4500));
