import * as fromActions from '../actions/home.actions';
import { Place } from '../../home.service';

export interface HomeState {
  experience: Place[];
  skills: any;
}

export const initialState: HomeState = {
  experience: [],
  skills: null
};

export function reducer(
  state = initialState,
  action: fromActions.HomeActions
): HomeState {
  switch (action.type) {
    case fromActions.LOAD_DATA_SUCCESS:
      return {
        ...state,
        [action.payload.type]: action.payload.data
      };

    default:
      return state;
  }
}
