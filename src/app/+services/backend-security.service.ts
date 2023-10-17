import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityService extends BackendService {
  signin(username: string, password: string) {
    return this.http.post(this.securityAPI + '/signin', { username: username, password: password })
  }
  adminsignin(username: string, password: string) {
    return this.http.post(this.securityAPI + '/adminsignin', { username: username, password: password })
  }
  signup(username: string, password: string, type: number, fullname: string, phoneNumber: string, email: string) {
    {
      return this.http.post(this.securityAPI+'/signup',{
        username:username,
        password:password,
        fullname:fullname,
        phoneNumber:phoneNumber,
        email:email,
        type:type
      }).pipe(
        catchError(this.handleError)
      );
    }
  }
    private handleError(error:HttpErrorResponse) {
      if (error.status==500) {

        return throwError(()=> new Error (error.error.error))
      }
      return "OK";
    }
  }

 