import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector
} from '@ngrx/store';
import { LocalStorageConfig, localStorageSync } from 'ngrx-store-localstorage';
import { DataTypes } from '../../home.enum';

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
        home: [DataTypes.experience, DataTypes.skills, 'loaded', 'loading']
      }
    ],
    rehydrate: true,
    removeOnUndefined: true
  };
  return localStorageSync(config)(reducer);
}
