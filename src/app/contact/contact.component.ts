import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted: boolean;
  isFail: boolean;
  occupations: string[] = [
    'Business owner',
    'HR manager',
    'Developer',
    'Other'
  ];
  needs: string[] = ['Permanent job', 'Project', 'Consultation'];
  result: string = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setForm();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    const contactFormValue = {
      ...this.contactForm.value,
      needs: this.convertToValue('needs')
    };
    console.log(contactFormValue);
    this.result = 'Your message has been sent successfully!';
    this.contactForm.reset();
  }

  private convertToValue(key: string) {
    return this.contactForm.value[key]
      .map((x, i) => x && this[key][i])
      .filter(x => !!x);
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
