import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

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
  
  constructor(private navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    const data= this.navParams.get('data');
    console.log('ionViewDidLoad StadiumsModalPage');
    console.log(data);
    
  }
  public closeModal(){
    this.viewCtrl.dismiss();
  }
}
