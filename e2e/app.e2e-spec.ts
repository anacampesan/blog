import { AnazardPage } from './app.po';

describe('anazard App', () => {
  let page: AnazardPage;

  beforeEach(() => {
    page = new AnazardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
