import { browser, element, by } from 'protractor';

export class FirebasePage {

    navigateTo(path: string) {
        return browser.get(path);
    }

    element(name: string) {
        return element(by.css(`[data-e2e="${name}"]`));
    }

    text(name: string) {
        return this.element(name).getText();
    }
}
