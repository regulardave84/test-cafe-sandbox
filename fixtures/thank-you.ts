import { Config } from '../config/config';
import ThankYouQueries from '../queries/thank-you-queries';

fixture('Thank You Page')
    .meta({ name: 'thank-you-page' });

const thankYouQueries: ThankYouQueries = new ThankYouQueries();

test('Smoke Test Thank You Page', async t => {
    await t.navigateTo(`${Config.baseUrl}/example/thank-you.html`);

    await t.expect(thankYouQueries.getThankYouMessage()).eql('Thank you!');
    await t.expect(thankYouQueries.getLearnMoreText())
        .eql('To learn more about TestCafe, please visit:\ndevexpress.github.io/testcafe');
});
