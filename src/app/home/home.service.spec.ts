import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { HomeService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => {
    const spyHttpClient = jasmine.createSpyObj('HttpClient', ['get']);

    return TestBed.configureTestingModule({
      providers: [HomeService, { provide: HttpClient, useValue: spyHttpClient }]
    });
  });

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});
