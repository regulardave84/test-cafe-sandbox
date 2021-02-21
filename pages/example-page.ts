import { Selector, t } from 'testcafe';

export default class ExamplePage {
    private yourNameTextField: Selector;
    private submitButton: Selector;
    private supportForTestingLabel: Selector;

    private supportForTestingCheckbox: Selector;
    private reusingExistingJavascriptCheckbox: Selector;
    private runningTestsInBackgroundCheckbox: Selector;
    private easyEmbeddingCheckbox: Selector;
    private advancedTrafficCheckbox: Selector;

    private windowsRadioButton: Selector;
    private macOsRadioButton: Selector;
    private linuxRadioButton: Selector;

    private interfaceDropDown: Selector;
    private interfaceOption: Selector;
    
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

        this.interfaceDropDown = Selector('#preferred-interface');
        this.interfaceOption = this.interfaceDropDown.find('option');
    }

    public async enterTextInToYourNameTextField(text: string) {
        await t.typeText(this.yourNameTextField, text);
    }

    public async clickSubmitButton() {
        await t.click(this.submitButton);
    }

    public async checkSupportForTextCheckbox() {
        await t.click(this.supportForTestingLabel);
    }

    public isCheckSupportForTextCheckboxChecked() {
        return this.supportForTestingCheckbox.checked;
    }

    public async clickReusingExistingJavascriptCheckbox() {
        await t.click(this.reusingExistingJavascriptCheckbox);
    }

    public isReusingExistingJavascriptCheckboxChecked() {
        return this.reusingExistingJavascriptCheckbox.checked;
    }

    public async clickRunningTestsInBackgroundCheckbox() {
        await t.click(this.runningTestsInBackgroundCheckbox);
    }

    public isRunningTestsInBackgroundCheckboxChecked() {
        return this.runningTestsInBackgroundCheckbox.checked;
    }

    public async clickEasyEmbeddingCheckbox() {
        await t.click(this.easyEmbeddingCheckbox);
    }

    public isEasyEmbeddingCheckboxChecked() {
        return this.easyEmbeddingCheckbox.checked;
    }

    public async clickAdvancedTrafficCheckbox() {
        await t.click(this.advancedTrafficCheckbox);
    }

    public isAdvancedTrafficCheckboxChecked() {
        return this.advancedTrafficCheckbox.checked;
    }

    public async clickWindowsRadioButton() {
        await t.click(this.windowsRadioButton);
    }

    public isWindowsRadioButtonChecked() {
        return this.windowsRadioButton.checked;
    }

    public async clickMacOsRadioButton() {
        await t.click(this.macOsRadioButton);
    }

    public isMacOsRadioButtonChecked() {
        return this.macOsRadioButton.checked;
    }

    public async clickLinuxRadioButton() {
        await t.click(this.linuxRadioButton);
    }

    public isLinuxRadioButtonChecked() {
        return this.linuxRadioButton.checked;
    }

    public async selectOptionFromInterfaceDropDown(option: string) {
        await t
            .click(this.interfaceDropDown)
            .click(this.interfaceOption.withText(option));
    }

    public getInterfaceDropDownValue(): Promise<string | undefined> {
        return this.interfaceDropDown.value;
    }
}
