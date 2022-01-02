import { t } from "testcafe";
import ExamplePage from "../pages/example-page";

export default class ExampleActions {
    private examplePage: ExamplePage = new ExamplePage();

    public async fillInExampleForm(name: string): Promise<void> {
        await this.enterTextInToYourNameTextField(name);

        await this.checkSupportForTextCheckbox();
        await this.clickReusingExistingJavascriptCheckbox();
        await this.clickRunningTestsInBackgroundCheckbox();
        await this.clickEasyEmbeddingCheckbox();
        await this.clickAdvancedTrafficCheckbox();

        await this.clickMacOsRadioButton();

        await this.selectOptionFromInterfaceDropDown('Both');

        // Slide the scale across to one end then the other
        await this.checkIHaveTriedTestCafeCheckbox();
        await this.dragIHaveTriedTestCafeSliderToTheEndAndBack();

        await this.enterTextInToLetUsKnowWhatYouThinkTextbox('Here are my comments.');

        await this.clickSubmitButton();
    }

    private async enterTextInToYourNameTextField(text: string): Promise<void> {
        await t.typeText(this.examplePage.yourNameTextField, text, { paste: true });
    }

    private async clickSubmitButton(): Promise<void> {
        await t.click(this.examplePage.submitButton);
    }

    private async checkSupportForTextCheckbox(): Promise<void> {
        await t.click(this.examplePage.supportForTestingLabel);
    }

    private async isCheckSupportForTextCheckboxChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.supportForTestingCheckbox.checked;
    }

    private async clickReusingExistingJavascriptCheckbox(): Promise<void> {
        await t.click(this.examplePage.reusingExistingJavascriptCheckbox);
    }

    private async isReusingExistingJavascriptCheckboxChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.reusingExistingJavascriptCheckbox.checked;
    }

    private async clickRunningTestsInBackgroundCheckbox(): Promise<void> {
        await t.click(this.examplePage.runningTestsInBackgroundCheckbox);
    }

    private async isRunningTestsInBackgroundCheckboxChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.runningTestsInBackgroundCheckbox.checked;
    }

    private async clickEasyEmbeddingCheckbox(): Promise<void> {
        await t.click(this.examplePage.easyEmbeddingCheckbox);
    }

    private async isEasyEmbeddingCheckboxChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.easyEmbeddingCheckbox.checked;
    }

    private async clickAdvancedTrafficCheckbox(): Promise<void> {
        await t.click(this.examplePage.advancedTrafficCheckbox);
    }

    private async isAdvancedTrafficCheckboxChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.advancedTrafficCheckbox.checked;
    }

    private async clickWindowsRadioButton(): Promise<void> {
        await t.click(this.examplePage.windowsRadioButton);
    }

    private async isWindowsRadioButtonChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.windowsRadioButton.checked;
    }

    private async clickMacOsRadioButton(): Promise<void> {
        await t.click(this.examplePage.macOsRadioButton);
    }

    private async isMacOsRadioButtonChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.macOsRadioButton.checked;
    }

    private async clickLinuxRadioButton(): Promise<void> {
        await t.click(this.examplePage.linuxRadioButton);
    }

    private isLinuxRadioButtonChecked(): Promise<Boolean|undefined> {
        return this.examplePage.linuxRadioButton.checked;
    }

    private async selectOptionFromInterfaceDropDown(option: string): Promise<void> {
        await t
            .click(this.examplePage.interfaceDropDown)
            .click(this.examplePage.interfaceOption.withText(option));
    }

    private getInterfaceDropDownValue(): Promise<string|undefined> {
        return this.examplePage.interfaceDropDown.value;
    }

    private async checkIHaveTriedTestCafeCheckbox(): Promise<void> {
        await t.click(this.examplePage.iHaveTriedTestCafeCheckbox);
    }

    private async isIHaveTriedTestCafeCheckboxChecked(): Promise<Boolean|undefined> {
        return await this.examplePage.iHaveTriedTestCafeCheckbox.checked;
    }

    private async dragIHaveTriedTestCafeSliderToTheEndAndBack(): Promise<void> {
        await t
            .drag(this.examplePage.iHaveTriedTestCafeSlider, 800, 0, { offsetX: 10, offsetY: 10 })
            .drag(this.examplePage.iHaveTriedTestCafeSlider, 0, 800, { offsetX: 10, offsetY: 10 });
    }

    private async enterTextInToLetUsKnowWhatYouThinkTextbox(text: string): Promise<void> {
        await t.typeText(this.examplePage.letUsKnowWhatYouThinkTextbox, text, { paste: true });
    }

    private getTextFromLetUsKnowWhatYouThinkTextbox(): Promise<string|undefined> {
        return this.examplePage.letUsKnowWhatYouThinkTextbox.value;
    }
}
