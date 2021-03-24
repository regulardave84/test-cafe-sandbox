import * as config from '../.testcaferc.json';

const createTestCafe = require('testcafe');

(async () => {
    const testCafe = await createTestCafe();
    const browser = config.browsers;

    function createRunner(metaName: string): any {
        return testCafe
            .createRunner()
            .src('.' + config.src)
            .filter((_testName: null,
                _fixtureName: null,
                _fixturePath: null,
                _testMeta: null,
                fixtureMeta: any) => {
                return fixtureMeta.name === metaName;
            })
            .browsers(browser);
    }       

    var metaNames: string[] = config.metaNamesToRunInParallel;

    var runners: any[] = [];
    for (var i = 0; i < metaNames.length; i++) {
        runners.push(createRunner(metaNames[i]));
    }

    await Promise.all(runners.map(runner => runner.run()));
    await testCafe.close();
})();