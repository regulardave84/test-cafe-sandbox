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
    t.expect(examplePage.isCheckSupportForTextCheckboxChecked).ok;

    await examplePage.clickReusingExistingJavascriptCheckbox();
    t.expect(examplePage.isReusingExistingJavascriptCheckboxChecked).ok;

    await examplePage.clickRunningTestsInBackgroundCheckbox();
    t.expect(examplePage.isRunningTestsInBackgroundCheckboxChecked).ok;

    await examplePage.clickEasyEmbeddingCheckbox();
    t.expect(examplePage.isEasyEmbeddingCheckboxChecked).ok;

    await examplePage.clickAdvancedTrafficCheckbox();
    t.expect(examplePage.isAdvancedTrafficCheckboxChecked).ok;

    // Radio buttons
    await examplePage.clickWindowsRadioButton();
    t.expect(examplePage.isWindowsRadioButtonChecked).ok;

    await examplePage.clickMacOsRadioButton();
    t.expect(examplePage.isMacOsRadioButtonChecked).ok;

    await examplePage.clickLinuxRadioButton();
    t.expect(examplePage.isLinuxRadioButtonChecked).ok;


    // Drop downs
    const commandLine = 'Command Line';
    await examplePage.selectOptionFromInterfaceDropDown(commandLine);
    await t.expect(examplePage.getInterfaceDropDownValue()).eql(commandLine);

    const javaScriptApi = 'JavaScript API';
    await examplePage.selectOptionFromInterfaceDropDown(javaScriptApi);
    await t.expect(examplePage.getInterfaceDropDownValue()).eql(javaScriptApi);

    const both = 'Both';
    await examplePage.selectOptionFromInterfaceDropDown(both);
    await t.expect(examplePage.getInterfaceDropDownValue()).eql(both);

    // Slide the scale across to one end then the other
    await examplePage.checkIHaveTriedTestCafeCheckbox();
    t.expect(examplePage.isIHaveTriedTestCafeCheckboxChecked).ok;
    await examplePage.dragIHaveTriedTestCafeSliderToTheEndAndBack();

    // Text box
    const comments = 'Here are my comments.';
    await examplePage.enterTextInToLetUsKnowWhatYouThinkTextbox(comments);
    await t.expect(examplePage.getTextFromLetUsKnowWhatYouThinkTextbox()).eql(comments);

    await examplePage.clickSubmitButton();    
    await t.expect(BrowserUtils.getCurrentPage()).eql(`${Config.baseUrl}/example/thank-you.html`);
    await t.expect(thankYouPage.getThankYouMessage()).eql(`Thank you, ${name}!`);
});
