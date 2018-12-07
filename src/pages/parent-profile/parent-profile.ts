import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ParentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent-profile',
  templateUrl: 'parent-profile.html',
})
export class ParentProfilePage {
  users:any;
  a:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiProvider: ApiProvider) {
    this.getParent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentProfilePage');
  }
  getParent() {
    this.apiProvider.getParent()
    .then(data => {
      this.users = data;
      console.log(this.users);
      this.a=this.users.data;
    });
  }
}
