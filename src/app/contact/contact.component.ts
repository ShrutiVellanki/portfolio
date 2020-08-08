import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  api = 'https://mailthis.to/shruti.vellanki.96@gmail.com';
  validate = false;

  constructor(private http: HttpClient, private builder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  errorMsg() {
    if (this.email.hasError('required')) {
      return 'Your email would be helpful.';
    }

    return this.email.hasError('email') ? `That's not an email...` : '';
  }

  processForm(event) {    
    console.log(event)
    this.openToastResetForm()

  }


  openToastResetForm() {
    this._snackBar.open('Email Sent!', 'OK', {
      duration: 2000,
    });

    this.firstName.reset();
    this.email.reset()
    this.subject.reset()
    this.message.reset()
    Array.from([this.firstName, this.email, this.subject, this.message]).forEach(field => { 
       field.markAsUntouched({ onlySelf: true });
    });
  }

  FormData() {
    this.builder.group({
      FullName: this.firstName,
      Email: this.email,
      Subjec: this.subject,
      Message: this.message
    })
  }

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
      map(
        (response) => {
          console.log(response)
          if (response) {
            return response
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
