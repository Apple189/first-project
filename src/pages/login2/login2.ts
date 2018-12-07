import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
declare var require: any;
/**
 * Generated class for the Login2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html',
})
export class Login2Page {
  otp: Number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login2Page');
  }
  DashboardPage()
  {
    this.navCtrl.push(DashboardPage);
  }
 /* VerifyOTP(otp){
    //this.otp=otp;
    const SendOtp = require('sendotp');
    const sendOtp = new SendOtp('235445A2rz8ZaJqx5b8e162b');
    sendOtp.verify(otp, "4365", function (error, data) {
    console.log(data); // data object with keys 'message' and 'type'
    if(data.type == 'success') console.log('OTP verified successfully')
    if(data.type == 'error') console.log('OTP verification failed')
    });
  }*/

}
