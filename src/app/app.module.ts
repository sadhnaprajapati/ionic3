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
import { HttpClientModule} from "@angular/common/http"
import { DashboardProvider } from '../providers/dashboard/dashboard';
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
    SliderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
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
    NotificationPage,SliderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DashboardProvider
  ]
})
export class AppModule {}
