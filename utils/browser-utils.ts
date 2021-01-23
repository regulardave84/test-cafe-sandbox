import { ClientFunction } from 'testcafe';

export default class BrowserUtils {
    static getCurrentPage() {
        const currentPage = ClientFunction(() => document.location.href);
        return currentPage();
    }
}