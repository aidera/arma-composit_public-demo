import { createSelector } from '@ngrx/store';

import { State } from '../root.reducer';
import { AppState } from './app.reducer';
import { Locale } from '../../shared/models/Locale';

export const selectAll = (state: State) => state.app;

/*--- App ---*/
export const selectIsFullScreenMenuOpen = createSelector(
  selectAll,
  (state: AppState) => state.isFullScreenMenuOpen
);

/*--- Translates and Locale ---*/
export const selectLocale = createSelector(
  selectAll,
  (state: AppState) =>
    (localStorage.getItem('lang') as Locale) || ('ua' as Locale)
);

export const selectTranslates = createSelector(
  selectAll,
  (state: AppState) => state.translates
);

export const selectTranslatesAreFetching = createSelector(
  selectAll,
  (state: AppState) => state.translatesAreFetching
);

export const selectTranslatesSuccess = createSelector(
  selectAll,
  (state: AppState) => state.translatesSuccess
);

export const selectTranslatesFailMessage = createSelector(
  selectAll,
  (state: AppState) => state.translatesFailMessage
);

/*--- Products ---*/
export const selectProducts = createSelector(
  selectAll,
  (state: AppState) => state.products
);

export const selectProductsAreFetching = createSelector(
  selectAll,
  (state: AppState) => state.productsAreFetching
);

export const selectProductsSuccess = createSelector(
  selectAll,
  (state: AppState) => state.productsSuccess
);

export const selectProductsFailMessage = createSelector(
  selectAll,
  (state: AppState) => state.productsFailMessage
);

/*--- Categories ---*/
export const selectCategories = createSelector(
  selectAll,
  (state: AppState) => state.categories
);

export const selectCategoriesAreFetching = createSelector(
  selectAll,
  (state: AppState) => state.categoriesAreFetching
);

export const selectCategoriesSuccess = createSelector(
  selectAll,
  (state: AppState) => state.categoriesSuccess
);

export const selectCategoriesFailMessage = createSelector(
  selectAll,
  (state: AppState) => state.categoriesFailMessage
);

/*--- Pages content and SEO ---*/
export const selectPages = createSelector(
  selectAll,
  (state: AppState) => state.pages
);

export const selectPagesIsFetching = createSelector(
  selectAll,
  (state: AppState) => state.pagesIsFetching
);

export const selectPagesSuccess = createSelector(
  selectAll,
  (state: AppState) => state.pagesSuccess
);

export const selectPagesFailMessage = createSelector(
  selectAll,
  (state: AppState) => state.pagesFailMessage
);

/*--- Main Info ---*/
export const selectMainInfo = createSelector(
  selectAll,
  (state: AppState) => state.mainInfo
);

export const selectMainInfoIsFetching = createSelector(
  selectAll,
  (state: AppState) => state.mainInfoIsFetching
);

export const selectMainInfoSuccess = createSelector(
  selectAll,
  (state: AppState) => state.mainInfoSuccess
);

export const selectMainInfoFailMessage = createSelector(
  selectAll,
  (state: AppState) => state.mainInfoFailMessage
);

/*--- Certificates ---*/
export const selectCertificates = createSelector(
  selectAll,
  (state: AppState) => state.certificates
);

export const selectCertificatesIsFetching = createSelector(
  selectAll,
  (state: AppState) => state.certificatesIsFetching
);

export const selectCertificatesSuccess = createSelector(
  selectAll,
  (state: AppState) => state.certificatesSuccess
);

export const selectCertificatesFailMessage = createSelector(
  selectAll,
  (state: AppState) => state.certificatesFailMessage
);

/*--- Submit an Application ---*/
export const selectSubmitApplicationIsFetching = createSelector(
  selectAll,
  (state: AppState) => state.submitApplicationIsFetching
);

export const selectSubmitApplicationSuccess = createSelector(
  selectAll,
  (state: AppState) => state.submitApplicationSuccess
);

export const selectSubmitApplicationFailMessage = createSelector(
  selectAll,
  (state: AppState) => state.submitApplicationFailMessage
);
