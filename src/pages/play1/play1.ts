import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Answer1Page } from '../answer1/answer1';

/**
 * Generated class for the Play1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play1',
  templateUrl: 'play1.html',
})
export class Play1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Play1Page');
  }
answer()
{
  this.navCtrl.push(Answer1Page);
}
}
