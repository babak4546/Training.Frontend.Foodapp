import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private backend: BackendSecurityService, private router: Router) { }
  username = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]);
  password = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]);
  isBusy: boolean = false;
  message: string = '';
  keepMe: boolean = false;

  login() {
    this.isBusy = true;
    let username: string | undefined = this.username.value?.toString();
    let password: string | undefined = this.password.value?.toString();
    // this.backend.signin(this.username.value??'',this.password.value??'');
    this.backend.signin(username ?? '', password ?? '').subscribe(r => {
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
          case 'RestaurantOwner':
            this.router.navigate(['/restaurants'])
            break;
          case 'Customer':
            this.router.navigate(['/customers'])
            break;
        }
      }
      this.isBusy = false;

    });

  }

}
