import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  
  constructor(private http: HttpClient) { }
 
  getLastName(){
  	return this.http.get('http://someaddress.com/api');
  }
}