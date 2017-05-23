import { AngularSignalrPage } from './app.po';

describe('angular-signalr App', () => {
  let page: AngularSignalrPage;

  beforeEach(() => {
    page = new AngularSignalrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
