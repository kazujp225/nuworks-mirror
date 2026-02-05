const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Mirror site - find the service section
  console.log('Taking mirror site screenshots at different scroll positions...');
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Get page height
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Page height:', pageHeight);

  // Take screenshots at different positions
  const positions = [0, 1000, 2000, 3000, 4000, 5000];
  for (const pos of positions) {
    await page.evaluate((p) => window.scrollTo(0, p), pos);
    await new Promise(resolve => setTimeout(resolve, 300));
    await page.screenshot({ path: `/Users/a1/NUWORKS/mirror-site/public/mirror_${pos}.png` });
    console.log(`Screenshot at ${pos}px saved`);
  }

  console.log('All screenshots saved');
  await browser.close();
})();
