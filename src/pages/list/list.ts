import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardProvider} from '../../providers/dashboard/dashboard';
import {UserdetailsPage} from '..//userdetails/userdetails';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  users:any;
  errorMsg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DashboardProvider) {
  }

  ionViewDidLoad() {
    
    this.getUsersList();
  }
  getUsersList(){
    this.service.getUsers()
    .subscribe(
      data=>this.users=data,
      error=>this.errorMsg=error)
  }
  getUserDetails(value){
    this.navCtrl.push(UserdetailsPage,{data:value});
  }
}
