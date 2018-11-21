import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdetails',
  templateUrl: 'userdetails.html',
})
export class UserdetailsPage {
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user=navParams.get('data');
    console.log(this.user)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdetailsPage');
  }

}
