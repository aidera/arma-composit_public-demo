import { browser, by, element, ElementFinder } from 'protractor';

export class SubmitAnApplicationPo {
  navigateToTestingPage(query?: string): Promise<unknown> {
    if (query) {
      return browser.get(`${browser.baseUrl}/submit-an-application?${query}`) as Promise<unknown>;
    }
    return browser.get(`${browser.baseUrl}/submit-an-application`) as Promise<unknown>;
  }

  getFullNameField(): ElementFinder {
    return element(by.id('name'));
  }

  getEmailField(): ElementFinder {
    return element(by.id('email'));
  }

  getPhoneField(): ElementFinder {
    return element(by.id('phone'));
  }

  getCommentField(): ElementFinder {
    return element(by.id('comment'));
  }

  getAgreementField(): ElementFinder {
    return element(by.id('agreement'));
  }

  getMarketingField(): ElementFinder {
    return element(by.id('marketing'));
  }

  getSubmitButton(): ElementFinder {
    return element(by.css('button[type="submit"]'));
  }

  getModal(): ElementFinder {
    return element(by.css('app-modal'));
  }
}
