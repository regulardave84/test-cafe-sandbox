import ThankYouPage from "../pages/thank-you-page";

export default class ThankYouQueries {
    thankYouPage: ThankYouPage = new ThankYouPage();

    public getThankYouMessage(): Promise<String|undefined> {
        return this.thankYouPage.thankYouMessage.innerText;
    }

    public getLearnMoreText(): Promise<String|undefined> {
        return this.thankYouPage.learnMoreText.innerText;
    }
}
