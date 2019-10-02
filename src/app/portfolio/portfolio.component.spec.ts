import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let mockPortfolioService;

  beforeEach(
    async(() => {
      mockPortfolioService = jasmine.createSpyObj('PortfolioService', [
        'getProjects'
      ]);
      mockPortfolioService.getProjects.and.returnValue(of([]));
      TestBed.configureTestingModule({
        declarations: [PortfolioComponent],
        providers: [
          { provide: PortfolioService, useValue: mockPortfolioService }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
