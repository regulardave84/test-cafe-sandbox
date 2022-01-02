import { Selector } from 'testcafe';

export default class ThankYouPage {
    public thankYouMessage: Selector;
    public learnMoreText: Selector;

    constructor() {
        this.thankYouMessage = Selector('#article-header');
        this.learnMoreText = Selector('.result-content').child('p');
    }   
}
