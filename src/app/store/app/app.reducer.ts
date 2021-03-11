import { Action, createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';
import { Product } from '../../shared/models/Product';
import { Category } from '../../shared/models/Category';
import { Translate } from '../../shared/models/Translate';
import { Locale } from '../../shared/models/Locale';
import { Pages } from '../../shared/models/Page';
import { MainInfo } from '../../shared/models/MainInfo';
import { Certificate } from '../../shared/models/Certificate';

export const appInitialState = {
  /*--- App ---*/
  isFullScreenMenuOpen: false,

  /*--- Translates and Locale ---*/
  locale: (localStorage.getItem('lang') as Locale) || ('ua' as Locale),
  translates: null as { [key: string]: Translate } | null,
  translatesAreFetching: false,
  translatesSuccess: false,
  translatesFailMessage: null as string | null,

  /*--- Products ---*/
  products: null as Product[] | null,
  productsAreFetching: false,
  productsSuccess: false,
  productsFailMessage: null as string | null,

  /*--- Categories ---*/
  categories: null as Category[] | null,
  categoriesAreFetching: false,
  categoriesSuccess: false,
  categoriesFailMessage: null as string | null,

  /*--- Pages Content ---*/
  pages: null as Pages | null,
  pagesIsFetching: false,
  pagesSuccess: false,
  pagesFailMessage: null as string | null,

  /*--- Main Info ---*/
  mainInfo: null as MainInfo | null,
  mainInfoIsFetching: false,
  mainInfoSuccess: false,
  mainInfoFailMessage: null as string | null,

  /*--- Certificates ---*/
  certificates: null as Certificate[] | null,
  certificatesIsFetching: false,
  certificatesSuccess: false,
  certificatesFailMessage: null as string | null,

  /*--- Submit an Application ---*/
  submitApplicationIsFetching: false,
  submitApplicationSuccess: false,
  submitApplicationFailMessage: null as string | null,
};
export type AppState = typeof appInitialState;

const _appReducer = createReducer(
  appInitialState,

  /*--- App ---*/
  on(AppActions.setIsFullscreenMenuOpen, (state, payload) => ({
    ...state,
    isFullScreenMenuOpen: payload.isOpen,
  })),

  /*--- Translates and Locale ---*/
  on(AppActions.setLocale, (state, payload) => {
    localStorage.setItem('lang', payload.locale);
    return {
      ...state,
      locale: payload.locale,
    };
  }),
  on(AppActions.setTranslates, (state, payload) => ({
    ...state,
    translates: payload.translates,
    translatesAreFetching: false,
  })),
  on(AppActions.fetchTranslates, (state) => ({
    ...state,
    translatesSuccess: false,
    translatesFailMessage: null,
    translatesAreFetching: true,
  })),
  on(AppActions.fetchTranslatesSuccess, (state) => ({
    ...state,
    translatesSuccess: true,
    translatesFailMessage: null,
    translatesAreFetching: false,
  })),
  on(AppActions.fetchTranslatesFail, (state, payload) => ({
    ...state,
    translatesSuccess: false,
    translatesFailMessage: payload.errorMessage,
    translatesAreFetching: false,
  })),

  /*--- Products ---*/
  on(AppActions.setProducts, (state, payload) => ({
    ...state,
    products: payload.products,
    productsAreFetching: false,
  })),
  on(AppActions.fetchProducts, (state) => ({
    ...state,
    productsSuccess: false,
    productsFailMessage: null,
    productsAreFetching: true,
  })),
  on(AppActions.fetchProductsSuccess, (state) => ({
    ...state,
    productsSuccess: true,
    productsFailMessage: null,
    productsAreFetching: false,
  })),
  on(AppActions.fetchProductsFail, (state, payload) => ({
    ...state,
    productsSuccess: false,
    productsFailMessage: payload.errorMessage,
    productsAreFetching: false,
  })),

  /*--- Categories ---*/
  on(AppActions.setCategories, (state, payload) => ({
    ...state,
    categories: payload.categories,
    categoriesAreFetching: false,
  })),
  on(AppActions.fetchCategories, (state) => ({
    ...state,
    categoriesSuccess: false,
    categoriesFailMessage: null,
    categoriesAreFetching: true,
  })),
  on(AppActions.fetchCategoriesSuccess, (state) => ({
    ...state,
    categoriesSuccess: true,
    categoriesFailMessage: null,
    categoriesAreFetching: false,
  })),
  on(AppActions.fetchCategoriesFail, (state, payload) => ({
    ...state,
    categoriesSuccess: false,
    categoriesFailMessage: payload.errorMessage,
    categoriesAreFetching: false,
  })),

  /*--- Pages content and SEO ---*/
  on(AppActions.setPages, (state, payload) => ({
    ...state,
    pages: payload.pages,
    pagesIsFetching: false,
  })),
  on(AppActions.fetchPages, (state) => ({
    ...state,
    pagesSuccess: false,
    pagesFailMessage: null,
    pagesIsFetching: true,
  })),
  on(AppActions.fetchPagesSuccess, (state) => ({
    ...state,
    pagesSuccess: true,
    pagesFailMessage: null,
    pagesIsFetching: false,
  })),
  on(AppActions.fetchPagesFail, (state, payload) => ({
    ...state,
    pagesSuccess: false,
    pagesFailMessage: payload.errorMessage,
    pagesIsFetching: false,
  })),

  /*--- Main Info ---*/
  on(AppActions.setMainInfo, (state, payload) => ({
    ...state,
    mainInfo: payload.mainInfo,
    mainInfoIsFetching: false,
  })),
  on(AppActions.fetchMainInfo, (state) => ({
    ...state,
    mainInfoSuccess: false,
    mainInfoFailMessage: null,
    mainInfoIsFetching: true,
  })),
  on(AppActions.fetchMainInfoSuccess, (state) => ({
    ...state,
    mainInfoSuccess: true,
    mainInfoFailMessage: null,
    mainInfoIsFetching: false,
  })),
  on(AppActions.fetchMainInfoFail, (state, payload) => ({
    ...state,
    mainInfoSuccess: false,
    mainInfoFailMessage: payload.errorMessage,
    mainInfoIsFetching: false,
  })),

  /*--- Certificates ---*/
  on(AppActions.setCertificates, (state, payload) => ({
    ...state,
    certificates: payload.certificates,
    certificatesIsFetching: false,
  })),
  on(AppActions.fetchCertificates, (state) => ({
    ...state,
    certificatesSuccess: false,
    certificatesFailMessage: null,
    certificatesIsFetching: true,
  })),
  on(AppActions.fetchCertificatesSuccess, (state) => ({
    ...state,
    certificatesSuccess: true,
    certificatesMessage: null,
    certificatesIsFetching: false,
  })),
  on(AppActions.fetchCertificatesFail, (state, payload) => ({
    ...state,
    certificatesSuccess: false,
    certificatesFailMessage: payload.errorMessage,
    certificatesIsFetching: false,
  })),

  /*--- Submit an Application ---*/
  on(AppActions.submitApplication, (state) => ({
    ...state,
    submitApplicationSuccess: false,
    submitApplicationFailMessage: null,
    submitApplicationIsFetching: true,
  })),
  on(AppActions.submitApplicationSuccess, (state, payload) => ({
    ...state,
    submitApplicationSuccess: payload.status,
    submitApplicationFailMessage: null,
    submitApplicationIsFetching: false,
  })),
  on(AppActions.submitApplicationFail, (state, payload) => ({
    ...state,
    submitApplicationSuccess: false,
    submitApplicationFailMessage: payload.errorMessage,
    submitApplicationIsFetching: false,
  }))
);

export function appReducer(
  state: AppState | undefined,
  action: Action
): AppState {
  return _appReducer(state, action);
}
