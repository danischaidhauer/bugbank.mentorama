const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    NODE_ENV: "test"
  },
  e2e: {
    baseUrl: "https://bugbank.netlify.app/",
    viewportHeight: 880,
    viewportWidth: 1280,
    defaultCommandTimeout: 1000,
    setupNodeEvents: (on, config) => {}
  },
  reporter: "mochawesome",
  reporterOptions: {
    reporterDir: "cypress/reports/mochawesome-reporter",
    overwrite: true,
    html: true,
    video: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  }
});