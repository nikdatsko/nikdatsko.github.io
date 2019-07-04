import { getRouterState } from './../reducers/index';
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';

export const getRouterStateSelector = createSelector(
  fromReducers.getRouterState,
  x => (x ? x.state : null)
);
export const getRouterUrl = createSelector(
  getRouterStateSelector,
  router => (router ? router.url : null)
);
