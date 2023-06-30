import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginService){}
  username = new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(25)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(32)]);
  login(){
    this.loginService.login(this.username.value??'',this.password.value??'');
  }
}
