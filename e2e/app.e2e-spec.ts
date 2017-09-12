import { NgConversationalPage } from './app.po';

describe('ng-conversational App', () => {
  let page: NgConversationalPage;

  beforeEach(() => {
    page = new NgConversationalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
