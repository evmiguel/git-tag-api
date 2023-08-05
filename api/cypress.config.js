const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "specPattern": "tests/cypress/integration/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    "screenshotOnRunFailure": false,
    "video": false
  }
});
