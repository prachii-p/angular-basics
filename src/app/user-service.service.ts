import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  value="";
  getUserDetails()
  {
    return "Hello";
  }
  setUserValue(value: string)
  {
    this.value=value;
    console.log(this.value);
  }

  private apiUrl = 'https://date.nager.at/api/v3/publicholidays/2023/AT';
  constructor(private http : HttpClient) 
  {   
  }
  fetchData():Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  
}
