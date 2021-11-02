import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedResources } from '../auth-config';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = protectedResources.todoListApi.endpoint;

  constructor(private http: HttpClient) { }

  getData() {
    debugger;
    return this.http.get<string>(this.url + "Values"); 
  }

}
