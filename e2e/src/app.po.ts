import { browser, by, element, ElementFinder } from 'protractor';
import { Locale } from '../../src/app/shared/models/Locale';

export class AppPo {
  navigateTo(path): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/${path}`) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  setLocale(language?: Locale): void {
    let langButtonText: string;
    switch (language) {
      case 'en':
        langButtonText = 'ENG';
        break;
      case 'ru':
        langButtonText = 'РУС';
        break;
      case 'ua':
        langButtonText = 'УКР';
        break;
      default:
        langButtonText = 'ENG';
        break;
    }
    const headerLanguageButton = element(by.cssContainingText('header a', langButtonText));
    headerLanguageButton.click();
  }


  hasClass(el: ElementFinder, cls: string): Promise<boolean> {
    return el.getAttribute('class').then((classes) => {
      return classes.split(' ').indexOf(cls) !== -1;
    }) as Promise<boolean>;
  }
}
