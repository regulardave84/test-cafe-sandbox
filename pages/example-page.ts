import { Selector, t } from 'testcafe';

export default class ExamplePage {
    yourNameTextField: Selector;
    submitButton: Selector;
    supportForTestingLabel: Selector;
    supportForTestingCheckbox: Selector;

    constructor() {
        this.yourNameTextField = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
        this.supportForTestingLabel = Selector('label').withAttribute('for', 'remote-testing');
        this.supportForTestingCheckbox = Selector('#remote-testing');
    }

    async enterTextInToYourNameTextField(text: string) {
        await t.typeText(this.yourNameTextField, text);
    }

    async clickSubmitButton() {
        await t.click(this.submitButton);
    }

    async checkSupportForTextCheckbox() {
        await t.click(this.supportForTestingLabel);
    }

    isCheckSupportForTextCheckboxChecked() {
        return this.supportForTestingCheckbox.checked;
    }

}
