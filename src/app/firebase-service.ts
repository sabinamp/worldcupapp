//TODO: Write abstract methods for Firebase CRUD operations
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Group} from "./model/group";
import {Team, TeamId} from "./model/team";
import {Injectable} from "@angular/core";

@Injectable()
export class FirebaseService {
  //Teams
  teamsRef: AngularFirestoreCollection<Team>;
  teams: Observable<TeamId[]>;

  //Groups
  groupsRef: AngularFirestoreCollection<any>;
  groups: Observable<any[]>;

  //Stadiums
  stadiumsRef: AngularFirestoreCollection<any>;
  stadiums: Observable<any[]>;

  angularFireStore: AngularFirestore;

  constructor(angularFireStore: AngularFirestore) {
    this.angularFireStore = angularFireStore;
    angularFireStore.firestore.settings({ timestampsInSnapshots: true });
    this.initializeTeams();
    this.initializeStadiums();
    this.initializeGroups();
  }

  initializeTeams() {
    this.teamsRef = this.angularFireStore.collection<Team>('/teams');
    this.teams = this.teamsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Team;
        const key = a.payload.doc.id;
        return { key, ...data };
      });
    });
    this.teams.subscribe(data=> console.log(data));
  }

  initializeGroups() {
  this.groupsRef = this.angularFireStore.collection<Group>('/groups');
  this.groups = this.teamsRef.snapshotChanges().map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Group;
      const key = a.payload.doc.id;
      return { key, ...data };
    });
  });
}

  getMatches(group: Group) {
    return group.matches;
  }

  initializeStadiums() {
    this.stadiumsRef = this.getFBReferenceList('/stadiums');
    this.stadiums = this.stadiumsRef.valueChanges();
  }

  getFBReferenceList(path: string) {
    return this.angularFireStore.collection(path);
  }

  getArrayOfKeys(observabeList: Observable<any[]>) {
    var keys = [];
    for (var k in observabeList) keys.push(k);
    return keys;
  }
}
