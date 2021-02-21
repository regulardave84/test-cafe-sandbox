import { Selector, t } from 'testcafe';

export default class ExamplePage {
    yourNameTextField: Selector;
    submitButton: Selector;
    supportForTestingLabel: Selector;

    supportForTestingCheckbox: Selector;
    reusingExistingJavascriptCheckbox: Selector;
    runningTestsInBackgroundCheckbox: Selector;
    easyEmbeddingCheckbox: Selector;
    advancedTrafficCheckbox: Selector;

    windowsRadioButton: Selector;
    macOsRadioButton: Selector;
    linuxRadioButton: Selector;

    constructor() {
        this.yourNameTextField = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
        this.supportForTestingLabel = Selector('label').withAttribute('for', 'remote-testing');

        this.supportForTestingCheckbox = Selector('#remote-testing');
        this.reusingExistingJavascriptCheckbox = Selector('#reusing-js-code');
        this.runningTestsInBackgroundCheckbox = Selector('#background-parallel-testing');
        this.easyEmbeddingCheckbox = Selector('#continuous-integration-embedding');
        this.advancedTrafficCheckbox = Selector('#traffic-markup-analysis');

        this.windowsRadioButton = Selector('#windows');
        this.macOsRadioButton = Selector('#macos');
        this.linuxRadioButton = Selector('#linux');

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

    async clickReusingExistingJavascriptCheckbox() {
        await t.click(this.reusingExistingJavascriptCheckbox);
    }

    isReusingExistingJavascriptCheckboxChecked() {
        return this.reusingExistingJavascriptCheckbox.checked;
    }

    async clickRunningTestsInBackgroundCheckbox() {
        await t.click(this.runningTestsInBackgroundCheckbox);
    }

    isRunningTestsInBackgroundCheckboxChecked() {
        return this.runningTestsInBackgroundCheckbox.checked;
    }

    async clickEasyEmbeddingCheckbox() {
        await t.click(this.easyEmbeddingCheckbox);
    }

    isEasyEmbeddingCheckboxChecked() {
        return this.easyEmbeddingCheckbox.checked;
    }

    async clickAdvancedTrafficCheckbox() {
        await t.click(this.advancedTrafficCheckbox);
    }

    isAdvancedTrafficCheckboxChecked() {
        return this.advancedTrafficCheckbox.checked;
    }

    async clickWindowsRadioButton() {
        await t.click(this.windowsRadioButton);
    }

    isWindowsRadioButtonChecked() {
        return this.windowsRadioButton.checked;
    }

    async clickMacOsRadioButton() {
        await t.click(this.macOsRadioButton);
    }

    isMacOsRadioButtonChecked() {
        return this.macOsRadioButton.checked;
    }

    async clickLinuxRadioButton() {
        await t.click(this.linuxRadioButton);
    }

    isLinuxRadioButtonChecked() {
        return this.linuxRadioButton.checked;
    }
}
