import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '..//home/home'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname:string;
  pass:string;
  error:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    // let headers=new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin' , '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Accept','application/json');
    // headers.append('content-type','application/json');
    let data={
      uname:this.uname,pass:this.pass
    }
    console.log(data)
    this.http.post("https://sensenuts-ei.com:4001/dashtok",data)
    .map(res => res)
    .subscribe(
    data=>{
      if(data){
        this.navCtrl.setRoot(HomePage)
      }else{
        this.error="Username and password may be incorrect."
      }
       
    },
    error=>{this.error="Username and password may be incorrect."}
    )
    // this.navCtrl.setRoot(HomePage)
  }
}
