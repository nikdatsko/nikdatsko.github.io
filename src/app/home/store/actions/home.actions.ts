import { Action } from '@ngrx/store';
import { DataTypes } from '../../home.enum';

export const LOAD_DATA = '[Home] Load Data';
export const LOAD_DATA_SUCCESS = '[Home] Load Data Success';
export const LOAD_DATA_FAIL = '[Home] Load Data Fail';

export class LoadData implements Action {
  readonly type = LOAD_DATA;
  constructor(public payload: DataTypes) {}
}

export class LoadDataSuccess implements Action {
  readonly type = LOAD_DATA_SUCCESS;
  constructor(public payload: { type: DataTypes; data: any }) {}
}

export class LoadDataFail implements Action {
  readonly type = LOAD_DATA_FAIL;
  constructor(public payload: DataTypes) {}
}

export type HomeActions = LoadData | LoadDataSuccess | LoadDataFail;
