import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

const ppIdx = html.indexOf('Nawayef East Hills Payment Plan');
const tableRows = [...html.substring(ppIdx, ppIdx + 3000).matchAll(/<tr>[\s\S]*?<td>(.*?)<\/td>[\s\S]*?<td>(.*?)<\/td>[\s\S]*?<td>(.*?)<\/td>[\s\S]*?<\/tr>/gi)];
for (const r of tableRows) {
  console.log(`- ${r[1].trim()} | ${r[2].trim()} | ${r[3].trim()}`);
}
