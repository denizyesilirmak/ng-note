import { NgNotePage } from './app.po';

describe('ng-note App', () => {
  let page: NgNotePage;

  beforeEach(() => {
    page = new NgNotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
