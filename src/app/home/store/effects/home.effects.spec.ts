import { HttpErrorResponse } from '@angular/common/http';
import { HomeEffects } from './home.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { HomeService } from '../../home.service';
import { Observable, of, throwError } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';
import * as fromActions from '../actions/home.actions';

describe('HomeEffects', () => {
  let actionsStream: Observable<any>;
  let effects: HomeEffects;
  let mockHomeService: jasmine.SpyObj<HomeService>;

  beforeEach(() => {
    mockHomeService = jasmine.createSpyObj<HomeService>('HomeService', [
      'getData'
    ]);
    mockHomeService.getData.and.returnValue(of([]));

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
      const action = new fromActions.LoadData('type');
      const complition = new fromActions.LoadDataSuccess({
        type: 'type',
        data: []
      });

      actionsStream = hot('-a', { a: action });
      const expected = cold('-b', { b: complition });

      expect(effects.loadData).toBeObservable(expected);
      expect(mockHomeService.getData).toHaveBeenCalledWith('type');
    });

    it('should return LoadDataFail action', () => {
      mockHomeService.getData.and.returnValue(
        throwError({} as HttpErrorResponse)
      );
      const action = new fromActions.LoadData('type');
      const complition = new fromActions.LoadDataFail();

      actionsStream = hot('-a', { a: action });
      const expected = cold('-b', { b: complition });

      expect(effects.loadData).toBeObservable(expected);
    });
  });
});
