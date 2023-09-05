import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent {

  constructor(private backend: BackendSecurityService, private router: Router) { }
  username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]);
  isBusy: boolean = false;
  message: string = '';
  keepMe: boolean = false;

  login() {
    this.isBusy = true;
    let username: string | undefined = this.username.value?.toString();
    let password: string | undefined = this.password.value?.toString();
    // this.backend.signin(this.username.value??'',this.password.value??'');
    this.backend.adminsignin(username ?? '', password ?? '').subscribe(r => {
      let result = r as any;
      if (result.isOk == false) {
        this.message = (r as any).message;
        this.password.setValue('');
        this.username.setValue('');
      } else {
        sessionStorage.setItem('token', result.token)
        this.message = (r as any).message;
        if (this.keepMe == true) {
          localStorage.setItem('token', result.token)
        }
        switch (result.type) {
          case 'SystemAdmin':
            this.router.navigate(['/admins']);
            break;
        }
      }
      this.isBusy = false;

    });

  }

}
