import { MyNgrxPlaygroundPage } from './app.po';

describe('my-ngrx-playground App', () => {
  let page: MyNgrxPlaygroundPage;

  beforeEach(() => {
    page = new MyNgrxPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
