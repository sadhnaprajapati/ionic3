import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  public userId:number;
  public title:string;
  public body:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }
  newBlog(){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    let data={userId:this.userId,title:this.title,body:this.body};
    this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(data),{headers:headers})
    .map(res=>res)
    .subscribe(data=>{console.log(data)})
  }
}
