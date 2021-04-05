import { Selector, t } from 'testcafe';

export default class ExamplePage {
    thankYouMessage: Selector;
    learnMoreText: Selector;

    constructor() {
        this.thankYouMessage = Selector('#article-header');
        this.learnMoreText = Selector('.result-content > p:nth-child(2)');
    }

    async getThankYouMessage() {
        return this.thankYouMessage.innerText;
    }

    async getLearnMoreText() {
        return this.learnMoreText.innerText;
    }

}