import { getRouterState } from './../reducers/index';
import { createSelector } from '@ngrx/store';
import { getRouterUrl } from './router.selectors';

export const getFooterWord = createSelector(
  getRouterUrl,
  url => (url === '/portfolio' ? 'portfolio' : 'resumé')
);
