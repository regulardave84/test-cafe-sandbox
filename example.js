import { Selector, ClientFunction } from 'testcafe';

fixture`Getting Started`
    .page`http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');

    const currentPage = ClientFunction(() => document.location.href);

    await t
        .expect(currentPage()).eql('https://devexpress.github.io/testcafe/example/thank-you.html');
});

// TODO: page object model for example page
// TODO: config for urls
// TODO: convert code to typescript
// TODO: tests for Your name:
// TODO: tests for Which features are important to you





