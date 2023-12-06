import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockStore;

  const initialState = {
    router: {
      state: {
        url: ''
      }
    }
  };

  class MockRouter {
    navigate = {
      then: () => {}
    };
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        providers: [
          { provide: Router, useClass: MockRouter },
          provideMockStore({ initialState })
        ]
      }).compileComponents();

      mockStore = TestBed.get(Store);
      spyOn(mockStore, 'pipe').and.callThrough();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
