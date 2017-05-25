import { LodgerUiPage } from './app.po';

describe('lodger-ui App', () => {
  let page: LodgerUiPage;

  beforeEach(() => {
    page = new LodgerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
