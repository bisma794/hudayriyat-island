import fs from 'fs';

const html = fs.readFileSync('scripts/nawayef_page.html', 'utf8');

// Let's find amenities
const amenitySec = html.split(/Amenities/i)[1]?.split(/Gallery/i)[0] || '';
console.log('--- Amenities section HTML snippet ---');
console.log(amenitySec.substring(0, 1500));

// Let's find Floor plans section
const fpSec = html.split(/Floor Plans/i)[1]?.split(/Location/i)[0] || '';
console.log('--- Floor Plans section HTML snippet ---');
console.log(fpSec.substring(0, 2000));

// Let's find FAQs section
const faqSec = html.split(/FAQs/i)[1]?.split(/Similar Projects/i)[0] || '';
console.log('--- FAQs section HTML snippet ---');
console.log(faqSec.substring(0, 2500));

// Let's find Payment plan section
const ppSec = html.split(/Payment Plan/i)[1]?.split(/Payment Methods/i)[0] || '';
console.log('--- Payment Plan section HTML snippet ---');
console.log(ppSec.substring(0, 1500));
