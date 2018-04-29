///<reference path="../../../node_modules/angularfire2/database/interfaces.d.ts"/>
import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {TeamdetailsPage} from "../teamdetails/teamdetails";

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teamsRef: AngularFireList<any>;
  teams: Observable<any[]>;

  constructor(public navCtrl: NavController, angularFireDatabase: AngularFireDatabase) {
    this.teamsRef = angularFireDatabase.list('teams');
    this.teams = this.teamsRef.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  onClick(team) {
    this.navCtrl.push(TeamdetailsPage, team);
  }

}
