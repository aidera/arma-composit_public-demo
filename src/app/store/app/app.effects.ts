import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

import * as AppActions from './app.actions';
import { MainInfo } from '../../shared/models/MainInfo';
import { Certificate } from '../../shared/models/Certificate';
import { ApiService } from '../../shared/services/api/api.service';

const headers = new HttpHeaders();
headers.set('MyCustomHeader', Math.random().toString());

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private api: ApiService) {}

  /*--- Translates and Locale ---*/
  fetchTranslates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchTranslates),
      switchMap(() => {
        return this.api.getTranslates().pipe(
          map((resData) => {
            if (resData) {
              return AppActions.setTranslates({ translates: resData });
            }
            return { type: 'DUMMY' };
          }),
          catchError((errorRes) => {
            if (errorRes.message) {
              return of(
                AppActions.fetchTranslatesFail({
                  errorMessage: errorRes.message,
                })
              );
            }
            return of(
              AppActions.fetchTranslatesFail({ errorMessage: errorRes })
            );
          })
        );
      })
    )
  );

  /*--- Products ---*/
  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchProducts),
      switchMap(() => {
        return this.api.getProducts().pipe(
          map((resData) => {
            if (resData) {
              return AppActions.setProducts({ products: resData });
            }
            return { type: 'DUMMY' };
          }),
          catchError((errorRes) => {
            if (errorRes.message) {
              return of(
                AppActions.fetchProductsFail({
                  errorMessage: errorRes.message,
                })
              );
            }
            return of(AppActions.fetchProductsFail({ errorMessage: errorRes }));
          })
        );
      })
    )
  );

  /*--- Categories ---*/
  fetchCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchCategories),
      switchMap(() => {
        return this.api.getCategories().pipe(
          map((resData) => {
            if (resData) {
              return AppActions.setCategories({ categories: resData });
            }
            return { type: 'DUMMY' };
          }),
          catchError((errorRes) => {
            if (errorRes.message) {
              return of(
                AppActions.fetchCategoriesFail({
                  errorMessage: errorRes.message,
                })
              );
            }
            return of(
              AppActions.fetchCategoriesFail({ errorMessage: errorRes })
            );
          })
        );
      })
    )
  );

  /*--- Pages Content ---*/
  fetchPagesContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchPages),
      switchMap(() => {
        return this.api.getPagesContent().pipe(
          map((resData) => {
            if (resData) {
              return AppActions.setPages({ pages: resData });
            }
            return { type: 'DUMMY' };
          }),
          catchError((errorRes) => {
            if (errorRes.message) {
              return of(
                AppActions.fetchPagesFail({
                  errorMessage: errorRes.message,
                })
              );
            }
            return of(AppActions.fetchPagesFail({ errorMessage: errorRes }));
          })
        );
      })
    )
  );

  /*--- Main Info ---*/
  fetchMainInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchMainInfo),
      switchMap(() => {
        return this.api.getMainInfo().pipe(
          map((resData) => {
            if (resData) {
              const mainInfo: MainInfo = {
                emails: Object.values(resData.emails),
                phones: Object.values(resData.phones),
                addresses: Object.values(resData.addresses),
                legalName: resData['legal-name'],
                mapLink: resData['map-link'],
              };

              return AppActions.setMainInfo({ mainInfo });
            }
            return { type: 'DUMMY' };
          }),
          catchError((errorRes) => {
            if (errorRes.message) {
              return of(
                AppActions.fetchMainInfoFail({
                  errorMessage: errorRes.message,
                })
              );
            }
            return of(AppActions.fetchMainInfoFail({ errorMessage: errorRes }));
          })
        );
      })
    )
  );

  /*--- Certificates ---*/
  fetchCertificates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.fetchCertificates),
      switchMap(() => {
        return this.api.getCertificates().pipe(
          map((resData) => {
            if (resData) {
              const certificates: Certificate[] = [];
              resData.forEach((certificate) => {
                certificates.push({
                  img: certificate.img,
                  imgThumb: certificate['img-thumb'],
                  description: certificate.description,
                });
              });
              return AppActions.setCertificates({ certificates });
            }
            return { type: 'DUMMY' };
          }),
          catchError((errorRes) => {
            if (errorRes.message) {
              return of(
                AppActions.fetchCertificatesFail({
                  errorMessage: errorRes.message,
                })
              );
            }
            return of(
              AppActions.fetchCertificatesFail({ errorMessage: errorRes })
            );
          })
        );
      })
    )
  );

  /*--- Submit an Application ---*/
  submitApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.submitApplication),
      switchMap((action) => {
        return this.api
          .submitAnApplication({
            userName: action.userName,
            userEmail: action.userEmail,
            userPhone: action.userPhone,
            userComment: action.userComment,
            userMarketingAgree: action.userMarketingAgree,
          })
          .pipe(
            map((resData) => {
              if (resData && resData.message === 'Send') {
                return AppActions.submitApplicationSuccess({ status: true });
              }
              return AppActions.submitApplicationFail({
                errorMessage: String(resData),
              });
            }),
            catchError((errorRes) => {
              return of(
                AppActions.submitApplicationFail({
                  errorMessage: String(errorRes),
                })
              );
            })
          );
      })
    )
  );
}
