import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login2Page } from '../login2/login2';
declare var require: any;
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the Login1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {
 
  a:any;
  mobile="";
  //require: any;
  
  constructor(private navCtrl: NavController,/*public httpClient: HttpClient,*/ public navParams: NavParams) {
  //this.login1=this.httpClient.get('http://api.toffeeride.in/v1/accounts') 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login1Page');
  }
  Login2Page() {
    console.log("Continue");
    this.navCtrl.push(Login2Page);
  }
  otp(){
    const SendOtp = require('sendotp');
    const sendOtp = new SendOtp('240858AB764xU45bb4a2d1');
    sendOtp.send(this.mobile, "TOFFRD", function (error, data) {
    console.log(data);
 
    });
    sendOtp.setOtpExpiry('90');
    this.navCtrl.push(Login2Page);
  }
  
}
