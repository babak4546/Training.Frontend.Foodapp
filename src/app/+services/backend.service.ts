import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI: string = 'http://localhost:5046';
  constructor(public http: HttpClient) { }
  mypost(url: string, data: any) {
    return this.http.post(url, data)
      .pipe(
        catchError(err => this.handleError(err))
)
  }
  myget(url: string,) {
    return this.http.get(url)
      .pipe(
        catchError(err=>this.handleError(err))
      )
  }
  handleError(err: any) {

      if (err.status == 500) {

        return of({ severError: err.error.error });
      }
      return of({ serverError: 'Connection error' })
    
  }
}

