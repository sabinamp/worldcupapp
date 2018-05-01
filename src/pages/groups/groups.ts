import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

import {FirebaseService} from "../../app/firebase-service";


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
  groupKeys: Array<any>;

  constructor(public navCtrl: NavController, angularFireDatabase: AngularFireDatabase) {
    this.firebaseService = new FirebaseService(angularFireDatabase);
    this.groupKeys = this.firebaseService.getArrayOfKeys(this.firebaseService.groups)
  }

}
