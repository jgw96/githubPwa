import { HelloWorldAngularPage } from './app.po';

describe('hello-world-angular App', function() {
  let page: HelloWorldAngularPage;

  beforeEach(() => {
    page = new HelloWorldAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
