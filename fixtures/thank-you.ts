import { Config } from '../config/config';
import ThankYouPage from '../pages/thank-you-page';

const thankYouPage = new ThankYouPage();
fixture('Thank You Page').page`${Config.baseUrl}/example/thank-you.html`;

test('Smoke Test Thank You Page', async t => {
    await t.expect(await thankYouPage.getThankYouMessage()).eql('Thank you!');

    await t.expect(await thankYouPage.getLearnMoreText())
        .eql('To learn more about TestCafe, please visit:\ndevexpress.github.io/testcafe');
});
