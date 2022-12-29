import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  onSubmit() {
    this.netlifyForms.submitContacts(this.FormData.value).subscribe(
       () => {
        this.FormData.reset();

        Object.keys(this.FormData.controls).forEach(key =>{
          this.FormData.controls[key].setErrors(null)
       });

         this._snackBar.open('We have received your message, we shall get back to you within 2/3 business days', 'Great!');
       },
       err => {

        this.FormData.reset();

        Object.keys(this.FormData.controls).forEach(key =>{
          this.FormData.controls[key].setErrors(null)
       });

        this._snackBar.open('Sorry something went wrong', ' I`ll try again');
       }
     );
    }
}
