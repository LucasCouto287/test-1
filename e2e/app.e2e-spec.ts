import { ZareyiPage } from './app.po';

describe('zareyi App', () => {
  let page: ZareyiPage;

  beforeEach(() => {
    page = new ZareyiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
