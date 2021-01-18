# test-cafe-sandbox

A sandbox repo to play around with the features of test cafe.

# How To Run

Ensure that Node.js (https://nodejs.org/) and npm (https://www.npmjs.com/) 
are installed on your computer and run the following command:

npm install -g testcafe

Install the Test Cafe HTML Reporter:

npm install -g testcafe-reporter-html

Once Test Cafe is installed run the following command:

testcafe chrome example.js.

Tests will now run using Chrome.

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

# Reports

Test reports can be found in /reports/results.html.