import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

// Search for Payment Plan
const ppSection = html.substring(html.indexOf('Payment Plan'), html.indexOf('Payment Methods'));
console.log('--- Payment Plan HTML ---');
console.log(ppSection);

// Search for Floor Plans
const fpSection = html.substring(html.indexOf('Floor Plans'), html.indexOf('Location'));
console.log('\n--- Floor Plans HTML ---');
console.log(fpSection);

// Search for Project Overview / Article
const artSection = html.substring(html.indexOf('Nawayef East Hills by Modon &ndash; Luxury Living'), html.indexOf('Payment Plan'));
console.log('\n--- Article HTML (length) ---', artSection.length);
fs.writeFileSync('scripts/nawayef_article.html', artSection);

// Search for About section text
const aboutSec = html.substring(html.indexOf('Nawayef East Hills by Modon'), html.indexOf('Amenities'));
console.log('\n--- About Section HTML ---');
console.log(aboutSec);
