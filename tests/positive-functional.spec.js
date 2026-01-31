import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Pos_Fun_0001 – Simple sentence conversion', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('api paasal yanavaa.');

  await expect(output).toContainText('අපි පාසල් යනවා.');
});





test('Pos_Fun_0004 –Interrogative form conversion', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('oyaata kohomadha?');

  await expect(output).toContainText('ඔයාට කොහොමද?');
});


test('Pos_Fun_0005 –Imperative form (command)', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('vahaama enna.');

  await expect(output).toContainText('වහාම එන්න');
});

test('Pos_Fun_0006 –Negative sentence form', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('mama ehema karannee naehae.');

  await expect(output).toContainText('මම එහෙම කරන්නේ නැහැ.');
});

test('Pos_Fun_0007 –Polite request phrasing', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('karuNaakaralaa eeka poddak balanna');

  await expect(output).toContainText('කරුණාකරලා ඒක පොඩ්ඩක් බලන්න');
});

test('Pos_Fun_0008 –Tense variation: Past', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('mama iiyee gedhara giyaa');

  await expect(output).toContainText('මම ඊයේ ගෙදර ගියා');
});

test('Pos_Fun_0009 –Tense variation: Past', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('mama heta enavaa.');

  await expect(output).toContainText('මම හෙට එනවා.');
});

test('Pos_Fun_0010 –Plural pronoun variation', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('oyaalaa enavadha?');

  await expect(output).toContainText('ඔයාලා එනවාද?');
});

test('Pos_Fun_0011 –Technical terms in sentence', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('Zoom meeting ekak thiyennee');

  await expect(output).toContainText('Zoom meeting එකක් තියෙන්නේ');
});

test('Pos_Fun_0012 –English abbreviations (ID/NIC)', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('magee NIC eka dhenna.');

  await expect(output).toContainText('මගේ NIC එක දෙන්න.');
});

test('Pos_Fun_0013 –Currency and numbers', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('Rs. 5000 dhenna.');

  await expect(output).toContainText('Rs. 5000 දෙන්න.');
});

test('Pos_Fun_0014 –Time format conversion', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('7.30 AM vunaa.');

  await expect(output).toContainText('7.30 AM වුනා');
});

test('Pos_Fun_0015 –Date format preservation', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('25/12/2025 heta.');

  await expect(output).toContainText('25/12/2025 හෙට.');
});

test('Pos_Fun_0016 –Measurement units', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('100 ml dhenna.');

  await expect(output).toContainText('100 ml දෙන්න.');
});

test('Pos_Fun_0017 –Mixed English word (Place)', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('siiyaa Colombo yanna hadhannee.');

  await expect(output).toContainText('සීයා Colombo යන්න හදන්නේ.');
});

test('Pos_Fun_0018 –Repeated words for emphasis', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('hari hari api yamu.');

  await expect(output).toContainText('හරි හරි අපි යමු.');
});

test('Pos_Fun_0019–Long paragraph input', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('hari hari api yamu.');

  await expect(output).toContainText('හරි හරි අපි යමු.');
});

test('Pos_Fun_0020–Pronoun variation (First Person)', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('mama yanna hadhannee.');

  await expect(output).toContainText('මම යන්න හදන්නේ.');
});

test('Pos_Fun_0021–Request with politeness', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('puLuvan nam mata eeka evanna');

  await expect(output).toContainText('පුළුවන් නම් මට ඒක එවන්න');
});

test('Pos_Fun_0022–Request with politeness', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('puLuvan nam mata eeka evanna');

  await expect(output).toContainText('පුළුවන් නම් මට ඒක එවන්න');
});

test('Pos_Fun_0023 –Complex sentence with condition', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('oyaa enavaanam mama balan innavaa..');

  await expect(output).toContainText('ඔයා එනවානම් මම බලන් ඉන්නවා.');
});