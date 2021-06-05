import { Selector, t } from 'testcafe';

export default class ExamplePage {
    thankYouMessage: Selector;
    learnMoreText: Selector;

    constructor() {
        this.thankYouMessage = Selector('#article-header');
        this.learnMoreText = Selector('.result-content > p:nth-child(2)');
    }

    public async getThankYouMessage(): Promise<String | undefined> {
        return await this.thankYouMessage.innerText;
    }

    public async getLearnMoreText(): Promise<String | undefined> {
        return await this.learnMoreText.innerText;
    }

}