import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockHomeService;

  beforeEach(
    async(() => {
      mockHomeService = jasmine.createSpyObj('HomeService', ['getExperience']);
      mockHomeService.getExperience.and.returnValue(of([]));
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [{ provide: HomeService, useValue: mockHomeService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
