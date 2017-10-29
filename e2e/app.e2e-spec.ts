import { DNSAppPage } from './app.po';

describe('dns-app App', function() {
  let page: DNSAppPage;

  beforeEach(() => {
    page = new DNSAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
