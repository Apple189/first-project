import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChildProfilePage } from '../child-profile/child-profile';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  users:any;
  a:any;b:any
  packages:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public http: HttpClient) {
    this.getUsers();
    this.getPackages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  childProfilePage()
  {
    this.navCtrl.push(ChildProfilePage);
  }
  getUsers() {
    this.apiProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
      this.a=this.users.data;
    });
  }
  getPackages() {
    this.apiProvider.getPackages()
    .then(data=>{
      this.packages=data;
      //console.log(this.packages);
      this.b=this.packages.data.items.filter(item=>item.package_id==="5acd9f2c6ec3c817e638fa93");
      console.log(this.b);
    });
  }
}
