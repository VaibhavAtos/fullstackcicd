import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  
  constructor(private http:HttpClient) { }

  test(){
    return this.http.get('http://localhost:5000/test');
  }


}
