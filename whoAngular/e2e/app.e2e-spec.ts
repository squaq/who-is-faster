import { WhoAngularPage } from './app.po';

describe('who-angular App', () => {
  let page: WhoAngularPage;

  beforeEach(() => {
    page = new WhoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
