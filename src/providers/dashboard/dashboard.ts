import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardProvider {
  private get_users="https://jsonplaceholder.typicode.com/users";
  constructor(public http: HttpClient) {
   
  }
  getUsers(){
    return this.http.get(this.get_users)
    .catch(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message|| "server error");
  }
}
