import { Component } from '@angular/core';
import { IonicPage,NavController, ModalController, Modal, ModalOptions } from 'ionic-angular';
import {FirebaseService} from "../../app/firebase-service";
import {AngularFirestore} from "angularfire2/firestore";
import { Stadium } from '../../app/model/stadium';

@IonicPage()
@Component({
  selector: 'page-stadiums',
  templateUrl: 'stadiums.html'
})
export class StadiumsPage {
  firebaseService: FirebaseService;
  
  constructor(public navCtrl: NavController, angularFireDatabase: AngularFirestore, 
              private modalCtrl: ModalController) {
    this.firebaseService = new FirebaseService(angularFireDatabase);
  
  }
  ionViewDidLoad() {
    this.firebaseService.initializeStadiums();
  }

  public openModal(stadium:Stadium){
    const myModalOptions: ModalOptions = { enableBackdropDismiss:false};
    let modalPage:Modal = this.modalCtrl.create('StadiumsModalPage',{data: stadium}, myModalOptions); 
    modalPage.present();
  }
}
