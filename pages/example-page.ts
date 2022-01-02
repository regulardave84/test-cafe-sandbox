import { Selector, t } from 'testcafe';

export default class ExamplePage {
    public yourNameTextField: Selector;
    public submitButton: Selector;
    public supportForTestingLabel: Selector;

    public supportForTestingCheckbox: Selector;
    public reusingExistingJavascriptCheckbox: Selector;
    public runningTestsInBackgroundCheckbox: Selector;
    public easyEmbeddingCheckbox: Selector;
    public advancedTrafficCheckbox: Selector;

    public windowsRadioButton: Selector;
    public macOsRadioButton: Selector;
    public linuxRadioButton: Selector;

    public interfaceDropDown: Selector;
    public interfaceOption: Selector;

    public iHaveTriedTestCafeCheckbox: Selector;
    public iHaveTriedTestCafeSlider: Selector;

    public letUsKnowWhatYouThinkTextbox: Selector;
    
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
}
