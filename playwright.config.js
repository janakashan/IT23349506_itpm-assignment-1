import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    headless: false,
    baseURL: 'https://www.swifttranslator.com/',
    viewport: { width: 1280, height: 720 }
  }
});
