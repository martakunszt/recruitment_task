const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, 
  videoCompression: 32,
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false, 
  watchForFileChanges: false,
  viewportWidth: 1440, //default width
  viewportHeight: 900, //default height
  e2e: {
    setupNodeEvents(on, config) {
     
    },
  },
});
