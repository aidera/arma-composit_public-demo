import { browser, logging } from 'protractor';

import { SubmitAnApplicationPo } from './submit-an-application.po';
import { AppPo } from '../app.po';

describe('Submit an application page', () => {
  let page: SubmitAnApplicationPo;
  let app: AppPo;

  beforeEach(() => {
    app = new AppPo();
    page = new SubmitAnApplicationPo();
  });

  it('should display the right title', () => {
    page.navigateToTestingPage();
    app.setLocale('en');
    expect(app.getTitleText()).toEqual('Submit an application');
  });

  it('should submit the form and get success answer', () => {
    page.navigateToTestingPage();
    app.setLocale('en');
    page.getFullNameField().sendKeys('AUTO TEST - DO NOT ANSWER');
    page.getEmailField().sendKeys('armacomposit@gmail.com');
    page.getPhoneField().sendKeys('1234567890');
    page.getCommentField().sendKeys('AUTO TEST - DO NOT ANSWER');


    app.hasClass(page.getMarketingField(), 'mat-checkbox-checked').then(value => {
      if (!value) {
        page.getMarketingField().click();
      }
    });

    app.hasClass(page.getAgreementField(), 'mat-checkbox-checked').then(value => {
      if (!value) {
        page.getMarketingField().click();
      }
    });

    browser.sleep(10);

    page.getSubmitButton().click();

    browser.sleep(5000);
    page.getModal().getAttribute('ng-reflect-is-open').then(value => {
      expect(value).toEqual('true');
    });

  });

  it('should display comment if route has "product" query parameter', () => {
    page.navigateToTestingPage('product=0');
    app.setLocale('en');
    page.getCommentField().getAttribute('value').then((inputValue) => {
      expect(inputValue).toContain('Hello. I want to order');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
