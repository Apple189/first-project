import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Home1Page } from '../home1/home1';
import { Login1Page } from '../login1/login1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   any;

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  Home1Page(){
    
    this.navCtrl.push(Home1Page);
  };

  Login1Page() {
    this.navCtrl.push(Login1Page);
  }
  ionViewDidEnter() {
    //to disable menu, or
    this.menu.swipeEnable(false);
  }
}

