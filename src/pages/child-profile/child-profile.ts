import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ChildProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-child-profile',
  templateUrl: 'child-profile.html',
})
export class ChildProfilePage {
  users:any;
  a:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public http: HttpClient) {
    this.getUsers();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildProfilePage');
  }
  getUsers() {
    this.apiProvider.getUsers()
    .then(data => {
      this.users = data;
     // console.log(this.users);
      this.a=this.users.data;
      
      console.log(this.a);
    });
  }
}
