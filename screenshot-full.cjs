const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for animations
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Scroll down to see more content
  await page.evaluate(() => window.scrollTo(0, 1000));
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/screenshot2.png', fullPage: false });

  // Scroll more
  await page.evaluate(() => window.scrollTo(0, 2500));
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/screenshot3.png', fullPage: false });

  console.log('Screenshots saved');

  await browser.close();
})();
