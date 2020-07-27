import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  message = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  errorMsg() {
    if (this.email.hasError('required')) {
      return 'Your email would be helpful.';
    }

    return this.email.hasError('email') ? `That's not an email...` : '';
  }

}
 