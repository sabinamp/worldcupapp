import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {TeamdetailsPage} from "../teamdetails/teamdetails";


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


  groupsRef: AngularFireList<any>;
  groups: Observable<any[]>;


  constructor(public navCtrl: NavController, angularFireDatabase: AngularFireDatabase) {
    this.groupsRef = angularFireDatabase.list('groups');
    this.groups = this.groupsRef.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  onClick(team) {
    this.navCtrl.push(TeamdetailsPage, team);
  }

}
