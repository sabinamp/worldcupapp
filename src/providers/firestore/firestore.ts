//TODO: Write abstract methods for Firebase CRUD operations
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Group} from "../../app/model/group";
import {Team, TeamId} from "../../app/model/team";
import {Injectable} from "@angular/core";
import {Stadium} from "../../app/model/stadium";
//import {Pro} from "@ionic/pro";

@Injectable()
export class FirestoreProvider {
  //Teams
  teamsRef: AngularFirestoreCollection<Team>;
  teams: Observable<TeamId[]>;
  teamArray: Array<Team>;

  //Groups
  groupsRef: AngularFirestoreCollection<any>;
  groups: Observable<any[]>;

  //Stadiums
  stadiumsRef: AngularFirestoreCollection<any>;
  stadiums: Observable<any[]>;

  angularFireStore: AngularFirestore;

  constructor(angularFireStore: AngularFirestore) {
    this.angularFireStore = angularFireStore;
    angularFireStore.firestore.settings({timestampsInSnapshots: true});
    this.initializeTeams();
    this.initializeStadiums();
    this.initializeGroups();
  }

  initializeTeams() {
    this.teamArray = [];
    this.teamsRef = this.angularFireStore.collection<Team>('/teams');
    this.teams = this.teamsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Team;
        const key = a.payload.doc.id;
        return {key, ...data};
      });
    });
    this.teams.subscribe(data => data
      .map(ap => {
        this.teamArray.push(ap);
      }))
  }

  getTeamById(id: number) {
    return this.teamArray
      .filter(team => {
        return team.id === id
      });
  }


  initializeGroups() {
    this.groupsRef = this.angularFireStore.collection<Group>('/groups');
    this.groups = this.groupsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Group;
        const key = a.payload.doc.id;
        return {key, ...data};
      });
    });
  }

  getMatches(group: Group) {
    return group.matches;
  }
  initializeStadiums(){
    this.stadiumsRef = this.angularFireStore.collection<Stadium>("/stadiums");
    this.stadiums = this.stadiumsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Stadium;
        const key = a.payload.doc.id;
        return {key, ...data};
      });
    });
  }
 /*  initializeStadiums() {
    this.stadiumsRef = this.getFBReferenceList('/stadiums');
    this.stadiums = this.stadiumsRef.valueChanges();
  }

  getFBReferenceList(path: string) {
    return this.angularFireStore.collection(path);
  }*/
getStadiums(){
  return this.stadiums;
}
  getArrayOfKeys(observableList: Observable<any[]>) {
    var keys = [];
    for (var k in observableList) keys.push(k);
    return keys;
  }
}
