import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Translate } from '../../models/Translate';
import { environment } from '../../../../environments/environment';
import { Product, ProductRaw } from '../../models/Product';
import { Category } from '../../models/Category';
import { Pages } from '../../models/Page';
import { MainInfoDirty } from '../../models/MainInfo';
import { CertificateDirty } from '../../models/Certificate';
import { map } from 'rxjs/operators';

type SendApplicationRequest = {
  userName: string;
  userEmail: string;
  userPhone: string;
  userComment: string;
  userMarketingAgree: boolean;
};

type SendApplicationResponse = {
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTranslates(): Observable<{ [key: string]: Translate }> {
    return this.http.get<{ [key: string]: Translate }>(
      `${environment.firebaseDBLink}/translates.json`
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductRaw[]>(`${environment.firebaseDBLink}/products.json`)
      .pipe(
        map((products) => {
          return products.map((product, i) => {
            return {
              ...product,
              id: String(i),
            } as Product;
          });
        })
      );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(
      `${environment.firebaseDBLink}/products/${id}.json`
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${environment.firebaseDBLink}/categories.json`
    );
  }

  getPagesContent(): Observable<Pages> {
    return this.http.get<Pages>(`${environment.firebaseDBLink}/pages.json`);
  }

  getMainInfo(): Observable<MainInfoDirty> {
    return this.http.get<MainInfoDirty>(
      `${environment.firebaseDBLink}/main-info.json`
    );
  }

  getCertificates(): Observable<CertificateDirty[]> {
    return this.http.get<CertificateDirty[]>(
      `${environment.firebaseDBLink}/certificates.json`
    );
  }

  submitAnApplication(
    payload: SendApplicationRequest
  ): Observable<SendApplicationResponse> {
    return this.http.get<SendApplicationResponse>(
      `https://us-central1-arma-5d3a3.cloudfunctions.net/sendMail?userName=${
        payload.userName
      }&userEmail=${payload.userEmail}&userPhone=${
        payload.userPhone
      }&userComment=${payload.userComment}&userMarketingAgree=${
        payload.userMarketingAgree === true ? 'true' : 'false'
      }`
    );
  }
}
