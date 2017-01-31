import { ChatRxjsPage } from './app.po';

describe('chat-rxjs App', function() {
  let page: ChatRxjsPage;

  beforeEach(() => {
    page = new ChatRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
