import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StadiumsPage } from './stadiums';
import { StadiumsModalPage } from '../stadiums-modal/stadiums-modal';


@NgModule({
  declarations: [
    StadiumsPage,
    StadiumsModalPage
  ],
  imports: [
    IonicPageModule.forChild(StadiumsPage),
  ],
})
export class StadiumsPageModule {}