const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Original site - scroll through the page
  console.log('Taking original site screenshots with scroll...');
  await page.goto('https://www.nuworks.site/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(resolve => setTimeout(resolve, 6000));

  // Scroll to trigger animations
  for (let i = 0; i < 10; i++) {
    await page.evaluate((i) => window.scrollTo(0, i * 800), i);
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/original_top.png' });

  await page.evaluate(() => window.scrollTo(0, 1500));
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/original_service.png' });

  await page.evaluate(() => window.scrollTo(0, 3500));
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/original_about.png' });

  // Mirror site
  console.log('Taking mirror site screenshots...');
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/mirror_top.png' });

  await page.evaluate(() => window.scrollTo(0, 1500));
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/mirror_service.png' });

  await page.evaluate(() => window.scrollTo(0, 3500));
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ path: '/Users/a1/NUWORKS/mirror-site/public/mirror_about.png' });

  console.log('All screenshots saved');
  await browser.close();
})();
