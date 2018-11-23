import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { ChartPage } from '../pages/chart/chart';
import { FormPage } from '../pages/form/form';
import { UserdetailsPage } from '../pages/userdetails/userdetails';
import { NotificationPage } from '../pages/notification/notification';
import { SliderPage } from '../pages/slider/slider';
import { AccountPage } from '../pages/account/account';
import { HttpClientModule} from "@angular/common/http"
import { DashboardProvider } from '../providers/dashboard/dashboard';
import { IonicStorageModule } from '@ionic/storage';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    ChartPage,
    FormPage,
    UserdetailsPage,
    NotificationPage,
    SliderPage,AccountPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TooltipsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    ChartPage,
    FormPage,
    UserdetailsPage,
    NotificationPage,SliderPage,AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DashboardProvider
  ]
})
export class AppModule {}
