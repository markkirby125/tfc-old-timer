const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://gettfc.download/', { waitUntil: 'networkidle0' });
    
    const themeSwitcher = await page.evaluate(() => {
      const desktopNav = document.getElementById('desktop-nav');
      if (!desktopNav) return "Desktop nav NOT found";
      return desktopNav.innerHTML;
    });
    
    console.log("Desktop Nav HTML:\\n", themeSwitcher);
    
    const mobileMenu = await page.evaluate(() => {
      const el = document.getElementById('mobile-menu');
      if (!el) return "Mobile menu NOT found";
      return el.innerHTML;
    });
    
    console.log("Mobile Nav HTML:\\n", mobileMenu);
    
    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
