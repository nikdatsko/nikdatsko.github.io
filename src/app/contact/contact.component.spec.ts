import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let mockContactService;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(
    async(() => {
      mockContactService = jasmine.createSpyObj('ContactService', [
        'submitContactForm',
        'getResult'
      ]);
      mockContactService.getResult.and.returnValue(
        of({ isFail: false, message: 'All good!' })
      );

      TestBed.configureTestingModule({
        declarations: [ContactComponent],
        imports: [ReactiveFormsModule],
        providers: [
          { provide: FormBuilder, useValue: formBuilder },
          { provide: ContactService, useValue: mockContactService }
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(
    async(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
