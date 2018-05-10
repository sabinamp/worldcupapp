import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {FirebaseService} from "../../app/firebase-service";
import {AngularFirestore} from "angularfire2/firestore";
import {Team, TeamId} from "../../app/model/team";
import {Observable} from "rxjs/Observable";


/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  firebaseService: FirebaseService;
  teams: Array<Team>

  constructor(public navCtrl: NavController, angularFireDatabase: AngularFirestore) {
    this.firebaseService = new FirebaseService(angularFireDatabase);

  }
}
