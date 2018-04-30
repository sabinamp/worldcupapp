///<reference path="../../../node_modules/angularfire2/database/interfaces.d.ts"/>
import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {TeamdetailsPage} from "../teamdetails/teamdetails";

/**
 * TeamsPage page.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teamsRef: AngularFireList<any>;
  teams: Observable<any[]>;
  private angularFireDatabase: any;

  constructor(public navCtrl: NavController, angularFireDatabase: AngularFireDatabase) {
    this.angularFireDatabase = angularFireDatabase;
    this.initializeTeams();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  onClick(team) {
    this.navCtrl.push(TeamdetailsPage, team);
  }


  private initializeTeams() {
    this.teamsRef = this.angularFireDatabase.list('teams');
    this.teams = this.teamsRef.valueChanges();
  }

  getItems(searchInput: any) {
    // Reset team list back with all the firebase items
    this.initializeTeams();

    // set valueToCompare to the value of the searchbar
    let valueToCompare = searchInput.target.value;

    // if valueToCompare is empty it will don't filter the teams
    if (valueToCompare && valueToCompare.trim() != '') {
      this.teams = this.teams
        .map((teams) => teams
          .filter((team) => {
            return (team.name.toLowerCase().indexOf(valueToCompare.toLowerCase()) > -1);
          }));
    }
  }
}
