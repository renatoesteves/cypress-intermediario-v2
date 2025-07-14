const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost",
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  projectId: "5oyk7q",
  fixturesFolder: false,
  video: false,
});
