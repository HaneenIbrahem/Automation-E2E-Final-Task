const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: "cypress/support/commands.ts",
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
            return config;
    },
    execTimeout: 1200000,
    env: {
      snapshotOnly: true,
      allureReuseAfterSpec: true,
      download_dir: "./cypress/downloads",
    },
    allureResultsPath: "allure-results",
    allure:true,
    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
