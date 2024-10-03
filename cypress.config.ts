const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
//import "cypress-cucumber-attach-screenshots-to-failed-steps";

module.exports = defineConfig({
  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    step_definitions: './cypress/e2e/stepDefinitions/*_stepDef.ts',

  },
  experimentalWebKitSupport: true,
  video: true,
  projectId: 'jk7zr1',
  // https://docs.cypress.io/guides/guides/web-security
  // https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://hauch.org/',
    defaultCommandTimeout: 15000,
    trashAssetsBeforeRuns: true,
    // The quality setting for the video compression, in Constant Rate Factor (CRF). 
    // The value can be false or 0 to disable compression or a CRF between 1 and 51, 
    // where a lower value results in better quality (at the expense of a higher file size). 
    // Setting this option to true will result in a default CRF of 32.
    videoCompression: true,
    setupNodeEvents(on, config) {
      // const cucumber = require('cypress-cucumber-preprocessor').default
      // const browserify = require('@cypress/browserify-preprocessor');
      // const options = {
      //   ...browserify.defaultOptions,
      //   typescript: require.resolve('typescript'),
      // };
      // on('file:preprocessor', cucumber(options));
      return config;
    },
    supportFile: false,
    specPattern: "cypress/e2e/**/*.feature",
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    retries: 4
  },
});