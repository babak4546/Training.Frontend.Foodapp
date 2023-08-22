import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private registerService: BackendSecurityService) { }
  selectedOption!: string;
  checkPasswords: boolean = false;
  username = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]);
  fullname = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]);
  address = new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]);
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]);
  email = new FormControl('', [Validators.email, Validators.maxLength(35)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]);
  confirm = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]);

  restOwnerfullname = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]);

  restOwnerId = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(18)]);
  restOwnerPhonenumber = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]);
  restaurantPhonenumber = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]);
  restaurantEUCode = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(18)]);
  restaurantAddress = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]);
  restaurantUsername = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]);
  restaurantPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]);
  restaurantConfirmPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]);
  checkPassword() {
    if (this.selectedOption == 'customer') {
      if (this.password.value == this.confirm.value) {
        this.checkPasswords = true;
      }
      else {
        this.checkPasswords = false;
      }
    }
    else if (this.selectedOption == 'restaurant') {
      if (this.restaurantPassword != this.restaurantConfirmPassword) {
        this.checkPasswords = false;
      }
      else {
        this.checkPasswords = true;
      }
    }

  // }
  // register() {
  //   if (this.selectedOption == 'customer') {
  //     this.registerService.register(
  //       this.username.value ?? '',
  //       this.fullname.value ?? '',
  //       this.address.value ?? '',
  //       this.phoneNumber.value ?? '',
  //       this.email.value ?? '',
  //       this.password.value ?? '',)
  //   }
  //   else if (this.selectedOption == 'restaurant') {
  //     this.registerService.registerRestaurant(
  //       this.restOwnerfullname.value ?? '',
  //       this.restOwnerId.value ?? '',
  //       this.restOwnerPhonenumber.value ?? '',
  //       this.restaurantPhonenumber.value ?? '',
  //       this.restaurantEUCode.value ?? '',
  //       this.restaurantAddress.value ?? '',
  //       this.restaurantUsername.value ?? '',)
  //   }

  }
}
