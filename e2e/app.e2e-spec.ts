import { ShopAndGoPage } from './app.po';

describe('shop-and-go App', () => {
  let page: ShopAndGoPage;

  beforeEach(() => {
    page = new ShopAndGoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
