import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector
} from '@ngrx/store';
import { LocalStorageConfig, localStorageSync } from 'ngrx-store-localstorage';

import * as fromHome from './home.reducer';

export interface HomeRootState {
  home: fromHome.HomeState;
}

export const reducers: ActionReducerMap<HomeRootState> = {
  home: fromHome.reducer
};

export const getHomeRootState = createFeatureSelector<HomeRootState>('home');

export function homeStorage(reducer: ActionReducer<any>): ActionReducer<any> {
  const config: LocalStorageConfig = {
    keys: [
      {
        home: ['experience', 'education', 'skills']
      }
    ],
    rehydrate: true,
    removeOnUndefined: true
  };
  return localStorageSync(config)(reducer);
}
