import { defineConfig, devices } from '@playwright/test';
import type { EyesFixture } from '@applitools/eyes-playwright/types/fixture';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<EyesFixture>({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 5 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [
  //   ['@applitools/eyes-playwright/reporter', { open: 'never' }],
  //   ['junit', { outputFile: '../../playwright-report/report.xml' }]
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Configuration for Eyes VisualAI */
    eyesConfig: {
      serverUrl: 'https://nsceyes.applitools.com/',
      failTestsOnDiff: 'afterEach',
      appName: 'CMS Frontend',
      matchLevel: 'Strict',
      layoutBreakpoints: [320, 480, 740, 980, 1300],
      branchName: "testBranch",
      testConcurrency: 75,
      saveNewTests: false,
      type: 'ufg',
      waitBeforeCapture: 1000
    },

    baseURL: process.env.BASE_URL,
    navigationTimeout: 30000,
    trace: {
      mode: 'retain-on-failure'
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'test',
      use: {
        eyesConfig: {
          browsersInfo: [
            { name: 'edgechromium', width: 320, height: 480 }
          ]
        },
        ...devices['Desktop Edge'],
        channel: 'msedge'
      }
    }
  ]

});
