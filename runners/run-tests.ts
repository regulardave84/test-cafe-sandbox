const createTestCafe = require('testcafe');

(async () => {
    const testCafe = await createTestCafe();

    const runner1 = testCafe
        .createRunner()
        .src(["fixtures/example.ts"]);

    const runner2 = testCafe
        .createRunner()
        .src(["fixtures/thank-you.ts"]);

    await Promise.all([runner1, runner2].map(runner => runner.run()));

    await testCafe.close();
})();