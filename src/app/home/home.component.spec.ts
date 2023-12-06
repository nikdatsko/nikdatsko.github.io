import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockStore;

  const initialState = {
    router: {
      state: {
        url: ''
      }
    },
    home: {
      home: {
        experience: [],
        skills: null,
        loading: [],
        loaded: []
      }
    }
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [provideMockStore({ initialState })]
      }).compileComponents();

      mockStore = TestBed.get(Store);
      spyOn(mockStore, 'pipe').and.callThrough();
      spyOn(mockStore, 'dispatch').and.callThrough();
    })
  );

  beforeEach(
    waitForAsync(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
