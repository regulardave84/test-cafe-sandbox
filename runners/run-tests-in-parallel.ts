import * as config from '../.testcaferc.json';

const createTestCafe = require('testcafe');

(async () => {
    const testCafe = await createTestCafe();
    // colons are replaced to allow this to be valid as part of a folder name
    const date = new Date().toISOString().replace(/:/g, '.');

    function createRunner(fixtureName: string): any {
        return testCafe
            .createRunner()
            .src(config.src)
            .browsers(config.browsers)
            .filter((_testName: null,
                _fixtureName: null,
                _fixturePath: null,
                _testMeta: null,
                fixtureMeta: any) => {
                return fixtureMeta.name === fixtureName;
            })
            .reporter([
                {
                    "name": "html",
                    "output": `./reports/${date}/${fixtureName}_results.html`
                }
            ])
            .screenshots(config.screenshots)   
    }       

    const fixtureNames: string[] = config.fixturesToRunInParallel;

    var runners: any[] = [];
    for (var i = 0; i < fixtureNames.length; i++) {
        runners.push(createRunner(fixtureNames[i]));
    }

    const results = await Promise.all(runners.map(runner => runner.run()));
    await testCafe.close();

    // Add together the failures from each runner
    var failures = results.reduce((a, b) => a + b);
    console.log('-----------------------------------------------');
    console.log(`Number of failures: ${failures}`);
    console.log(`Reports can be found in /reports/${date}/`);
    console.log('-----------------------------------------------');
})();