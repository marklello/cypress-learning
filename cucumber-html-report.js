import { generate } from "multiple-cucumber-html-reporter";

generate({
  jsonDir: "cypress/test-results/cucumber-json/",
  reportPath: "cypress/cucumber-html-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "115",
    },
    device: "Local test machine",
    platform: {
      name: "Mac",
      version: "13.0.1",
    },
  },
  customData: {
    title: "Cypress Cucumber Project - CosMcs",
    data: [
      { label: "Project", value: "CosMcs" },
      { label: "Release", value: "1.0" },
      { label: "Cycle", value: "MVP" },
      { label: "Execution Start Time", value: "August 2023" },
      { label: "Execution End Time", value: "March 2024" },
    ],
  },
});