import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  //data: any;
   api: string="http://api.toffeeride.in/v1/accounts";
   api1: string="http://api.toffeeride.in/v1/package/getpacks";
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getUsers() {
    let header = new HttpHeaders()
    .set('user-id','5aefabc96ec3c854a8075453')
    .set('account-id','5aefabda6ec3c827ca3622c2')
    return new Promise(resolve => {
      this.http.get(this.api, {headers:header})
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getPackages() {
    let header=new HttpHeaders()
    .set('user-id','5aefabc96ec3c854a8075453')
    .set('account-id','5aefabda6ec3c827ca3622c2')
    return new Promise(resolve=> {
      this.http.get(this.api1, {headers:header})
      .subscribe(data=> {
        resolve(data);
      }, err=>  {
        console.log(err);
      });
    });
  }
  getParent() {
    let header=new HttpHeaders()
    .set('user-id','5aefabc96ec3c854a8075453')
    return new Promise(resolve=> {
      this.http.get('http://api.toffeeride.in/v1/user/profile',{headers:header})
      .subscribe(data=> {
        resolve(data);
      }, err=> {
        console.log(err);
      });
    });
  }
}
