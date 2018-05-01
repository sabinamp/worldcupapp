///<reference path="../../../node_modules/angularfire2/database/interfaces.d.ts"/>
import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {AngularFireDatabase} from 'angularfire2/database';
import {TeamdetailsPage} from "../teamdetails/teamdetails";
import {FirebaseService} from "../../app/firebase-service";

/**
 * TeamsPage page.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  firebaseService: FirebaseService;
  constructor(public navCtrl: NavController, angularFireDatabase: AngularFireDatabase) {
    this.firebaseService = new FirebaseService(angularFireDatabase);
  }

  onClick(team) {
    this.navCtrl.push(TeamdetailsPage, team);
  }

  searchItems(searchInput: any) {
    // Reset team list back with all the firebase items
    this.firebaseService.initializeTeams();

    // set valueToCompare to the value of the searchbar
    let valueToCompare = searchInput.target.value;

    // if valueToCompare is empty it will don't filter the teams
    if (valueToCompare && valueToCompare.trim() != '') {
      this.firebaseService.teams = this.firebaseService.teams
        .map((teams) => teams
          .filter((team) => {
            return (team.name.toLowerCase().indexOf(valueToCompare.toLowerCase()) > -1);
          }));
    }
  }

}
