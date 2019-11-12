import { HttpErrorResponse } from '@angular/common/http';
import { HomeEffects } from './home.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { HomeService } from '../../home.service';
import { Observable, of, throwError } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';
import * as fromActions from '../actions/home.actions';
import { Place } from '../../home.service';
import { DataTypes } from '../../home.enum';

describe('HomeEffects', () => {
  let actionsStream: Observable<any>;
  let effects: HomeEffects;
  let mockHomeService: jasmine.SpyObj<HomeService>;

  beforeEach(() => {
    mockHomeService = jasmine.createSpyObj<HomeService>('HomeService', [
      'getData'
    ]);
    mockHomeService.getData.and.returnValue(of([] as Place[]));

    TestBed.configureTestingModule({
      providers: [
        HomeEffects,
        { provide: HomeService, useValue: mockHomeService },
        provideMockActions(() => actionsStream)
      ]
    });

    effects = TestBed.get(HomeEffects);
  });

  describe('loadData', () => {
    it('should return LoadDataSuccess action', () => {
      const action = new fromActions.LoadData(DataTypes.experience);
      const complition = new fromActions.LoadDataSuccess({
        type: DataTypes.experience,
        data: []
      });

      actionsStream = hot('-a', { a: action });
      const expected = cold('-b', { b: complition });

      expect(effects.loadData).toBeObservable(expected);
      expect(mockHomeService.getData).toHaveBeenCalledWith(
        DataTypes.experience
      );
    });

    it('should return LoadDataFail action', () => {
      mockHomeService.getData.and.returnValue(
        throwError({} as HttpErrorResponse)
      );
      const action = new fromActions.LoadData(DataTypes.experience);
      const complition = new fromActions.LoadDataFail(DataTypes.experience);

      actionsStream = hot('-a', { a: action });
      const expected = cold('-b', { b: complition });

      expect(effects.loadData).toBeObservable(expected);
    });
  });
});
