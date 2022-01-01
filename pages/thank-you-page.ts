import { Selector } from 'testcafe';

export default class ExamplePage {
    private thankYouMessage: Selector;
    private learnMoreText: Selector;

    constructor() {
        this.thankYouMessage = Selector('#article-header');
        this.learnMoreText = Selector('.result-content').child('p');
    }

    public getThankYouMessage(): Promise<String|undefined> {
        return this.thankYouMessage.innerText;
    }

    public getLearnMoreText(): Promise<String|undefined> {
        return this.learnMoreText.innerText;
    }
}
