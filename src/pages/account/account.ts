import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoginPage} from '..//login/login'
import { ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  logOut(){
    this.storage.remove('uname');
    this.storage.get('uname').then((val) => {
      if(!val){
        this.navCtrl.setRoot(LoginPage);
        let toast = this.toastCtrl.create({
          message: 'Logout successfully',
          duration: 2000,
          position: 'top'
        });
        toast.present();
        
      }
    });
  }
}
