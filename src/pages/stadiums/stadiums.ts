import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, ModalController, Modal, ModalOptions} from 'ionic-angular';
import {FirestoreProvider} from "../../providers/firestore/firestore";
import {AngularFirestore} from "angularfire2/firestore";
import {Stadium} from '../../app/model/stadium';

@IonicPage()
@Component({
  selector: 'page-stadiums',
  templateUrl: 'stadiums.html',
  providers: [FirestoreProvider]
})
export class StadiumsPage{

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private firebaseService: FirestoreProvider) {
  }

  ionViewDidLoad() {
    this.firebaseService.initializeStadiums();
  }

  public

  openModal(stadium: Stadium) {
    const myModalOptions: ModalOptions = {enableBackdropDismiss: false};
    let modalPage: Modal = this.modalCtrl.create('StadiumsModalPage', {data: stadium}, myModalOptions);
    modalPage.present();
  }
}
