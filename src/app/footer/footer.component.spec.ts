import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './footer.component';
import { of } from 'rxjs';

class MockRouter {
  events = of(
    new NavigationEnd(0, 'http://localhost:4200/', 'http://localhost:4200/')
  );
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FooterComponent],
        providers: [{ provide: Router, useClass: MockRouter }]
      }).compileComponents();
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
