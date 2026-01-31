import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test('Neg_Fun_0001 – Missing spaces (Stress Test)', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('mamagedharayanavaa');

  await expect(output).not.toContainText('මමගෙදරයනවා');
});


test('Neg_Fun_0002 – Missing spaces in phrase', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('mamagedharayanavaa');

  await expect(output).not.toContainText('මටපාන්කන්නඕනේ');
});

test('Neg_Fun_0003 – Slang causing incorrect conversion', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('adoo vaedak baaragaththaanam eeka hariyata karapanko bQ.');

  await expect(output).not.toContainText('අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බQ.');
});

test('Neg_Fun_0004 – Typo in standard word', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('appatasiri, mata beheth bonna amathaka vunaa kiyahankoo.');

  await expect(output).not.toContainText('අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුනා කියහණ්ඛෝ.');
});

test('Neg_Fun_0005 – Mixed English with no spaces', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('Trykharanda');

  await expect(output).not.toContainText('ඨ්‍රය්කරන්ඩ');
});

test('Neg_Fun_0006 –Convert sentence containing chemical element name', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('hydrogen gas eka vathura hadhanna avashYAya .');

  await expect(output).not.toContainText('hydrogen gas එක වතුර හදන්න අවශ්‍යය');
});


test('Neg_Fun_0007 –Compound sentence with conjunction', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('api kaeema kanna yanavaa iita passe chithrapatayakuth balanavaa');

  await expect(output).toContainText('අපි කෑම කන්න යනවා ඊට පස්සේ චිත්‍රපටයකුත් බලනවා');
});

test('Neg_Fun_0008–Request with politeness', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('puLuvannam mata eeka evanna');

  await expect(output).toContainText('පුළුවන් නම් මට ඒක එවන්න.');
});
test('Neg_Fun_0009 –Mixed English word (Place)', async ({ page }) => {
  const input = page.locator('textarea').first();
  const output = page.locator('div.whitespace-pre-wrap').first();

  await input.fill('siiyaa Colombo yanna hadhannee.');

  await expect(output).toContainText('සීයයා Colombo යන්න හදන්නේ.');

});
