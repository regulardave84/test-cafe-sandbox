import { Selector } from 'testcafe';

export default class ExamplePage {
    private thankYouMessage: Selector;
    private learnMoreText: Selector;

    constructor() {
        this.thankYouMessage = Selector('#article-header');
        this.learnMoreText = Selector('.result-content').child('p');
    }

    public async getThankYouMessage(): Promise<String | undefined> {
        return await this.thankYouMessage.innerText;
    }

    public async getLearnMoreText(): Promise<String | undefined> {
        return await this.learnMoreText.innerText;
    }

}