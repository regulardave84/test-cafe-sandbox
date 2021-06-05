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

    private iHaveTriedTestCafeCheckbox: Selector;
    private iHaveTriedTestCafeSlider: Selector;

    private letUsKnowWhatYouThinkTextbox: Selector;
    
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

        this.iHaveTriedTestCafeCheckbox = Selector('#tried-test-cafe');
        this.iHaveTriedTestCafeSlider = Selector('#slider');

        this.letUsKnowWhatYouThinkTextbox = Selector('#comments');
    }

    public async enterTextInToYourNameTextField(text: string) {
        await t.typeText(this.yourNameTextField, text, { paste: true });
    }

    public async clickSubmitButton() {
        await t.click(this.submitButton);
    }

    public async checkSupportForTextCheckbox() {
        await t.click(this.supportForTestingLabel);
    }

    public async isCheckSupportForTextCheckboxChecked(): Promise<Boolean | undefined> {
        return await this.supportForTestingCheckbox.checked;
    }

    public async clickReusingExistingJavascriptCheckbox() {
        await t.click(this.reusingExistingJavascriptCheckbox);
    }

    public async isReusingExistingJavascriptCheckboxChecked(): Promise<Boolean | undefined> {
        return await this.reusingExistingJavascriptCheckbox.checked;
    }

    public async clickRunningTestsInBackgroundCheckbox() {
        await t.click(this.runningTestsInBackgroundCheckbox);
    }

    public async isRunningTestsInBackgroundCheckboxChecked(): Promise<Boolean | undefined> {
        return await this.runningTestsInBackgroundCheckbox.checked;
    }

    public async clickEasyEmbeddingCheckbox() {
        await t.click(this.easyEmbeddingCheckbox);
    }

    public async isEasyEmbeddingCheckboxChecked(): Promise<Boolean | undefined> {
        return await this.easyEmbeddingCheckbox.checked;
    }

    public async clickAdvancedTrafficCheckbox() {
        await t.click(this.advancedTrafficCheckbox);
    }

    public async isAdvancedTrafficCheckboxChecked(): Promise<Boolean | undefined> {
        return await this.advancedTrafficCheckbox.checked;
    }

    public async clickWindowsRadioButton() {
        await t.click(this.windowsRadioButton);
    }

    public async isWindowsRadioButtonChecked(): Promise<Boolean | undefined> {
        return await this.windowsRadioButton.checked;
    }

    public async clickMacOsRadioButton() {
        await t.click(this.macOsRadioButton);
    }

    public async isMacOsRadioButtonChecked(): Promise<Boolean | undefined> {
        return await this.macOsRadioButton.checked;
    }

    public async clickLinuxRadioButton() {
        await t.click(this.linuxRadioButton);
    }

    public isLinuxRadioButtonChecked(): Promise<Boolean | undefined> {
        return this.linuxRadioButton.checked;
    }

    public async selectOptionFromInterfaceDropDown(option: string) {
        await t
            .click(this.interfaceDropDown)
            .click(this.interfaceOption.withText(option));
    }

    public async getInterfaceDropDownValue(): Promise<string|undefined> {
        return await this.interfaceDropDown.value;
    }

    public async checkIHaveTriedTestCafeCheckbox() {
        await t.click(this.iHaveTriedTestCafeCheckbox);
    }

    public async isIHaveTriedTestCafeCheckboxChecked(): Promise<Boolean | undefined> {
        return await this.iHaveTriedTestCafeCheckbox.checked;
    }

    public async dragIHaveTriedTestCafeSliderToTheEndAndBack() {
        await t
            .drag(this.iHaveTriedTestCafeSlider, 800, 0, { offsetX: 10, offsetY: 10 })
            .drag(this.iHaveTriedTestCafeSlider, 0, 800, { offsetX: 10, offsetY: 10 });
    }

    public async enterTextInToLetUsKnowWhatYouThinkTextbox(text: string) {
        await t.typeText(this.letUsKnowWhatYouThinkTextbox, text, { paste: true });
    }

    public async getTextFromLetUsKnowWhatYouThinkTextbox(): Promise<string|undefined> {
        return await this.letUsKnowWhatYouThinkTextbox.value;
    }
}
