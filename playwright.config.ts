import { defineConfig, devices } from '@playwright/test';
import type { EyesFixture } from '@applitools/eyes-playwright/types/fixture';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<EyesFixture>({
  testDir: './tests',
  retries: 0,
  workers: 5,
  use: {
    /* Configuration for Eyes VisualAI */
    eyesConfig: {
      serverUrl: 'https://nsceyes.applitools.com/',
      appName: 'Example'
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
