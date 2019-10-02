import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  beforeEach(() => {
    const spyHttpClient = jasmine.createSpyObj('HttpClient', ['get']);

    return TestBed.configureTestingModule({
      providers: [
        PortfolioService,
        { provide: HttpClient, useValue: spyHttpClient }
      ]
    });
  });

  it('should be created', () => {
    const service: PortfolioService = TestBed.get(PortfolioService);
    expect(service).toBeTruthy();
  });
});
