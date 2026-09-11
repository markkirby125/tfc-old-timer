const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('main/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const desktopNav = document.querySelector('nav.hidden.md\\:flex');
console.log("Desktop nav found?", !!desktopNav);
if (desktopNav) {
    console.log("Desktop nav classes:", desktopNav.className);
}

const mobileNav = document.getElementById('mobile-menu');
console.log("Mobile nav found?", !!mobileNav);
