import { Component } from '@angular/core';
import { IonicPage,NavController, ModalController } from 'ionic-angular';
import {FirebaseService} from "../../app/firebase-service";
import {AngularFirestore} from "angularfire2/firestore";

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

  public openModal(stadium_name:string){
    
    var modalPage = this.modalCtrl.create('StadiumsModalPage',{data: stadium_name}); 
    modalPage.present();
  }
}
