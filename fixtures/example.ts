import { Config } from '../config/config';
import ExamplePage from '../pages/example-page';
import { ClientFunction } from 'testcafe';

const examplePage = new ExamplePage();
fixture`Getting Started`.page`${Config.baseUrl}/example`;

test('My first test', async t => {
    examplePage.enterTextInToYourNameTextField('John Smith');
    examplePage.clickSubmitButton();

    const currentPage = ClientFunction(() => document.location.href);
    await t
        .expect(currentPage()).eql(`${Config.baseUrl}/example/thank-you.html`);
});

// TODO: tests for Your name:
// TODO: tests for Which features are important to you





