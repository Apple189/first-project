import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildProfilePage } from './child-profile';

@NgModule({
  declarations: [
    ChildProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ChildProfilePage),
  ],
})
export class ChildProfilePageModule {}
