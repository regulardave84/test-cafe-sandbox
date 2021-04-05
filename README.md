# test-cafe-sandbox

A sandbox repo to play around with the features of Test Cafe using typescript.

# How To Run

Ensure that Node.js (https://nodejs.org/) and npm (https://www.npmjs.com/) 
are installed on your computer and run the following command in the root directory of this project.

npm install

Once Test Cafe is installed run the following command:

testcafe chrome

Tests will now run in the Chrome browser.

# Tests

The tests cover the functionality of this page: https://devexpress.github.io/testcafe/example/

# Config

This test suite is set to run against Prod by default.
To run in a different environment e.g. uat run the following command before running the tests:

On Windows:
set testEnv=uat

On Mac:
export testEnv=uat

Config files are in JSON and can be found under /config.

# Run Tests in Parallel

In order to run tests in parallel run the following command from the root directory:

ts-node ./runners/run-tests-in-parallel.ts

The tests will run in parallel based on the 'fixturesToRunInParallel' values in .testcaferc.json.

# Reports

Tests ran normally have a report created here: 

/reports/results.html

Tests ran in parallel have a report created for each fixture here: 

/reports/{date time}/{fixture name}_results.html

Tests that fail will have a screenshot present in the Error Details page to the right of the test name.

# Screenshots

Tests that fail have a screenshot automatically generated.  
These can be found here:

/screenshots/