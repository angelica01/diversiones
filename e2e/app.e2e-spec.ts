import { DiversionesPage } from './app.po';

describe('diversiones App', function() {
  let page: DiversionesPage;

  beforeEach(() => {
    page = new DiversionesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
