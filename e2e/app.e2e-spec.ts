import { DateInputsTestPage } from './app.po';

describe('my-first-angular2-project App', () => {
  let page: DateInputsTestPage;

  beforeEach(() => {
    page = new DateInputsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
