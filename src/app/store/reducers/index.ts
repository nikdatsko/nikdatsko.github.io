import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromRouterStore from '@ngrx/router-store';
import * as fromRouter from './router.reducer';

export interface State {
  router: fromRouterStore.RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouterStore.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouterStore.RouterReducerState<fromRouter.RouterStateUrl>
>('router');
