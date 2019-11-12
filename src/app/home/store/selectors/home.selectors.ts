import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import { HomeState } from './../reducers/home.reducer';
import { DataTypes } from '../../home.enum';

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
export const getExperienceLoading = createSelector(
  getHomeState,
  ({ loading, loaded }: HomeState) =>
    loading.includes(DataTypes.experience) || !loaded.includes(DataTypes.experience)
);
export const getSkillsLoading = createSelector(
  getHomeState,
  ({ loading, loaded }: HomeState) =>
    loading.includes(DataTypes.skills) || !loaded.includes(DataTypes.skills)
);
