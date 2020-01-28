import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";



@Injectable({
  providedIn: 'root'
})

export class ServiceAllService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
    ) { }

get(urlTable: string){
  this.http.get(environment.api_base + urlTable);
}

}
