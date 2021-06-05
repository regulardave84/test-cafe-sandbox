import { Config } from '../config/config';
import ExamplePage from '../pages/example-page';
import ThankYouPage from '../pages/thank-you-page';
import BrowserUtils from '../utils/browser-utils';

fixture`Example Page`
    .page`${Config.baseUrl}/example`
    .meta({ name: 'example-page' });

test('Full test of example page form.', async t => {
    const examplePage = new ExamplePage();
    const thankYouPage = new ThankYouPage();
    const name = 'Chris Davies';
    await examplePage.enterTextInToYourNameTextField(name);

    // Checkboxes
    await examplePage.checkSupportForTextCheckbox();
    await t.expect(examplePage.isCheckSupportForTextCheckboxChecked).ok;

    await examplePage.clickReusingExistingJavascriptCheckbox();
    await t.expect(examplePage.isReusingExistingJavascriptCheckboxChecked).ok;

    await examplePage.clickRunningTestsInBackgroundCheckbox();
    await t.expect(examplePage.isRunningTestsInBackgroundCheckboxChecked).ok;

    await examplePage.clickEasyEmbeddingCheckbox();
    await t.expect(examplePage.isEasyEmbeddingCheckboxChecked).ok;

    await examplePage.clickAdvancedTrafficCheckbox();
    await t.expect(examplePage.isAdvancedTrafficCheckboxChecked).ok;

    // Radio buttons
    await examplePage.clickWindowsRadioButton();
    await t.expect(examplePage.isWindowsRadioButtonChecked).ok;

    await examplePage.clickMacOsRadioButton();
    await t.expect(examplePage.isMacOsRadioButtonChecked).ok;

    await examplePage.clickLinuxRadioButton();
    await t.expect(examplePage.isLinuxRadioButtonChecked).ok;


    // Drop downs
    const commandLine = 'Command Line';
    await examplePage.selectOptionFromInterfaceDropDown(commandLine);
    await t.expect(await examplePage.getInterfaceDropDownValue()).eql(commandLine);

    const javaScriptApi = 'JavaScript API';
    await examplePage.selectOptionFromInterfaceDropDown(javaScriptApi);
    await t.expect(await examplePage.getInterfaceDropDownValue()).eql(javaScriptApi);

    const both = 'Both';
    await examplePage.selectOptionFromInterfaceDropDown(both);
    await t.expect(await examplePage.getInterfaceDropDownValue()).eql(both);

    // Slide the scale across to one end then the other
    await examplePage.checkIHaveTriedTestCafeCheckbox();
    await t.expect(examplePage.isIHaveTriedTestCafeCheckboxChecked).ok;
    await examplePage.dragIHaveTriedTestCafeSliderToTheEndAndBack();

    // Text box
    const comments = 'Here are my comments.';
    await examplePage.enterTextInToLetUsKnowWhatYouThinkTextbox(comments);
    await t.expect(await examplePage.getTextFromLetUsKnowWhatYouThinkTextbox()).eql(comments);

    await examplePage.clickSubmitButton();    
    await t.expect(BrowserUtils.getCurrentPage()).eql(`${Config.baseUrl}/example/thank-you.html`);
    await t.expect(await thankYouPage.getThankYouMessage()).eql(`Thank you, ${name}!`);
});
