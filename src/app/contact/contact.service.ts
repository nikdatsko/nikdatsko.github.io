import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private result: Subject<{ isFail: boolean; message: string }> = new Subject();

  constructor() {}

  getResult() {
    return this.result;
  }

  submitContactForm(contactFormValue) {
    emailjs
      .send(
        'gmail',
        'nikdatsko_contact_form',
        contactFormValue,
        'user_epLRYw7lhfXeRFIyhhy04'
      )
      .then(() => {
        this.result.next({
          isFail: false,
          message: 'Your message has been sent successfully!'
        });
      })
      .catch(error => {
        console.log(error);
        let message;
        if (error.status) {
          if (error.status === 405) {
            message = `It's impossible to send messages from here so if you really want to use this form do it from
            <a href="http://nik.niklenburg.com/contact" target="_blank">nik.niklenburg.com</a>`;
          } else if (error.status === -1) {
            message =
              'Message sending has failed. Please, check you Internet connection or try later.';
          } else {
            message = error.status + '. ' + error.message;
          }
        } else {
          message = error;
        }
        this.result.next({
          isFail: true,
          message
        });
      });
  }
}
