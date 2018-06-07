import {Component} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {Stadium} from '../../app/model/stadium';

/**
 * Generated class for the StadiumsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stadiums-modal',
  templateUrl: 'stadiums-modal.html',
})
export class StadiumsModalPage {
  stadium: Stadium;

  constructor(private navParams: NavParams,public viewCtrl: ViewController) {

  }

  ionViewWillLoad() {
    this.stadium = this.navParams.get('data');
    console.log('ionViewDidLoad StadiumsModalPage');
    console.log(this.stadium);
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
