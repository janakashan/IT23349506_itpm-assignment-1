import { test, expect } from '@playwright/test';

test('Pos_UI_0001 – Real-time output update', async ({ page }) => {
  await page.goto('/');

  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.type('mama');
  await expect(output).not.toBeEmpty();

  await input.type(' gedhara yanavaa');
  await expect(output).toContainText('ගෙදර');
});
