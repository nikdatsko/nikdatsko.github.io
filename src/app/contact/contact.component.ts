import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name;
  email;
  message;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const templateParams = {
      reply_to: this.email,
      from_name: this.name,
      message_html: this.message
    };
    emailjs.send(
      'gmail',
      'template_XESJrrPB',
      templateParams,
      'user_epLRYw7lhfXeRFIyhhy04'
    );
  }
}
