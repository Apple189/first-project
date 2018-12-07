import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home1Page } from '../pages/home1/home1';
import { RegistrationPage } from '../pages/registration/registration';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MenuComponent } from '../components/menu/menu';
import { Login1Page } from '../pages/login1/login1';
import { Login2Page } from '../pages/login2/login2';
import { ChildProfilePage } from '../pages/child-profile/child-profile';
import { ParentProfilePage } from '../pages/parent-profile/parent-profile';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { CoursePage } from '../pages/course/course';
import { Play1Page } from '../pages/play1/play1';
import { Answer1Page } from '../pages/answer1/answer1';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Home1Page,
    RegistrationPage,
    DashboardPage,
    MenuComponent,
    Login1Page,
    Login2Page,
    ChildProfilePage,
    ParentProfilePage,
    SubscriptionPage,
    ChildProfilePage,
    CoursePage,
    Play1Page,
    Answer1Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Home1Page,
    RegistrationPage,
    DashboardPage,
    Login1Page,
    Login2Page,
    ChildProfilePage,
    ParentProfilePage,
    SubscriptionPage,
    ChildProfilePage,
    CoursePage, 
    Play1Page,
    Answer1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
  ]
})
export class AppModule {}
