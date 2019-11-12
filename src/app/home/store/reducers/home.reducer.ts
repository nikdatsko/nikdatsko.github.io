import * as fromActions from '../actions/home.actions';
import { Place } from '../../home.service';
import { DataTypes } from '../../home.enum';

export interface HomeState {
  experience: Place[];
  skills: { [key: string]: string[] };
  loading: string[];
  loaded: string[];
}

export const initialState: HomeState = {
  experience: [],
  skills: null,
  loading: [],
  loaded: []
};

export function reducer(
  state = initialState,
  action: fromActions.HomeActions
): HomeState {
  switch (action.type) {
    case fromActions.LOAD_DATA:
      return {
        ...state,
        loading: [...state.loading, action.payload]
      };

    case fromActions.LOAD_DATA_SUCCESS:
      return {
        ...state,
        [action.payload.type]: action.payload.data,
        loaded: [...state.loaded, action.payload.type],
        loading: state.loading.filter(item => item !== action.payload.type)
      };

    case fromActions.LOAD_DATA_FAIL:
      return {
        ...state,
        loaded: [...state.loaded, action.payload],
        loading: state.loading.filter(item => item !== action.payload)
      };

    default:
      return state;
  }
}
