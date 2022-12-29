import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';
import { NetlifyFormsService } from '../netlify-forms.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  FormData: FormGroup | null=null; 
  
  name: string = "";
  email: string ="";
  message: string = "";


  constructor(private builder: FormBuilder, 
    private contact: EmailService, 
    private netlifyForms: NetlifyFormsService, 
    private router: Router,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
      })
  }

  // onSubmit(FormData) {
  //   this.contact.SendEmail(FormData)
  //   .subscribe(response => {
  //     location.href = location.origin + '/home';
  //   }, error => {
  //   console.warn(error.responseText)
  //   console.log({ error })
  // })
  //   // send the name, email, and message to the server or email address
  // }

  onSubmit() {
    this.netlifyForms.submitContacts(this.FormData.value).subscribe(
       () => {
         this.FormData.reset();

         this._snackBar.open('We have received your message, we shall get back to you within 2/3 business days', 'Great!');
       },
       err => {
        this._snackBar.open('Sorry something went wrong', 'Try again');
       }
     );
    }
    
  

}
