import { LanguageVariation } from './LanguageVariation';

export interface CertificateDirty {
  description: LanguageVariation;
  img: string;
  'img-thumb': string;
}

export interface Certificate {
  description: LanguageVariation;
  img: string;
  imgThumb: string;
}
