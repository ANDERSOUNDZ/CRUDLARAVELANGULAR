import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private metodosGetPostUpdateDelete1: HttpClient
  ) { }

  get(getTabla: string){
    return this.metodosGetPostUpdateDelete1.get(environment.API_data + getTabla);
  };

}
