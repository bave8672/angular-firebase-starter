import { FirebasePage } from './app.po';

describe('firebase App', () => {
    let page: FirebasePage;

    beforeEach(() => {
        page = new FirebasePage();
    });

    it('Should display the title header WHEN on the landing page', () => {
        page.navigateTo('/');
        expect(page.text('title')).toEqual('Hello, world!');
    });
});
