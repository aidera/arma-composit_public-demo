export interface MainInfoDirty {
  emails: {
    [key: string]: string;
  };
  phones: {
    [key: string]: string;
  };
  addresses: {
    [key: string]: string;
  };
  'map-link': string;
  'legal-name': string;
}

export interface MainInfo {
  emails: string[];
  phones: string[];
  addresses: string[];
  mapLink: string;
  legalName: string;
}
