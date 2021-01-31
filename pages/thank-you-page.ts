import { Selector, t } from 'testcafe';

export default class ExamplePage {
    thankYouMessage: Selector;

    constructor() {
        this.thankYouMessage = Selector('#article-header');
    }

    async getThankYouMessage() {
        return this.thankYouMessage.innerText;
    }

}