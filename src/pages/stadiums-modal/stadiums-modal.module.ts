import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StadiumsModalPage } from './stadiums-modal';

@NgModule({
  declarations: [
    StadiumsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(StadiumsModalPage),
  ],
})
export class StadiumsModalPageModule {}
