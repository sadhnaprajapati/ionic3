import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardProvider {
  private get_users="https://jsonplaceholder.typicode.com/users";
  constructor(public http: HttpClient) {
   
  }
  getUsers(){
    return this.http.get(this.get_users)
    .map(res=>res)
  }
}
