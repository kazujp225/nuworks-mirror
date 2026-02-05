const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait a bit for animations
  await new Promise(resolve => setTimeout(resolve, 2000));

  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/screenshot.png', fullPage: false });

  console.log('Screenshot saved to /Users/a1/NUWORKS/mirror-site/public/screenshot.png');

  await browser.close();
})();
