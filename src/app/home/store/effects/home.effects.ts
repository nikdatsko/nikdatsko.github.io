import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HomeService } from './../../home.service';
import * as fromActions from '../actions/home.actions';

@Injectable()
export class HomeEffects {
  constructor(
    private actionStream: Actions,
    private homeService: HomeService
  ) {}

  @Effect()
  loadData = this.actionStream.pipe(
    ofType(fromActions.LOAD_DATA),
    map((action: fromActions.LoadData) => action.payload),
    mergeMap(type => {
      return this.homeService
        .getData(type)
        .pipe(
          map(data => new fromActions.LoadDataSuccess({ type, data })),
          catchError(error => from([new fromActions.LoadDataFail(type)]))
        );
    })
  );
}
