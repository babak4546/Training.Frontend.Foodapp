import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private backend:BackendService) { }
  register(username:string,password:string,fullname:string,address:string,email:string,phoneNumber:string,
    restOwnerfullname:string,restOwnerId:string,restOwnerPhonenumber:string,restaurantPhonenumber:string,
    restaurantEUCode:string,restaurantAddress:string,restsursntEmail:string){
  }
}
