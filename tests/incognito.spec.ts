import { test, chromium } from '@playwright/test';

test('Open Chrome in incognito mode', async () => {
  // Launch Chrome browser
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false
  });

  // Create a new incognito browser context
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Navigate to a website
  await page.goto('https://www.saucedemo.com/');

  // Add a wait to see the result (optional)
  await page.waitForTimeout(5000);

  // Close browser
  await browser.close();
});