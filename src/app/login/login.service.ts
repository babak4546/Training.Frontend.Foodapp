import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private backend:BackendService) { }
  login(username:string,password:string){
    console.log(username,password);
  }
}
