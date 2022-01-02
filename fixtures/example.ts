import ExampleActions from '../actions/example-actions';
import { Config } from '../config/config';
import ThankYouQueries from '../queries/thank-you-queries';
import BrowserUtils from '../utils/browser-utils';

fixture('Example Page')
    .page(`${Config.baseUrl}/example`)
    .meta({ name: 'example-page' });

const exampleActions: ExampleActions = new ExampleActions();
const thankYouQueries: ThankYouQueries = new ThankYouQueries();

test('Submit an Example page form.', async t => {   
    const name: string = 'Chris';
    await exampleActions.fillInExampleForm(name);

    await t.expect(BrowserUtils.getCurrentPage()).eql(`${Config.baseUrl}/example/thank-you.html`);
    await t.expect(thankYouQueries.getThankYouMessage()).eql(`Thank you, ${name}!`);
});
