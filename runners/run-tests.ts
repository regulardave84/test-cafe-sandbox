const createTestCafe = require('testcafe');

(async () => {
    const testCafe = await createTestCafe();

    const fixturePath = '../fixtures/';
    const browser = 'chrome';

    function createRunner(filename: string): any {
        return testCafe
            .createRunner()
            .src(fixturePath + filename)
            .browsers(browser);
    }

    var runners: any[] = [];

    var filenames: string[] =
        [
            'example.ts',
            'thank-you.ts'
        ];

    for (var i = 0; i < filenames.length; i++) {
        runners.push(createRunner(filenames[i]));
    } 

    await Promise.all(runners.map(runner => runner.run()));
    await testCafe.close();
})();