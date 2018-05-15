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

  substractDateLeft(date) {
// get total seconds between the times
    var actualDate = new Date().getTime()
    var futureDate = new Date(date)
    var delta = Math.abs(futureDate.getTime() - actualDate) / 1000;

// calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

// calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

// calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

// what's left is seconds
    var seconds = delta % 60;  // in theory the modulus is not required

  return "starts in " + days + "d " + hours + "h " + minutes + "m "
  }
}
