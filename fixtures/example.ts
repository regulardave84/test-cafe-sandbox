import { Config } from '../config/config';
import ExamplePage from '../pages/example-page';
import ThankYouPage from '../pages/thank-you-page';
import BrowserUtils from '../utils/browser-utils';

const examplePage = new ExamplePage();
const thankYouPage = new ThankYouPage();
fixture`Getting Started`.page`${Config.baseUrl}/example`;

test('My first test', async t => {
    const name = 'Chris Davies'
    examplePage.enterTextInToYourNameTextField(name);
    examplePage.clickSubmitButton();
    
    await t.expect(BrowserUtils.getCurrentPage()).eql(`${Config.baseUrl}/example/thank-you.html`);
    await t.expect(await thankYouPage.getThankYouMessage()).eql(`Thank you, ${name}!`);
});

// TODO: tests for Which features are important to you





