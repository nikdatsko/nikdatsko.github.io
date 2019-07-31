import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import { HomeState } from './../reducers/home.reducer';

export const getHomeState = createSelector(
  fromFeature.getHomeRootState,
  (state: fromFeature.HomeRootState) => state.home
);

export const getExperience = createSelector(
  getHomeState,
  (state: HomeState) => state.experience
);
export const getEducation = createSelector(
  getHomeState,
  ({ education }: HomeState) => education
);
export const getSkills = createSelector(
  getHomeState,
  ({ skills }: HomeState) => skills
);
