import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '..//home/home'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname:string;
  pass:string;
  error:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    
    let data={
      uname:this.uname,pass:this.pass
    }
    if(this.uname=="admin" && this.pass=="admin"){
      this.storage.set('uname',this.uname);
      this.navCtrl.setRoot(HomePage)
    }else{
      this.error="Username and password may be incorrect."
    }
    // this.http.post("https://sensenuts-ei.com:4001/dashtok",data)
    // .map(res => res)
    // .subscribe(
    // data=>{
    //   if(data){
        
    //   }else{
    //     this.error="Username and password may be incorrect."
    //   }
       
    // },
    // error=>{this.error="Username and password may be incorrect."}
    // )
    
  }
}
