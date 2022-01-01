import { Config } from '../config/config';
import ThankYouPage from '../pages/thank-you-page';

fixture`Thank You Page`
    .page`${Config.baseUrl}/example/thank-you.html`
    .meta({ name: 'thank-you-page' });

test('Smoke Test Thank You Page', async t => {
    const thankYouPage = new ThankYouPage();
    await t.expect(thankYouPage.getThankYouMessage()).eql('Thank you!');

    await t.expect(thankYouPage.getLearnMoreText())
        .eql('To learn more about TestCafe, please visit:\ndevexpress.github.io/testcafe');
});
