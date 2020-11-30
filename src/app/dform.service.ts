import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DformService {
_url='http://localhost:3000/api/form/';
  constructor(private _http:HttpClient) { }
  register(userData){
   return this._http.post<any>(this._url,userData);
  }
getlist(){
  return this._http.get('http://localhost:3000/api/list/')                     //get list method for http api
}
}
