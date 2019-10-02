import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import { HomeState } from './../reducers/home.reducer';

export const getHomeState = createSelector(
  fromFeature.getHomeRootState,
  (state: fromFeature.HomeRootState) => (state ? state.home : null)
);

export const getExperience = createSelector(
  getHomeState,
  (state: HomeState) => state.experience
);
export const getSkills = createSelector(
  getHomeState,
  ({ skills }: HomeState) => skills
);
