import { createAction, props } from '@ngrx/store';

import { Product } from '../../shared/models/Product';
import { Category } from '../../shared/models/Category';
import { Translate } from '../../shared/models/Translate';
import { Locale } from '../../shared/models/Locale';
import { Pages } from '../../shared/models/Page';
import { MainInfo } from '../../shared/models/MainInfo';
import { Certificate } from '../../shared/models/Certificate';

/*--- App ---*/
export const SET_IS_FULLSCREEN_MENU_OPEN = '[app] Set Is Fullscreen Menu Open';

/*--- Translates and Locale ---*/
export const SET_LOCALE = '[app] Set Locale';
export const SET_TRANSLATES = '[app] Set Translates';
export const FETCH_TRANSLATES = '[app] Fetch Translates';
export const FETCH_TRANSLATES_SUCCESS = '[app] Fetch Translates Success';
export const FETCH_TRANSLATES_FAIL = '[app] Fetch Translates Fail';

/*--- Products ---*/
export const SET_PRODUCTS = '[app] Set Products';
export const FETCH_PRODUCTS = '[app] Fetch Products';
export const FETCH_PRODUCTS_SUCCESS = '[app] Fetch Products Success';
export const FETCH_PRODUCTS_FAIL = '[app] Fetch Products Fail';

/*--- Categories ---*/
export const SET_CATEGORIES = '[app] Set Categories';
export const FETCH_CATEGORIES = '[app] Fetch Categories';
export const FETCH_CATEGORIES_SUCCESS = '[app] Fetch Categories Success';
export const FETCH_CATEGORIES_FAIL = '[app] Fetch Categories Fail';

/*--- Pages content and SEO ---*/
export const SET_PAGES = '[app] Set Pages';
export const FETCH_PAGES = '[app] Fetch Pages';
export const FETCH_PAGES_SUCCESS = '[app] Fetch Pages Success';
export const FETCH_PAGES_FAIL = '[app] Fetch Pages Fail';

/*--- Main Info ---*/
export const SET_MAIN_INFO = '[app] Set Main Info';
export const FETCH_MAIN_INFO = '[app] Fetch Main Info';
export const FETCH_MAIN_INFO_SUCCESS = '[app] Fetch Main Info Success';
export const FETCH_MAIN_INFO_FAIL = '[app] Fetch Main Info Fail';

/*--- Certificates ---*/
export const SET_CERTIFICATES = '[app] Set Certificates';
export const FETCH_CERTIFICATES = '[app] Fetch Certificates';
export const FETCH_CERTIFICATES_SUCCESS = '[app] Fetch Certificates Success';
export const FETCH_CERTIFICATES_FAIL = '[app] Fetch Certificates Fail';

/*--- Submit an Application ---*/
export const SUBMIT_APPLICATION = '[app] Submit Application';
export const SUBMIT_APPLICATION_SUCCESS = '[app] Submit Application Success';
export const SUBMIT_APPLICATION_FAIL = '[app] Submit Application Fail';

/*--- App ---*/
export const setIsFullscreenMenuOpen = createAction(
  SET_IS_FULLSCREEN_MENU_OPEN,
  props<{ isOpen: boolean }>()
);

/*--- Translates and Locale ---*/
export const setLocale = createAction(SET_LOCALE, props<{ locale: Locale }>());
export const setTranslates = createAction(
  SET_TRANSLATES,
  props<{ translates: { [key: string]: Translate } }>()
);
export const fetchTranslates = createAction(FETCH_TRANSLATES);
export const fetchTranslatesSuccess = createAction(FETCH_TRANSLATES_SUCCESS);
export const fetchTranslatesFail = createAction(
  FETCH_TRANSLATES_FAIL,
  props<{ errorMessage: string }>()
);

/*--- Products ---*/
export const setProducts = createAction(
  SET_PRODUCTS,
  props<{ products: Product[] }>()
);
export const fetchProducts = createAction(FETCH_PRODUCTS);
export const fetchProductsSuccess = createAction(FETCH_PRODUCTS_SUCCESS);
export const fetchProductsFail = createAction(
  FETCH_PRODUCTS_FAIL,
  props<{ errorMessage: string }>()
);

/*--- Categories ---*/
export const setCategories = createAction(
  SET_CATEGORIES,
  props<{ categories: Category[] }>()
);
export const fetchCategories = createAction(FETCH_CATEGORIES);
export const fetchCategoriesSuccess = createAction(FETCH_CATEGORIES_SUCCESS);
export const fetchCategoriesFail = createAction(
  FETCH_CATEGORIES_FAIL,
  props<{ errorMessage: string }>()
);

/*--- Pages Content ---*/
export const setPages = createAction(SET_PAGES, props<{ pages: Pages }>());
export const fetchPages = createAction(FETCH_PAGES);
export const fetchPagesSuccess = createAction(FETCH_PAGES_SUCCESS);
export const fetchPagesFail = createAction(
  FETCH_PAGES_FAIL,
  props<{ errorMessage: string }>()
);

/*--- Main Info ---*/
export const setMainInfo = createAction(
  SET_MAIN_INFO,
  props<{ mainInfo: MainInfo }>()
);
export const fetchMainInfo = createAction(FETCH_MAIN_INFO);
export const fetchMainInfoSuccess = createAction(FETCH_MAIN_INFO_SUCCESS);
export const fetchMainInfoFail = createAction(
  FETCH_MAIN_INFO_FAIL,
  props<{ errorMessage: string }>()
);

/*--- Certificates ---*/
export const setCertificates = createAction(
  SET_CERTIFICATES,
  props<{ certificates: Certificate[] }>()
);
export const fetchCertificates = createAction(FETCH_CERTIFICATES);
export const fetchCertificatesSuccess = createAction(
  FETCH_CERTIFICATES_SUCCESS
);
export const fetchCertificatesFail = createAction(
  FETCH_CERTIFICATES_FAIL,
  props<{ errorMessage: string }>()
);

/*--- Submit an Application ---*/
export const submitApplication = createAction(
  SUBMIT_APPLICATION,
  props<{
    userName: string;
    userEmail: string;
    userPhone: string;
    userComment: string;
    userMarketingAgree: boolean;
  }>()
);
export const submitApplicationSuccess = createAction(
  SUBMIT_APPLICATION_SUCCESS,
  props<{ status: boolean }>()
);
export const submitApplicationFail = createAction(
  SUBMIT_APPLICATION_FAIL,
  props<{ errorMessage: string }>()
);
