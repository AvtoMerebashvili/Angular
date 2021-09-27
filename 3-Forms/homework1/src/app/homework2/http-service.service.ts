import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { currency } from './CurrencyInteface'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private _URL = "http://data.fixer.io/api/latest?access_key=b2a56290e65e115411bb073a756e2908"
 
  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<currency>(this._URL);
  }
}
