import { Selector, t } from 'testcafe';

export default class ExamplePage {
    yourNameTextField: any;
    submitButton: any;

    constructor () {
        this.yourNameTextField = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }

    async enterTextInToYourNameTextField(text: string) {
        await t.typeText(this.yourNameTextField, text);
    }

    async clickSubmitButton() {
        await t.click(this.submitButton);
    }
}
