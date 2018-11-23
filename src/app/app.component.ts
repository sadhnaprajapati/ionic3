import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChartPage } from '../pages/chart/chart';
import { LoginPage } from '../pages/login/login';
import { FormPage } from '../pages/form/form';
import { SliderPage } from '../pages/slider/slider';
import { AccountPage } from '../pages/account/account';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage ,icon:'home'},
      { title: 'List', component: ListPage ,icon:'list'},
      { title: 'Chart', component: ChartPage,icon:'stats' },
      { title: 'Form', component: FormPage ,icon:'information-circle'},
      { title: 'Slider', component: SliderPage ,icon:'albums'},
      { title: 'My Account', component: AccountPage ,icon:'contact'},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('uname').then((val) => {
        if(val){
          this.rootPage=HomePage;
        }else{
          this.rootPage=LoginPage;
        }
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
