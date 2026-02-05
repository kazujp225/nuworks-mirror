const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Take full page screenshot
  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/fullpage.png', fullPage: true });

  console.log('Full page screenshot saved');

  await browser.close();
})();
