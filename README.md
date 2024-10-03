### moab-cypress-ui-automation
## Welcome to the MOAB Cypress Web Automation Project!

## Cypress Setup ():
To get started with setting Cypress up, follow the below steps:
https://docs.cypress.io/guides/getting-started/installing-cypress

## Cucumber (https://cucumber.io/)
- On this project we write both our manual tests (Zephyr) and our automated tests using Gherkin language to provide consistency and make our tests formatted in a more easily understandable manner
- Gherkin languge follows the Given, When, Then format and logic

## Resuable Artifacts and Concepts Accellerator Points
1. Integration of cypress with cucumber framework
2. Examples of how scenario outlines can work for web desktop, tablet, and mobile views
3. Examples of storing values and reusing them between step definitions
4. Reporting integrations
5. Config

# Installation Prerequisites:
- Node.js 16.x +

# Install via npm:
**NOTE**: Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.
- `cd /your/project/path`
- `npm install` to install all the necessary dev dependency packages


## Running Cypress (https://docs.cypress.io/guides/getting-started/opening-the-app):
1. You can open the Cypress interface by running **npx cypress open** from the command line within your project root folder
2. You can run Cypress headless from the CLI by executing **npm run test** from your project root folder
**NOTE**: The tests are currently run on the local machine and will be integrated into the CI/CD pipeline in future

3. Running cypress tests based on env
Leverage scripts to run tests in env: 
prod: `npm run runprod` (currently run against QA since Prod env is still in progress)
staging: `npm run runstaging` (currently run against QA since Prod env is still in progress)
qa: `npm run runqa`
dev2: `npm run rundev2` 
dev1: `npm run rundev1` 
local: `npm run runlocal` 

4. Running cypress tests with the purpose to record a video of the execution
Use `npx cypress run`
Once the test execution has completed the results will be under the cypress/videos directory

`npm run test` runs the tests against QA by default

5. Running cypress tests headless and specifying a specific browser
`npx cypress run --headless --browser chrome`
`npx cypress run --headless --browser edge`
`npx cypress run --headless --browser electron`
`npx cypress run --headless --browser firefox` 

6. To Run Cypress tests in browserstack
- Create a .env file and add your browserstack values
```
BROWSERSTACK_USERNAME=<>
BROWSERSTACK_ACCESS_KEY=<>
```
`npm run browserstack`

You can view the test results in the browserstack dashboard

7. Running cypress tests to be recorded in cypress cloud

Using the below command will log all of the results into our cypress cloud analytics dashboard for review and reference.

`npx cypress run --record --key fcd6aaf0-47c7-433f-9c1a-d3ea99ff9002`

8. To run specific feature files or scenarios, simply use or add "@tagName"

To execute specific tags use the command such as `npx cypress run --env TAGS="@careers"`

To execute a tag so it is recorded on the cypress cloud, simply add the record key command `npx cypress run --env TAGS="@careers" --record --key fcd6aaf0-47c7-433f-9c1a-d3ea99ff9002`

## Working with iframes
- Cypress cannot directly interact with iframes with its builtin commands. To workaround this limitation we have decided to use some custom code to interact with the iframes.
- We also cannot control the elements within the iframes, so we must use what they already possess
- Additionally, we have imported the cypress-iframe library which is a tool that we can utilize in the future should we choose to. The reason we currently chose to use the custom solution is based on our past experience with open libraries not being maintained which ultimately are less reliable in the long run. To see more info on the library check out their page https://www.npmjs.com/package/cypress-iframe. 