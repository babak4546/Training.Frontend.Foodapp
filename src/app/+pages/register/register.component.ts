import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private backend: BackendSecurityService, private fb: FormBuilder, private router: Router) { }
  isBusy: boolean = false;
  message:string='';

  selectedOption!: string;
  RegisterForm = this.fb.group({
    type: ['3'], // default is 3
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern('09[0-9]{9}')]], // Pattern validation for a 10-digit phone number
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d).{8,}$'), Validators.minLength(8)]],
    confirm: ['', Validators.required]

  });
  selectedValue: boolean = true;
  register() {
    this.isBusy = true;
    //  let username: string | undefined = this.RegisterForm.controls.username.value?.toString();
    let password: string | undefined = this.RegisterForm.controls.password.value?.toString();
    let fullname: string | undefined = this.RegisterForm.controls.fullname.value?.toString();
    let email: string | undefined = this.RegisterForm.controls.email.value?.toString();
    let phoneNumber: string | undefined = this.RegisterForm.controls.phoneNumber.value?.toString();
    let type: number | undefined = Number(this.RegisterForm.controls.type.value?.toString());
    // let confirm: string | undefined = this.RegisterForm.controls.confirm.value?.toString();
    //  let address: string | undefined = this.RegisterForm.controls.address.value?.toString();

    this.backend.signup(phoneNumber ?? '', password ?? '', type ?? 3, fullname ?? '', phoneNumber ?? '', email ?? '')

      .subscribe(r =>
      {
        if (r &&(r as any ).serverError) {
             this.message=(r as any).serverError;
             this.isBusy = false;

            } 
        else{
             this.router.navigate(['/login'])
        }
      })
  };

  passwordsMatch(): boolean {
    const pass = this.RegisterForm.controls.password.value?.toString();
    const conf = this.RegisterForm.controls.confirm.value?.toString();
    const selected = this.selectedOption;


    if (conf === pass) {

      return true

    }
    else {

      return false
    }

  }

}
