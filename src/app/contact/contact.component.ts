import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: UntypedFormGroup;
  isSubmitted: boolean;
  isFail: boolean;
  occupations: string[] = [
    'Business owner',
    'HR manager',
    'Developer',
    'Friend'
  ];
  needs: string[] = ['Permanent job', 'Project', 'Consultation'];
  result: string = null;
  private unsubscribeStream = new Subject();

  constructor(
    private fb: UntypedFormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.setForm();
    this.contactService
      .getResult()
      .pipe(takeUntil(this.unsubscribeStream))
      .subscribe(({ isFail, message }) => {
        this.isSubmitted = false;
        this.isFail = isFail;
        this.result = message;
        if (!isFail) {
          this.contactForm.reset();
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribeStream.next();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    this.isSubmitted = true;
    this.result = null;
    const needs = this.contactForm.value.needs
      .map((x, i) => x && this.needs[i])
      .filter(x => !!x)
      .join(', ');
    const contactFormValue = {
      ...this.contactForm.value,
      needs: needs || 'unspecified reason'
    };
    this.contactService.submitContactForm(contactFormValue);
  }

  private setForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      occupation: ['', Validators.required],
      needs: this.fb.array(this.needs.map(x => !1)),
      message: ['', Validators.required]
    });
  }
}
