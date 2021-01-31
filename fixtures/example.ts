import { Config } from '../config/config';
import ExamplePage from '../pages/example-page';
import BrowserUtils from '../utils/browser-utils';

const examplePage = new ExamplePage();
fixture`Getting Started`.page`${Config.baseUrl}/example`;

test('My first test', async t => {
    examplePage.enterTextInToYourNameTextField('John Smith');
    examplePage.clickSubmitButton();

    
    await t
        .expect(BrowserUtils.getCurrentPage()).eql(`${Config.baseUrl}/example/thank-you.html`);
});

// TODO: check changes work on my work Mac, merge in branches to main
// TODO: create a new branch for tests for example page
// TODO: tests for Your name:
// TODO: tests for Which features are important to you





