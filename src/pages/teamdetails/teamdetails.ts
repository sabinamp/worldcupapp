import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TeamdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamdetails',
  templateUrl: 'teamdetails.html',
})
export class TeamdetailsPage {
  team: any;
  constructor(public navParams: NavParams) {
    this.team = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamdetailsPage');
  }

}
