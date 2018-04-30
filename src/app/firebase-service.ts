//TODO: Write abstract methods for Firebase CRUD operations
import {AngularFireDatabase, AngularFireList, PathReference} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {Group} from "./model/group";
import {Team} from "./model/team";

export class FirebaseService {
  //Teams
  teamsRef: AngularFireList<any>;
  teams: Observable<Team[]>;

  //Groups
  groupsRef: AngularFireList<any>;
  groups: Observable<Group[]>;

  //Stadiums
  stadiumsRef: AngularFireList<any>;
  stadiums: Observable<any[]>;

  angularFireDatabase: AngularFireDatabase;

  constructor(angularFireDatabase: AngularFireDatabase) {
    this.angularFireDatabase = angularFireDatabase
    this.initializeTeams();
    this.initializeStadiums();
    this.initializeGroups();
  }

  initializeTeams() {
    this.teamsRef = this.getFBReferenceList('/teams');
    this.teams = this.teamsRef.valueChanges();
  }


  initializeGroups() {
    this.groupsRef = this.getFBReferenceList('/groups');
    this.groups = this.groupsRef.valueChanges();
  }

  getMatches(group: Group) {
    return group.matches;
  }

  initializeStadiums() {
    this.stadiumsRef = this.getFBReferenceList('/stadiums');
    this.stadiums = this.stadiumsRef.valueChanges();
  }

  getFBReferenceList(path: PathReference) {
    return this.angularFireDatabase.list(path);
  }

  getArrayOfKeys(observabeList: Observable<any[]>) {
    var keys = [];
    for (var k in observabeList) keys.push(k);
    return keys;
  }
}
