import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm;
  api = 'https://mailthis.to/shruti.vellanki.96@gmail.com';
  validate = false;

  constructor(private http: HttpClient, private builder: FormBuilder, private _snackBar: MatSnackBar) {
    this.contactForm = this.builder.group({
      message: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }

  get subject() {
    return this.contactForm.controls.subject;
  }

  get email() {
    return this.contactForm.controls.email;
  }

  get firstName() {
    return this.contactForm.controls.firstName;
  }

  get message() {
    return this.contactForm.controls.message;
  }

  errorMsg() {
    if (this.email.hasError('required')) {
      return 'Your email would be helpful.';
    }

    return this.email.hasError('email') ? `That's not an email...` : '';
  }

  processForm(event) {    
    console.log(event)
    if(this.contactForm.valid) {
      this._snackBar.open('Email Sent!', 'OK', {
        duration: 2000,
      });
      event.target.reset()
      this.contactForm.reset()
    }
  }
}
