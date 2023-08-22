import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI:string='http://localhost:5046';
  constructor(public http:HttpClient) { }
}
