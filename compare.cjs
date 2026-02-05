const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Original site
  console.log('Taking original site screenshot...');
  await page.goto('https://www.nuworks.site/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(resolve => setTimeout(resolve, 6000)); // Wait for loading animation
  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/original.png', fullPage: true });

  // Mirror site
  console.log('Taking mirror site screenshot...');
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 2000));
  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/mirror.png', fullPage: true });

  console.log('Screenshots saved');
  await browser.close();
})();
