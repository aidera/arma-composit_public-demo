import { LanguageVariation } from './LanguageVariation';

export type Page = {
  seo: {
    title: LanguageVariation;
    keywords: LanguageVariation;
    description: LanguageVariation;
  };
  content: {
    [key: string]: {
      text?: LanguageVariation;
      img?: {
        path: string;
        description: LanguageVariation;
      };
    };
  };
};

export interface Pages {
  [key: string]: Page;
}
