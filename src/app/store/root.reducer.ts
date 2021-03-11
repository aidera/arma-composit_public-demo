import { ActionReducerMap } from '@ngrx/store';

import * as fromApp from './app/app.reducer';

export interface State {
  app: fromApp.AppState;
}

export const rootReducer: ActionReducerMap<State> = {
  app: fromApp.appReducer,
};
