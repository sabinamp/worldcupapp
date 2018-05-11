import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import {FirebaseService} from "../../app/firebase-service";
import {AngularFirestore} from "angularfire2/firestore";

@IonicPage()
@Component({
  selector: 'page-stadiums',
  templateUrl: 'stadiums.html'
})
export class StadiumsPage {
  firebaseService: FirebaseService;
  
  constructor(public navCtrl: NavController, angularFireDatabase: AngularFirestore) {
    this.firebaseService = new FirebaseService(angularFireDatabase);
  
  }
  ionViewDidLoad() {
    this.firebaseService.initializeStadiums();
  }
}
