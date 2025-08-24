import { defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv";
dotenv.config();


export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.ts'],
  outputDir: 'test-results',
  timeout: 60000, 
  expect: {
    timeout: 10000
  },
  
  fullyParallel: false,
  
  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 3 : 2,
 
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html',{ open: 'always'}], ['list'], ['dot']],
  
  use: {
    baseURL: process.env.BASE_URL ?? 'https://www.advantageonlineshopping.com',
    trace: 'on'
  },

  
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: false,
        screenshot: 'only-on-failure'
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
