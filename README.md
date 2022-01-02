# test-cafe-sandbox

A sandbox repo to play around with the features of Test Cafe using Typescript.

# How To Run

Ensure that Node.js (https://nodejs.org/) and npm (https://www.npmjs.com/) 
are installed on your computer and run the following command in the root directory of this project.

`npm install`

Once Test Cafe is installed run the following command:

`testcafe chrome`

Tests will now run in the Chrome browser.

# How to Run In Parallel

To run the tests in parallel add the '-c 2' command to run the tests concurrently in 2 browsers.
E.g.

`testcafe chrome -c 2`

# Tests

The tests cover the functionality of this page: https://devexpress.github.io/testcafe/example/ using the
Lean Page Object model: https://johnfergusonsmart.com/page-objects-that-suck-less-tips-for-writing-more-maintainable-page-objects/

# Config

This test suite is set to run against Prod by default.
To run in a different environment e.g. uat run the following command before running the tests:

On Windows:
`set testEnv=uat`

On Mac:
`export testEnv=uat`

Config files are in JSON and can be found under /config.

# Reports

Tests ran normally have a report created here: 

/reports/results.html

Tests that fail will have a screenshot present in the Error Details page to the right of the test name.

# Screenshots

Tests that fail have a screenshot automatically generated.  
These can be found here:

/screenshots/