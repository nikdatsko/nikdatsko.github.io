import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { FooterComponent } from './footer.component';
import { of } from 'rxjs';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let mockStore;

  const initialState = {
    router: {
      state: {
        url: ''
      }
    }
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FooterComponent],
        providers: [provideMockStore({ initialState })]
      }).compileComponents();

      mockStore = TestBed.get(Store);
      spyOn(mockStore, 'pipe').and.callThrough();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
