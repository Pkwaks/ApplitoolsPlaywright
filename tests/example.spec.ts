import { test } from '@applitools/eyes-playwright/fixture';
import { expect } from '@playwright/test';

test('Example', async ({ page, eyes }) => {
  const response = await page.goto('https://playwright.dev/');
  expect(response?.status()).toBe(200);
  await page.waitForSelector('html');
  await eyes.check();
});