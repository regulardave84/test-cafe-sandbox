import { Selector, t } from 'testcafe';

class ExamplePage {
    constructor () {
        this.yourNameTextField = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }

    async enterTextInToYourNameTextField (text) {
        await t.typeText(this.yourNameTextField, text);
    }

    async clickSubmitButton() {
        await t.click(this.submitButton);
    }
}

export default new ExamplePage();