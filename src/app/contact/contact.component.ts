import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  constructor(private http: HttpClient, private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  errorMsg() {
    if (this.email.hasError('required')) {
      return 'Your email would be helpful.';
    }

    return this.email.hasError('email') ? `That's not an email...` : '';
  }

  processForm() {
    this.PostMessage(this.FormData())
    .subscribe(response => {
      console.log(response)
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
  }

  FormData() {
    return this.builder.group({
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
